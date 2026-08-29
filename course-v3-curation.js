window.COURSE_CURATION_V3={
  "verifiedAt": "2026-08-29",
  "rule": "每周最多两份：先用中文讲解建立直觉，再用官方或一手资料核对结论。",
  "featured": [
    {
      "id": "xiaolin",
      "name": "小林 Coding 图解系列",
      "url": "https://www.xiaolincoding.com/",
      "grade": "B+",
      "type": "中文主线",
      "cost": "免费",
      "lang": "中文",
      "fit": "第一遍建立直觉：网络、操作系统、MySQL、Redis、Agent。",
      "proof": "国内后端面试资料中传播广、图解完整；课程结构直接参考其公开训练营流程。",
      "limit": "适合导读和面试表达；关键机制再用官方文档核对。"
    },
    {
      "id": "liwenzhou",
      "name": "李文周《Go语言学习之路》",
      "url": "https://liwenzhou.com/posts/go/golang-menu/",
      "grade": "B+",
      "type": "中文讲解",
      "cost": "免费",
      "lang": "中文",
      "fit": "Go 语义、并发、Context、测试、性能、数据库、Web、gRPC、Kafka 与可观测性的第一遍讲解。",
      "proof": "作者从 2015 年持续整理 Go 学习笔记；目录最后更新于 2026-04-21，章节完整且有大量可运行示例。",
      "limit": "个人教程负责降低理解门槛，不作为语言规范；运行时、API 和协议结论仍回到官方资料核对。"
    },    {
      "id": "goofficial",
      "name": "Go 官方 Tutorials / Docs",
      "url": "https://go.dev/doc/tutorial/",
      "grade": "A",
      "type": "事实标准",
      "cost": "免费",
      "lang": "英文",
      "fit": "Go 语言、标准库、测试、Fuzz、诊断与安全工具的主资料。",
      "proof": "Go 项目官方维护，版本和 API 结论优先级最高。",
      "limit": "不是一套循序渐进的后端课程，所以只安排精确章节。"
    },
    {
      "id": "go101",
      "name": "Go 101",
      "url": "https://go101.org/article/101.html",
      "grade": "A-",
      "type": "语言深挖",
      "cost": "免费",
      "lang": "中/英文",
      "fit": "补足 slice、interface、method set、并发同步等语义细节。",
      "proof": "2016 年起持续维护，约 500 页、350+ 示例，当前标注 Go 1.25 ready。",
      "limit": "细节很多，不适合通读；与官方规范冲突时以官方为准。"
    },
    {
      "id": "uber",
      "name": "Uber Go Style Guide",
      "url": "https://github.com/uber-go/guide/blob/master/style.md",
      "grade": "A-",
      "type": "工程规范",
      "cost": "免费",
      "lang": "英文/有中文翻译",
      "fit": "错误、接口、全局状态、goroutine 生命周期和测试表。",
      "proof": "Uber Go 团队维护，约 17.6k GitHub stars，面向近两个 Go 小版本。",
      "limit": "是 Uber 工程约定，不是语言规范。"
    },
    {
      "id": "seven",
      "name": "7 Days Golang",
      "url": "https://github.com/geektutu/7days-golang",
      "grade": "B+",
      "type": "动手补充",
      "cost": "免费",
      "lang": "中文",
      "fit": "从零实现 Web、Cache、ORM、RPC，适合看懂框架内部结构。",
      "proof": "约 17k GitHub stars，MIT 许可，中文项目式教程。",
      "limit": "教学型实现，不等同于生产级框架；不作为主项目。"
    },
    {
      "id": "mysql",
      "name": "MySQL 8.4 Reference Manual",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/",
      "grade": "A",
      "type": "数据库标准",
      "cost": "免费",
      "lang": "英文",
      "fit": "索引、EXPLAIN、事务、MVCC、锁和恢复的事实来源。",
      "proof": "Oracle/MySQL 官方 8.4 长期支持版本文档。",
      "limit": "信息密度高，只按周读取指定小节。"
    },
    {
      "id": "redisuni",
      "name": "Redis University",
      "url": "https://redis.io/tutorials/university/",
      "grade": "A",
      "type": "完整课程",
      "cost": "免费",
      "lang": "英文",
      "fit": "数据结构、缓存、持久化、高可用和运维的结构化课程。",
      "proof": "Redis 官方课程，官方明确全部学习路径免费并提供测验。",
      "limit": "需要注册；云产品部分可以跳过。"
    },
    {
      "id": "kafka",
      "name": "Confluent Kafka 101",
      "url": "https://developer.confluent.io/courses/apache-kafka/",
      "grade": "A-",
      "type": "完整课程",
      "cost": "免费",
      "lang": "英文",
      "fit": "Topic、Partition、Producer、Consumer Group、Offset 与交付语义。",
      "proof": "Confluent 由 Kafka 原始创建者创办；Kafka 101 约 16 模块、1 小时 16 分。",
      "limit": "示例偏 Java/Confluent；Go 只迁移概念和协议。"
    },
    {
      "id": "network",
      "name": "小林《图解网络 / 系统》",
      "url": "https://www.xiaolincoding.com/network/",
      "grade": "B+",
      "type": "中文导读",
      "cost": "免费",
      "lang": "中文",
      "fit": "用较低阅读成本串起 TCP、HTTP、I/O、多路复用、进程与内存。",
      "proof": "公开图解系列，适合一年经验工程师补系统基础。",
      "limit": "不要求阅读内核源码；精确行为以协议/RFC/Go 文档为准。"
    },
    {
      "id": "ostep",
      "name": "Operating Systems: Three Easy Pieces",
      "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/",
      "grade": "A-",
      "type": "大学教材",
      "cost": "免费",
      "lang": "英文",
      "fit": "进程、虚拟内存、并发和持久化的系统化补充。",
      "proof": "威斯康星大学作者公开的完整操作系统教材，长期被高校课程采用。",
      "limit": "体量大，只选与你后端排障有关的章节。"
    },
    {
      "id": "mit",
      "name": "MIT 6.5840 Distributed Systems",
      "url": "https://pdos.csail.mit.edu/6.824/",
      "grade": "A",
      "type": "大学课程",
      "cost": "免费",
      "lang": "英文",
      "fit": "故障、复制、一致性、RPC 和分布式系统案例。",
      "proof": "MIT 2026 正式研究生课程，含 lecture、paper、lab 与考试。",
      "limit": "对一年经验偏难，只选导论和核心讲次，不做完整 Raft Lab。"
    },
    {
      "id": "system",
      "name": "System Design Primer",
      "url": "https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md",
      "grade": "A-",
      "type": "面试训练",
      "cost": "免费",
      "lang": "中文",
      "fit": "容量估算、缓存、异步、分片和常见系统设计题。",
      "proof": "约 351k GitHub stars、56k forks，长期维护并有简中版本。",
      "limit": "是知识索引和面试框架，不替代真实系统经验。"
    },
    {
      "id": "sre",
      "name": "Google SRE Books",
      "url": "https://sre.google/books/",
      "grade": "A",
      "type": "生产工程",
      "cost": "免费在线",
      "lang": "英文",
      "fit": "SLI/SLO、监控、告警、事故响应、发布和可靠性工程。",
      "proof": "Google SRE 团队三本正式图书均可在线阅读。",
      "limit": "案例规模很大，只选能映射到当前工作的章节。"
    },
    {
      "id": "aws",
      "name": "Amazon Builders' Library",
      "url": "https://aws.amazon.com/builders-library/",
      "grade": "A",
      "type": "生产工程",
      "cost": "免费",
      "lang": "英文",
      "fit": "超时、重试、退避、抖动、过载保护、隔离和可用性。",
      "proof": "AWS 工程团队公开的生产系统经验。",
      "limit": "不要照搬 AWS 内部数字；学习决策逻辑。"
    },
    {
      "id": "eino",
      "name": "CloudWeGo Eino",
      "url": "https://www.cloudwego.io/docs/eino/",
      "grade": "A-",
      "type": "Go Agent 主线",
      "cost": "免费",
      "lang": "中/英文",
      "fit": "用 Go 实现 LLM、RAG、Tool、Workflow、ADK 与 Agent。",
      "proof": "CloudWeGo/字节系开源项目，约 12.8k GitHub stars，官方持续维护。",
      "limit": "框架仍快速演进；概念同时用厂商无关课程核对。"
    },
    {
      "id": "llmzoom",
      "name": "LLM Zoomcamp",
      "url": "https://github.com/DataTalksClub/llm-zoomcamp",
      "grade": "A-",
      "type": "完整 AI 工程课",
      "cost": "免费；API 约 $1–5",
      "lang": "英文",
      "fit": "RAG、向量检索、混合检索、评测、监控、Agent 与最终项目。",
      "proof": "DataTalksClub 约 94k 社区；仓库约 7.1k stars，2026 仍在更新。",
      "limit": "主要用 Python；只学框架无关方法，再用 Eino/Go 复现。"
    },
    {
      "id": "hfagents",
      "name": "Hugging Face Agents Course",
      "url": "https://huggingface.co/learn/agents-course/unit0/introduction",
      "grade": "A-",
      "type": "完整 Agent 课",
      "cost": "免费",
      "lang": "英文",
      "fit": "Agent 基础、框架、Agentic RAG、评测和最终项目。",
      "proof": "Hugging Face 官方课程，课程与证书流程免费，每单元约 3–4 小时。",
      "limit": "主要用 Python，不作为 Go 实现主线。"
    },
    {
      "id": "anthropic",
      "name": "Anthropic — Building Effective Agents",
      "url": "https://www.anthropic.com/engineering/building-effective-agents",
      "grade": "A-",
      "type": "设计原则",
      "cost": "免费",
      "lang": "英文",
      "fit": "区分 Workflow 与 Agent，学习 routing、parallel、orchestrator、evaluator 模式。",
      "proof": "模型厂商工程团队总结的生产 Agent 模式。",
      "limit": "厂商视角；代码实现回到 Eino 和 MCP。"
    },
    {
      "id": "mcp",
      "name": "Official MCP Go SDK",
      "url": "https://go.sdk.modelcontextprotocol.io/",
      "grade": "A",
      "type": "Go 协议实现",
      "cost": "免费",
      "lang": "英文",
      "fit": "MCP client/server、tools/resources/prompts、transport 与安全边界。",
      "proof": "官方 MCP Go SDK，文档与规范同步。",
      "limit": "先做只读工具；不要直接连接高权限生产系统。"
    },
    {
      "id": "gozero",
      "name": "go-zero / ShortURL Tutorial",
      "url": "https://github.com/zeromicro/go-zero",
      "grade": "B+",
      "type": "Go 微服务参考",
      "cost": "免费",
      "lang": "中/英文",
      "fit": "API、RPC、服务治理和短链微服务的实现参考。",
      "proof": "约 33k GitHub stars，2026 仍发布版本，收录 CNCF Landscape。",
      "limit": "官方 ShortURL 教程明确说明是简化教学实现，不可冒充生产方案。"
    }
  ],
  "guides": {
    "1": {"name":"李文周：Go语言学习之路","url":"https://liwenzhou.com/posts/go/golang-menu/","scope":"只看：包、接口、error 接口、Go module。跳过变量、循环等入门内容。","metaId":"liwenzhou"},
    "2": {"name":"李文周：数组、切片与 map","url":"https://liwenzhou.com/posts/go/golang-menu/","scope":"从目录进入数组、切片、map；重点看 append/copy、底层数组共享和 map 使用边界。","metaId":"liwenzhou"},
    "3": {"name":"李文周：接口、反射与泛型","url":"https://liwenzhou.com/posts/go/golang-menu/","scope":"只看接口、error 接口、反射、泛型与“何时使用泛型”；带着 typed nil 问题阅读。","metaId":"liwenzhou"},
    "4": {"name":"李文周：Go语言基础之并发","url":"https://liwenzhou.com/posts/go/concurrence/","scope":"只看 goroutine、channel、select、并发安全和锁；示例全部运行一次。","metaId":"liwenzhou"},
    "5": {"name":"李文周：Go标准库 Context","url":"https://liwenzhou.com/posts/go/context/","scope":"只看 Context 接口、WithCancel/WithTimeout、跨 goroutine 取消；不要把 Context 存进结构体。","metaId":"liwenzhou"},
    "6": {"name":"李文周：单元测试从零到溜 0","url":"https://liwenzhou.com/posts/go/unit-test-0/","scope":"先看单测基础、表格驱动与覆盖率；网络、MySQL/Redis、mock 等后续篇按工作需要选一篇。","metaId":"liwenzhou"},
    "7": {"name":"李文周：Go pprof 性能调优","url":"https://liwenzhou.com/posts/go/pprof/","scope":"只看采集 CPU/内存 profile、top/list/web 定位；先复现实例，再分析自己的小服务。","metaId":"liwenzhou"},
    "9": {"name":"小林：图解 MySQL 索引篇","url":"https://www.xiaolincoding.com/mysql/","scope":"先看索引数据结构、聚簇/二级索引、联合索引与最左匹配；不通读整站。","metaId":"xiaolin"},
    "10": {"name":"小林：图解 MySQL 索引与查询","url":"https://www.xiaolincoding.com/mysql/","scope":"只看索引失效、EXPLAIN 和慢 SQL 相关内容；整理一张“现象→证据→改法”表。","metaId":"xiaolin"},
    "11": {"name":"小林：图解 MySQL 事务与锁","url":"https://www.xiaolincoding.com/mysql/","scope":"只看事务隔离、MVCC、记录锁/间隙锁/临键锁和死锁；先建立图景。","metaId":"xiaolin"},
    "12": {"name":"小林：图解 Redis 数据结构","url":"https://www.xiaolincoding.com/redis/","scope":"只看常见数据类型、底层结构、过期删除和内存淘汰；不背源码字段。","metaId":"xiaolin"},
    "13": {"name":"小林：缓存一致性与缓存异常","url":"https://www.xiaolincoding.com/redis/","scope":"只看缓存与数据库一致性、穿透、击穿、雪崩；每个问题写出触发条件和一种工程解法。","metaId":"xiaolin"},
    "14": {"name":"小林：Redis 持久化与高可用","url":"https://www.xiaolincoding.com/redis/","scope":"只看 RDB、AOF、主从、哨兵、集群和分布式锁；先理解取舍，不背命令。","metaId":"xiaolin"},
    "15": {"name":"Confluent Kafka 101","url":"https://developer.confluent.io/courses/apache-kafka/","scope":"先完成 topics、partitions、producer、consumer group、offset 和 delivery semantics；代码示例不照搬。","metaId":"kafka"},
    "17": {"name":"小林：图解网络","url":"https://www.xiaolincoding.com/network/","scope":"按顺序看 DNS、TCP、TLS、HTTP；TCP 只深入连接、可靠传输、拥塞控制。","metaId":"network"},
    "18": {"name":"小林：图解系统","url":"https://www.xiaolincoding.com/os/","scope":"只看进程/线程、虚拟内存、文件 I/O、零拷贝、I/O 多路复用和 epoll。","metaId":"network"},
    "19": {"name":"李文周：gRPC 教程","url":"https://liwenzhou.com/posts/go/grpc/","scope":"先看 RPC/protobuf/gRPC 基础、Go server/client 与错误处理；流式 RPC 暂时跳过。","metaId":"liwenzhou"},
    "20": {"name":"李文周：Go-kit 微服务系列","url":"https://liwenzhou.com/posts/go/golang-menu/","scope":"目录中只看 Go-kit 01–06 的结构：endpoint、transport、中间件、调用、发现与负载均衡。","metaId":"liwenzhou"},
    "21": {"name":"System Design Primer 中文","url":"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md","scope":"先看可用性、一致性、复制、分区和常见权衡；只建立故障模型，不做完整题库。","metaId":"system"},
    "22": {"name":"李文周：漏桶与令牌桶限流","url":"https://liwenzhou.com/posts/go/ratelimit/","scope":"先弄清固定窗口、滑动窗口、漏桶、令牌桶的行为差异；再映射到过载保护。","metaId":"liwenzhou"},
    "23": {"name":"李文周：OpenTelemetry Go 快速指南","url":"https://liwenzhou.com/posts/go/opentelemetry-go/","scope":"先完成最小 HTTP trace，理解 trace/span/propagation；Prometheus 只补 counters、histogram 与 labels。","metaId":"liwenzhou"},
    "24": {"name":"System Design Primer 中文","url":"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md","scope":"只看系统设计方法、估算、缓存、异步和 URL Shortener 示例；用于形成答题顺序。","metaId":"system"},
    "26": {"name":"李文周：Go 操作 MySQL","url":"https://liwenzhou.com/posts/go/mysql/","scope":"只看 database/sql、预处理、事务和连接池；ORM 章节跳过。","metaId":"liwenzhou"},
    "27": {"name":"小林：MySQL 锁与事务导读","url":"https://www.xiaolincoding.com/mysql/","scope":"只看锁、事务和死锁相关章节；先理解 FOR UPDATE、等待与并发冲突，再进入项目设计。","metaId":"xiaolin"},
    "30": {"name":"李文周：限流策略导读","url":"https://liwenzhou.com/posts/go/ratelimit/","scope":"复习滑动窗口、漏桶和令牌桶，把每种策略映射到 ReliableTask 的入口、Worker 和下游保护。","metaId":"liwenzhou"},
    "31": {"name":"李文周：OpenTelemetry Go 快速指南","url":"https://liwenzhou.com/posts/go/opentelemetry-go/","scope":"把 HTTP、gRPC、GORM、Redis 的 trace 串起来；只选与你项目实际使用的组件。","metaId":"liwenzhou"},
    "33": {"name":"小林：图解 Agent","url":"https://xiaolinnote.com/agent/","scope":"只看大模型基础、Prompt、Function Calling，先理解一次模型调用的数据流。","metaId":"xiaolin"},
    "34": {"name":"小林：Prompt 与上下文入门","url":"https://xiaolinnote.com/agent/","scope":"只看 Prompt、上下文和结构化输出；把提示词当成可测试的输入契约。","metaId":"xiaolin"},
    "35": {"name":"LLM Zoomcamp：Vector Search","url":"https://datatalks.club/docs/courses/llm-zoomcamp/resources/","scope":"只看 embedding、相似度、向量检索与元数据过滤；Python 代码只读。","metaId":"llmzoom"},
    "36": {"name":"LLM Zoomcamp：检索基础","url":"https://github.com/DataTalksClub/llm-zoomcamp","scope":"先理解关键词检索、向量检索、混合检索和 rerank 的作用边界；实现代码暂时只读。","metaId":"llmzoom"},
    "37": {"name":"LLM Zoomcamp：RAG 基线","url":"https://github.com/DataTalksClub/llm-zoomcamp","scope":"只看 ingestion、retrieval、prompt、answer 与引用的最小链路，再用 Go/Eino 复现。","metaId":"llmzoom"},
    "38": {"name":"LLM Zoomcamp：检索改进","url":"https://github.com/DataTalksClub/llm-zoomcamp","scope":"只看 query rewriting、hybrid search、rerank 与失败回退；以评测结果决定是否采用。","metaId":"llmzoom"},
    "39": {"name":"LLM Zoomcamp：RAG Evaluation","url":"https://github.com/DataTalksClub/llm-zoomcamp","scope":"只看 retrieval/RAG offline evaluation 与 monitoring，先做小而固定的评测集。","metaId":"llmzoom"},
    "41": {"name":"小林：Tool Calling 入门","url":"https://xiaolinnote.com/agent/","scope":"只看 Function Calling、工具 schema、参数校验与失败处理；先做只读工具。","metaId":"xiaolin"},
    "42": {"name":"Anthropic：Building Effective Agents","url":"https://www.anthropic.com/engineering/building-effective-agents","scope":"先看 workflow 与 agent 的区别，以及 routing、parallel、orchestrator、evaluator 四种模式。","metaId":"anthropic"},
    "43": {"name":"小林：MCP 入门","url":"https://xiaolinnote.com/agent/","scope":"只看 MCP 的 client/server、tools/resources/prompts 与传输；先建立协议全景。","metaId":"xiaolin"},
    "44": {"name":"Hugging Face Agents Course：Unit 1","url":"https://huggingface.co/learn/agents-course/unit1/introduction","scope":"只学 agent loop、messages、tools、observe/act；Python 示例只读，再用 Eino 复现。","metaId":"hfagents"},
    "45": {"name":"小林：Agent 安全导读","url":"https://xiaolinnote.com/agent/","scope":"先理解提示词注入、越权工具调用、敏感信息泄露和人工确认，再读安全清单。","metaId":"xiaolin"},
    "46": {"name":"Hugging Face Agents Course：评测与可观测性","url":"https://huggingface.co/learn/agents-course/unit4/introduction","scope":"只看轨迹、评测集、失败归因和 final project rubric；实现仍用 Go/Eino。","metaId":"hfagents"}
  },  "extras": {
    "12": [
      {
        "name": "Redis University：Get Started with Redis",
        "url": "https://redis.io/tutorials/university/",
        "scope": "只完成数据结构与 core concepts；云产品章节跳过。"
      }
    ],
    "14": [
      {
        "name": "Redis University：Scaling and operations",
        "url": "https://redis.io/tutorials/university/",
        "scope": "只看 persistence、high availability、observability。"
      }
    ],
    "15": [
      {
        "name": "Confluent Kafka 101",
        "url": "https://developer.confluent.io/courses/apache-kafka/",
        "scope": "完成 Fundamentals：topics、partitions、brokers、producer、consumer、offset。"
      }
    ],
    "16": [
      {
        "name": "go-zero ShortURL（仅作实现参考）",
        "url": "https://github.com/zeromicro/zero-doc/blob/main/doc/shorturl-en.md",
        "scope": "只看架构和 API/RPC 拆分；官方明确它不是生产实现。"
      }
    ],
    "18": [
      {
        "name": "OSTEP",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/",
        "scope": "只选 Processes、Virtualization、Concurrency 三部分与你工作相关的章节。"
      }
    ],
    "22": [
      {
        "name": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/",
        "scope": "只看 Handling Overload、Addressing Cascading Failures。"
      }
    ],
    "23": [
      {
        "name": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/",
        "scope": "只看 Implementing SLOs、Monitoring、Alerting on SLOs。"
      }
    ],
    "33": [
      {
        "name": "LLM Zoomcamp：Module 1",
        "url": "https://github.com/DataTalksClub/llm-zoomcamp",
        "scope": "只看 LLM/RAG 基线与课程项目结构；代码语言暂不照搬。"
      }
    ],
    "35": [
      {
        "name": "LLM Zoomcamp：Vector Search",
        "url": "https://datatalks.club/docs/courses/llm-zoomcamp/resources/",
        "scope": "只看 embeddings、semantic search、PGVector。"
      }
    ],
    "39": [
      {
        "name": "LLM Zoomcamp：Evaluation",
        "url": "https://github.com/DataTalksClub/llm-zoomcamp",
        "scope": "只看 retrieval/RAG offline evaluation、monitoring。"
      }
    ],
    "42": [
      {
        "name": "Hugging Face Agents Course：Unit 1",
        "url": "https://huggingface.co/learn/agents-course/unit1/introduction",
        "scope": "只学 Agent loop、messages、tools、observe/act；Python 示例只读。"
      }
    ],
    "46": [
      {
        "name": "Hugging Face Agents Course：Observability & Evaluation",
        "url": "https://huggingface.co/learn/agents-course/unit4/introduction",
        "scope": "只看评测思路和 final project rubric；Go 实现继续用 Eino。"
      }
    ]
  },
  "rejected": [
    {
      "name": "来源不明网盘/泄露付费课",
      "reason": "无法验证版本、作者和版权，不进入资料库。"
    },
    {
      "name": "AI 批量生成的“后端大全”",
      "reason": "缺少独立维护与勘误记录，容易把旧版本结论当事实。"
    },
    {
      "name": "只靠 GitHub stars 的项目",
      "reason": "stars 只作流行度信号，必须同时检查维护、作者、版本和适用范围。"
    },
    {
      "name": "完整照做 MIT 6.5840 / OSTEP",
      "reason": "质量高但对一年经验和当前时间过重，只选与工作直接相关的小节。"
    }
  ]
};
