(function () {
  "use strict";

  const w1 = [
    {
      points: ["L1", "L2"],
      meaning: "从你做过的真实项目里选一条最小请求链，弄清一次请求究竟经过哪些层、谁依赖谁，以及错误在哪一层产生、补充上下文和转换。这里的“抽取”不是复制整个公司项目，也不是泄露业务代码。",
      example: "例如 GET /orders/:id：HTTP/RPC Handler 读取参数 → OrderService 执行业务规则 → OrderRepository 查询数据库。若公司代码不能带出，只保留 20–50 行伪代码并把公司名、表名、字段、地址和数据全部替换；也可以在 course-lab 里重建同结构的小例子。",
      steps: [
        "选一个你熟悉且只有 3 层左右的接口；不要选复杂核心链路，也不要复制配置、密钥、真实数据。",
        "沿调用关系依次写出 Handler → Service → Repository，在箭头旁标出参数、返回值和依赖方向。",
        "圈出错误的产生、包装、记录和对外转换位置；检查是否重复记录、吞错或丢失 context。"
      ],
      deliverable: "docs/W01-call-chain.md：1 张调用链图 + 脱敏伪代码/最小示例 + 一张错误边界表。"
    },
    {
      points: ["L1", "L2", "L3", "L4"],
      meaning: "把上一项发现的问题在一个独立练习仓库中改成可运行的最小版本。目标是练清依赖方向、最小接口、错误链和 context 传播，不是把原业务搬过来。",
      example: "可以实现 GET /users/{id}：handler 依赖 UserService，service 只依赖自己真正需要的 UserRepository 接口；repository 返回可被 errors.Is 判断的 not-found；请求 context 一直传到存储层。",
      steps: [
        "创建 course-lab/W01，先写最小目录和构造函数，让依赖通过参数传入。",
        "在使用方声明最小接口；用 %w 保留根因并补充业务上下文；每一层显式接收并继续传递 context。",
        "运行 go test ./...，再人工搜索全局可变依赖、丢弃错误、context.Background 和重复日志。"
      ],
      deliverable: "course-lab/W01 可运行代码：一个接口、一条完整调用链、可替换的 repository fake，以及通过的测试。"
    },
    {
      points: ["L2", "L4"],
      meaning: "用表驱动测试证明这条调用链在正常和失败情况下都有确定行为。8 个用例不是为了凑数量，而是把错误分类、超时传播和依赖失败变成可重复验证的证据。",
      example: "至少覆盖 success、not-found、invalid input、repository timeout、dependency failure、context cancelled；剩余用例可覆盖错误包装仍可 errors.Is/As，以及错误只在边界记录一次。",
      steps: [
        "先列用例表：输入、fake 返回、期望状态/错误、是否能 errors.Is/As，暂时不要写测试代码。",
        "为 service 和 handler 写表驱动测试；超时与取消使用可控 context，不用长时间 sleep。",
        "运行 go test ./...；故意破坏一次错误包装或 context 传播，确认测试真的会失败后再恢复。"
      ],
      deliverable: "至少 8 个可重复运行的表驱动用例，以及一段说明：哪个用例证明了哪条工程规则。"
    }
  ];

  function category(text) {
    if (/答辩|模拟|闭卷|口述|演示/.test(text)) return "explain";
    if (/压测|benchmark|基准/.test(text)) return "benchmark";
    if (/注入|复现|故障|崩溃|攻击/.test(text)) return "failure";
    if (/测试|test|验证|评测/.test(text)) return "test";
    if (/画|架构图|时序|流程图|模型/.test(text)) return "diagram";
    if (/实现|重写|建立|接入|封装|配置|制作|搭建|补/.test(text)) return "build";
    if (/写|定义|设计|整理|列|准备/.test(text)) return "design";
    return "practice";
  }

  const meanings = {
    explain: "把本周成果当作面试或评审现场，在没有资料提示的情况下讲清背景、选择、取舍、失败与证据；重点是暴露真正不会的地方。",
    benchmark: "先固定环境和基线，再只改变一个变量收集数据。目标是得到能比较、能解释、能复跑的结果，而不是只截一张漂亮的吞吐量图。",
    failure: "主动制造指定失败，观察系统是否按预期降级、恢复并留下观测证据。只有正常路径跑通，不算完成这项任务。",
    test: "把本周要掌握的行为写成可重复检查的输入、操作和期望结果，用失败用例证明边界确实受到保护。",
    diagram: "把文字中的组件、数据流、责任边界和失败点画成一张可以用于评审的图。重点是关系与取舍清楚，不追求美术效果。",
    build: "做一个覆盖本周核心机制的最小可运行版本。先闭环，再补失败路径和测试；不要顺手扩成新的大项目。",
    design: "先把约束、边界和判断标准写清，再据此做实现。文档必须能指导下一项实操，不能只抄概念。",
    practice: "把这项要求变成一份可以运行、检查或讲解的证据，并用本周通过门槛判断是否真的完成。"
  };

  function genericTask(task, week, index, pointCodes) {
    const kind = category(task.body);
    const action = task.body.replace(/[。；]+$/, "");
    const middle = {
      explain: "计时完成一次，录音或写下追问；把卡住、含糊或需要看资料的地方逐项记下。",
      benchmark: "记录机器/版本/数据规模和基线；只改变一个变量，至少重复 3 次并保留原始结果。",
      failure: "先写预期现象和恢复条件，再制造失败；保存日志、指标、trace 或状态变化。",
      test: "先列正常、边界和失败用例，再实现检查；故意破坏一次实现，确认测试能够抓住错误。",
      diagram: "标出入口、组件、箭头、数据/控制流、所有者与失败点；让同事只看图也能复述主流程。",
      build: "先完成最小正常链路，再补超时/错误/取消等关键失败路径，并用自动测试固定行为。",
      design: "写清输入、输出、约束、非目标和取舍；用一个具体例子检查文档能否指导实现。",
      practice: "从最小场景开始完成要求，过程中记录关键决定、失败现象和修正理由。"
    }[kind];
    const deliverables = {
      explain: "一次计时演练记录 + 追问清单 + 最弱一项的修正证据。",
      benchmark: "可复跑脚本/命令 + 环境说明 + 原始数据 + 一页结论。",
      failure: "故障前后证据 + 预期/实际对照 + 恢复或修复说明。",
      test: "可重复运行的测试/评测集 + 失败样例 + 结果记录。",
      diagram: "一张带图例和失败边界的图 + 5–10 句取舍说明。",
      build: "可运行的最小实现 + 自动测试 + README 中的运行与验证方法。",
      design: "一份可执行设计稿/清单 + 约束、非目标、例子和验收标准。",
      practice: "可检查的代码、图、记录或说明，并附复现方法。"
    }[kind];
    return {
      points: pointCodes,
      meaning: meanings[kind],
      example: `本周具体对象是：“${action}”。只围绕“${week.outcome}”收集证据，不额外扩展新技术。`,
      steps: [
        `开始前先写一句完成定义，并准备独立目录 course-lab/W${String(index.weekNo || 0).padStart(2, "0")} 或本周证据文档。`,
        middle,
        `对照本周通过门槛逐项检查；补齐复现步骤，把结果放到固定目录后再勾选完成。`
      ],
      deliverable: deliverables
    };
  }

  function pointCodesForTask(week, taskIndex) {
    const total = week.lecture.length;
    const tasks = week.tasks.length;
    const start = Math.floor(taskIndex * total / tasks);
    const end = Math.max(start, Math.floor((taskIndex + 1) * total / tasks) - 1);
    const result = [];
    for (let i = start; i <= end; i += 1) result.push(`L${i + 1}`);
    return result.length ? result : ["L1"];
  }

  function taskGuide(weekNo, week, taskIndex, task) {
    if (weekNo === 1 && w1[taskIndex]) return w1[taskIndex];
    const marker = { weekNo };
    return genericTask(task, week, Object.assign(marker, { valueOf: () => taskIndex }), pointCodesForTask(week, taskIndex));
  }

  function resourceLinks(resource, resourceIndex, resourceCount, week) {
    const n = week.lecture.length;
    let pointIndexes;
    if (resourceCount <= 1) {
      pointIndexes = Array.from({ length: n }, (_, i) => i);
    } else if (resourceIndex === 0) {
      pointIndexes = Array.from({ length: Math.max(1, Math.ceil(n / 2)) }, (_, i) => i);
    } else {
      const start = Math.max(0, Math.floor(n / 2) - 1);
      pointIndexes = Array.from({ length: n - start }, (_, i) => i + start);
    }
    const taskIndex = Math.min(resourceIndex, week.tasks.length - 1);
    const questionIndex = Math.min(resourceIndex, week.questions.length - 1);
    return {
      points: pointIndexes.map(i => `L${i + 1}`),
      task: `T${taskIndex + 1}`,
      question: `Q${questionIndex + 1}`,
      stop: resource.url
        ? `完成上面的“只看”范围，能用自己的话回答 ${`Q${questionIndex + 1}`}，并能开始 ${`T${taskIndex + 1}`} 时就停止；不要顺着网站继续通读。`
        : "本周不新增阅读；只整理已有代码、测试、数据和错题。"
    };
  }

  window.COURSE_GUIDANCE_V6 = { taskGuide, resourceLinks, pointCodesForTask };
})();
