const fs = require("fs");
const vm = require("vm");

global.window = {};
for (const file of ["course-v2-data.js", "course-v3-curation.js", "course-v4-system.js", "course-v5-algorithms.js", "course-v6-guidance.js"]) {
  vm.runInThisContext(fs.readFileSync(file, "utf8"), { filename: file });
}

const course = window.GO_COURSE_V2;
const curation = window.COURSE_CURATION_V3;
const system = window.COURSE_SYSTEM_V4;
const algorithms = window.ALGORITHM_PLAN_V5;
const guidance = window.COURSE_GUIDANCE_V6;
const errors = [];
const warnings = [];
let taskCount = 0;
let externalResources = 0;
let localEvidenceResources = 0;
let minLoad = Infinity;
let maxLoad = 0;
let totalMidLoad = 0;

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
  const totalLow = coreLow + (isReviewWeek ? 0 : 1) + 1.5;
  const totalHigh = coreHigh + (isReviewWeek ? 0 : 1) + 2;
  minLoad = Math.min(minLoad, totalLow);
  maxLoad = Math.max(maxLoad, totalHigh);
  totalMidLoad += (totalLow + totalHigh) / 2;
  if (totalHigh > 18) errors.push(`W${weekNo}: estimated load ${totalHigh}h exceeds 18h capacity`);

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

const allSources = fs.readFileSync("course-v2-data.js", "utf8") + fs.readFileSync("course-v3-curation.js", "utf8");
if (allSources.includes("anthropic.com/research/building-effective-agents")) errors.push("Old Anthropic redirect remains");
if (allSources.includes("opentelemetry.io/docs/specs/semconv/gen-ai/")) errors.push("Moved OpenTelemetry GenAI entry remains");

const template = fs.readFileSync("course-v4-template.html");
const entry = fs.readFileSync("学习系统.html");
if (!template.equals(entry)) errors.push("Entry HTML is not synchronized with template");
const html = entry.toString("utf8");
for (const ref of ["course-v7-readability.css", "course-v6-guidance.js", "course-v5-algorithms.js"]) if (!html.includes(ref)) errors.push(`Entry missing ${ref}`);
if (!fs.existsSync("course-v7-readability.css")) errors.push("Readability stylesheet missing");

console.log(JSON.stringify({
  weeks: course.weeks.length,
  phases: system.phases.length,
  tasks: taskCount,
  algorithmCoreProblems: new Set(algorithms.weeks.flatMap(item => item.core)).size,
  algorithmReviewWeeks: reviewWeeks,
  externalResourceEntries: externalResources,
  localEvidenceEntries: localEvidenceResources,
  estimatedWeeklyLoadHours: `${minLoad}–${maxLoad}`,
  averageWeeklyLoadHours: Number((totalMidLoad / course.weeks.length).toFixed(1)),
  learnerCapacityHours: system.learner.capacity,
  errors,
  warnings
}, null, 2));
if (errors.length) process.exit(1);
