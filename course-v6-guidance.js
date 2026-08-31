(function () {
  "use strict";

  const w1 = [
    {
      points: ["L1", "L2"],
      meaning: "从你做过的真实项目里选一条最小请求链，弄清一次请求究竟经过哪些层、谁依赖谁，以及错误在哪一层产生、补充上下文和转换。这里的“抽取”不是复制整个公司项目，也不是泄露业务代码。",
      example: "例如 GET /orders/:id：HTTP/RPC Handler 读取参数 → OrderService 执行业务规则 → OrderRepository 查询数据库。若公司代码不能带出，只保留 20–50 行伪代码并把公司名、表名、字段、地址和数据全部替换；也可以在自己的个人练习仓库里重建同结构的小例子。",
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
        "在个人练习仓库中新建 W01 目录，先写最小目录和构造函数，让依赖通过参数传入。",
        "在使用方声明最小接口；用 %w 保留根因并补充业务上下文；每一层显式接收并继续传递 context。",
        "运行 go test ./...，再人工搜索全局可变依赖、丢弃错误、context.Background 和重复日志。"
      ],
      deliverable: "个人练习仓库/W01 中的可运行代码：一个接口、一条完整调用链、可替换的 repository fake，以及通过的测试。"
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

  const w15 = [
    {
      points: ["L1"],
      meaning: "先用一个纸面例子弄清 Kafka 的顺序与并行边界。你不是要搭集群，而是要能预测：某条消息进入哪个 partition、由 consumer group 中哪个消费者处理、offset 何时前进、重平衡时哪些分区会被重新分配。",
      example: "画 3 个 partition、2 个 consumer。连续放入同一 order_id 的 6 条事件，再增加一个 consumer，分别推演 key 相同/不同以及 rebalance 前后的分配和顺序。",
      steps: [
        "画 topic→3 个 partition→2 个 consumer 的分配图，并写明同一 key 如何选择 partition。",
        "记录每个 partition 已处理 offset 与已提交 offset；模拟新增或退出 consumer 后的 rebalance。",
        "写出三个结论：顺序保证到什么范围、增加 partition 会改变什么、offset 提交代表什么。"
      ],
      deliverable: "docs/W15-kafka-model.md：一张分区/消费者图、两次重平衡推演、三条边界结论。不需要写 Kafka 代码。"
    },
    {
      points: ["L2"],
      meaning: "做一个最小可运行消费者，主动制造“副作用已经成功，但 offset 还没提交”这一崩溃窗口，观察 Kafka 为什么会再次投递。目标是亲眼看见 at-least-once，而不是只背定义。",
      example: "消费 order-paid 事件后先把计数器 +1，再在提交 offset 前退出进程。重启消费者后同一消息会再次到达；如果计数器再次 +1，就证明副作用并不天然幂等。",
      steps: [
        "只建一个 topic、一个 consumer group 和一个本地结果表/计数器；关闭自动提交或显式控制提交时机。",
        "处理消息并写入结果后，在 offset commit 前主动退出；保存消息 key、partition、offset 和结果变化。",
        "重启后确认同一 offset 被重新消费；写一个自动化或可重复脚本，让该现象每次都能复现。"
      ],
      deliverable: "一个最小生产者/消费者、一次可重复崩溃脚本，以及证明“同一消息导致两次副作用”的日志或数据截图。"
    },
    {
      points: ["L3"],
      meaning: "修复上一步暴露的两个问题：重复消费不能重复产生业务副作用；业务数据和待发布事件不能因为双写失败而永久不一致。死信与积压指标负责让无法自动恢复的问题可见。",
      example: "消费者用 event_id 建唯一约束：第一次处理写业务结果，第二次收到同一 event_id 直接返回成功。生产侧在同一数据库事务中写业务表和 outbox 表，再由 relay 发布；relay 即使重复发布，消费者仍靠 event_id 去重。",
      steps: [
        "先给消费结果增加 event_id 唯一约束或幂等记录，重跑 T2，确认计数不再重复。",
        "在同一事务中写业务数据与 outbox；模拟 relay 发布后、标记已发送前崩溃，确认重复发布仍安全。",
        "为永久失败进入死信、consumer lag/积压增加可观察指标；写清楚人工重放前必须满足的条件。"
      ],
      deliverable: "幂等消费测试、outbox/relay 最小实现、一次 relay 崩溃恢复证据、一个死信样例和一个积压指标。"
    }
  ];

  const w24 = [
    {
      points: ["L1", "L2"],
      meaning: "这一步不是让你完成六套系统，也不是把题库里的答案逐条确认。你只为六个题目各写一张“索引卡”：用同一个答题顺序列出需求、规模、接口/数据、核心矛盾、失败点和演进方向；每题到 20 分钟必须停。",
      example: "短链骨架可以只写：读多写少；核心接口 create/redirect；短码唯一性；缓存热点；数据库与缓存失败；从单库演进到分片。它是一页提示卡，不要求写代码或画完整生产架构。",
      steps: [
        "先从 M1 只看指定的 5 处，抄下统一的六格模板；最多阅读 60 分钟，没看完也停止。",
        "依次为短链、秒杀、推送、订单、计数、扫码登录填六格；每题计时 20 分钟，只写关键词和一张小图。",
        "每题最后圈出一个最重要矛盾；不会的地方标问号，不在这一项临时扩展阅读。"
      ],
      deliverable: "docs/W24-six-skeletons.md：六张一页以内的骨架卡，每张包含六格模板、一个核心矛盾和至多三个待确认点。"
    },
    {
      points: ["L1", "L3"],
      meaning: "六题骨架完成后随机抽一题，才做本周唯一一次完整设计。60 分钟模拟真实面试，随后用 30 分钟按固定标准自评；不能边做边查资料。",
      example: "抽到秒杀题：先确认库存一致性、超卖容忍度和峰值，再估算请求量，给出 API/数据模型、削峰与扣库存流程、热点与失败处理，最后说明最小版本如何演进。",
      steps: [
        "把六个题名打乱抽一个；关掉资料，准备白板或画图工具并开始 60 分钟计时。",
        "按 5/10/15/15/10/5 分钟分配：澄清、估算、模型、核心流程、故障取舍、总结；卡住也继续主动推进。",
        "结束后用 30 分钟从需求、估算、正确性、可用性、取舍、表达六项各打 0–2 分，并写出证据。"
      ],
      deliverable: "一份完整设计图/文档 + 60 分钟计时记录 + 六项自评表；只需要一题，不是六题。"
    },
    {
      points: ["L1", "L2", "L3"],
      meaning: "继续使用上一项的同一道题做追问，不再换题。追问是在检查你的方案遇到流量、重复、热点和故障时是否站得住，不要求你背题库里的所有标准答案。",
      example: "对秒杀题追问：峰值扩大 10 倍先坏哪里？MQ 重复投递会怎样？Redis 热 key 如何发现和缓解？数据库不可用时怎样降级？用哪些指标判断恢复？",
      steps: [
        "请同事提问，或把预设追问逐条录音自答；全程不查资料，控制在 60 分钟内。",
        "每个回答都包含：当前假设、会出什么问题、选择什么方案、代价是什么、如何观测。",
        "用剩余 30 分钟评分；不会或含糊的项目记 0 分，能给方案但无取舍记 1 分，有边界与证据记 2 分。"
      ],
      deliverable: "追问清单、录音或文字答案、逐项分数和最低分项；这就是本周的无辅助验收证据。"
    },
    {
      points: ["L1", "L2", "L3"],
      meaning: "只修复评分最低的一项，不把整周推倒重来。修好后做一个小变式，确认你掌握的是方法而不是记住原答案。",
      example: "如果最低分是容量估算，就补齐峰值 QPS、存储和带宽，再回答“日活扩大 10 倍时先扩哪里”；如果最低分是重复消息，就补幂等边界，再回答“消息乱序怎么办”。",
      steps: [
        "从自评和追问中选唯一最低分项；若并列，优先需求边界或容量估算。",
        "只查与该缺口直接相关的 M1 小节或备用权威链接，用 60–90 分钟修正文档。",
        "关掉资料回答一个变式，并把修改前后差异和仍未解决的风险写在同一页。"
      ],
      deliverable: "一份修订前后对照 + 一个无辅助变式答案。达到 Gate 就进入 W25，其余问号进入以后复习清单。"
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
        `开始前先写一句完成定义，并在个人练习仓库中准备 W${String(index.weekNo || 0).padStart(2, "0")} 独立目录或本周证据文档。`,
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
    if (weekNo === 15 && w15[taskIndex]) return w15[taskIndex];
    if (weekNo === 24 && w24[taskIndex]) return w24[taskIndex];
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
    const allTasks = week.tasks.length > 1 ? `T1–T${week.tasks.length}` : "T1";
    const allQuestions = week.questions.length > 1 ? `Q1–Q${week.questions.length}` : "Q1";
    return {
      points: pointIndexes.map(i => `L${i + 1}`),
      task: resourceCount <= 1 ? allTasks : `T${taskIndex + 1}`,
      question: resourceCount <= 1 ? allQuestions : `Q${questionIndex + 1}`,
      stop: resource.url
        ? `完成上面的“只看”范围，能开始 ${resourceCount <= 1 ? allTasks : `T${taskIndex + 1}`} 时就停止；不要顺着网站继续通读。遇到主资料未覆盖或结论拿不准，再使用旁边的核对链接。`
        : "本周不新增阅读；只整理已有代码、测试、数据和错题。"
    };
  }

  window.COURSE_GUIDANCE_V6 = { taskGuide, resourceLinks, pointCodesForTask };
})();
