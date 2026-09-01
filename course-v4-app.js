(function () {
  "use strict";

  const course = window.GO_COURSE_V2;
  const curation = window.COURSE_CURATION_V3 || {};
  const system = window.COURSE_SYSTEM_V4;
  const guidance = window.COURSE_GUIDANCE_V6;
  const interviewData = window.INTERVIEW_RADAR_V10 || null;
  if (!course || !system) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const storage = {
    get(key, fallback = "") {
      try { const value = localStorage.getItem(key); return value === null ? fallback : value; }
      catch (_) { return fallback; }
    },
    set(key, value) { try { localStorage.setItem(key, String(value)); } catch (_) {} }
  };

  const hashWeek = Number((location.hash.match(/^#W(\d+)$/i) || [])[1]);
  let currentWeek = Math.min(52, Math.max(1, hashWeek || Number(storage.get("v4-current-week", "1")) || 1));
  let expandedPhase = Number(storage.get("v9-expanded-phase", phaseFor(currentWeek).no)) || 0;

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    })[char]);
  }

  function phaseFor(weekNo) {
    return system.phases.find(phase => weekNo >= phase.weeks[0] && weekNo <= phase.weeks[1]);
  }

  function projectFor(weekNo) {
    return system.projects.find(project => {
      const nums = project.range.match(/\d+/g).map(Number);
      return weekNo >= nums[0] && weekNo <= nums[1];
    });
  }

  function taskParts(raw) {
    const parts = String(raw).split("｜");
    return parts.length > 1 ? { time: parts.shift(), body: parts.join("｜") } : { time: "", body: raw };
  }

  const algorithmPlan = window.ALGORITHM_PLAN_V5;

  function interviewSource(id) {
    return interviewData && interviewData.sources.find(source => source.id === id);
  }

  function interviewCheckMarkup(weekNo) {
    const item = interviewData && interviewData.weeks[weekNo - 1];
    if (!item) return "";
    const key = `v10-interview-${weekNo}`;
    const checked = storage.get(key) === "1";
    const sources = item.sourceIds.map(interviewSource).filter(Boolean);
    return `
      <article class="interview-check ${checked ? "is-done" : ""}">
        <div class="interview-check-head">
          <div><span class="eyebrow">近两年社招迁移题</span><h3>${escapeHTML(item.kind)}</h3></div>
          <span>10–15 分钟 · 已包含在本周验收时间内</span>
        </div>
        <p class="interview-prompt">${escapeHTML(item.prompt)}</p>
        <div class="interview-must"><strong>回答至少覆盖</strong>${item.must.map(point => `<span>${escapeHTML(point)}</span>`).join("")}</div>
        <label class="interview-done"><input type="checkbox" data-save="${key}" ${checked ? "checked" : ""}><span class="check-ui"></span><span><b>已关掉资料独立完成</b><small>辅助检查，不新增阅读，也不单独阻塞本周 Gate。</small></span></label>
        <details class="interview-evidence"><summary>这道题为什么放在本周 · 查看面经依据</summary>
          <div>${sources.map(source => `<a href="${escapeHTML(source.url)}" target="_blank" rel="noreferrer"><b>${escapeHTML(source.company)}</b><span>${escapeHTML(source.date)} · ${escapeHTML(source.platform)}</span><small>${escapeHTML(source.signal)}</small></a>`).join("")}</div>
        </details>
      </article>`;
  }

  function algorithmProblem(id) {
    return algorithmPlan && algorithmPlan.catalog[String(id)];
  }

  function algorithmWeekMarkup(weekNo, phaseIndex, weekOptional) {
    const plan = algorithmPlan && algorithmPlan.weeks[weekNo - 1];
    if (!plan) {
      return `<details class="optional-lane is-baseline"><summary><span>算法保底副线 · 每周保持手感</span><strong>1.5–2h</strong></summary><div><p><b>本阶段题型：</b>${escapeHTML(system.algorithmByPhase[phaseIndex])}</p><p><b>本周加练：</b>${escapeHTML(weekOptional)}</p></div></details>`;
    }
    const items = [
      ...plan.core.map((id, index) => ({ id, kind: index === 0 ? "核心必做" : "进阶必做", group: "core" })),
      ...plan.review.map(id => ({ id, kind: "间隔复习", group: "review" }))
    ];
    return `
      <details class="optional-lane is-baseline algorithm-week" open>
        <summary><span>算法保底 · ${escapeHTML(plan.focus)}</span><strong>1.5–2h</strong></summary>
        <div class="algorithm-week-body">
          <div class="algorithm-week-intro"><span>${plan.mode === "review" ? "阶段验收周" : escapeHTML(plan.pattern)}</span><p>${escapeHTML(algorithmPlan.load)}</p></div>
          <div class="algorithm-problems">
            ${items.map(item => {
              const problem = algorithmProblem(item.id);
              const key = `v5-algo-${weekNo}-${item.group}-${item.id}`;
              const checked = storage.get(key) === "1";
              return `<div class="algo-item ${checked ? "is-done" : ""}">
                <label class="algo-check" aria-label="标记 LC ${problem.id} 完成"><input type="checkbox" data-save="${key}" ${checked ? "checked" : ""}><span class="check-ui"></span></label>
                <span class="algo-kind">${escapeHTML(item.kind)}</span>
                <a href="${escapeHTML(problem.url)}" target="_blank" rel="noreferrer"><b>LC ${problem.id}</b>${escapeHTML(problem.title)} <em>↗</em></a>
              </div>`;
            }).join("")}
          </div>
          <div class="algorithm-gate"><strong>本周通过标准</strong><p>${escapeHTML(plan.gate)}</p></div>
          <div class="algorithm-source"><span>统一路线：<a href="${escapeHTML(algorithmPlan.source.url)}" target="_blank" rel="noreferrer">${escapeHTML(algorithmPlan.source.name)} ↗</a></span><span>${escapeHTML(algorithmPlan.evidence)}</span></div>
        </div>
      </details>`;
  }

  function sourceMeta(resource) {
    const featured = curation.featured || [];
    return featured.find(item => item.id === resource.metaId) ||
      featured.find(item => {
        try { return new URL(item.url).hostname === new URL(resource.url).hostname; }
        catch (_) { return false; }
      });
  }

  function authorityScore(resource) {
    let host = "";
    try { host = new URL(resource.url).hostname; } catch (_) {}
    if (/go\.dev|pkg\.go\.dev|rfc-editor|ietf|mysql\.com|redis\.io|apache\.org|kafka\.apache|openai\.com|anthropic\.com|modelcontextprotocol\.io|opentelemetry\.io|prometheus\.io|grafana\.com|kubernetes\.io/.test(host)) return 10;
    if (/github\.com/.test(host)) return 7;
    return 4;
  }

  function selectedResources(weekNo, week) {
    const guide = curation.guides && curation.guides[String(weekNo)];
    const extras = (curation.extras && curation.extras[String(weekNo)]) || [];
    const base = [...(week.resources || []), ...extras];
    const ranked = [...base].sort((a, b) => authorityScore(b) - authorityScore(a));
    const primary = guide
      ? { ...guide, role: "本周唯一主资料", roleNote: "默认只读这一份" }
      : ranked[0]
        ? { ...ranked[0], role: ranked[0].url ? "本周唯一主资料" : "本周唯一主证据", roleNote: ranked[0].url ? "只看指定范围" : "本周不新增阅读" }
        : { name: "本周任务与已有代码", scope: "只使用本页任务说明和自己的代码、测试、错题记录", role: "本周唯一主证据", roleNote: "本周不新增阅读" };
    const references = ranked
      .filter(item => item.url && item.url !== primary.url)
      .slice(0, 2)
      .map(item => ({ ...item, role: authorityScore(item) >= 10 ? "官方核对" : "补充核对" }));
    return { primary, references };
  }

  function resourceCard(resource, week) {
    const meta = sourceMeta(resource);
    const route = guidance.resourceLinks(resource, 0, 1, week);
    return `
      <article class="resource-card resource-card-primary">
        <div class="resource-role"><span>${escapeHTML(resource.role)}</span><em>${escapeHTML(resource.roleNote)}</em></div>
        <h4>${escapeHTML(resource.name)}</h4>
        <div class="resource-route"><span>M1</span><span>对应 ${route.points.join(" / ")}</span><span>用于开始本周任务</span><span>主资料够用就不再切换</span></div>
        <p class="resource-scope"><strong>只看：</strong>${escapeHTML(resource.scope || "本周任务涉及的章节")}</p>
        <p class="resource-stop"><strong>看到哪里停止：</strong>${escapeHTML(route.stop)}</p>
        <div class="resource-meta">
          <span>${escapeHTML(meta?.grade || "已筛选")}</span>
          <span>${escapeHTML(meta?.type || "参考资料")}</span>
          <span>${escapeHTML(meta?.cost || "免费")}</span>
        </div>
        ${resource.url
          ? `<a class="resource-link" href="${escapeHTML(resource.url)}" target="_blank" rel="noreferrer">打开主资料 <span aria-hidden="true">↗</span></a>`
          : `<span class="resource-link is-local">使用自己的代码、错题和记录 <span aria-hidden="true">✓</span></span>`}
      </article>`;
  }

  function referenceRail(references) {
    return `<aside class="reference-rail">
      <div class="reference-rail-head"><div><span>备用核对链接</span><strong>默认不读</strong></div><em>主资料缺内容或结论拿不准时才打开</em></div>
      ${references.length ? `<div class="reference-links">${references.map(resource => `
        <a href="${escapeHTML(resource.url)}" target="_blank" rel="noreferrer">
          <span><strong>${escapeHTML(resource.name)}</strong><small>${escapeHTML(resource.scope || "只核对本周涉及的机制、API 或边界")}</small></span>
          <em>${escapeHTML(resource.role)} ↗</em>
        </a>`).join("")}</div>` : `<p class="reference-empty">本周没有额外资料。完成主资料和任务即可。</p>`}
    </aside>`;
  }

  function weekProgress(weekNo) {
    const week = course.weeks[weekNo - 1];
    const algoWeek = algorithmPlan && algorithmPlan.weeks[weekNo - 1];
    const algoItems = algoWeek ? [
      ...algoWeek.core.map(id => ({ id, group: "core" })),
      ...algoWeek.review.map(id => ({ id, group: "review" }))
    ] : [];
    const taskDone = week.tasks.filter((_, index) => storage.get(`v4-task-${weekNo}-${index}`) === "1").length;
    const answerDone = week.questions.filter((_, index) => storage.get(`v4-answer-${weekNo}-${index}`) === "1").length;
    const algoDone = algoItems.filter(item => storage.get(`v5-algo-${weekNo}-${item.group}-${item.id}`) === "1").length;
    const gateDone = storage.get(`v4-gate-${weekNo}`) === "1" ? 1 : 0;
    const total = week.tasks.length + week.questions.length + algoItems.length + 1;
    const done = taskDone + answerDone + algoDone + gateDone;
    return { done, total, percent: Math.round(done / total * 100) };
  }

  function allGateProgress() {
    const passed = course.weeks.filter((_, index) => storage.get(`v4-gate-${index + 1}`) === "1").length;
    return { passed, percent: Math.round(passed / 52 * 100) };
  }

  function renderPhaseRail() {
    const wrap = $("#phaseRail");
    wrap.innerHTML = system.phases.map(phase => {
      const active = currentWeek >= phase.weeks[0] && currentWeek <= phase.weeks[1];
      const passed = Array.from({ length: phase.weeks[1] - phase.weeks[0] + 1 }, (_, i) => phase.weeks[0] + i)
        .filter(no => storage.get(`v4-gate-${no}`) === "1").length;
      const expanded = expandedPhase === Number(phase.no);
      const weeks = expanded ? Array.from({ length: phase.weeks[1] - phase.weeks[0] + 1 }, (_, i) => phase.weeks[0] + i)
        .map(no => {
          const week = course.weeks[no - 1];
          const isCurrent = no === currentWeek;
          const isPassed = storage.get(`v4-gate-${no}`) === "1";
          return `<button class="phase-week-item ${isCurrent ? "is-current" : ""} ${isPassed ? "is-passed" : ""}" data-week="${no}" title="W${no} ${escapeHTML(week.title)}"><span>W${no}</span><strong>${escapeHTML(week.title)}</strong></button>`;
        }).join("") : "";
      return `<div class="phase-rail-group ${active ? "is-active" : ""} ${expanded ? "is-expanded" : ""}">
        <button class="phase-rail-item ${active ? "is-active" : ""}" data-phase-toggle="${phase.no}" aria-expanded="${expanded}">
          <span class="phase-rail-no">${phase.no}</span>
          <span><strong>${escapeHTML(phase.title)}</strong><small>${phase.range} · ${passed}/${phase.weeks[1] - phase.weeks[0] + 1} 通过</small></span>
        </button>
        ${expanded ? `<div class="phase-week-list" aria-label="${escapeHTML(phase.title)}每周导航">${weeks}</div>` : ""}
      </div>`;
    }).join("");
  }

  function renderWeekGrid() {
    const wrap = $("#weekGrid");
    wrap.innerHTML = course.weeks.map((week, index) => {
      const no = index + 1;
      const passed = storage.get(`v4-gate-${no}`) === "1";
      return `<button class="week-dot ${no === currentWeek ? "is-current" : ""} ${passed ? "is-passed" : ""}" data-week="${no}" title="W${no} ${escapeHTML(week.title)}"><span>W${no}</span></button>`;
    }).join("");
  }

  function renderCurrentWeek() {
    const week = course.weeks[currentWeek - 1];
    const phase = phaseFor(currentWeek);
    const project = projectFor(currentWeek);
    const resourceSet = selectedResources(currentWeek, week);
    const progress = weekProgress(currentWeek);
    const global = allGateProgress();
    const phaseIndex = system.phases.indexOf(phase);
    const previousWeek = currentWeek > 1 ? course.weeks[currentWeek - 2] : null;
    const nextWeek = currentWeek < 52 ? course.weeks[currentWeek] : null;
    const isReviewWeek = [8, 16, 24, 32, 40, 48, 52].includes(currentWeek);
    const coreRange = (week.hours.match(/[0-9]+(?:\.[0-9]+)?/g) || ["0"]).map(Number);
    const weeklyLow = coreRange[0] + (isReviewWeek ? 0 : 1) + 1.5;
    const weeklyHigh = (coreRange[1] || coreRange[0]) + (isReviewWeek ? 0 : 1) + 2;
    const freeLow = Math.max(0, 16 - weeklyHigh);
    const freeHigh = Math.max(0, 18 - weeklyLow);

    $("#currentWeekLabel").textContent = `第 ${currentWeek} 周 / 52`;
    $("#globalProgressText").textContent = `${global.passed}/52 周通过验收`;
    $("#globalProgressBar").style.width = `${global.percent}%`;
    $("#weekProgressText").textContent = `${progress.done}/${progress.total} 项证据`;
    $("#weekProgressBar").style.width = `${progress.percent}%`;
    $("#prevWeek").disabled = currentWeek === 1;
    $("#nextWeek").disabled = currentWeek === 52;

    $("#weekWorkspace").innerHTML = `
      <header class="week-heading">
        <div class="week-kicker"><span>${escapeHTML(phase.no)}</span>${escapeHTML(phase.range)} · ${escapeHTML(phase.title)}</div>
        <h1><span>W${currentWeek}</span>${escapeHTML(week.title)}</h1>
        <p>${escapeHTML(week.outcome)}</p>
        <div class="week-badges">
          <span>核心 ${escapeHTML(week.hours)}</span>
          <span>${isReviewWeek ? "验收已包含在核心时长" : "验收约 1h"}</span>
          <span>算法保底 1.5–2h</span>
          <span>难度：${escapeHTML(phase.bloom)}</span>
          ${project ? `<span>项目：${escapeHTML(project.title)}</span>` : ""}
        </div>
      </header>

      <section class="purpose-panel section-panel" id="purpose">
        <div class="section-index">01</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">每周独立变化</span><h2>本周的前后关系</h2></div><span class="phase-pill">W${currentWeek} · 阶段 ${phaseIndex + 1}/7</span></div>
          <div class="phase-context-line"><strong>${escapeHTML(phase.range)} · ${escapeHTML(phase.title)}</strong><span>${escapeHTML(phase.question)}</span></div>
          <div class="purpose-grid">
            <article><small>从哪里接过来</small><p>${previousWeek ? `承接 W${currentWeek - 1}「${escapeHTML(previousWeek.title)}」；现在把上一周的结论用于新的问题。` : "从你的 1 年 Go 工作经验出发，先建立全年统一的代码与证据基线。"}</p></article>
            <article><small>本周只解决什么</small><p>${escapeHTML(week.outcome)}</p></article>
            <article><small>完成后留下什么</small><p>${escapeHTML(week.gate)}</p></article>
            <article><small>为下一周准备什么</small><p>${nextWeek ? `为 W${currentWeek + 1}「${escapeHTML(nextWeek.title)}」准备可复用的代码、测试和判断依据。` : "收束全年代码、项目证据和面试表达，形成可持续迭代的下一年基线。"}</p></article>
          </div>
          ${project ? `<div class="project-strip"><strong>${escapeHTML(project.type)} · ${escapeHTML(project.title)}</strong><span>${escapeHTML(project.question)}</span><em>本阶段里程碑 ${currentWeek - phase.weeks[0] + 1}/${phase.weeks[1] - phase.weeks[0] + 1}</em></div>` : ""}
        </div>
      </section>

      <section class="section-panel" id="tasks">
        <div class="section-index">02</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">本周实战交付</span><h2>把学习点变成可运行、可测试的证据</h2></div><span class="load-pill">${isReviewWeek ? "验收周不学新内容；按 T1 → T2 → T3 → T4 收口" : "工作忙时只做 T1，再顺延 T2/T3"}</span></div>
          <div class="task-purpose">
            <strong>04 主要做什么？</strong>
            <p>${currentWeek === 24
              ? "这是 W17–W23 的阶段验收，不是新学六套系统。先给六类题各做一张 20 分钟骨架；再随机抽一题完整设计；只围绕同一题接受追问；最后只修最低分项。整周只完整做一题。"
              : currentWeek === 15
              ? "用一个最小 Kafka 实验完成“先理解分区与 offset → 再故意制造重复消费 → 最后用幂等与 Outbox 修复”的完整闭环。不是搭生产集群，也不是再读一套新课程。"
              : `把 02 的学习点和 03 的主资料，转化成本周可以检查的代码、测试、图或报告。这里不是新增课程；做完任务并通过下方验收，才算真的掌握“${escapeHTML(week.outcome)}”。`}</p>
          </div>
          <div class="task-list">
            ${week.tasks.map((raw, index) => {
              const task = taskParts(raw);
              const guide = guidance.taskGuide(currentWeek, week, index, task);
              const checked = storage.get(`v4-task-${currentWeek}-${index}`) === "1";
              return `<article class="task-item ${checked ? "is-done" : ""}">
                <label class="task-check" title="标记 T${index + 1} 完成"><input type="checkbox" data-save="v4-task-${currentWeek}-${index}" ${checked ? "checked" : ""}><span class="check-ui"></span></label>
                <span class="task-order">T${index + 1}</span>
                <div class="task-copy">
                  <strong>${escapeHTML(task.body)}</strong>
                  <div class="task-meta"><span>${escapeHTML(task.time)}</span><span>先掌握 ${guide.points.join(" / ")}</span></div>
                  <p class="task-meaning"><b>这句话的意思：</b>${escapeHTML(guide.meaning)}</p>
                  <p class="task-example"><b>具体例子：</b>${escapeHTML(guide.example)}</p>
                  <ol class="task-steps">${guide.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
                  <div class="task-deliverable"><strong>完成后应留下：</strong>${escapeHTML(guide.deliverable)}</div>
                </div>
              </article>`;
            }).join("")}
          </div>
          <div class="capacity-note"><strong>本周总预算约 ${weeklyLow}–${weeklyHigh}h</strong><span>核心任务 ${escapeHTML(week.hours)} + ${isReviewWeek ? "验收已计入核心任务" : "闭卷验收约 1h"} + 算法保底 1.5–2h。按你每周可用 16–18h，仍留约 ${freeLow}–${freeHigh}h 给加班、卡点和补弱；不再塞新知识。</span></div>
        </div>
      </section>

      <section class="section-panel" id="points">
        <div class="section-index">03</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">本周学习路线</span><h2>先知道学什么，再按编号往下走</h2></div><span class="count-pill">${week.lecture.length} 个学习点</span></div>
          <div class="week-route">
            <article class="route-step"><span>STEP 1 · L</span><strong>明确学习点</strong><small>只学下面 L1–L${week.lecture.length}</small></article>
            <article class="route-step"><span>STEP 2 · M</span><strong>只跟一份主资料</strong><small>默认只读 M1；缺口再查备用链接</small></article>
            <article class="route-step"><span>STEP 3 · T</span><strong>完成实操</strong><small>T1 → T2 → T3，不另拆计划</small></article>
            <article class="route-step"><span>STEP 4 · Q</span><strong>关资料验收</strong><small>能回答 Q 并满足 Gate 才进入下周</small></article>
          </div>
          <ol class="learning-points">${week.lecture.map((point, index) => {
            const taskNo = Math.min(week.tasks.length, Math.floor(index * week.tasks.length / week.lecture.length) + 1);
            const questionNo = Math.min(week.questions.length, index + 1);
            return `<li><span>L${index + 1}</span><div><p>${escapeHTML(point)}</p><small class="learning-link">学到能用于 T${taskNo}，并能独立回答 Q${questionNo}；不要求继续扩展。</small></div></li>`;
          }).join("")}</ol>
        </div>
      </section>

      <section class="section-panel" id="resources">
        <div class="section-index">04</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">已筛选资料</span><h2>本周只跟一份主资料</h2></div><span class="verified-pill">核查于 ${escapeHTML(curation.verifiedAt || "2026-08-29")}</span></div>
          <div class="resource-layout">${resourceCard(resourceSet.primary, week)}${referenceRail(resourceSet.references)}</div>
          <p class="resource-rule">${escapeHTML(curation.rule || "默认只读主资料；只有主资料未覆盖或结论拿不准时，才打开备用核对链接。")}</p>
        </div>
      </section>

      <section class="section-panel checkpoint" id="checkpoint">
        <div class="section-index">05</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">无辅助验收</span><h2>关掉资料和 AI，再回答</h2></div><span class="lock-pill">约 60 分钟</span></div>
          <p class="checkpoint-rule">先口述或写在纸上，再勾选“能独立解释”。勾选不是通过；最下方门槛全部满足后才能通过本周。</p>
          <div class="question-list">
            ${week.questions.map((question, index) => {
              const checked = storage.get(`v4-answer-${currentWeek}-${index}`) === "1";
              return `<label class="question-item ${checked ? "is-done" : ""}"><input type="checkbox" data-save="v4-answer-${currentWeek}-${index}" ${checked ? "checked" : ""}><span class="check-ui"></span><span>Q${index + 1}</span><p>${escapeHTML(question)}</p></label>`;
            }).join("")}
          </div>
          ${interviewCheckMarkup(currentWeek)}
          <div class="gate-grid">
            <article class="gate-card"><small>通过门槛 / PROCEED</small><p>${escapeHTML(week.gate)}</p></article>
            <article class="repair-card"><small>未通过 / REPAIR</small><p>${escapeHTML(week.repair)}</p></article>
          </div>
          <label class="gate-toggle ${storage.get(`v4-gate-${currentWeek}`) === "1" ? "is-passed" : ""}">
            <input type="checkbox" data-save="v4-gate-${currentWeek}" ${storage.get(`v4-gate-${currentWeek}`) === "1" ? "checked" : ""}>
            <span class="gate-switch"></span><span><strong>我已在无辅助情况下满足通过门槛</strong><small>通过后才建议进入下一周；记录保存在这台电脑的浏览器中。</small></span>
          </label>
        </div>
      </section>

      <section class="section-panel" id="review">
        <div class="section-index">06</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">每周监督替代</span><h2>五分钟复盘，留下真实数据</h2></div><span class="save-state">自动保存</span></div>
          <div class="review-grid">
            <label><span>实际投入（小时）</span><input type="number" min="0" max="40" step="0.5" data-text="v4-hours-${currentWeek}" value="${escapeHTML(storage.get(`v4-hours-${currentWeek}`))}" placeholder="例如 11.5"></label>
            <label><span>本周产物位置</span><input type="text" data-text="v4-proof-${currentWeek}" value="${escapeHTML(storage.get(`v4-proof-${currentWeek}`))}" placeholder="仓库、文档或截图路径"></label>
            <label class="wide"><span>最大的卡点是什么？证据是什么？</span><textarea data-text="v4-blocker-${currentWeek}" placeholder="不要写‘不熟’，写具体失败现象">${escapeHTML(storage.get(`v4-blocker-${currentWeek}`))}</textarea></label>
            <label class="wide"><span>下周采用什么学习策略？</span><textarea data-text="v4-strategy-${currentWeek}" placeholder="写‘如何学’，不是再列一个知识点">${escapeHTML(storage.get(`v4-strategy-${currentWeek}`))}</textarea></label>
          </div>
          ${algorithmWeekMarkup(currentWeek, phaseIndex, week.optional)}
        </div>
      </section>`;

    const workspace = $("#weekWorkspace");
    const pointsPanel = $("#points");
    const resourcesPanel = $("#resources");
    const tasksPanel = $("#tasks");
    workspace.insertBefore(pointsPanel, tasksPanel);
    workspace.insertBefore(resourcesPanel, tasksPanel);
    pointsPanel.querySelector(".section-index").textContent = "02";
    resourcesPanel.querySelector(".section-index").textContent = "03";
    tasksPanel.querySelector(".section-index").textContent = "04";

    bindWeekInputs();
  }

  function bindWeekInputs() {
    $$('[data-save]').forEach(input => input.addEventListener("change", event => {
      storage.set(event.currentTarget.dataset.save, event.currentTarget.checked ? "1" : "0");
      const visualTarget = event.currentTarget.closest(".interview-check") || event.currentTarget.closest(".algo-item") || event.currentTarget.closest(".task-item") || event.currentTarget.closest("label");
      visualTarget?.classList.toggle("is-done", event.currentTarget.checked);
      if (event.currentTarget.dataset.save.startsWith("v4-gate")) event.currentTarget.closest("label")?.classList.toggle("is-passed", event.currentTarget.checked);
      refreshProgressOnly();
    }));
    $$('[data-text]').forEach(input => input.addEventListener("input", event => storage.set(event.currentTarget.dataset.text, event.currentTarget.value)));
  }

  function refreshProgressOnly() {
    const progress = weekProgress(currentWeek);
    const global = allGateProgress();
    $("#weekProgressText").textContent = `${progress.done}/${progress.total} 项证据`;
    $("#weekProgressBar").style.width = `${progress.percent}%`;
    $("#globalProgressText").textContent = `${global.passed}/52 周通过验收`;
    $("#globalProgressBar").style.width = `${global.percent}%`;
    renderPhaseRail();
    renderWeekGrid();
    bindNavigationButtons();
  }

  function renderPhaseExplorer(index) {
    const phase = system.phases[index];
    const explorer = $("#phaseExplorer");
    $("#roadmap").dataset.phaseIndex = String(index);
    $$(".phase-map-card").forEach((card, cardIndex) => card.classList.toggle("is-active", cardIndex === index));
    const weekNos = Array.from({ length: phase.weeks[1] - phase.weeks[0] + 1 }, (_, offset) => phase.weeks[0] + offset);
    explorer.innerHTML = `
      <div class="phase-explorer-copy">
        <span class="phase-label">阶段 ${escapeHTML(phase.no)} · ${escapeHTML(phase.range)}</span>
        <h3>${escapeHTML(phase.title)}</h3>
        <p>${escapeHTML(phase.question)}</p>
        <dl>
          <div><dt>为什么在这里学</dt><dd>${escapeHTML(phase.why)}</dd></div>
          <div><dt>完成阶段后</dt><dd>${escapeHTML(phase.outcome)}</dd></div>
          <div><dt>与小林课程对照</dt><dd>${escapeHTML(phase.xiaolin)}</dd></div>
        </dl>
      </div>
      <div class="phase-week-preview">
        ${weekNos.map(no => {
          const week = course.weeks[no - 1];
          const passed = storage.get(`v4-gate-${no}`) === "1";
          return `<button class="phase-week-card ${no === currentWeek ? "is-current" : ""} ${passed ? "is-passed" : ""}" data-week="${no}">
            <span>W${no}</span><strong>${escapeHTML(week.title)}</strong><small>${escapeHTML(week.outcome)}</small>
          </button>`;
        }).join("")}
      </div>`;
    bindNavigationButtons();
  }

  function interviewMapMarkup() {
    if (!interviewData) return "";
    return `
      <section class="recent-interview-map">
        <div class="recent-interview-head">
          <div><span class="eyebrow">RECENT SOCIAL-HIRE SIGNALS</span><h3>近两年大厂社招面经，如何融入全年</h3></div>
          <p>采样 ${escapeHTML(interviewData.sampleWindow)} · 核对于 ${escapeHTML(interviewData.verifiedAt)}。它不是新增课程，而是给原 52 周增加真实面试追问。</p>
        </div>
        <div class="interview-theme-grid">
          ${interviewData.themes.map(theme => `<article>
            <div><span>${escapeHTML(theme.weeks)}</span><em>${escapeHTML(theme.level)}</em></div>
            <h4>${escapeHTML(theme.name)}</h4>
            <p>${escapeHTML(theme.evidence)}</p>
            <small>本课程怎么处理：${escapeHTML(theme.action)}</small>
          </article>`).join("")}
        </div>
        <details class="interview-source-library">
          <summary><span>查看已核对的面经与岗位样本</span><strong>${interviewData.sources.length} 份集中管理，不要求逐篇阅读</strong></summary>
          <div class="interview-source-list">
            ${interviewData.sources.map(source => `<a href="${escapeHTML(source.url)}" target="_blank" rel="noreferrer">
              <span class="source-meta"><b>${escapeHTML(source.company)}</b><em>${escapeHTML(source.date)} · ${escapeHTML(source.platform)}</em></span>
              <strong>${escapeHTML(source.title)}</strong>
              <p>${escapeHTML(source.signal)}</p>
              <small>使用边界：${escapeHTML(source.reliability)}</small>
              <span class="source-tags">${source.tags.map(tag => `<i>${escapeHTML(tag)}</i>`).join("")}</span>
            </a>`).join("")}
          </div>
        </details>
        <p class="interview-caveat"><b>可信度边界：</b>${escapeHTML(interviewData.caveat)}</p>
      </section>`;
  }

  function renderAudit() {
    let audit = $("#curriculumAudit");
    if (!audit) {
      audit = document.createElement("section");
      audit.id = "curriculumAudit";
      audit.className = "curriculum-audit";
      $("#phaseExplorer").after(audit);
    }
    audit.innerHTML = `
      <div class="audit-verdict"><span>二次审计结论</span><strong>${escapeHTML(system.audit.verdict)}</strong><em>依据：小林课程结构 + 当前岗位要求</em></div>
      <div class="allocation-grid">
        ${system.audit.allocation.map(item => `<article class="allocation-card"><div class="allocation-top"><span>${escapeHTML(item.share)}</span><em>${escapeHTML(item.weeks)}</em></div><strong>${escapeHTML(item.label)}</strong><small>${escapeHTML(item.level)}</small><p>${escapeHTML(item.note)}</p></article>`).join("")}
      </div>
      <div class="audit-change-grid">
        ${system.audit.changes.map(item => `<article class="audit-change-card" data-kind="${escapeHTML(item.kind)}"><span>${escapeHTML(item.kind)}</span><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.detail)}</p></article>`).join("")}
      </div>
      <div class="deprioritized-bar"><strong>明确不深挖</strong><div>${system.deprioritized.map(item => `<span>${escapeHTML(item)}</span>`).join("")}</div></div>
      <div class="interview-radar">
        <div class="interview-radar-head"><div><span class="eyebrow">INTERVIEW COVERAGE</span><h3>面试覆盖雷达：确保问到时不是第一次听说</h3></div><p>“需要见过/知道边界”不要求源码级掌握，也不挤占主线项目。</p></div>
        <div class="radar-grid">
          ${system.interviewRadar.map(item => `<article class="radar-card" data-level="${escapeHTML(item.level)}"><div class="radar-card-top"><h4>${escapeHTML(item.area)}</h4><span class="radar-level">${escapeHTML(item.level)}</span></div><span class="radar-weeks">${escapeHTML(item.weeks)}</span><div class="radar-topics">${item.topics.map(topic => `<span>${escapeHTML(topic)}</span>`).join("")}</div></article>`).join("")}
        </div>
      </div>
      ${interviewMapMarkup()}`;
  }

  function renderAlgorithmRoadmap() {
    if (!algorithmPlan || !$("#mapDeepDive")) return;
    let section = $("#algorithmRoadmap");
    if (!section) {
      section = document.createElement("section");
      section.id = "algorithmRoadmap";
      section.className = "roadmap-section algorithm-roadmap";
      $("#mapDeepDive").appendChild(section);
    }
    section.innerHTML = `
      <div class="roadmap-section-head"><div><span class="eyebrow">ALGORITHM SPACED PRACTICE</span><h2>52 周算法安排</h2></div><p>90 道核心新题 + 间隔复做；每八周只验收、不加新题。</p></div>
      <div class="algorithm-year-grid">
        ${algorithmPlan.weeks.map(item => {
          const ids = item.core.length ? item.core : item.review;
          return `<button class="algorithm-year-card ${item.week === currentWeek ? "is-current" : ""} ${item.mode === "review" ? "is-review" : ""}" data-week="${item.week}">
            <span>W${item.week}</span><strong>${escapeHTML(item.focus)}</strong><small>${item.mode === "review" ? "闭卷复习" : ids.map(id => "LC " + id).join(" · ")}</small>
          </button>`;
        }).join("")}
      </div>`;
  }

  function showRoadmap() {
    const roadmap = $("#roadmap");
    roadmap.classList.remove("is-collapsed");
    document.body.classList.add("map-open");
    roadmap.scrollTop = 0;
    const select = $("#mapWeekSelect");
    if (select) select.value = String(currentWeek);
  }

  function hideRoadmap(shouldScroll = true) {
    $("#roadmap").classList.add("is-collapsed");
    document.body.classList.remove("map-open");
    if (shouldScroll) $(".layout").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderRoadmap() {
    const roadmap = $("#roadmap");
    roadmap.classList.add("roadmap-front", "is-collapsed");
    $(".topbar").after(roadmap);
    $(".roadmap-head h2").textContent = "全年地图、课程审计与面试覆盖";
    $(".roadmap-head p").textContent = "顶部可直接选择 W01–W52；也可先展开 01–07 阶段，再点周卡片。选周后自动回到该周工作台。";
    if (!$("#closeRoadmap")) {
      const close = document.createElement("button");
      close.id = "closeRoadmap";
      close.className = "map-close";
      close.type = "button";
      close.textContent = "收起地图 ×";
      $(".roadmap-head").appendChild(close);
    }
    if (!$("#mapQuickNav")) {
      const nav = document.createElement("div");
      nav.id = "mapQuickNav";
      nav.className = "map-quick-nav";
      nav.innerHTML = `
        <button type="button" id="mapCurrentWeek">回到当前周 W${currentWeek}</button>
        <label><span>直接跳到</span><select id="mapWeekSelect" aria-label="选择周次">
          ${course.weeks.map((week, index) => `<option value="${index + 1}">W${String(index + 1).padStart(2, "0")} · ${escapeHTML(week.title)}</option>`).join("")}
        </select></label>
        <button type="button" id="mapGoWeek">进入所选周 →</button>
        <small>也可以先选 01–07 阶段，再点下面的周卡片。按 Esc 随时关闭。</small>`;
      $(".roadmap-head").after(nav);
    }

    $("#phaseMap").innerHTML = system.phases.map((phase, index) => `
      <button class="phase-map-card" data-phase="${index}">
        <span class="map-no">${phase.no}</span><span class="map-range">${phase.range}</span>
        <h3>${escapeHTML(phase.title)}</h3><p>${escapeHTML(phase.question)}</p>
        <div><span>${escapeHTML(phase.bloom)}</span><em>${escapeHTML(phase.flexible)}</em></div>
      </button>`).join("");

    if (!$("#phaseExplorer")) {
      const explorer = document.createElement("section");
      explorer.id = "phaseExplorer";
      explorer.className = "phase-explorer";
      $("#phaseMap").after(explorer);
    }

    $("#trackTable").innerHTML = `
      <thead><tr><th>能力主线</th>${system.phases.map(phase => `<th><span>${phase.no}</span>${escapeHTML(phase.title)}</th>`).join("")}<th>递进说明</th></tr></thead>
      <tbody>${system.tracks.map(track => `<tr><th>${escapeHTML(track.name)}</th>${track.values.map(value => `<td><span class="level level-${value}">${value}</span></td>`).join("")}<td>${escapeHTML(track.note)}</td></tr>`).join("")}</tbody>`;

    $("#projectMap").innerHTML = system.projects.map(project => `
      <article class="project-card">
        <div class="project-card-top"><span>${escapeHTML(project.type)}</span><em>${escapeHTML(project.range)}</em></div>
        <h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.question)}</p>
        <ol>${project.milestones.map((item, i) => `<li><span>${i + 1}</span>${escapeHTML(item)}</li>`).join("")}</ol>
        <div class="proof-list"><strong>完成证据</strong>${project.proof.map(item => `<span>${escapeHTML(item)}</span>`).join("")}</div>
      </article>`).join("");

    $("#serviceMap").innerHTML = system.serviceReplacement.map(([service, replacement]) => `<div><strong>${escapeHTML(service)}</strong><span aria-hidden="true">→</span><p>${escapeHTML(replacement)}</p></div>`).join("");

    renderAudit();

    if (!$("#mapDeepDive")) {
      const details = document.createElement("details");
      details.id = "mapDeepDive";
      details.className = "map-deep-dive";
      details.innerHTML = "<summary>能力递进矩阵、四个项目、52 周算法与完整周索引</summary>";
      const back = $(".back-wrap", roadmap);
      $$(".roadmap-section", roadmap).forEach(section => details.appendChild(section));
      roadmap.insertBefore(details, back);
      $("#backToWeek").textContent = "进入当前周 ↓";
    }

    renderAlgorithmRoadmap();
    const activeIndex = system.phases.indexOf(phaseFor(currentWeek));
    renderPhaseExplorer(activeIndex);
    $$("[data-phase]").forEach(button => {
      button.onclick = () => renderPhaseExplorer(Number(button.dataset.phase));
    });
    $("#closeRoadmap").onclick = () => hideRoadmap();
    $("#mapCurrentWeek").onclick = () => setWeek(currentWeek);
    $("#mapGoWeek").onclick = () => setWeek(Number($("#mapWeekSelect").value));
    $("#mapWeekSelect").value = String(currentWeek);
    $("#mapWeekSelect").onchange = event => {
      const selectedWeek = Number(event.currentTarget.value);
      renderPhaseExplorer(system.phases.indexOf(phaseFor(selectedWeek)));
    };
  }

  function setWeek(no, shouldScroll = true) {
    currentWeek = Math.min(52, Math.max(1, Number(no)));
    expandedPhase = Number(phaseFor(currentWeek).no);
    storage.set("v9-expanded-phase", expandedPhase);
    storage.set("v4-current-week", currentWeek);
    try { history.replaceState(null, "", `#W${currentWeek}`); } catch (_) {}
    if ($("#mapWeekSelect")) $("#mapWeekSelect").value = String(currentWeek);
    if ($("#mapCurrentWeek")) $("#mapCurrentWeek").textContent = `回到当前周 W${currentWeek}`;
    renderPhaseRail();
    renderWeekGrid();
    renderCurrentWeek();
    renderPhaseExplorer(system.phases.indexOf(phaseFor(currentWeek)));
    renderAlgorithmRoadmap();
    bindNavigationButtons();
    if (shouldScroll) hideRoadmap(true);
  }

  function bindNavigationButtons() {
    $$("[data-phase-toggle]").forEach(button => {
      button.onclick = () => {
        const phaseNo = Number(button.dataset.phaseToggle);
        expandedPhase = expandedPhase === phaseNo ? 0 : phaseNo;
        storage.set("v9-expanded-phase", expandedPhase);
        renderPhaseRail();
        bindNavigationButtons();
      };
    });
    $$("[data-week]").forEach(button => {
      button.onclick = () => setWeek(Number(button.dataset.week));
    });
  }

  $("#prevWeek").addEventListener("click", () => setWeek(currentWeek - 1));
  $("#nextWeek").addEventListener("click", () => setWeek(currentWeek + 1));
  $("#openRoadmap").addEventListener("click", showRoadmap);
  $("#backToWeek").addEventListener("click", () => hideRoadmap(true));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !$("#roadmap").classList.contains("is-collapsed")) hideRoadmap(false);
  });

  renderRoadmap();
  setWeek(currentWeek, false);
  hideRoadmap(false);
})();
