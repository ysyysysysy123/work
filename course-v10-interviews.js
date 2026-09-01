(function () {
  "use strict";

  const sources = [
    {id:"go-social-2026",title:"社招五年 Go 面经分享攒人品",platform:"牛客",date:"2026-05",company:"腾讯、京东、滴滴、网易、百度、阿里高德、BIGO 等",role:"Go 后端 / AI 工程",url:"https://www.nowcoder.com/discuss/882048490270904320",signal:"项目深挖、Go 并发与 context、Redis/Kafka、稳定性、LRU，以及 Agent 范式、记忆和效果评测同时出现。",reliability:"一名 5 年经验候选人的多家公司记录；覆盖面强，但仍是个人回忆。",tags:["项目","Go","数据","稳定性","算法","AI/Agent"]},
    {id:"didi-go-2025",title:"成都滴滴一面（社招）",platform:"牛客",date:"2025-06",company:"滴滴",role:"Go 后台开发",url:"https://www.nowcoder.com/feed/main/detail/9a87e492ac6345d7b6638b80804b8e29",signal:"先问项目提效与难点，再追 GMP、channel、联合索引、间隙锁和并发生产消费代码。",reliability:"给出了岗位、月份和一小时面试问题；个人记录，不能代表所有部门。",tags:["项目","Go","MySQL","并发编程"]},
    {id:"tencent-yuanbao-2025",title:"腾讯元宝后台开发工程师一面（社招）",platform:"牛客",date:"2025-11-11",company:"腾讯元宝",role:"Go 后台开发",url:"https://www.nowcoder.com/discuss/817806573450887168",signal:"围绕订单流程追问 Redis 锁、延迟消息、MySQL 索引、binlog、缓存异常、服务注册和链表算法。",reliability:"明确说明岗位使用 Go；题目由个人记录，部分组件来自其项目背景。",tags:["项目","MySQL","Redis","消息","微服务","算法"]},
    {id:"aliyun-go-2025",title:"阿里云 Golang 一面（社招 3 年）",platform:"牛客",date:"2025-11-24",company:"阿里云",role:"Golang 社招",url:"https://www.nowcoder.com/discuss/821481246818631680",signal:"项目协作、new/make 与 slice、IPC、线程管理和两道现场算法题。",reliability:"明确工作年限和面试结果；样本较短，只用于补充 Go、OS 和算法信号。",tags:["项目","Go","OS","算法"]},
    {id:"meituan-backend-2025",title:"美团后端社招一面",platform:"牛客",date:"2025-04-28",company:"美团",role:"后端开发（Java 技术栈）",url:"https://www.nowcoder.com/discuss/746362680033701888",signal:"缓存容量与一致性、优惠券库存原子性、数据库失败补偿、联合索引、间隙锁和算法。",reliability:"不是 Go 语言岗；只抽取与语言无关的后端场景题，不用于 Go 语法判断。",tags:["项目","MySQL","Redis","一致性","算法"]},
    {id:"bytedance-role-2025",title:"字节跳动数据流团队社招岗位要求",platform:"牛客",date:"2025-05-26",company:"字节跳动",role:"Go / Java 后端",url:"https://www.nowcoder.com/discuss/756466970249166848",signal:"岗位公开要求算法、系统设计、MySQL 优化、分布式高并发和生产排障。",reliability:"这是岗位信号，不是面经；仅用于校验课程覆盖，不进入题目频次统计。",tags:["岗位要求","系统设计","MySQL","分布式","排障"]},
    {id:"xiaolin-social-2026",title:"小林后端 + AI 社招私教公开说明",platform:"小林 Coding",date:"2026",company:"课程结构参考",role:"Java / Go 后端 + AI 应用",url:"https://xiaolincoding.com/other/sijiao_offer.html",signal:"公开流程强调分阶段学习、项目深挖、模拟面试和复盘；2026 年增加 LLM、RAG、Function Calling、MCP、Agent 与 AI 工程化。",reliability:"商业课程公开介绍，不作为技术事实来源；只用于核对训练流程和市场方向。",tags:["课程结构","项目","模拟面试","RAG","MCP","Agent"]}
  ];

  const themes = [
    {name:"项目深挖与业务结果",weeks:"W1–W52",level:"贯穿主线",evidence:"5 份一手社招样本都从项目、职责、难点或结果开始。",action:"任何技术回答都要能落回真实项目、数据、取舍和个人贡献。"},
    {name:"Go 工程、并发与运行时",weeks:"W1–W8",level:"主线必会",evidence:"GMP、channel、context、slice/new/make、逃逸与并发代码反复出现。",action:"从规则进入代码和故障，不把源码细节当唯一深度。"},
    {name:"MySQL / Redis / MQ 场景",weeks:"W9–W16",level:"主线必会",evidence:"4 份样本直接追问索引、锁、缓存一致性、过期、集群或消息可靠性。",action:"每个机制都用并发、失败和数据量变化追问。"},
    {name:"网络、微服务与稳定性",weeks:"W17–W24",level:"主线必会",evidence:"近期题目包含注册中心、Protobuf、限流、监控、日志、超时和系统扩容。",action:"沿一次请求解释故障边界，再完成一题完整系统设计。"},
    {name:"生产项目与故障证据",weeks:"W25–W32",level:"形成亮点",evidence:"社招会继续追问为什么这样设计、如何恢复、怎样证明收益。",action:"ReliableTask 必须留下测试、压测、故障注入和观测证据。"},
    {name:"LLM / RAG / Agent 工程",weeks:"W33–W48",level:"近期新增",evidence:"2026 Go 社招样本与小林公开说明都出现 Agent、RAG、记忆和效果评测。",action:"保持后端主线，只学习可评测、可控、可解释的 AI 应用工程。"},
    {name:"算法与现场编码",weeks:"全年副线",level:"持续保底",evidence:"5 份一手样本均出现算法或并发现场编码。",action:"每周 1.5–2 小时，强调独立写出、复杂度和边界测试。"}
  ];

  const rows = [
    ["项目深挖","挑一个真实 Go 接口，说明请求链、你负责的部分、最难的问题，以及错误为什么在这个边界处理。","真实职责|调用链|错误取舍","go-social-2026|didi-go-2025"],
    ["Go 场景","一段 slice 或 map 在函数间传递后出现数据被意外修改，你怎样判断是否共享底层数据并修复？","值复制|共享边界|最小复现","aliyun-go-2025"],
    ["Go 追问","接口值为什么可能看起来不是 nil？如果它跨 Handler 与 Service 边界，会造成什么真实故障？","动态类型/值|typed nil|边界防护","go-social-2026"],
    ["并发现场题","两个消费者读取同一 channel 时，谁负责关闭？怎样证明不会重复关闭、竞态或丢任务？","所有权|happens-before|race 证据","go-social-2026|didi-go-2025"],
    ["Go 场景","两个 goroutine 通过 context 超时协作：取消从哪里发出、怎样传播、如何确认没有泄漏？","超时预算|取消传播|退出证据","go-social-2026"],
    ["质量追问","重构一个线上 Go 服务时，怎样证明用户可见行为没有变化？AI 生成的代码又如何验证？","契约测试|失败用例|回归门禁","go-social-2026"],
    ["线上排障","Go 服务内存持续上涨，你会按什么顺序用指标、pprof 和对象生命周期定位，而不是先猜 GC？","现象基线|profile 证据|单变量验证","go-social-2026|bytedance-role-2025"],
    ["阶段模拟","让面试官从你的项目任意追问 Go、并发和性能；你能否用代码证据而不是背诵回答？","项目入口|机制解释|证据闭环","didi-go-2025|aliyun-go-2025"],
    ["MySQL 场景","给定真实查询和数据规模，怎样从访问模式设计主键与联合索引，并说明为什么不是字段越多越好？","访问模式|B+Tree 路径|写入代价","didi-go-2025|meituan-backend-2025"],
    ["慢 SQL","线上 SQL 变慢时，你如何用 EXPLAIN、扫描行数、回表和排序证据逐步定位？","执行计划|数据分布|修改前后对比","go-social-2026|tencent-yuanbao-2025"],
    ["事务与锁","WHERE 条件没有合适索引又使用 FOR UPDATE，会锁什么范围？怎样用并发实验确认？","索引路径|锁范围|死锁/等待证据","didi-go-2025|meituan-backend-2025"],
    ["Redis 场景","为一个有容量上限的缓存设计 key、过期和淘汰策略；如何避免过期任务本身造成抖动？","数据结构|生命周期|容量治理","go-social-2026"],
    ["缓存一致性","数据库写成功但缓存删除失败会怎样？给出可接受的不一致窗口、恢复路径和观测指标。","失败窗口|恢复方案|观测","meituan-backend-2025|go-social-2026"],
    ["Redis 高可用","Redis 主从切换期间，分布式锁和缓存读写可能出现什么正确性问题？你接受怎样的 RPO/RTO？","故障时间线|锁所有权|业务取舍","tencent-yuanbao-2025|go-social-2026"],
    ["消息可靠性","消费者业务写入成功但 offset 未提交就崩溃，会发生什么？幂等、Outbox 和死信分别解决哪一段？","重复窗口|原子边界|恢复/积压","go-social-2026|tencent-yuanbao-2025"],
    ["项目答辩","用 ShortLink 回答：并发创建、缓存失效、消息重复和流量增长时，系统怎样保持正确并逐步演进？","容量数据|一致性|故障证据","meituan-backend-2025|bytedance-role-2025"],
    ["网络链路","用户输入 URL 到 Go Handler 收到请求，中间经过什么？每层超时分别会看到什么症状？","DNS/TCP/TLS/HTTP|超时位置|观测信号","go-social-2026"],
    ["OS 追问","进程、线程、goroutine 和 IPC 分别解决什么？Go 服务阻塞时怎样区分 CPU、内存与 I/O 问题？","调度层次|IPC/I/O|排障命令","aliyun-go-2025|go-social-2026"],
    ["RPC 场景","为什么 Protobuf 通常比文本协议紧凑？跨服务 deadline、取消和错误码怎样避免语义丢失？","编码/协议|deadline 传播|错误契约","go-social-2026"],
    ["微服务追问","注册中心不可用、配置推错或网关过载时，请求链如何退化？什么时候其实不该拆服务？","拆分边界|控制面故障|回滚策略","go-social-2026|tencent-yuanbao-2025"],
    ["分布式正确性","消息重复、乱序、网络分区和进程崩溃同时存在时，你的业务不变量是什么，靠什么机制维持？","不变量|故障模型|幂等/状态机","tencent-yuanbao-2025|meituan-backend-2025"],
    ["稳定性场景","集群扩容或下游变慢时，限流额度怎样分配到实例？超时、重试、熔断怎样避免流量放大？","端到端预算|全局/本地限流|过载保护","go-social-2026"],
    ["线上排障","告警显示 P99 上升但错误率正常，你怎样在 15 分钟内用 metric、log、trace 和 profile 缩小范围？","先看用户影响|关联四类证据|验证假设","go-social-2026|bytedance-role-2025"],
    ["系统设计模拟","从短链、秒杀、推送、订单、计数、扫码登录中随机抽一题，主动推进 60 分钟并接受容量与故障追问。","需求/估算|核心矛盾|取舍与演进","bytedance-role-2025|meituan-backend-2025"],
    ["项目需求","ReliableTask 对调用方承诺什么、不承诺什么？容量增长 10 倍时哪些不变量绝不能破坏？","业务保证|容量估算|状态机","bytedance-role-2025"],
    ["并发写入","客户端超时重试创建任务时，怎样防止重复任务并让调用方安全查询最终结果？","幂等键|事务边界|返回语义","meituan-backend-2025|tencent-yuanbao-2025"],
    ["调度恢复","两个调度器同时领取任务且其中一个暂停后恢复，租约和 fencing token 怎样阻止旧所有者继续写？","竞争时间线|租约|陈旧写防护","bytedance-role-2025"],
    ["失败分类","任务执行失败后，哪些错误立即失败、哪些重试、哪些进入死信？如何避免无限重试拖垮下游？","错误分类|退避预算|死信恢复","tencent-yuanbao-2025|go-social-2026"],
    ["事件一致性","数据库事务提交成功但通知没有发出，或消息重复发出时，Outbox 与消费幂等怎样共同兜底？","双写窗口|relay 崩溃|下游去重","go-social-2026|meituan-backend-2025"],
    ["过载保护","下游吞吐降到一半时，ReliableTask 怎样背压、限流和降级，同时保证核心任务优先？","队列上限|优先级|恢复条件","go-social-2026"],
    ["生产证据","任务延迟突然升高，你怎样判断卡在领取、执行、重试还是通知？展示哪些指标和故障注入证据？","SLI/SLO|链路定位|故障演练","go-social-2026|bytedance-role-2025"],
    ["项目答辩","完整讲 ReliableTask：业务价值、个人贡献、最大难点、方案取舍、失败恢复、量化结果和下一步。","项目故事|技术深挖|数据与反思","go-social-2026|didi-go-2025"],
    ["LLM 基础","temperature、上下文长度和结构化输出分别影响什么？模型输出不符合 schema 时怎样恢复？","参数边界|验证|失败重试","go-social-2026|xiaolin-social-2026"],
    ["AI Coding","使用 AI 编码时，怎样从需求、spec、测试到代码评审建立可重复的正确性门禁？","输入契约|测试证据|人工责任","go-social-2026|xiaolin-social-2026"],
    ["RAG 数据层","chunk 太大或太小分别造成什么检索问题？怎样用固定问题集选择切片和向量索引参数？","切片取舍|元数据|离线评测","xiaolin-social-2026"],
    ["检索工程","什么时候 BM25 比向量检索更可靠？Hybrid、RRF 与 Rerank 各解决哪一层错误？","关键词/语义|融合|延迟成本","xiaolin-social-2026"],
    ["RAG 项目","RAG 检索不到可靠证据时为什么应拒答？怎样让答案引用、追踪并可重放？","证据边界|拒答|trace","xiaolin-social-2026"],
    ["RAG 演进","只有观察到什么失败，才值得增加查询改写、路由或 Agentic RAG？如何随时回退？","失败证据|单一策略|回退开关","xiaolin-social-2026"],
    ["AI 效果评测","用了 RAG 仍然幻觉时，怎样区分检索失败、上下文使用失败和模型生成失败？","分层指标|固定评测集|失败归因","go-social-2026|xiaolin-social-2026"],
    ["项目答辩","用 before/after 数据证明 DeepRAG 的某项优化有效；如果效果下降，你怎样解释并回滚？","基线|指标显著性|代价/回滚","go-social-2026|xiaolin-social-2026"],
    ["Tool Calling","模型生成了格式正确但危险的工具参数时，schema 校验、业务校验、权限和确认分别拦什么？","不可信输入|最小权限|可审计失败","xiaolin-social-2026"],
    ["Agent 范式","Workflow、ReAct 和 Plan-Execute 的差异是什么？为什么确定性流程通常应优先？","适用条件|失败模式|停止条件","go-social-2026|xiaolin-social-2026"],
    ["MCP","MCP host、client、server 与 tool 的信任边界是什么？Go Server 如何限制工具能力和参数？","角色边界|transport|权限/校验","xiaolin-social-2026"],
    ["Agent 记忆","会话历史、摘要、知识库和长期偏好如何区分？错误记忆写入后怎样发现、删除和回滚？","记忆分层|生命周期|纠错","go-social-2026|xiaolin-social-2026"],
    ["Agent 安全","外部文档包含提示词注入并诱导调用高权限工具时，你的系统在哪几层阻断？","内容不可信|权限隔离|人工确认","xiaolin-social-2026"],
    ["Agent 评测","怎样判断 Agent 效果变好，而不是只看最终回答更像人？轨迹、工具、成本和成功率如何联合评测？","任务成功|轨迹归因|成本/回归","go-social-2026|xiaolin-social-2026"],
    ["Agent 项目","OnCall Agent 为什么只读？它怎样组合 Runbook RAG、MCP 工具和有限工作流完成可追踪诊断？","业务边界|工具链|可追踪建议","go-social-2026|xiaolin-social-2026"],
    ["攻防答辩","展示一个正常任务和一个攻击任务：系统如何成功、如何拒绝、如何留下轨迹并避免越权？","正常基线|攻击回归|安全证据","xiaolin-social-2026"],
    ["真实项目复盘","用一个真实工作项目回答：背景、个人职责、最难问题、技术选型、量化收益、事故与反思。","真实边界|个人贡献|量化结果","go-social-2026|didi-go-2025"],
    ["后端综合面","从项目出发连续接受 Go、MySQL/Redis/MQ、网络、稳定性和系统设计追问，至少主动追到两层。","项目串联|跨模块迁移|主动推进","go-social-2026|tencent-yuanbao-2025|bytedance-role-2025"],
    ["AI 综合面","从 DeepRAG 或 OnCall Agent 出发，说明架构、数据、评测、安全、失败归因和 Go 后端承载方式。","项目而非术语|评测数据|后端基本盘","go-social-2026|xiaolin-social-2026"],
    ["年度证据","哪些能力已经能独立使用、哪些只是见过？选择一个下一季度重点，并用面经覆盖和项目证据说明原因。","证据分级|真实缺口|单一重点","xiaolin-social-2026|bytedance-role-2025"]
  ];

  const weeks = rows.map((row, index) => ({
    week: index + 1,
    kind: row[0],
    prompt: row[1],
    must: row[2].split("|"),
    sourceIds: row[3].split("|")
  }));

  window.INTERVIEW_RADAR_V10 = {
    version: "10.0",
    verifiedAt: "2026-09-01",
    sampleWindow: "2024-09-01—2026-08-31",
    rule: "面经只用于发现题型和验证迁移，不作为技术答案来源；每周最多增加一个 10–15 分钟追问，不增加新的阅读任务。",
    caveat: "样本来自个人回忆、岗位公开信息和商业课程公开介绍，不能推断某家公司所有部门的固定题库，也不能用于判断录用概率。",
    sources,
    themes,
    weeks
  };
})();
