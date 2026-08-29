window.COURSE_SYSTEM_V4 = {
  version: "4.0",
  updatedAt: "2026-08-29",
  learner: {
    profile: "Go 后端开发约 1 年；有工作经验，但知识未系统化",
    horizon: "半年内不急于跳槽，用 12 个月建立后端基本盘并叠加 Agent 能力",
    capacity: "工作日约 2h/天，周末合计 6–8h；每周可用 16–18h",
    loadRule: "每周核心任务控制在 10–12h；1h 无辅助验收；算法保底 1.5–2h；总计通常 12.5–15h，剩余时间只用于补弱或工作繁忙时缓冲，不强行塞满。"
  },
  loop: [
    { key: "learn", name: "专项输入", note: "只读本周指定章节，建立正确模型" },
    { key: "build", name: "工程实操", note: "代码、实验或设计题必须产生可运行证据" },
    { key: "explain", name: "闭卷表达", note: "题目不看资料回答，暴露假懂" },
    { key: "gate", name: "验收补救", note: "过门槛再前进，没过只补当前缺口" },
    { key: "review", name: "周复盘", note: "记录真实产物、卡点和下周学习策略" }
  ],
  phases: [
    {
      id: "go-core", no: "01", range: "W1–W8", weeks: [1,8], title: "Go 工程根基",
      question: "怎样从“会写 Go”升级到能解释、能评审、能排障？",
      why: "后面数据库、分布式和 Agent 都由 Go 服务承载；错误、接口、并发、生命周期和测试不过关，项目越大问题越隐蔽。",
      outcome: "完成可取消、可测试、可诊断的 course-lab，并通过一次 Go 专项闭卷答辩。",
      bloom: "理解 → 应用 → 分析",
      xiaolin: "对应小林：Golang 学习与面试 + 专项题库 + 双月模拟面试",
      flexible: "W8 是验收/补课周"
    },
    {
      id: "data", no: "02", range: "W9–W16", weeks: [9,16], title: "数据与中间件",
      question: "怎样在并发、故障和数据量增长时仍保证数据正确？",
      why: "MySQL、Redis、消息队列是 Go 后端面试和生产事故的高频交叉区，也是系统设计的事实基础。",
      outcome: "完成 ShortLink 项目：索引、事务、缓存一致性、Kafka/Outbox 均有测试或故障证据。",
      bloom: "理解 → 应用 → 分析",
      xiaolin: "对应小林：MySQL、Redis、消息队列专项 + 短链项目 + 专项题库",
      flexible: "W16 是项目答辩/补课周"
    },
    {
      id: "distributed", no: "03", range: "W17–W24", weeks: [17,24], title: "服务端与分布式",
      question: "一次请求跨进程、跨网络、跨服务后，如何设计失败边界？",
      why: "网络、OS、RPC、微服务、稳定性和观测不是六门孤立知识，而是线上请求的同一条证据链。",
      outcome: "能完成 6 类系统设计题，并在 15 分钟内用 metric/log/trace/profile 缩小故障范围。",
      bloom: "应用 → 分析 → 评价",
      xiaolin: "对应小林：网络、操作系统、微服务、分布式、系统设计、线上排障",
      flexible: "W24 是系统设计答辩/补课周"
    },
    {
      id: "backend-project", no: "04", range: "W25–W32", weeks: [25,32], title: "生产级 Go 项目",
      question: "怎样证明一个异步任务系统不是能跑的 Demo，而是可恢复、可观测、可解释的工程系统？",
      why: "把前 24 周分散能力压进同一个项目，形成设计文档、代码、测试、压测和故障报告五类面试证据。",
      outcome: "完成 ReliableTask：状态机、幂等、租约、重试、Outbox、背压、观测与故障注入闭环。",
      bloom: "分析 → 评价 → 创造",
      xiaolin: "对应小林：异步任务、定时任务、消息推送三个项目的核心设计能力",
      flexible: "W32 是项目答辩/补课周"
    },
    {
      id: "rag", no: "05", range: "W33–W40", weeks: [33,40], title: "LLM 与 DeepRAG",
      question: "怎样用量化证据把一个 RAG 从“能回答”优化到“可评测、可降级”？",
      why: "先学模型调用、检索和评测，再进入 Agent；否则 Agent 失败时无法判断是模型、检索还是编排问题。",
      outcome: "完成 Go DeepRAG：Naive → Hybrid/Rerank → 可插拔策略 → 离线评测，保留 before/after 数据。",
      bloom: "理解 → 应用 → 分析 → 评价",
      xiaolin: "对应小林：AI 草履虫导读 → 深度文章 → DeepRAG Engine",
      flexible: "W40 是项目答辩/补课周"
    },
    {
      id: "agent", no: "06", range: "W41–W48", weeks: [41,48], title: "Agent、MCP 与效果工程",
      question: "怎样让 Agent 的工具调用、权限、状态和失败都可控？",
      why: "Agent 不是多一次模型调用，而是不可信模型对真实工具和系统产生影响；必须同时处理契约、安全、观测和评测。",
      outcome: "完成只读 OnCall Agent：Tool/MCP、Workflow、Memory、安全、轨迹评测与攻防回归。",
      bloom: "应用 → 分析 → 评价 → 创造",
      xiaolin: "对应小林：Multi-Agent 平台 + DeepEvalOpt + Agent 架构设计",
      flexible: "W48 是攻防答辩/补课周"
    },
    {
      id: "synthesis", no: "07", range: "W49–W52", weeks: [49,52], title: "年度整合与职业证据",
      question: "哪些能力已经能独立使用，哪些只是看过？",
      why: "把课程能力映射到真实工作和项目证据，防止一年后只剩一堆阅读记录。",
      outcome: "完成后端与 Agent 两次综合闭卷、真实项目复盘和下一季度单一重点。",
      bloom: "评价 → 创造",
      xiaolin: "对应小林：阶段复盘、综合模拟面试、项目/简历打磨",
      flexible: "W52 只做复盘，不开新课"
    }
  ],
  tracks: [
    { name: "Go 语言与工程", values: ["D","D","M","M","D","D","M"], note: "错误、接口、并发、测试、性能贯穿所有项目" },
    { name: "MySQL / Redis / MQ", values: ["I","D","D","M","I","I","M"], note: "从组件使用进入一致性和故障边界" },
    { name: "网络 / OS / RPC", values: ["I","I","D","M","I","D","M"], note: "服务症状与底层机制建立映射" },
    { name: "分布式 / 系统设计", values: ["I","I","D","M","I","D","M"], note: "超时、重复、乱序、分区、崩溃成为默认条件" },
    { name: "生产工程", values: ["I","D","D","M","D","M","M"], note: "稳定性、观测、性能、安全与故障演练" },
    { name: "RAG / Agent", values: ["—","—","—","I","D","M","M"], note: "后端基本盘之上再叠加 AI 应用能力" },
    { name: "项目表达 / 面试", values: ["I","D","D","M","D","M","M"], note: "每双月一次闭卷答辩，项目必须有可验证证据" }
  ],
  projects: [
    {
      id: "shortlink", range: "W9–W16", title: "ShortLink", type: "后端项目 1",
      question: "短链服务在并发创建、缓存失效和消息重复时怎样保持正确？",
      milestones: ["表与索引", "查询证据", "事务与锁", "缓存结构", "一致性与异常", "高可用", "Kafka/Outbox", "答辩"],
      proof: ["可运行 API", "EXPLAIN 记录", "并发测试", "缓存故障测试", "项目答辩稿"]
    },
    {
      id: "reliabletask", range: "W25–W32", title: "ReliableTask", type: "后端项目 2",
      question: "任务系统在进程崩溃、重复投递和下游变慢时怎样恢复？",
      milestones: ["需求/不变量", "事务/幂等", "租约/Fencing", "Worker/重试", "Outbox", "背压/降级", "观测/故障注入", "答辩"],
      proof: ["设计文档", "状态机", "故障测试", "压测报告", "可观测看板", "安全清单"]
    },
    {
      id: "deeprag", range: "W33–W40", title: "DeepRAG", type: "AI 项目 1",
      question: "每一项 RAG 优化能否用固定评测集证明有效？",
      milestones: ["模型契约", "Prompt", "Embedding/Chunk", "Hybrid/Rerank", "Naive RAG", "策略路由", "离线评测", "答辩"],
      proof: ["50 条评测集", "HitRate/MRR", "Faithfulness", "before/after", "失败归因"]
    },
    {
      id: "oncall", range: "W41–W48", title: "OnCall Agent", type: "AI 项目 2",
      question: "Agent 如何在只读权限内给出可追踪、可复现的线上诊断建议？",
      milestones: ["Tool 契约", "Workflow/ReAct", "MCP", "Memory", "安全", "轨迹评测", "集成", "攻防答辩"],
      proof: ["MCP Server", "只读工具", "轨迹日志", "正常/攻击评测集", "成本与失败报告"]
    }
  ],
  serviceReplacement: [
    ["定制双月 OKR", "7 个阶段、前置依赖、阶段作用与可移动补课周"],
    ["专项学习资料", "每周最多两份：中文讲解先读 + 官方/一手资料核对"],
    ["每周监督", "任务勾选、实际工时、阻塞记录与策略目标本地保存"],
    ["专项练习题库", "每周 3–4 个闭卷问题，阶段周综合抽问"],
    ["项目指导", "4 个项目、逐周里程碑、显式学习点与验收证据"],
    ["模拟面试", "W8/16/24/32/40/48/50/51 无辅助答辩"],
    ["失败补救", "每周明确 proceed / repair 规则；不过关不扩大阅读范围"]
  ],
  audit: {
    verdict: "顺序合理：后端基本盘占 62%，AI/RAG/Agent 占 31%，年度整合占 8%；六个双月验收周提供约 12% 的补课弹性，不需要推倒重排。已补强算法保底、容器化/CI/CD 曝光和面试覆盖索引。",
    allocation: [
      { label: "Go 与后端基础", weeks: "W1–W24", count: 24, share: "46%", level: "主线必会", note: "语言工程→数据组件→网络/系统→分布式，前置关系正确" },
      { label: "生产级后端项目", weeks: "W25–W32", count: 8, share: "15%", level: "主线必会", note: "把零散知识压进可答辩的 ReliableTask，而不是再学一轮概念" },
      { label: "LLM / RAG", weeks: "W33–W40", count: 8, share: "15%", level: "AI 必会", note: "先检索与评测，再进入 Agent，顺序正确" },
      { label: "Agent / MCP / Evals", weeks: "W41–W48", count: 8, share: "15%", level: "AI 必会", note: "工具、工作流、安全、观测和评测比框架数量重要" },
      { label: "年度整合", weeks: "W49–W52", count: 4, share: "8%", level: "只做验收", note: "不再开新课；工作项目复盘、后端/AI闭卷和下一阶段计划" }
    ],
    changes: [
      { kind: "补强", title: "算法从可选改为保底副线", detail: "每周 1.5–2h；全年安排 90 道核心新题、65 次间隔复做，七个验收周不加新题；不采用每天 3–4 题的突击强度。" },
      { kind: "补强", title: "补 Docker / K8s / CI/CD 基础曝光", detail: "并入 W31 交付门禁；要求会容器化、理解 Deployment/Service/ConfigMap/Secret 和流水线，不扩成云原生专项。" },
      { kind: "保留", title: "W17–W18 看似很宽，但只学后端排障视角", detail: "DNS/TLS 和内核细节只需建立请求链；不背协议字段、不读内核源码。" },
      { kind: "降级", title: "Multi-Agent、高级 RAG 名词和模型训练", detail: "只要求知道适用场景与代价；当前不做多 Agent 平台、Raft Lab、微调训练或 GPU 推理工程。" },
      { kind: "合并", title: "不单独复制 DeepEvalOpt 第三个 AI 项目", detail: "把 RAG 评测放入 DeepRAG，把轨迹/安全/成本评测放入 OnCall Agent，避免为了项目数量重复建设。" }
    ]
  },
  interviewRadar: [
    { area: "Go 语言与工程", level: "主线必会", weeks: "W1–W8、W25–W32", range: [1,32], topics: ["包/接口/错误/context", "slice/map/interface/typed nil", "GMP/GC/逃逸", "并发、泄漏、race", "测试、pprof、工程规范"] },
    { area: "算法与编码", level: "主线保底", weeks: "全年副线", range: [1,52], topics: ["数组/哈希/字符串", "链表/栈/队列/堆", "树/图/BFS/DFS", "回溯/贪心/基础 DP", "复杂度与边界测试"] },
    { area: "MySQL / Redis / MQ", level: "主线必会", weeks: "W9–W16、W25–W30", range: [9,30], topics: ["索引/EXPLAIN", "事务/MVCC/锁", "缓存一致性与异常", "持久化/高可用/分布式锁", "Kafka/幂等/Outbox/DLQ"] },
    { area: "网络 / Linux / RPC", level: "主线必会", weeks: "W17–W19", range: [17,19], topics: ["DNS/TCP/TLS/HTTP", "进程/内存/I/O/epoll", "REST/gRPC", "超时/取消/错误契约", "线上请求证据链"] },
    { area: "分布式与系统设计", level: "主线必会", weeks: "W20–W32", range: [20,32], topics: ["微服务边界", "一致性/幂等/租约", "超时/重试/限流/熔断", "可观测与故障排查", "容量、状态机、高可用"] },
    { area: "交付与云原生", level: "需要见过", weeks: "W31", range: [31,31], topics: ["Dockerfile/镜像", "K8s Deployment/Service", "ConfigMap/Secret", "readiness/liveness", "CI/CD 质量门禁"] },
    { area: "LLM / RAG", level: "AI 必会", weeks: "W33–W40", range: [33,40], topics: ["Token/Context/结构化输出", "Prompt 契约", "Embedding/Chunk/向量库", "Hybrid/RRF/Rerank", "RAG 指标、归因与降级"] },
    { area: "Agent 工程", level: "AI 必会", weeks: "W41–W48", range: [41,48], topics: ["Tool Calling", "Workflow/ReAct/Plan-Execute", "MCP", "Memory/Checkpoint", "安全、轨迹、成本与回归评测"] },
    { area: "AI 模型与前沿", level: "知道边界", weeks: "W33/W38/W42/W51", range: [33,51], topics: ["Transformer/Attention 直觉", "LoRA/量化/vLLM 名词", "Self/CRAG/Agentic RAG", "Multi-Agent", "何时不该使用 Agent"] }
  ],
  deprioritized: [
    "Go runtime 或 Linux 内核源码级细节",
    "Raft 代码实验和一致性证明",
    "同时学习多个消息队列或 Agent 框架",
    "Self-RAG、CRAG、GraphRAG 全部落地",
    "模型预训练、RLHF、LoRA 实操与 GPU 推理优化",
    "复杂多 Agent 平台、多租户控制面和跨云部署"
  ],
  algorithmByPhase: [
    "数组、哈希、字符串、双指针；每周 2–3 题即可",
    "链表、栈、队列、堆；与数据专项错开，不追求题量",
    "树、图、BFS/DFS；优先后端面试常见题",
    "回溯、贪心、基础 DP；项目繁忙周可以暂停",
    "混合复习；保持手感，不挤占 RAG 项目",
    "混合复习；只记录错误模式",
    "按薄弱项抽题并闭卷复做"
  ]
};
