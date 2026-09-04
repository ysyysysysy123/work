const fs = require("fs");
const vm = require("vm");

global.window = {};
for (const file of ["course-v2-data.js", "course-v3-curation.js", "course-v4-system.js", "course-v5-algorithms.js", "course-v6-guidance.js", "course-v10-interviews.js", "course-v11-media.js"]) {
  vm.runInThisContext(fs.readFileSync(file, "utf8"), { filename: file });
}

const course = window.GO_COURSE_V2;
const curation = window.COURSE_CURATION_V3;
const system = window.COURSE_SYSTEM_V4;
const algorithms = window.ALGORITHM_PLAN_V5;
const guidance = window.COURSE_GUIDANCE_V6;
const interviews = window.INTERVIEW_RADAR_V10;
const media = window.COURSE_MEDIA_V11;
const splitWeeks = [];
const exceedsCalendarCapacityWeeks = [];
const errors = [];
const warnings = [];
let taskCount = 0;
let externalResources = 0;
let localEvidenceResources = 0;
let minLoad = Infinity;
let maxLoad = 0;
let totalMidLoad = 0;
let minNaturalWeekLoad = Infinity;
let maxNaturalWeekLoad = 0;
let totalNaturalWeekMidLoad = 0;
let totalNaturalWeeks = 0;

function taskParts(raw) {
  const parts = String(raw).split("｜");
  return parts.length > 1 ? { time: parts.shift(), body: parts.join("｜") } : { time: "", body: raw };
}

if (course.weeks.length !== 52) errors.push(`Expected 52 weeks, got ${course.weeks.length}`);
if (system.phases.length !== 7) errors.push(`Expected 7 phases, got ${system.phases.length}`);
let expectedWeek = 1;
for (const phase of system.phases) {
  if (phase.weeks[0] !== expectedWeek) errors.push(`Phase ${phase.no} starts at ${phase.weeks[0]}, expected ${expectedWeek}`);
  if (!phase.question || !phase.outcome || !phase.bloom || !phase.flexible) errors.push(`Phase ${phase.no} lacks curriculum-map fields`);
  expectedWeek = phase.weeks[1] + 1;
}
if (expectedWeek !== 53) errors.push(`Phase coverage ends at W${expectedWeek - 1}`);

course.weeks.forEach((week, index) => {
  const weekNo = index + 1;
  for (const field of ["title", "hours", "outcome", "gate", "repair"]) if (!week[field]) errors.push(`W${weekNo}: missing ${field}`);
  if (!week.lecture?.length || !week.tasks?.length || !week.questions?.length || !week.resources?.length) errors.push(`W${weekNo}: incomplete weekly learning cycle`);

  let taskHours = 0;
  week.tasks.forEach((raw, taskIndex) => {
    taskCount += 1;
    const task = taskParts(raw);
    const hours = Number((task.time.match(/[\d.]+/) || [0])[0]);
    taskHours += hours;
    const guide = guidance.taskGuide(weekNo, week, taskIndex, task);
    if (!guide.meaning || !guide.example || guide.steps?.length !== 3 || !guide.deliverable || !guide.points?.length) errors.push(`W${weekNo} T${taskIndex + 1}: incomplete execution guide`);
  });
  const declared = week.hours.match(/([\d.]+)[–-]([\d.]+)h/);
  if (!declared) errors.push(`W${weekNo}: invalid declared hours`);
  else if (taskHours < Number(declared[1]) - 0.01 || taskHours > Number(declared[2]) + 0.01) errors.push(`W${weekNo}: task hours ${taskHours} outside ${week.hours}`);

  const isReviewWeek = [8, 16, 24, 32, 40, 48, 52].includes(weekNo);
  const coreLow = declared ? Number(declared[1]) : taskHours;
  const coreHigh = declared ? Number(declared[2]) : taskHours;
  const budget = media.budget(weekNo, week);
  const totalLow = budget.low;
  const totalHigh = budget.high;
  if (budget.suggestSplit) splitWeeks.push(weekNo);
  if (budget.exceedsCapacity) exceedsCalendarCapacityWeeks.push(weekNo);
  const expectedInput = media.plan(weekNo).inputHours;
  if (totalLow !== coreLow + (isReviewWeek ? 0 : 1) + 1.5 * budget.calendarWeeks + expectedInput ||
      totalHigh !== coreHigh + (isReviewWeek ? 0 : 1) + 2 * budget.calendarWeeks + expectedInput) errors.push(`W${weekNo}: video input not counted consistently`);
  if (isReviewWeek && media.plan(weekNo).route) errors.push(`W${weekNo}: new videos on a review week`);
  minLoad = Math.min(minLoad, totalLow);
  maxLoad = Math.max(maxLoad, totalHigh);
  totalMidLoad += (totalLow + totalHigh) / 2;
  const perNaturalLow = (totalLow - 1.5 * budget.calendarWeeks) / budget.calendarWeeks + 1.5;
  const perNaturalHigh = (totalHigh - 2 * budget.calendarWeeks) / budget.calendarWeeks + 2;
  minNaturalWeekLoad = Math.min(minNaturalWeekLoad, perNaturalLow);
  maxNaturalWeekLoad = Math.max(maxNaturalWeekLoad, perNaturalHigh);
  totalNaturalWeekMidLoad += (totalLow + totalHigh) / 2;
  totalNaturalWeeks += budget.calendarWeeks;
  if (totalHigh > 18 && !budget.suggestSplit) errors.push(`W${weekNo}: overload has no explicit split guidance`);

  for (const resource of week.resources) {
    if (!resource.name || !resource.scope) errors.push(`W${weekNo}: resource lacks name/scope`);
    if (resource.url) {
      externalResources += 1;
      try { new URL(resource.url); } catch (_) { errors.push(`W${weekNo}: invalid URL ${resource.url}`); }
    } else localEvidenceResources += 1;
  }
});

const reviewWeeks = algorithms.weeks.filter(item => item.mode === "review").map(item => item.week);
if (algorithms.weeks.length !== 52) errors.push(`Algorithm plan has ${algorithms.weeks.length} weeks`);
if (new Set(algorithms.weeks.flatMap(item => item.core)).size !== 90) errors.push("Algorithm core set is not 90 unique problems");
if (JSON.stringify(reviewWeeks) !== JSON.stringify([8,16,24,32,40,48,52])) errors.push(`Unexpected algorithm review weeks: ${reviewWeeks.join(",")}`);

for (const track of system.tracks) {
  const firstMastery = track.values.indexOf("M");
  if (firstMastery >= 0 && !track.values.slice(0, firstMastery).includes("D")) errors.push(`${track.name}: M without prior D`);
  if (firstMastery >= 0 && !track.values.slice(0, firstMastery).includes("I") && track.name !== "Go 语言与工程") errors.push(`${track.name}: M without prior I`);
}
if (!system.learner.profile.includes("Go 后端开发约 1 年")) warnings.push("Go track starts at D but prior-experience rationale is missing");

if (!interviews || interviews.weeks.length !== 52) errors.push(`Interview layer has ${interviews?.weeks?.length || 0} weeks`);
if (interviews && interviews.themes.length !== 7) errors.push(`Interview layer has ${interviews.themes.length} themes, expected 7`);
const interviewSourceIds = new Set((interviews?.sources || []).map(source => source.id));
const interviewWeeks = new Set();
for (const item of interviews?.weeks || []) {
  interviewWeeks.add(item.week);
  if (!item.prompt || item.must.length < 3 || !item.sourceIds.length) errors.push(`W${item.week}: incomplete interview transfer check`);
  for (const sourceId of item.sourceIds) if (!interviewSourceIds.has(sourceId)) errors.push(`W${item.week}: unknown interview source ${sourceId}`);
}
if (interviewWeeks.size !== 52 || ![...interviewWeeks].every((week, index) => week === index + 1)) errors.push("Interview weeks are not a complete W1-W52 sequence");
for (const source of interviews?.sources || []) {
  try { new URL(source.url); } catch (_) { errors.push(`Interview source has invalid URL: ${source.url}`); }
  if (!source.reliability || !source.signal || !source.date) errors.push(`Interview source ${source.id} lacks verification metadata`);
}
let mediaLessonCount = 0;
let videoSeconds = 0;
const seenLessons = new Set();
if (new Set(media.sources.map(s=>s.id)).size !== media.sources.length) errors.push("Duplicate video source IDs");
for (const [weekNo, route] of Object.entries(media.routes)) {
  if (Number(weekNo) < 1 || Number(weekNo) > 52) errors.push("Video has invalid week " + weekNo);
  if (!media.sources.some(s => s.id === route.sourceId) || !route.cover || !route.review || !route.stop) errors.push("Incomplete video mapping W" + weekNo);
  let seconds = 0;
  for (const lesson of route.lessons) {
    mediaLessonCount++;
    seconds += lesson.duration;
    const key = lesson.bvid + ":" + lesson.page;
    if (seenLessons.has(key)) errors.push("Duplicate required video: " + key);
    seenLessons.add(key);
    const checked = media.checkedCatalog.find(c => c.bvid === lesson.bvid);
    const original = checked?.pages.find(p => p.page === lesson.page);
    if (!checked || checked.paid !== 0 || !checked.uploader) errors.push("Missing public original-publisher evidence: " + key);
    if (!original || original.duration !== lesson.duration || original.part !== lesson.part) errors.push("Chapter metadata mismatch: " + key);
    if (lesson.url !== "https://www.bilibili.com/video/" + lesson.bvid + "/?p=" + lesson.page) errors.push("Wrong chapter deep link: " + key);
  }
  for (const ref of route.gapRefs || []) {
    try { new URL(ref.url); } catch (_) { errors.push("Invalid gap link W" + weekNo); }
    if (!ref.name || !ref.scope || !ref.requiredGap) errors.push("Incomplete gap reference W" + weekNo);
  }
  videoSeconds += seconds;
  const blocks = route.blocks || [];
  if (JSON.stringify(blocks.flatMap(b=>b.lessons)) !== JSON.stringify(route.lessons)) errors.push("Module omission/order mismatch W" + weekNo);
  for (const block of blocks) {
    if (!block.label || !block.lessons.length || block.lessons.reduce((s,l)=>s+l.duration,0) > 7200) errors.push("Invalid or overlong video module W" + weekNo);
  }
  const budget = media.budget(Number(weekNo), course.weeks[Number(weekNo)-1]);
  if (budget.perWeekHigh > 18 || budget.calendarWeeks < 1) errors.push("Natural week budget above capacity W"+weekNo);
  if (budget.exceedsCapacity && budget.calendarWeeks === 1) errors.push("Missing calendar split W"+weekNo);
}
for (const source of media.sources) {
  const catalogs = (source.catalogs || []).map(id=>media.checkedCatalog.find(c=>c.bvid===id));
  if (!source.limit || !source.catalogNote || !catalogs.length || catalogs.some(c=>!c)) errors.push("Source lacks complete catalog/boundary: "+source.id);
  for (const c of catalogs.filter(Boolean)) {
    if (c.pages.length !== c.count || c.pages.some((p,i)=>p.page!==i+1)) errors.push("Incomplete source directory "+c.bvid);
    if (c.paid !== 0 || !c.uploader) errors.push("No public publisher metadata "+c.bvid);
  }
}
for (const id of ["runtime","io"]) {
  const source = media.sources.find(s=>s.id===id);
  const expected = source.catalogs.flatMap(bvid=>media.checkedCatalog.find(c=>c.bvid===bvid).pages.map(p=>bvid+":"+p.page));
  if (expected.some(k=>!seenLessons.has(k))) errors.push("Incomplete required deep topic "+id);
}
const aiCat = media.checkedCatalog.find(c=>c.bvid==="BV1yjz5BLEoY");
const allowedOptional = new Set([5,6,7,32,47,54,67]);
for (const p of aiCat.pages) if (!seenLessons.has(aiCat.bvid+":"+p.page) && !allowedOptional.has(p.page)) errors.push("Unexplained gap in AI course P"+p.page);
if (!media.routes["33"].prerequisite || !media.routes["33"].prerequisiteHours) errors.push("Missing Python prerequisite/budget");
if (exceedsCalendarCapacityWeeks.length) warnings.push("Not one-calendar-week promises: W" + exceedsCalendarCapacityWeeks.join(", W") + " single-week estimates exceed 18h; explicit calendar splits preserve weekly algorithm time.");
const allSources = fs.readFileSync("course-v2-data.js", "utf8") + fs.readFileSync("course-v3-curation.js", "utf8");
if (allSources.includes("anthropic.com/research/building-effective-agents")) errors.push("Old Anthropic redirect remains");
if (allSources.includes("opentelemetry.io/docs/specs/semconv/gen-ai/")) errors.push("Moved OpenTelemetry GenAI entry remains");

const template = fs.readFileSync("course-v4-template.html");
const entry = fs.readFileSync("学习系统.html");
if (!template.equals(entry)) errors.push("Entry HTML is not synchronized with template");
const html = entry.toString("utf8");
for (const ref of ["course-v7-readability.css", "course-v6-guidance.js", "course-v5-algorithms.js", "course-v10-interviews.js", "course-v10-interviews.css", "course-v11-media.js", "course-v11-media.css"]) if (!html.includes(ref)) errors.push(`Entry missing ${ref}`);
if (!fs.existsSync("course-v7-readability.css")) errors.push("Readability stylesheet missing");
if (!fs.existsSync("course-v10-interviews.css")) errors.push("Interview stylesheet missing");

console.log(JSON.stringify({
  weeks: course.weeks.length,
  phases: system.phases.length,
  tasks: taskCount,
  algorithmCoreProblems: new Set(algorithms.weeks.flatMap(item => item.core)).size,
  algorithmReviewWeeks: reviewWeeks,
  interviewSources: interviews.sources.length,
  interviewWeeklyChecks: interviews.weeks.length,
  interviewThemes: interviews.themes.length,
  videoSeriesRoutes: media.sources.length,
  videoLearningWeeks: Object.keys(media.routes).length,
  selectedVideoChapters: mediaLessonCount,
  selectedRawVideoHours: Number((videoSeconds / 3600).toFixed(1)),
  inputBudgetMethod: "raw video × 1.5 + route docs + language prerequisite; rounded to 0.5h; algorithm 1.5–2h per natural week",
  initialCalendarWeeks: course.weeks.reduce((sum,w,i)=>sum+media.budget(i+1,w).calendarWeeks,0),
  allowSpillBeyondCalendarWeek: splitWeeks,
  mustSplitAt18HourCapacity: exceedsCalendarCapacityWeeks,
  externalResourceEntries: externalResources,
  localEvidenceEntries: localEvidenceResources,
  estimatedLearningUnitLoadHours: `${minLoad}–${maxLoad}`,
  estimatedNaturalWeekLoadHours: `${Number(minNaturalWeekLoad.toFixed(1))}–${Number(maxNaturalWeekLoad.toFixed(1))}`,
  averageNaturalWeekHours: Number((totalNaturalWeekMidLoad / totalNaturalWeeks).toFixed(1)),
  learnerCapacityHours: system.learner.capacity,
  errors,
  warnings
}, null, 2));
if (errors.length) process.exit(1);



