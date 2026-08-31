window.GO_COURSE_V2 = {
  profile: {
    title: "1 年 Go 后端 · 半年内不跳槽",
    available: "每周 16–18 小时",
    coreLoad: "必修 10–12 小时",
    rule: "先系统补基础，再做可验证项目；AI 是后端能力的增量，不替代后端。"
  },
  okrs: [
    {name:"OKR 1 · Go 工程能力",range:"第 1–8 周",outcome:"能解释语言核心、写出可取消可测试的并发服务，并通过一次 Go 专项模拟面试。"},
    {name:"OKR 2 · 数据与中间件",range:"第 9–16 周",outcome:"掌握 MySQL、Redis、Kafka 的正确性边界，完成 ShortLink 后端项目。"},
    {name:"OKR 3 · 分布式与系统设计",range:"第 17–24 周",outcome:"串起网络、OS、RPC、微服务、稳定性、排障和 6 类系统设计题。"},
    {name:"OKR 4 · ReliableTask 项目",range:"第 25–32 周",outcome:"完成可靠异步任务平台，具备状态机、租约、幂等、重试、观测与压测证据。"},
    {name:"OKR 5 · LLM 与 DeepRAG",range:"第 33–40 周",outcome:"从检索基线到混合检索、重排和离线评测，完成量化驱动的 Go RAG 项目。"},
    {name:"OKR 6 · MCP 与 Agent",range:"第 41–48 周",outcome:"掌握 Tool、Workflow、ReAct、MCP、安全与评测，完成只读 OnCall Agent。"},
    {name:"年度验收",range:"第 49–52 周",outcome:"复盘真实工作、完成后端与 Agent 综合答辩，并生成下一季度计划。"}
  ],
  sourceAudit: [
    {name:"Go 官方文档、规范、标准库",grade:"A",use:"事实标准",note:"版本最可靠；只读指定章节，不通读。"},
    {name:"MySQL / Redis / Kafka / gRPC / OpenTelemetry 官方文档",grade:"A",use:"组件正确性",note:"用于验证机制、配置和边界。"},
    {name:"MCP Specification / Official Go SDK / CloudWeGo Eino",grade:"A",use:"Go Agent 实践",note:"与当前 Go Agent 工作直接相关。"},
    {name:"Go 101",grade:"B+",use:"语言语义讲解",note:"讲解深入但当前标注 Go 1.25；遇到版本差异以 Go 官方规范为准。"},
    {name:"Uber Go Style Guide",grade:"B+",use:"生产工程规范",note:"来自大型 Go 代码库实践，不等同于语言规范。"},
    {name:"小林图解网络/系统/MySQL/Redis/Agent",grade:"B",use:"中文导读与面试表达",note:"适合作为第一遍讲解，关键结论回到官方资料核对。"},
    {name:"MIT 6.5840 / System Design Primer",grade:"B",use:"分布式与设计拓展",note:"对一年经验偏难，只选小段，不安排完整实验。"},
    {name:"Hugging Face Agents Course",grade:"B",use:"Agent 概念补充",note:"以 Python 为主，只学框架无关概念，不作为 Go 主线。"}
  ],
  diagnostics: [
    {q:"s := a[:2] 后 append(s, x) 是否一定不影响 a？",options:["一定不影响","取决于 s 的容量，可能覆盖 a 的底层数组","只要 a 不是 nil 就不影响"],answer:1,why:"slice 共享底层数组；append 未触发扩容时可能写入原数组。",domain:"Go 语义"},
    {q:"一个接口变量装入 (*MyError)(nil) 后，接口是否等于 nil？",options:["等于 nil","不等于 nil，因为动态类型仍存在","取决于编译器优化"],answer:1,why:"接口值包含动态类型和动态值；只有两者都为空才等于 nil。",domain:"Go 语义"},
    {q:"下列哪项最符合 Go 接口设计？",options:["由实现方预先声明大接口","在使用方声明最小接口","所有 repository 共用一个万能接口"],answer:1,why:"接口通常属于消费者；从真实用例出发保持最小。",domain:"Go 工程"},
    {q:"请求处理函数应如何传递 context？",options:["存入全局变量","作为第一个参数沿调用链显式传递","每层重新 context.Background"],answer:1,why:"显式传播才能保留取消、截止时间、凭据与 trace。",domain:"并发"},
    {q:"谁通常负责关闭 channel？",options:["任意接收方","明确拥有发送生命周期的一方","垃圾回收器"],answer:1,why:"由发送方/所有者关闭，避免重复关闭和向关闭 channel 发送。",domain:"并发"},
    {q:"go test -race 没报错能证明并发逻辑正确吗？",options:["能","不能，只说明该执行覆盖下未检测到数据竞争","只要跑 100 次就能"],answer:1,why:"race detector 不是业务不变量证明，也受执行覆盖影响。",domain:"并发"},
    {q:"联合索引 (tenant_id, status, created_at) 最适合哪类查询？",options:["只按 created_at 范围","按 tenant_id、status 等值并按 created_at 范围","只按 status"],answer:1,why:"遵循索引前缀，并将等值条件放在范围条件之前。",domain:"MySQL"},
    {q:"Repeatable Read 下普通 SELECT 与 SELECT FOR UPDATE 的主要差别？",options:["完全一样","前者通常是快照读，后者是当前锁定读","后者不会加锁"],answer:1,why:"一致性非锁定读与锁定读读取视图和锁行为不同。",domain:"MySQL"},
    {q:"cache-aside 更新数据库后删除缓存失败，首先应承认什么？",options:["天然强一致","存在不一致窗口，需要重试/消息补偿","把 TTL 设为永久即可"],answer:1,why:"缓存与数据库不是同一事务，必须设计失败补偿。",domain:"Redis"},
    {q:"Kafka at-least-once 消费为什么仍会重复？",options:["Kafka 不存 offset","副作用完成后、offset 提交前崩溃会重放","只有多分区才重复"],answer:1,why:"交付确认与业务副作用不是天然原子操作。",domain:"消息可靠性"},
    {q:"调用下游时哪种重试更安全？",options:["无限立即重试","总超时预算内的有限指数退避加抖动，只重试幂等/可重试错误","所有 4xx 都重试"],answer:1,why:"有限预算与 jitter 可避免重试放大，幂等性控制副作用。",domain:"稳定性"},
    {q:"HTTP 服务只设置客户端超时、不设置 Server 超时是否足够？",options:["足够","不够，服务端也需约束读写与空闲连接","只要用了 Gin 就足够"],answer:1,why:"服务端必须防慢客户端和无界资源占用。",domain:"网络"},
    {q:"系统设计题开始时最先做什么？",options:["画 Kafka 和 Redis","确认需求、流量、数据量、SLA 和边界","先选微服务框架"],answer:1,why:"约束决定方案；中间件堆叠不能替代需求分析。",domain:"系统设计"},
    {q:"RAG 中 Recall@k 主要验证什么？",options:["生成文本是否流畅","相关文档是否进入前 k 个检索结果","模型调用价格"],answer:1,why:"它先隔离检索层质量，避免用生成结果掩盖召回问题。",domain:"RAG"},
    {q:"Agent 工具最重要的默认权限原则？",options:["模型可调用所有内部接口","只读、最小权限、输入输出受控，高风险操作需确认","只要 prompt 写了不要越权即可"],answer:1,why:"模型输出不可信，权限必须由代码和基础设施强制执行。",domain:"Agent"},
    {q:"什么时候优先固定 Workflow 而不是自主 Agent？",options:["步骤和分支可预先定义且可靠性重要","任何 AI 项目都必须 Agent","需要更炫的演示时"],answer:0,why:"确定流程应优先确定性编排；只有决策无法预定义时再引入 Agent。",domain:"Agent"}
  ],
  weeks: [
    {
      title:"工程基线：Package、错误、接口与依赖方向",stage:"专项学习 1/7",hours:"10–12h",
      outcome:"不是重新学语法，而是把现有 Go 工作经验整理成可评审的工程规则。",
      lecture:["package 是边界，不是文件夹分类；依赖应指向稳定抽象","错误需要保留根因、补充上下文并在一个层级处理","接口由使用方按真实需要声明，构造函数优先返回具体类型","context 沿请求链传递，不放进结构体、不用 Background 截断"],
      resources:[
        {name:"Go Code Review Comments",url:"https://go.dev/wiki/CodeReviewComments",scope:"Contexts、Handle Errors、Interfaces、Package Names、Goroutine Lifetimes"},
        {name:"Uber Go Style Guide",url:"https://github.com/uber-go/guide/blob/master/style.md",scope:"Errors、Avoid Mutable Globals、Don't fire-and-forget goroutines"}
      ],
      tasks:["3h｜从工作代码中匿名抽取一个 handler→service→repository 调用链，标注依赖和错误边界","5h｜建立个人练习仓库（名称自定），重写该调用链：最小接口、错误包装、context 传播、依赖注入","2h｜写 8 个表驱动测试，覆盖 not-found、timeout、invalid、dependency failure"],
      questions:["为什么接口通常放在消费者包？","errors.Is/As 与字符串比较有什么差别？","什么情况下可以 context.Background？","同一个错误为什么不应既记录又向上返回后再次记录？"],
      gate:"go test ./... 通过；四题至少答对三题；代码中无全局可变依赖、无丢弃错误、无 context 断链。",
      repair:"如果 gate 未过：只重做错误链和接口两项，不进入下一周；阅读范围不再扩大。",
      optional:"运行 staticcheck/govulncheck，问题只修与本周规则直接相关的。"
    },
    {
      title:"值模型：Slice、Map、String、复制与 JSON 边界",stage:"专项学习 2/7",hours:"10–12h",
      outcome:"能够预测值复制、共享底层数据和序列化行为，避免线上隐蔽数据污染。",
      lecture:["数组是值；slice 是描述符并可能共享底层数组","append 是否影响旧值取决于容量和是否重新分配","map 不是并发安全容器；nil map 可读不可写","nil slice 与 empty slice 在长度上相同，但 JSON 契约可能不同"],
      resources:[
        {name:"Go 101：Arrays, Slices and Maps",url:"https://go101.org/article/container.html",scope:"Array、Slice internals、Append and copy、Map；跳过超出实验的冷门细节"},
        {name:"Go 官方规范",url:"https://go.dev/ref/spec",scope:"Array types、Slice types、Map types；用于核对 Go101 结论"}
      ],
      tasks:["3h｜完成 12 个“先预测后运行”实验：复制、截取、append、copy、删除、nil/empty、字符串与 []byte","5h｜实现一个批量请求聚合器，输入输出边界做 defensive copy，并写 JSON 契约测试","2h｜用 -race 复现 map 并发读写错误，再分别用 mutex 和 owner goroutine 修复"],
      questions:["slice 作为参数传入时复制了什么？","append 后为什么两个变量有时共享、有时分离？","何时必须复制 map/slice？","nil slice 应不应该统一转成 []？"],
      gate:"12 个实验都有预测与解释；契约测试固定 null/[] 行为；race 修复后连续运行通过。",
      repair:"若无法画出 slice 的 pointer/len/cap，回到 4 个最小实验，不继续写聚合器。",
      optional:"用 benchmark 比较预分配和不预分配，解释 allocs/op 而不是只看 ns/op。"
    },
    {
      title:"类型系统：Method Set、Interface、Typed nil 与泛型边界",stage:"专项学习 3/7",hours:"10–12h",
      outcome:"能从编译器规则解释接口实现与 nil，不靠试出来。",
      lecture:["值接收者与指针接收者决定 method set 与可赋值关系","接口值由动态类型和动态值组成，typed nil 不等于 nil interface","type assertion 必须处理失败；反射只在边界使用","泛型适合类型安全的算法/容器，不替代业务多态"],
      resources:[
        {name:"Go 官方规范",url:"https://go.dev/ref/spec",scope:"Method sets、Interface types、Implementing an interface、Type assertions、Type parameter declarations"},
        {name:"Go 101：Interfaces",url:"https://go101.org/article/interface.html",scope:"Interface value boxing、nil interface、type assertion"}
      ],
      tasks:["3h｜写 10 个编译/运行实验覆盖 T、*T、interface、embedding、typed nil","5h｜把第 1 周 repository 做成两个实现；消费者定义接口；增加一个泛型分页结果但拒绝泛型 repository","2h｜做一次代码评审：找出大接口、返回接口、反射滥用、未检查断言四类问题"],
      questions:["为什么 *T 可能实现接口而 T 不实现？","typed nil 最常见的修复方式是什么？","何时返回具体类型更利于演进？","泛型和接口分别解决什么问题？"],
      gate:"能闭卷写出 method set 表；typed nil 测试可稳定复现；接口不包含调用方不需要的方法。",
      repair:"只重做 T/*T/interface 三列表和 typed nil；暂缓泛型。",
      optional:"阅读 Go 101 Type Embedding，区分方法提升与继承。"
    },
    {
      title:"并发正确性：Memory Model、Mutex、Channel 与所有权",stage:"专项学习 4/7",hours:"10–12h",
      outcome:"从 happens-before 和所有权判断并发正确性，而不是“压测没出错”。",
      lecture:["数据竞争是未同步的并发冲突访问；race-free 仍不等于业务正确","mutex 保护不变量，channel 传递所有权/事件，两者不是阵营选择","channel close 是广播“不会再发送”，不是通用清理动作","并发度必须有上限；goroutine 生命周期必须可说明"],
      resources:[
        {name:"The Go Memory Model",url:"https://go.dev/ref/mem",scope:"Introduction、Advice、Memory Model、Synchronization"},
        {name:"Go 101：Concurrency Synchronization Overview",url:"https://go101.org/article/concurrent-synchronization-overview.html",scope:"Channel、Mutex、atomic 的用途对比"}
      ],
      tasks:["3h｜写 6 个 happens-before 实验：无同步、mutex、channel send/close、once、atomic","5h｜实现有界并发聚合器：固定并发、结果顺序明确、错误策略明确","2h｜运行 -race 并写一页并发不变量：谁拥有数据、谁关闭、如何退出"],
      questions:["race-free 为什么不保证业务结果正确？","buffered channel 是否天然提供背压？","什么时候 mutex 比 channel 更清晰？","谁应该关闭结果 channel？"],
      gate:"所有实验解释同步边；go test -race ./... 通过；聚合器并发数不会随输入无限增长。",
      repair:"如果生命周期说不清，先把实现改回单线程，再逐一引入并发。",
      optional:"用 mutex profile 观察刻意制造的锁竞争。"
    },
    {
      title:"取消与生命周期：Context、Pipeline、errgroup 与泄漏",stage:"专项学习 5/7",hours:"10–12h",
      outcome:"请求取消后，上游、下游和内部 goroutine 都能在可控时间退出。",
      lecture:["context 表达请求范围的取消和截止时间，不承载可选参数","pipeline 下游提前停止时必须通知上游","首错取消、错误聚合、部分成功是三种不同产品语义","goroutine 泄漏常来自无人接收的发送、永不关闭的输入或失联的阻塞 I/O"],
      resources:[
        {name:"Go Blog：Pipelines and cancellation",url:"https://go.dev/blog/pipelines",scope:"Stopping short、Explicit cancellation、Digesting a tree"},
        {name:"errgroup 文档",url:"https://pkg.go.dev/golang.org/x/sync/errgroup",scope:"WithContext、SetLimit、TryGo 示例"}
      ],
      tasks:["3h｜画出 pipeline 每个 stage 的输入、输出、取消和关闭责任","5h｜实现 fetch→parse→store pipeline，使用 errgroup.SetLimit、总超时和首错取消","2h｜写正常、下游提前结束、超时、依赖卡死、首错五类测试，并检查 goroutine 数"],
      questions:["为什么不能在库函数里擅自创建 Background？","errgroup 的 context 何时取消？","下游只取一个结果会怎样泄漏？","超时、取消和业务失败应如何区分？"],
      gate:"五类测试通过；取消后在限定时间退出；没有 send on closed channel；错误保留根因。",
      repair:"若测试不稳定，去掉真实 sleep，改用可控 channel/假时钟后再测。",
      optional:"比较首错取消与收集所有错误的 API 契约。"
    },
    {
      title:"测试体系：表驱动、Mock 边界、Fuzz、Race 与静态检查",stage:"专项学习 6/7",hours:"10–12h",
      outcome:"建立支持重构的质量门禁，而不是追求一个孤立覆盖率数字。",
      lecture:["测试验证行为与不变量；覆盖率只能提示未执行区域","表驱动适合等价输入，子测试提供隔离与可读失败","mock 只放在慢、不稳定或跨边界依赖，优先小型 fake","fuzz 寻找边界；race 检查并发访问；staticcheck/vet 检查已知错误模式"],
      resources:[
        {name:"Go testing package",url:"https://pkg.go.dev/testing",scope:"Tests、Subtests、Examples、Benchmarks"},
        {name:"Go Fuzzing Tutorial",url:"https://go.dev/doc/tutorial/fuzz",scope:"完整做教程，再迁移到项目"}
      ],
      tasks:["3h｜为前五周代码补 table/subtest/helper/example，明确每类测试目的","4h｜为解析器或状态转换写 fuzz target，定义不 panic、往返一致、非法输入拒绝三个不变量","3h｜建立 test→race→vet→staticcheck→govulncheck 门禁并修复真实问题"],
      questions:["何时 fake 比 mock 更好？","为什么覆盖率 100% 仍可能错误？","fuzz seed 应包含什么？","并行子测试最常见的数据捕获问题是什么？"],
      gate:"门禁全部通过；fuzz 运行至少 10 分钟；发现问题沉淀为普通回归测试。",
      repair:"先保证确定性单测，再运行 fuzz；不在不稳定基础上堆工具。",
      optional:"给核心包设置有意义的覆盖率下限，但不要求全仓统一 80%。"
    },
    {
      title:"运行时与性能：Escape、GC、pprof、trace 与基准",stage:"专项学习 7/7",hours:"10–12h",
      outcome:"用数据定位瓶颈，理解分配和 GC 成本，不背 runtime 八股。",
      lecture:["逃逸决定值可能分配到堆，但堆分配本身不是罪","GC 成本与存活对象、分配速率、内存目标相关","benchmark 需要稳定工作量、基线和多次比较","pprof 回答 CPU/alloc/block/mutex；trace 回答调度与时序"],
      resources:[
        {name:"Go Diagnostics",url:"https://go.dev/doc/diagnostics",scope:"Profiling、Execution tracer、Runtime statistics"},
        {name:"A Guide to the Go Garbage Collector",url:"https://go.dev/doc/gc-guide",scope:"Where Go Values Live、GC costs、Optimization guide"}
      ],
      tasks:["3h｜对 8 个小函数运行 -gcflags=-m，预测并解释逃逸","5h｜给聚合器建立 benchmark/pprof 基线，只优化一个已证明热点","2h｜记录 before/after：吞吐、p95、allocs/op、内存；确认测试仍通过"],
      questions:["为什么减少一次逃逸可能没有业务价值？","CPU profile 与 alloc profile 分别回答什么？","benchmark 为什么要多次比较？","GOGC 调低一定更快吗？"],
      gate:"有可复现基线与改后数据；优化收益稳定且无正确性退化；能解释为什么停止继续优化。",
      repair:"数据不稳定时先固定输入、并发和环境，不根据单次结果下结论。",
      optional:"只有出现调度等待问题时才使用 trace。"
    },
    {
      title:"Go 专项题库、代码评审与双月模拟面试",stage:"专项验收",hours:"8–10h",
      outcome:"像训练营一样用题库和模拟面试暴露薄弱点，决定下一 OKR 是否需要补课。",
      lecture:["本周不增加新知识；复习只针对失败证据","题库回答采用：结论→原理→边界→项目例子","代码评审重点看生命周期、错误、接口和可测试性","模拟面试用于诊断，不用于表演背诵"],
      resources:[{name:"第 1–7 周课程、代码与错题",url:"",scope:"不打开新资料；累计 28 道周题全部闭卷过一遍"}],
      tasks:["2h｜完成 28 题闭卷回答并标记：会、含糊、不会","3h｜评审一段含 12 个问题的 Go 服务代码，按正确性/并发/接口/测试分类","2h｜进行 60 分钟模拟面试：语言 20m、并发 20m、工程性能 20m","1h｜只修分数最低的一类，生成下个 OKR 的个人补课项"],
      questions:["解释 slice append、typed nil、method set 的共同底层：值模型","设计一个可取消、有界、首错返回的并发组件","说明一次性能优化的完整证据链","现场评审 context、error、goroutine 生命周期"],
      gate:"题库正确率≥75%；代码评审找出≥9/12；模拟面试没有连续三个问题无法回答；否则顺延一周。",
      repair:"低于门槛不重学全部，只按错误分类回到对应一周的 gate。",
      optional:"把最好的 10 个回答录音，检查是否只有结论没有边界。"
    },
    {title:"MySQL 数据建模、页与 B+Tree",stage:"专项学习 1/7",hours:"10–12h",outcome:"从访问模式推导表、主键和索引，不从字段列表机械建表。",lecture:["InnoDB 以页组织数据，主键索引叶子存整行","二级索引叶子存主键，可能产生回表","宽主键会放大所有二级索引；选择性不是索引唯一标准"],resources:[{name:"小林《图解 MySQL》",url:"https://www.xiaolincoding.com/mysql/",scope:"索引篇：索引数据结构、聚簇索引、联合索引"},{name:"MySQL 8.4 InnoDB Indexes",url:"https://dev.mysql.com/doc/refman/8.4/en/innodb-indexes.html",scope:"Clustered and Secondary Indexes、Physical Structure"}],tasks:["3h｜为 ShortLink 写需求和读写量假设","5h｜设计 link、visit_event 表与索引，生成 100 万测试数据","2h｜画主键查询、短码查询、用户列表三条 B+Tree 访问路径"],questions:["为什么不建议超长字符串做聚簇主键？","覆盖索引省掉了什么？","联合索引顺序由什么决定？"],gate:"DDL、查询和索引逐项对应；能估算索引空间量级；没有所有字段都建索引。",repair:"说不清回表时，用一条二级索引查询逐层画页与主键。",optional:"比较自增 ID、UUID、雪花 ID 对写入局部性的影响。"},
    {title:"EXPLAIN、查询改写与慢 SQL 证据链",stage:"专项学习 2/7",hours:"10–12h",outcome:"能用执行计划定位扫描、排序、回表和估算误差。",lecture:["EXPLAIN 是优化器计划，ANALYZE 才含实际执行数据","type/key/rows/filtered/Extra 要结合数据分布解释","复合索引、覆盖、分页方式和返回列共同决定成本"],resources:[{name:"MySQL 8.4 EXPLAIN",url:"https://dev.mysql.com/doc/refman/8.4/en/explain.html",scope:"EXPLAIN Output、EXPLAIN ANALYZE；只掌握 type/key/rows/filtered/Extra"}],tasks:["3h｜构造未命中、低选择性、filesort、深分页四类查询","5h｜保存 SQL→计划→假设→修改→ANALYZE 结果","2h｜给 ShortLink 实现游标分页"],questions:["用了索引为什么仍可能慢？","rows 估算不准说明什么？","深分页为什么慢？"],gate:"四案例均有前后证据；结果一致；能解释而非只读字段。",repair:"一次只改一个变量。",optional:"只在估算异常时查看 histogram/optimizer trace。"},
    {title:"事务、MVCC、锁与死锁",stage:"专项学习 3/7",hours:"10–12h",outcome:"为并发写入选择正确事务边界，并从索引路径解释锁范围。",lecture:["一致性读与锁定读使用不同机制","RR/RC 的快照时机不同；隔离级别不是越高越好","record/gap/next-key 锁依赖索引；死锁要求应用重试"],resources:[{name:"MySQL Transaction Model",url:"https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-model.html",scope:"Isolation Levels、Consistent Reads、Locking Reads"},{name:"MySQL InnoDB Locking",url:"https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html",scope:"Record、Gap、Next-Key、Deadlocks"}],tasks:["3h｜双会话复现 RC/RR、普通读/FOR UPDATE","4h｜复现相反更新顺序死锁并修复","3h｜ShortLink 创建接口加幂等键和唯一约束"],questions:["快照读何时创建 Read View？","唯一索引等值查询锁多大范围？","为什么仍需处理 deadlock？"],gate:"实验可重复；能从执行索引解释锁；重复创建只有一条。",repair:"先用两行数据和两个事务，不在复杂业务里猜锁。",optional:"查看死锁日志。"},
    {title:"Redis 数据结构、过期与容量治理",stage:"专项学习 4/7",hours:"10–12h",outcome:"按访问模式选结构，并为每个 key 设计生命周期和上限。",lecture:["String/Hash/Set/ZSet/Stream 对应不同访问模式","TTL 是生命周期，不是缓存一致性方案","热 key、大 key、无界集合和高基数 key 是生产风险"],resources:[{name:"Redis Data Types",url:"https://redis.io/docs/latest/develop/data-types/",scope:"String、Hash、Set、Sorted Set、Stream 概览"},{name:"小林《图解 Redis》",url:"https://www.xiaolincoding.com/redis/",scope:"数据结构、过期删除、内存淘汰"}],tasks:["3h｜为五类场景做结构决策表","5h｜给 ShortLink 加缓存和访问计数，定义 TTL/容量","2h｜造大 key/热 key 并设计拆分"],questions:["ZSet 延迟队列不保证什么？","TTL 抖动解决什么？","Hash 一定更省内存吗？"],gate:"每个 key 有命名、TTL、最大规模和失败回源。",repair:"先写访问操作，再选结构。",optional:"用 MEMORY USAGE/SCAN 观察。"},
    {title:"缓存一致性、穿透、击穿与雪崩",stage:"专项学习 5/7",hours:"10–12h",outcome:"承认数据库与缓存的不一致窗口，并设计可恢复失败路径。",lecture:["cache-aside 常先写库再删缓存，但删除会失败","穿透、击穿、雪崩触发条件和治理不同","互斥重建、逻辑过期、随机 TTL 都有成本"],resources:[{name:"小林《图解 Redis》缓存篇",url:"https://www.xiaolincoding.com/redis/",scope:"数据库和缓存一致性；雪崩、击穿、穿透"}],tasks:["3h｜画 ShortLink 读写时序与 8 个失败点","5h｜实现 cache-aside、空值、热点互斥和删除重试","2h｜并发压测热点短码"],questions:["延迟双删解决不了什么？","逻辑过期为何允许旧值？","删除失败如何补偿？"],gate:"失败矩阵含检测/影响/恢复；热点回源有上限。",repair:"先实现正确无缓存版本。",optional:"仅在可估误判率时加布隆过滤器。"},
    {title:"Redis 持久化、复制、高可用与分布式锁",stage:"专项学习 6/7",hours:"10–12h",outcome:"从 RPO/RTO、故障窗口和正确性选择方案。",lecture:["RDB/AOF 权衡写放大、恢复速度和数据窗口","异步复制意味着切换可能丢最新写","锁需唯一 token、续期、超时和 fencing；不是业务事务"],resources:[{name:"Redis Persistence",url:"https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",scope:"RDB、AOF、组合、Backup"},{name:"Redis Distributed Locks",url:"https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/",scope:"Safety/Liveness、single instance、Redlock 限制"}],tasks:["3h｜实验 RDB/AOF 重启与数据窗口","4h｜实现 token 校验 acquire/release/renew Lua","3h｜复现锁过期旧持有者写入，用 fencing 修复"],questions:["切换为何可能丢锁？","续期失败怎么办？","谁验证 fencing token？"],gate:"并发测试通过；能说明锁不能保证什么；持久化选择有指标。",repair:"不懂 fencing 时不把锁用于正确性。",optional:"了解 Sentinel/Cluster 拓扑。"},
    {title:"Kafka、交付语义、幂等消费与 Outbox",stage:"专项学习 7/7",hours:"10–12h",outcome:"把重复、乱序、积压和双写失败当正常条件。",lecture:["partition 是顺序和并行边界；group 分配分区","副作用后提交前崩溃会导致 at-least-once 重放","outbox 将业务写与待发布事件放进同一事务"],resources:[{name:"Kafka Documentation",url:"https://kafka.apache.org/documentation/",scope:"Topics、Consumers、Delivery Semantics"},{name:"AWS Transactional Outbox",url:"https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html",scope:"Intent、Issues、Implementation"}],tasks:["3h｜推演分区/消费者/重平衡/offset","4h｜实现消费者并在提交前故意崩溃","3h｜用幂等键/outbox 修复，加死信和积压指标"],questions:["Kafka EOS 为何不是全局 EOS？","加 partition 代价？","relay 重复发布怎么办？"],gate:"崩溃测试不重复计数；事件可恢复；积压可观测。",repair:"先保证幂等，再谈事务消息。",optional:"比较轮询 outbox 与 CDC。"},
    {title:"ShortLink 项目答辩与数据专项模拟面试",stage:"专项验收",hours:"8–10h",outcome:"交付第一个项目，通过 MySQL/Redis/Kafka 深挖。",lecture:["项目表达按需求→容量→数据→缓存→事件→故障→证据","个人项目诚实标注，不冒充公司生产经历","选型必须回答替代方案"],resources:[{name:"第 9–15 周与 ShortLink 代码",url:"",scope:"不新增资料；闭卷复习 21 道周题"}],tasks:["3h｜完成生成/跳转/管理/统计和一键启动","2h｜压测并记录吞吐、p95、命中率、DB QPS","2h｜60 分钟模拟：MySQL/Redis/Kafka+项目","1h｜修一个答辩失败点"],questions:["短码如何生成和处理冲突？","缓存/DB 故障如何降级？","统计如何不重不漏？"],gate:"测试/race/压测可复现；周题≥75%；能讲三个失败案例。",repair:"只补最差模块，功能不扩张。",optional:"Docker Compose 一键运行。"},
    {title:"网络全链路：DNS、TCP、TLS 与 HTTP",stage:"专项学习 1/7",hours:"10–12h",outcome:"从 URL 解释到 Go handler，并定位每层超时。",lecture:["DNS/IP/TCP/TLS/HTTP 各解决不同问题","连接、请求、响应、空闲有不同超时","HTTP/2 多路复用不消除应用级队头阻塞"],resources:[{name:"小林《图解网络》",url:"https://www.xiaolincoding.com/network/",scope:"2.1、2.2、3.1、4.1；4.2 只看重传/拥塞"}],tasks:["3h｜画客户端→LB→Go→DB 协议与超时图","4h｜用 curl -v/抓包验证 DNS、TLS、keep-alive","3h｜配置 Go Server/Transport 超时并复现慢客户端"],questions:["TIME_WAIT 在谁？","连接超时与请求超时区别？","幂等如何影响重试？"],gate:"能定位 502/504/reset；服务无默认零超时。",repair:"只追一条真实请求，不背字段大全。",optional:"比较 HTTP/1.1 与 HTTP/2。"},
    {title:"Linux/OS：进程线程、虚拟内存、I/O 与 epoll",stage:"专项学习 2/7",hours:"10–12h",outcome:"把 OS 机制映射到 Go 服务 CPU、内存和 I/O 症状。",lecture:["goroutine 由 runtime 调度到 OS thread","虚拟内存、页缓存、缺页影响观测","epoll 通知 readiness；零拷贝减少搬运"],resources:[{name:"小林《图解系统》",url:"https://www.xiaolincoding.com/os/",scope:"4.1、5.1、5.3、5.4、9.1、9.2"}],tasks:["3h｜画 goroutine→M→P→thread","4h｜实验 CPU-bound、内存增长、阻塞 I/O","3h｜定位一次 fd 或 goroutine 泄漏"],questions:["并发与并行区别？","epoll 可读后 read 一定不阻塞？","页缓存影响？"],gate:"能用证据区分 CPU/内存/I/O 瓶颈。",repair:"不读内核源码，先对应现象与指标。",optional:"观察 sendfile。"},
    {title:"HTTP/RPC、gRPC、Deadline 与错误契约",stage:"专项学习 3/7",hours:"10–12h",outcome:"设计跨服务契约并传播超时、取消和错误。",lecture:["HTTP 与 RPC 是契约选择，不是性能标签","deadline 从入口传播，下游预算小于总预算","业务/可重试/内部错误需稳定映射"],resources:[{name:"gRPC Go Basics",url:"https://grpc.io/docs/languages/go/basics/",scope:"service、生成、server/client、unary"},{name:"gRPC Deadlines",url:"https://grpc.io/docs/guides/deadlines/",scope:"deadline、propagation、取消"}],tasks:["3h｜设计 REST 与 gRPC 两份契约","5h｜实现 unary、deadline、status code 和集成测试","2h｜注入慢下游验证取消"],questions:["为何每次 RPC 要 deadline？","proto 字段号为何不能复用？","哪些错误可重试？"],gate:"无 context 断链；错误有契约测试；超时后停止。",repair:"只做 unary，不做流式。",optional:"读 health checking。"},
    {title:"微服务边界、发现、配置、网关与演进",stage:"专项学习 4/7",hours:"10–12h",outcome:"知道何时拆、如何拆，以及增加哪些故障。",lecture:["边界来自业务能力和变更边界","网关负责跨切面，不吞业务","发现、配置、灰度、契约演进是拆分成本"],resources:[{name:"Martin Fowler：Microservices",url:"https://martinfowler.com/articles/microservices.html",scope:"Business capabilities、Decentralized data、Failure design"}],tasks:["3h｜画 ShortLink 拆分候选与收益成本","4h｜只拆访问统计服务并设计回滚","3h｜列发现/配置/灰度/依赖失败清单"],questions:["何时单体更合适？","分库后事务怎样？","网关与聚合层区别？"],gate:"拆分有量化理由且可回滚；不共享数据库。",repair:"无独立变更价值就保留模块化单体。",optional:"了解 Kratos/Kitex，不换框架。"},
    {title:"分布式正确性：故障模型、一致性、租约与幂等",stage:"专项学习 5/7",hours:"10–12h",outcome:"在超时、重复、乱序、分区和崩溃下说明保证。",lecture:["超时不代表操作没执行","线性一致性、事务隔离、最终一致回答不同问题","租约会过期，旧持有者需 fencing；幂等需业务 ID"],resources:[{name:"MIT 6.5840",url:"https://pdos.csail.mit.edu/6.824/",scope:"只看导论及 fault tolerance/replication/consistency，不做 Lab"},{name:"Jepsen Consistency",url:"https://jepsen.io/consistency",scope:"linearizable、serializable、snapshot isolation 图"}],tasks:["3h｜推演 8 个 RPC 超时结果","4h｜实现 idempotency key、version/fencing 测试","3h｜写系统一致性保证声明"],questions:["超时后为何不能盲目回滚？","serializable 与 linearizable 区别？","幂等键由谁生成？"],gate:"声明含前提和不保证项；重复/乱序测试通过。",repair:"只用单对象状态机推演。",optional:"不做 Raft Lab。"},
    {title:"稳定性：超时、重试、限流、熔断与过载保护",stage:"专项学习 6/7",hours:"10–12h",outcome:"建立端到端预算，故障时不放大流量。",lecture:["超时、有限重试、退避、抖动整体设计","限流保护容量，熔断保护失败依赖，降级保核心","队列不是无限缓冲，必须背压或拒绝"],resources:[{name:"AWS Retries and Jitter",url:"https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",scope:"Timeouts、Retries/backoff、Jitter"},{name:"AWS Load Shedding",url:"https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/",scope:"Overload、load shedding、testing"}],tasks:["3h｜为三层调用分配预算","4h｜实现有限重试+full jitter+队列上限","3h｜比较无限重试/有限重试/拒绝"],questions:["重试为何放大？","令牌桶和漏桶区别？","熔断何时有害？"],gate:"超载时内存/goroutine 有界；只重试幂等错误。",repair:"先超时和上限，再熔断。",optional:"加入重试预算指标。"},
    {title:"可观测性与线上问题排查",stage:"专项学习 7/7",hours:"10–12h",outcome:"用 metric/log/trace/profile 在 15 分钟缩小范围。",lecture:["黄金信号：流量、错误、延迟、饱和度","四种信号回答不同问题","高基数和敏感日志是风险"],resources:[{name:"OpenTelemetry Go",url:"https://opentelemetry.io/docs/languages/go/",scope:"Getting Started、Instrumentation、Resources"},{name:"Prometheus Instrumentation",url:"https://prometheus.io/docs/practices/instrumentation/",scope:"Online serving、labels、saturation"}],tasks:["3h｜定义 ShortLink SLI/SLO/告警","4h｜给 HTTP→DB→Kafka 加关联观测","3h｜注入慢 DB、积压、缓存穿透并定位"],questions:["p99 升均值不变说明？","sampling 漏什么？","哪些标签不能放 user_id？"],gate:"三个故障均可从告警定位到证据；无高基数/秘密。",repair:"先统一 trace/request id。",optional:"写 5 条 Runbook。"},
    {title:"系统设计方法复盘与一次模拟面试",stage:"专项验收",hours:"7–9h",outcome:"给六类常见题各做一张快速骨架，只选其中一题完整设计并接受追问；不是一周做完六套完整方案。",lecture:["固定答题顺序：需求边界→容量估算→API/数据→核心流程→瓶颈与故障→观测与演进","六题骨架只找核心矛盾：短链、秒杀、推送、订单、计数、扫码登录","完整设计只做抽中的一题，并说明取舍、失败路径和演进顺序"],resources:[{name:"System Design Primer 中文",url:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md",scope:"只看 5 处：如何处理一个系统设计的面试题、预估计算量、缓存、异步、设计 Pastebin.com（或者 Bit.ly）；不通读仓库，也不用逐条核实全文"}],tasks:["2h｜六题各做一张 20 分钟骨架","1.5h｜随机抽一题：60 分钟完整设计 + 30 分钟自评","1.5h｜围绕同一题模拟追问并按表评分","2h｜只修最低分的一题，再回答一个变式"],questions:["如何用日活和访问频率估算 QPS、存储与带宽？","秒杀与短链各自最先要解决的核心矛盾是什么？","订单状态机如何防止重复、乱序和非法跳转？"],gate:"六题骨架齐全；一题能在 60 分钟内主动推进；模拟追问评分≥80%；未通过只补最低分项。",repair:"先修需求边界和容量估算；不要靠堆中间件掩盖不会取舍。",optional:"录屏回看。"},
    {title:"ReliableTask：需求、容量、状态机与不变量",stage:"项目迭代 1/7",hours:"10–12h",outcome:"定义可靠异步任务平台的业务保证和边界。",lecture:["状态机先于代码；每次迁移有前置条件","至少一次执行意味着副作用必须幂等","容量估算决定扫描、分片和保留策略"],resources:[{name:"小林项目方向：异步任务+定时微服务",url:"https://www.xiaolincoding.com/",scope:"只参考公开项目目标；实现与文档全部独立完成"}],tasks:["3h｜写需求、非目标、SLA、容量估算","4h｜定义 pending/running/succeeded/failed/cancelled 状态机","3h｜写状态迁移表与 20 个性质测试"],questions:["任务成功与结果送达是一回事吗？","取消 running 如何定义？","状态机如何防越权迁移？"],gate:"状态无歧义；20 个迁移测试通过；非目标明确。",repair:"只保留单任务类型，先闭环。",optional:"画事件风暴图。"},
    {title:"ReliableTask：存储、事务与请求幂等",stage:"项目迭代 2/7",hours:"10–12h",outcome:"实现创建、查询、取消和并发更新的正确事务边界。",lecture:["task/attempt/outbox 分离当前状态、执行记录和事件","唯一幂等键解决重复请求，不等于执行幂等","条件更新/version 防止并发覆盖"],resources:[{name:"Go Executing Transactions",url:"https://go.dev/doc/database/execute-transactions",scope:"BeginTx、Commit/Rollback、best practices"}],tasks:["3h｜设计表/索引/清理策略","5h｜实现 Create/Get/Cancel 与 idempotency key","2h｜写重复创建、并发取消、事务回滚测试"],questions:["为什么不能事务内外混用 db？","幂等记录保留多久？","乐观锁冲突怎么处理？"],gate:"并发测试只有一个合法结果；事务失败无半成品。",repair:"先不用 ORM 魔法，明确 SQL 条件。",optional:"加入审计事件。"},
    {title:"ReliableTask：调度、分片、租约与 Fencing",stage:"项目迭代 3/7",hours:"10–12h",outcome:"多调度器安全领取，进程崩溃后可恢复。",lecture:["到期扫描需索引、批量和稳定分页","租约允许重领但会产生旧持有者","fencing/version 让过期持有者无法提交"],resources:[{name:"MySQL Locking Reads",url:"https://dev.mysql.com/doc/refman/8.4/en/innodb-locking-reads.html",scope:"FOR UPDATE、NOWAIT、SKIP LOCKED"}],tasks:["3h｜设计 next_run_at/lease_until/version 索引","5h｜实现两个 scheduler 并发领取与续租","2h｜暂停旧 worker 至租约过期，验证 fencing"],questions:["SKIP LOCKED 牺牲什么？","租约多长合适？","时钟漂移如何影响？"],gate:"无同时有效双租约；崩溃可恢复；旧 worker 提交失败。",repair:"先单分片，再多实例。",optional:"用假时钟消除 sleep 测试。"},
    {title:"ReliableTask：Worker、取消、重试与死信",stage:"项目迭代 4/7",hours:"10–12h",outcome:"执行生命周期有界，失败分类决定是否重试。",lecture:["业务失败、瞬时依赖失败、永久失败要分类","重试受总预算、次数、退避和抖动约束","取消是协作信号；不可中断副作用需补偿"],resources:[{name:"AWS Retries and Jitter",url:"https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",scope:"复习 timeout/retry/backoff/jitter 并映射到任务"}],tasks:["3h｜定义 error taxonomy/retry policy","5h｜实现 worker pool、context、panic recovery、DLQ","2h｜测试超时/取消/panic/永久失败/瞬时失败"],questions:["谁决定重试？","panic 后任务状态？","取消时外部副作用怎么办？"],gate:"所有失败进入确定状态；goroutine 有界；DLQ 可重放。",repair:"先同步单 worker，再并发。",optional:"每任务类型独立并发上限。"},
    {title:"ReliableTask：Outbox、事件与不重不漏边界",stage:"项目迭代 5/7",hours:"10–12h",outcome:"任务状态与通知事件原子记录，下游重复安全。",lecture:["本地事务保证 task 与 outbox 一致","relay 至少一次发布，下游靠幂等去重","exactly-once 是端到端业务性质，不是中间件开关"],resources:[{name:"AWS Transactional Outbox",url:"https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html",scope:"复习 implementation/issues"}],tasks:["3h｜定义 event id/schema/version","4h｜实现 relay、重试、清理和 lag 指标","3h｜在提交前后/发布前后注入崩溃"],questions:["outbox 何时删除？","事件乱序怎么处理？","消费者幂等存哪里？"],gate:"四个崩溃点最终一致；重复不产生副作用；lag 可观测。",repair:"先数据库轮询，不上 CDC。",optional:"做 schema 兼容测试。"},
    {title:"ReliableTask：背压、限流、降级与高可用",stage:"项目迭代 6/7",hours:"10–12h",outcome:"下游变慢时系统有界并优先保核心任务。",lecture:["积压是状态，不应藏在内存无界队列","按任务类型/租户隔离避免噪声邻居","拒绝、延迟、降级需返回可操作信号"],resources:[{name:"AWS Load Shedding",url:"https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/",scope:"复习 overload/load shedding/testing"}],tasks:["3h｜定义容量和优先级策略","4h｜实现队列/并发/租户限额","3h｜下游慢 10 倍并压测，观察资源上限"],questions:["何时拒绝优于排队？","公平与吞吐冲突？","重启如何处理积压？"],gate:"超载下内存/goroutine 有界；高优任务仍推进；拒绝可观测。",repair:"先全局上限，再租户隔离。",optional:"实现简单 weighted fair queue。"},
    {title:"ReliableTask：观测、故障注入、性能与安全",stage:"项目迭代 7/7",hours:"10–12h",outcome:"能定位卡在领取、执行、重试还是通知，并提供安全证据。",lecture:["backlog age 比队列长度更能反映延迟","trace 串联 create→schedule→execute→event","任务 payload、日志、回调地址均是安全边界","交付基础只要求能容器化、配置健康检查并让质量门禁进入 CI；K8s 先理解核心对象"],resources:[{name:"OpenTelemetry Go Instrumentation",url:"https://opentelemetry.io/docs/languages/go/instrumentation/",scope:"spans、attributes、events、status、propagation"},{name:"govulncheck",url:"https://go.dev/doc/tutorial/govulncheck",scope:"完整教程"}],tasks:["3h｜补 SLI/trace/结构化日志","4h｜注入 DB 慢、进程崩溃、回调 500、积压","3h｜建立交付门禁：压测+pprof+race+fuzz+govulncheck；制作最小 Docker 镜像并本地运行"],questions:["任务 trace 如何跨异步边界？","最老积压为何关键？","payload 如何脱敏？","readiness 与 liveness 分别防什么问题？"],gate:"四故障 15 分钟内定位；质量门禁全过；有压测基线；镜像可运行且健康检查有效。",repair:"先可观测再优化。",optional:"用 1h 认识 Deployment、Service、ConfigMap、Secret 和流水线阶段；不搭 K8s 集群、不学 Helm。"},
    {title:"ReliableTask 项目答辩与双月复盘",stage:"项目验收",hours:"8–10h",outcome:"完成可运行、可解释、经故障验证的后端项目。",lecture:["答辩以保证和证据为中心，不念技术栈","每个亮点讲背景/方案/替代/失败/数据","公开简历只写个人项目真实贡献"],resources:[{name:"第 25–31 周项目证据",url:"",scope:"不新增资料；整理设计、测试、压测和故障报告"}],tasks:["3h｜一键运行和 12 分钟演示","2h｜写 2 页设计稿+已知限制","2h｜60 分钟项目模拟面试","1h｜修最高风险问题"],questions:["系统承诺什么交付语义？","租约和 fencing 如何配合？","事故时先看什么？"],gate:"陌生人 15 分钟跑起；答辩追问≥80%；证据可复现。",repair:"不增加功能，只修保证断点。",optional:"发布 GitHub 前清理秘密和历史。"},
    {title:"LLM 应用基础：Token、Context、采样与结构化输出",stage:"AI 专项 1/7",hours:"10–12h",outcome:"理解应用侧真正需要的模型边界，可靠调用模型。",lecture:["模型预测 token，不是数据库检索事实","context 有长度/成本/注意力限制","temperature/top-p 影响采样；结构化输出仍需校验"],resources:[{name:"小林《图解 Agent》",url:"https://xiaolinnote.com/agent/",scope:"大模型基础、Prompt、Function Calling 入门"},{name:"Eino Quick Start · Chapter 1",url:"https://www.cloudwego.io/docs/eino/quick_start/chapter_01_chatmodel_and_message/",scope:"只看 ChatModel、Message、Generate/Stream 与最小运行示例；完成一次 Go 单轮模型调用后停止"}],tasks:["3h｜做 token/context/temperature 8 个对照实验","5h｜Go 封装模型客户端：超时、重试、结构化 JSON、usage/cost","2h｜写 malformed/timeout/rate-limit/拒答测试"],questions:["temperature 为 0 保证确定吗？","context 越长越好吗？","结构化输出为何仍验证？"],gate:"所有失败可识别；无字符串硬切 JSON；成本与延迟可记录。",repair:"先使用 mock model，稳定契约后接真实 API。",optional:"只概览 attention，不推导数学。"},
    {title:"Prompt 与 Context Engineering：可测试的输入契约",stage:"AI 专项 2/7",hours:"10–12h",outcome:"把 prompt 当版本化程序而不是玄学文本。",lecture:["指令、数据、示例、输出约束分层","上下文选择往往比花哨 prompt 更重要","prompt injection 不能仅靠另一段 prompt 防御"],resources:[{name:"Anthropic Prompt Engineering Overview",url:"https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",scope:"success criteria、templates、examples、structured data；概念可迁移到任意模型"}],tasks:["3h｜定义 20 条输入/期望输出小测试集","4h｜比较 zero/few-shot、分隔、schema、拒答策略","3h｜建立 prompt version 和回归脚本"],questions:["何时 few-shot 有效？","系统提示能否覆盖工具权限？","如何判断改进不是偶然？"],gate:"20 条可重复评测；改动有前后数据；prompt 与业务数据分离。",repair:"先明确成功标准，不继续调词。",optional:"比较两模型迁移性。"},
    {title:"Embedding、Chunk、向量索引与元数据",stage:"AI 专项 3/7",hours:"10–12h",outcome:"建立检索数据层，理解切片和向量相似度的影响。",lecture:["embedding 将语义映射到向量，相似不等于事实正确","chunk 决定召回粒度和上下文完整性","元数据过滤、权限和版本必须早于生成"],resources:[{name:"Milvus Embedding Overview",url:"https://milvus.io/docs/embeddings.md",scope:"embedding、dense/sparse、similarity 概念；跳过部署"},{name:"Eino Components",url:"https://www.cloudwego.io/docs/eino/core_modules/components/",scope:"DocumentLoader/Transformer/Embedding/Indexer 接口"}],tasks:["3h｜准备 30 篇 Go/值班文档与 30 个问题","4h｜比较 3 种 chunk/overlap，保存文档 ID/权限/版本","3h｜计算 Recall@5 并分析失败"],questions:["chunk 太大/太小代价？","cosine 高就一定相关？","权限过滤在哪层？"],gate:"数据集有标注；三策略可比较；引用可追到原文版本。",repair:"先用内存向量，不部署集群。",optional:"比较两个 embedding 模型。"},
    {title:"检索工程：BM25、Dense、Hybrid、RRF 与 Rerank",stage:"AI 专项 4/7",hours:"10–12h",outcome:"针对关键词、语义和精排建立可量化检索链。",lecture:["BM25 擅长精确词，dense 擅长语义近似","RRF 融合排名而非原始分数","reranker 提精度但增加延迟与成本"],resources:[{name:"Stanford IR Book",url:"https://nlp.stanford.edu/IR-book/",scope:"第 6 章 scoring；第 8 章 evaluation，只读 BM25/precision/recall/MRR"}],tasks:["3h｜实现/接入 BM25 与 dense 两条检索","4h｜做 RRF 融合与 top-k/rerank 实验","3h｜按查询类型分析 Recall@k/MRR/延迟"],questions:["为何不能直接相加 BM25 与 cosine？","rerank top-n 取多大？","无相关文档如何处理？"],gate:"hybrid 是否更好由数据决定；延迟预算明确；无命中可识别。",repair:"先把单路基线测准。",optional:"仅在失败集中再加 query rewrite。"},
    {title:"Naive RAG：加载、检索、生成、引用与拒答",stage:"AI 专项 5/7",hours:"10–12h",outcome:"用 Go 完成最小 RAG，答案可引用、可拒答、可追踪。",lecture:["先隔离检索质量，再评生成质量","上下文需包含来源标识和预算","拒答是能力，不是失败"],resources:[{name:"Eino Cookbook",url:"https://www.cloudwego.io/docs/eino/cookbook/",scope:"quickstart/eino_assistant 与 RAG 相关最小示例；不复制整套应用"}],tasks:["3h｜设计 pipeline 和 trace 字段","5h｜实现 loader→chunk→index→retrieve→prompt→answer","2h｜测试有答案/无答案/冲突文档/过期文档"],questions:["检索正确但回答错在哪里查？","引用如何防模型伪造？","阈值如何定？"],gate:"30 题可评；每答有来源；无证据明确拒答；全链路可追踪。",repair:"去掉 agent，只保留固定 pipeline。",optional:"缓存 embedding 和检索结果。"},
    {title:"Advanced RAG：改写、路由、降级与可插拔策略",stage:"AI 专项 6/7",hours:"10–12h",outcome:"只对已证实失败增加策略，并保持可回退。",lecture:["query rewrite 处理表达差，不修复坏语料","路由按数据源/意图选择 pipeline","高级策略必须有触发条件、成本和 fallback"],resources:[{name:"Eino Retriever/Graph 文档",url:"https://www.cloudwego.io/docs/eino/core_modules/components/retriever_guide/",scope:"Retriever 接口与 compose；策略以自己的评测驱动"}],tasks:["3h｜将失败分为切片/召回/排序/上下文/生成","4h｜只实现占比最高的两项优化","3h｜增加 timeout、无结果、模型失败、索引旧版本降级"],questions:["Self-RAG 何时过度？","路由错误如何发现？","优化为何必须可关闭？"],gate:"至少一个核心指标改善且延迟/成本在预算；可一键回基线。",repair:"无提升就删除优化。",optional:"Agentic RAG 只做对照实验。"},
    {title:"RAG 评测：HitRate、MRR、Faithfulness 与归因",stage:"AI 专项 7/7",hours:"10–12h",outcome:"建立检索、生成、端到端三层评测和失败归因。",lecture:["检索指标与答案指标分层，避免互相掩盖","LLM-as-judge 有偏差，需人工锚点和规则校验","评测集要覆盖正常、边界、对抗和时间变化"],resources:[{name:"Stanford IR Evaluation",url:"https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-in-information-retrieval-1.html",scope:"test collection、precision/recall、F、MRR/MAP"}],tasks:["3h｜扩展到 50 题并标注证据","4h｜实现 Recall@k/MRR、引用正确、拒答和 faithfulness 评分","3h｜生成失败归因报告并只修最高一类"],questions:["LLM judge 如何校准？","MRR 高但回答差说明？","评测集污染怎么办？"],gate:"评测一键运行；指标定义可解释；有人工抽检和置信区间意识。",repair:"先做好 20 条高质量标注，不追数量。",optional:"做一次 A/B 复测。"},
    {title:"DeepRAG 项目答辩与双月复盘",stage:"项目验收",hours:"8–10h",outcome:"以 before/after 数据证明 RAG 优化，而非堆术语。",lecture:["故事线：基线→失败→假设→改动→指标→代价","保留未改善实验比只展示成功更可信","Go 后端价值体现在服务化、稳定性、观测和成本"],resources:[{name:"第 33–39 周代码与评测",url:"",scope:"不新增资料；整理 50 题、指标和失败案例"}],tasks:["3h｜12 分钟演示与评测复跑","2h｜写架构图/数据流/威胁边界","2h｜60 分钟 RAG 项目模拟面试","1h｜修最高风险"],questions:["为何选该 chunk/hybrid/rerank？","最差查询类型？","上线后如何持续评测？"],gate:"结果可复现；引用和拒答可靠；追问≥80%；明确已知限制。",repair:"不引入新策略，只修证据断点。",optional:"发布脱敏样例数据。"},
    {title:"Tool Calling：Schema、校验、错误与权限",stage:"Agent 专项 1/7",hours:"10–12h",outcome:"把工具当不可信边界，建立稳定调用契约。",lecture:["描述影响选择，但代码强制权限","输入/超时/大小/输出均校验","错误可恢复且不泄密"],resources:[{name:"Eino ToolsNode",url:"https://www.cloudwego.io/docs/eino/core_modules/components/tools_node_guide/",scope:"ToolsNode、create a tool、错误处理"}],tasks:["3h｜设计查告警/日志/发布三个只读 schema","5h｜实现 mock 工具、超时、并发/结果上限、审计","2h｜测试错参/超大/超时/注入/无权限"],questions:["描述能替代权限吗？","工具错误给模型多少？","如何保证只读？"],gate:"五类失败结构化；权限由代码强制；无秘密。",repair:"先固定工具，不做 agent loop。",optional:"加 request id。"},
    {title:"Workflow、ReAct 与 Plan-Execute",stage:"Agent 专项 2/7",hours:"10–12h",outcome:"优先确定性工作流，只在必要决策点引入 Agent。",lecture:["workflow 路径预定义，agent 动态决定","ReAct 不保证正确","循环需步数/预算/终止/fallback"],resources:[{name:"Anthropic Building Effective Agents",url:"https://www.anthropic.com/engineering/building-effective-agents",scope:"Workflows、Agents、When to use"},{name:"Eino ADK",url:"https://www.cloudwego.io/docs/eino/core_modules/eino_adk/agent_quickstart/",scope:"ChatModelAgent、Workflow、Runner、TurnLoop"}],tasks:["3h｜画诊断 workflow/agent 两版","4h｜先实现 workflow","3h｜只把原因选择改为有限 ReAct，比较指标"],questions:["何时 agent 不如 workflow？","如何发现循环？","Plan-Execute 适合什么？"],gate:"无收益允许删除 agent；循环可停止、可重放。",repair:"退回 workflow。",optional:"多 Agent 只读概念。"},
    {title:"MCP：架构与 Go Server/Client",stage:"Agent 专项 3/7",hours:"10–12h",outcome:"理解 host/client/server 信任边界并实现 Go MCP。",lecture:["MCP 标准化交换，不自动提供安全","capability/lifecycle 先于调用","transport 改变部署和风险"],resources:[{name:"MCP Specification",url:"https://modelcontextprotocol.io/specification/latest",scope:"Architecture、Lifecycle、Tools、Resources、Security"},{name:"Official MCP Go SDK",url:"https://go.sdk.modelcontextprotocol.io/quick_start/",scope:"server/client quick start、examples"}],tasks:["3h｜画信任和数据边界","5h｜实现三个只读工具的 server/client","2h｜测 lifecycle、取消、超时、schema"],questions:["MCP 与 function calling 区别？","谁授予权限？","transport 如何改风险？"],gate:"两端独立测试；取消传播；输出受控。",repair:"只用 stdio 和一个工具起步。",optional:"远程授权后学。"},
    {title:"Memory 与 Context：会话、摘要、Checkpoint",stage:"Agent 专项 4/7",hours:"10–12h",outcome:"控制上下文增长，区分会话、知识与长期记忆。",lecture:["三类信息用不同存储","摘要会丢信息，需可追溯","checkpoint 支持恢复，不等于全记忆"],resources:[{name:"Eino ADK TurnLoop",url:"https://www.cloudwego.io/docs/eino/core_modules/eino_adk/agent_quickstart/",scope:"interrupt/resume、checkpoint 入口"}],tasks:["3h｜定义 memory schema/TTL/权限","4h｜实现预算、裁剪、摘要、checkpoint","3h｜测长会话丢失/污染/恢复"],questions:["摘要如何验证？","长期记忆何时删？","checkpoint 存什么？"],gate:"上下文硬预算；恢复可解释；数据可删除。",repair:"先保留结构化状态。",optional:"比较滑窗与摘要。"},
    {title:"Agent 安全：Injection、权限、确认与沙箱",stage:"Agent 专项 5/7",hours:"10–12h",outcome:"把模型与外部内容视为不可信，建立纵深防御。",lecture:["injection 是数据影响控制流","最小权限/allowlist/确认由系统执行","工具输出、秘密、日志均是攻击面"],resources:[{name:"OWASP LLM Top 10",url:"https://genai.owasp.org/llm-top-10/",scope:"Prompt Injection、Output、Agency、Disclosure"},{name:"MCP Security",url:"https://modelcontextprotocol.io/specification/latest/basic/security_best_practices",scope:"confused deputy、token、session、local server"}],tasks:["3h｜威胁模型","4h｜实现 allowlist/只读凭据/预算/确认","3h｜20 条注入/越权/泄漏测试"],questions:["系统提示为何非安全边界？","何时人工确认？","工具输出为何不可信？"],gate:"20 条攻击有预期；越权代码拒绝；不泄密。",repair:"先去掉写工具。",optional:"secret 扫描。"},
    {title:"Agent 观测与评测：轨迹、成本与回归",stage:"Agent 专项 6/7",hours:"10–12h",outcome:"定位失败在模型、工具、检索、状态或停止策略。",lecture:["最终答案不足以定位轨迹失败","指标含成功/步骤/工具/引用/延迟/成本/安全","judge 需规则和人工锚点"],resources:[{name:"OpenTelemetry GenAI SemConv（官方独立仓库）",url:"https://github.com/open-telemetry/semantic-conventions-genai",scope:"README 与 docs：只核对 spans、events、metrics 和 MCP 相关字段；该规范仍在演进，项目中固定版本"},{name:"HF Agents Course",url:"https://huggingface.co/learn/agents-course/unit0/introduction",scope:"只参考 observability/evaluation 结构"}],tasks:["3h｜定义 30 案例和指标","4h｜记录每步 tool/token/result/stop","3h｜归因并修最高项"],questions:["答案对但轨迹危险怎么办？","judge 漂移怎么发现？","预算放哪层？"],gate:"一键评测；失败可归因；安全不被平均分掩盖。",repair:"先规则再 judge。",optional:"模型版本回归。"},
    {title:"OnCall Agent：只读诊断项目",stage:"Agent 专项 7/7",hours:"10–12h",outcome:"整合 Runbook RAG、MCP 工具和有限工作流。",lecture:["输出为证据/原因/置信度/下一步","先确定性信号再模型归纳","未知和证据冲突显式呈现"],resources:[{name:"第 33–46 周代码",url:"",scope:"不新增框架；组合已验证组件"}],tasks:["3h｜构造 50 个故障案例","5h｜告警→变更→日志→Runbook→结论","2h｜与规则基线比较正确率/步骤/延迟/成本"],questions:["为何工具只读？","证据冲突怎么办？","何时交给人？"],gate:"50 案例可复现；结论有证据；无证据拒答。",repair:"退回 workflow。",optional:"只接测试环境。"},
    {title:"OnCall Agent 攻防、评测与答辩",stage:"项目验收",hours:"8–10h",outcome:"证明项目有效、安全、可观测。",lecture:["价值由诊断质量和恢复时间衡量","攻击测试与正常评测同等重要","多 Agent/微调/部署不是默认必做"],resources:[{name:"Agent/RAG 评测与威胁模型",url:"",scope:"复跑 50 正常+20 攻击"}],tasks:["3h｜复跑案例","2h｜录演示和失败案例","2h｜60 分钟模拟面试","1h｜修最高风险"],questions:["为何这样选 workflow/ReAct？","最危险工具路径？","如何判断改善 MTTR？"],gate:"优于基线或证明 agent 无收益；安全零越权；追问≥80%。",repair:"安全失败先修。",optional:"写多 Agent/微调边界。"},
    {title:"真实工作项目复盘",stage:"年度整合 1/4",hours:"8–10h",outcome:"把一年工作与课程能力连接，找到真实缺口。",lecture:["事实/职责/决策/证据分开","无数据不包装成果","课程项目只标个人项目"],resources:[{name:"脱敏工作记录与全年证据",url:"",scope:"不得复制公司秘密"}],tasks:["3h｜画一个模块全景","3h｜列 5 个决策与替代","2h｜找 3 个缺口"],questions:["真正负责什么？","最难故障？","重做改什么？"],gate:"事实可核验、无夸大、无敏感。",repair:"只做私有抽象图。",optional:"生成表达草稿。"},
    {title:"后端综合闭卷与模拟面试",stage:"年度整合 2/4",hours:"8–10h",outcome:"验证 Go、数据、网络、分布式、设计能否连成体系。",lecture:["不再读资料","回答带边界和证据","按错误分类补课"],resources:[{name:"第 1–32 周题库",url:"",scope:"随机 60 题"}],tasks:["3h｜闭卷分类","2h｜code review+debug","2h｜60 分钟模拟","1h｜补最低域"],questions:["追超时事故","设计任务系统","评审泄漏/事务/缓存代码"],gate:"题库≥80%；无连续三题断层；设计能推进。",repair:"只回错误域。",optional:"确定求职再开算法线。"},
    {title:"AI/Agent 综合闭卷与模拟面试",stage:"年度整合 3/4",hours:"8–10h",outcome:"验证 LLM、RAG、Tool、MCP、安全、评测闭环。",lecture:["区分模型能力和系统保证","优化需指标/成本","自主权需权限/停止"],resources:[{name:"第 33–48 周题库",url:"",scope:"40 题+10 失败轨迹"}],tasks:["3h｜闭卷和归因","2h｜改工具 schema/评测","2h｜60 分钟模拟","1h｜补最低域"],questions:["RAG 如何分层？","MCP 边界？","何时不用 Agent？"],gate:"题库≥80%；轨迹≥8/10；安全无原则错。",repair:"先评测和安全。",optional:"评估一个新趋势。"},
    {title:"年度验收与下一季度计划",stage:"年度整合 4/4",hours:"6–8h",outcome:"用证据结束课程，只选一个下一重点。",lecture:["完成不等于全掌握","计划由证据而非焦虑驱动","稳定期深度优先"],resources:[{name:"全年成绩、代码、评测、错题",url:"",scope:"不新增资料"}],tasks:["2h｜汇总 6 OKR gate/证据","2h｜错题删至最多 30","2h｜只选 Go 性能/分布式/Agent 之一"],questions:["最强证据？","最弱断点？","为何只选一项？"],gate:"四项目可运行；证据可追溯；下一目标可量化。",repair:"未通过项目作为唯一重点。",optional:"确定跳槽日期后生成冲刺版。"}
  ]
};
