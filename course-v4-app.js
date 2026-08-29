(function () {
  "use strict";

  const course = window.GO_COURSE_V2;
  const curation = window.COURSE_CURATION_V3 || {};
  const system = window.COURSE_SYSTEM_V4;
  const guidance = window.COURSE_GUIDANCE_V6;
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

  let currentWeek = Math.min(52, Math.max(1, Number(storage.get("v4-current-week", "1")) || 1));

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
    const resources = [];
    if (guide) resources.push({ ...guide, role: "讲解先读", roleNote: "先建立直觉，不要求通读整站" });
    const second = base
      .filter(item => !guide || item.url !== guide.url)
      .sort((a, b) => authorityScore(b) - authorityScore(a))[0];
    if (second) resources.push({
      ...second,
      role: second.url ? (guide ? "权威核对" : "本周主资料") : "本地证据",
      roleNote: second.url ? (guide ? "用来确认机制、API 和边界" : "只看指定范围") : "本周不新增阅读"
    });
    if (!guide && resources.length < 2 && base[1]) resources.push({ ...base[1], role: "补充核对", roleNote: "遇到卡点再打开" });
    return resources.slice(0, 2);
  }

  function resourceCard(resource, resourceIndex, resources, week) {
    const meta = sourceMeta(resource);
    const route = guidance.resourceLinks(resource, resourceIndex, resources.length, week);
    return `
      <article class="resource-card">
        <div class="resource-role"><span>${escapeHTML(resource.role)}</span><em>${escapeHTML(resource.roleNote)}</em></div>
        <h4>${escapeHTML(resource.name)}</h4>
        <div class="resource-route"><span>R${resourceIndex + 1}</span><span>对应 ${route.points.join(" / ")}</span><span>读完做 ${route.task}</span><span>用 ${route.question} 自检</span></div>
        <p class="resource-scope"><strong>只看：</strong>${escapeHTML(resource.scope || "本周任务涉及的章节")}</p>
        <p class="resource-stop"><strong>看到哪里停止：</strong>${escapeHTML(route.stop)}</p>
        <div class="resource-meta">
          <span>${escapeHTML(meta?.grade || "已筛选")}</span>
          <span>${escapeHTML(meta?.type || "参考资料")}</span>
          <span>${escapeHTML(meta?.cost || "免费")}</span>
        </div>
        ${resource.url
          ? `<a class="resource-link" href="${escapeHTML(resource.url)}" target="_blank" rel="noreferrer">打开资料 <span aria-hidden="true">↗</span></a>`
          : `<span class="resource-link is-local">使用自己的代码、错题和记录 <span aria-hidden="true">✓</span></span>`}
      </article>`;
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
      return `<button class="phase-rail-item ${active ? "is-active" : ""}" data-week="${phase.weeks[0]}">
        <span class="phase-rail-no">${phase.no}</span>
        <span><strong>${escapeHTML(phase.title)}</strong><small>${phase.range} · ${passed}/${phase.weeks[1] - phase.weeks[0] + 1} 通过</small></span>
      </button>`;
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
    const resources = selectedResources(currentWeek, week);
    const progress = weekProgress(currentWeek);
    const global = allGateProgress();
    const phaseIndex = system.phases.indexOf(phase);

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
          <span>验收约 1h</span>
          <span>算法保底 1.5–2h</span>
          <span>难度：${escapeHTML(phase.bloom)}</span>
          ${project ? `<span>项目：${escapeHTML(project.title)}</span>` : ""}
        </div>
      </header>

      <section class="purpose-panel section-panel" id="purpose">
        <div class="section-index">01</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">先理解位置</span><h2>这周在全年中的作用</h2></div><span class="phase-pill">阶段 ${phaseIndex + 1}/7</span></div>
          <div class="purpose-grid">
            <article><small>阶段核心问题</small><p>${escapeHTML(phase.question)}</p></article>
            <article><small>为什么现在学</small><p>${escapeHTML(phase.why)}</p></article>
            <article><small>阶段完成证据</small><p>${escapeHTML(phase.outcome)}</p></article>
            <article><small>对应训练营能力</small><p>${escapeHTML(phase.xiaolin)}</p></article>
          </div>
          ${project ? `<div class="project-strip"><strong>${escapeHTML(project.type)} · ${escapeHTML(project.title)}</strong><span>${escapeHTML(project.question)}</span><em>本阶段里程碑 ${currentWeek - phase.weeks[0] + 1}/${phase.weeks[1] - phase.weeks[0] + 1}</em></div>` : ""}
        </div>
      </section>

      <section class="section-panel" id="tasks">
        <div class="section-index">02</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">读完资料后实操</span><h2>每项都说明含义、步骤和交付物</h2></div><span class="load-pill">工作忙时只做 T1，再顺延 T2/T3</span></div>
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
          <div class="capacity-note"><strong>时间边界</strong><span>核心任务 ${escapeHTML(week.hours)} + 闭卷验收约 1h + 算法保底 1.5–2h。总计通常 12.5–15h，余下时间用于工作繁忙缓冲或补弱，不再塞新知识。</span></div>
        </div>
      </section>

      <section class="section-panel" id="points">
        <div class="section-index">03</div>
        <div class="section-body">
          <div class="section-title-row"><div><span class="eyebrow">本周学习路线</span><h2>先知道学什么，再按编号往下走</h2></div><span class="count-pill">${week.lecture.length} 个学习点</span></div>
          <div class="week-route">
            <article class="route-step"><span>STEP 1 · L</span><strong>明确学习点</strong><small>只学下面 L1–L${week.lecture.length}</small></article>
            <article class="route-step"><span>STEP 2 · R</span><strong>按范围读资料</strong><small>先 R1 讲解，再 R2 核对</small></article>
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
          <div class="section-title-row"><div><span class="eyebrow">已筛选资料</span><h2>先讲解，后核对；最多两份</h2></div><span class="verified-pill">核查于 ${escapeHTML(curation.verifiedAt || "2026-08-29")}</span></div>
          <div class="resource-grid">${resources.map((resource, index) => resourceCard(resource, index, resources, week)).join("")}</div>
          <p class="resource-rule">${escapeHTML(curation.rule || "资料只服务于本周产出，不要求通读整个网站。")}</p>
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
      const visualTarget = event.currentTarget.closest(".algo-item") || event.currentTarget.closest(".task-item") || event.currentTarget.closest("label");
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
      </div>`;
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
    requestAnimationFrame(() => roadmap.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function hideRoadmap(shouldScroll = true) {
    $("#roadmap").classList.add("is-collapsed");
    if (shouldScroll) $(".layout").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderRoadmap() {
    const roadmap = $("#roadmap");
    roadmap.classList.add("roadmap-front", "is-collapsed");
    $(".topbar").after(roadmap);
    $(".roadmap-head h2").textContent = "全年地图、课程审计与面试覆盖";
    $(".roadmap-head p").textContent = "点击 01–07 展开阶段周目录；选中某周后地图会自动收起，并回到该周工作台。";
    if (!$("#closeRoadmap")) {
      const close = document.createElement("button");
      close.id = "closeRoadmap";
      close.className = "map-close";
      close.type = "button";
      close.textContent = "收起地图 ×";
      $(".roadmap-head").appendChild(close);
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
  }

  function setWeek(no, shouldScroll = true) {
    currentWeek = Math.min(52, Math.max(1, Number(no)));
    storage.set("v4-current-week", currentWeek);
    renderPhaseRail();
    renderWeekGrid();
    renderCurrentWeek();
    renderPhaseExplorer(system.phases.indexOf(phaseFor(currentWeek)));
    renderAlgorithmRoadmap();
    bindNavigationButtons();
    if (shouldScroll) hideRoadmap(true);
  }

  function bindNavigationButtons() {
    $$("[data-week]").forEach(button => {
      button.onclick = () => setWeek(Number(button.dataset.week));
    });
  }

  $("#prevWeek").addEventListener("click", () => setWeek(currentWeek - 1));
  $("#nextWeek").addEventListener("click", () => setWeek(currentWeek + 1));
  $("#openRoadmap").addEventListener("click", showRoadmap);
  $("#backToWeek").addEventListener("click", () => hideRoadmap(true));

  renderRoadmap();
  setWeek(currentWeek, false);
  hideRoadmap(false);
})();
