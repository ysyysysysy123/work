/* Curated public-video curriculum: complete catalogs and explicit scope, not lecture content. */
window.COURSE_MEDIA_V11 = {
  "verifiedAt": "2026-09-03",
  "verification": "已核对原发布者、公开非付费稿件标记、全部分集目录/时长，以及讲解范围是否延伸到实现/测试/收尾。目录完整不等于逐句正确；未逐集完整播放、试听或跑通课程代码，不承诺最佳讲解、零错误或当前环境全部可运行。",
  "sources": [
    {
      "id": "go",
      "name": "七米：Go 语言基础系列",
      "year": "2019",
      "why": "只保留熟悉概念的查漏入口，能独立通过本周相应检查就跳过。进阶原理转接刘丹冰同系列。",
      "limit": "跳过安装、GOPATH 与零基础语法；Go module、context、泛型、fuzz、调度与 GC 不由这套旧视频兜底。循环变量语义按当前 Go 版本核对。",
      "evidence": "https://github.com/Q1mi/go_tutorial",
      "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/",
      "uploader": "七米老师",
      "parts": 27,
      "bvid": "BV1ZJ411W7jG",
      "paid": 0,
      "catalogs": [
        "BV1ZJ411W7jG"
      ],
      "catalogNote": "未选集：基础语法/工具补课，工作一年不默认重学；现代 Go 缺口见各周。"
    },
    {
      "id": "mysql",
      "name": "黑马：MySQL 入门到进阶",
      "year": "2022",
      "why": "一套课程连续覆盖索引、EXPLAIN、锁和 MVCC；SQL 演示不依赖 Java，最适合 W9–W11 连着看。",
      "limit": "不通刷 195 集；不跟 MyCat、存储过程和 Java 部分。跳过 P95“行锁升级为表锁”的易误导标题；锁范围与版本差异查原文。",
      "evidence": "https://www.bilibili.com/video/BV1Kr4y1i7ru/",
      "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/",
      "uploader": "黑马程序员",
      "parts": 195,
      "bvid": "BV1Kr4y1i7ru",
      "paid": 0,
      "catalogs": [
        "BV1Kr4y1i7ru"
      ],
      "catalogNote": "未选集：SQL 基础按需查漏，存储过程/触发器/MyCat 等非当前重点；P77 旧诊断工具、P95 易误导锁标题不跟做。"
    },
    {
      "id": "redis",
      "name": "黑马：Redis 入门到实战",
      "year": "2022",
      "why": "同套课接续命令/容量、缓存故障、持久化与高可用；保留前因后果和实现推演，不只摘结论页。",
      "limit": "只学机制与实验思路，不照抄 Java/Spring/Redisson 项目。旧 ZipList 与部署参数不能视为当前 Redis 结论；分布式锁不等于业务正确性保证。",
      "evidence": "https://www.itheima.com/news/20220301/105957.html",
      "url": "https://www.bilibili.com/video/BV1cr4y1671t/",
      "uploader": "黑马程序员",
      "parts": 175,
      "bvid": "BV1cr4y1671t",
      "paid": 0,
      "catalogs": [
        "BV1cr4y1671t"
      ],
      "catalogNote": "未选集：Java 客户端/点评业务/Redisson/OpenResty/旧源码为选学或历史参考。课程覆盖不代表本计划要求照做整个 Java 项目。"
    },
    {
      "id": "kafka",
      "name": "尚硅谷：Kafka 2024 系列",
      "year": "2024",
      "why": "65 集系列含架构、生产可靠性、日志/副本与消费语义；选取连续机制模块，不再只给 8 个片段。",
      "limit": "Java 客户端只看流程，不逐行照抄。Kafka 4.0 已去除 ZooKeeper 模式；不跟旧 ZooKeeper 部署。生产者幂等不能替代业务幂等与 Outbox。",
      "evidence": "https://kafka.apache.org/40/getting-started/zk2kraft/",
      "url": "https://www.bilibili.com/video/BV1Gp421m7UN/",
      "uploader": "尚硅谷",
      "parts": 65,
      "bvid": "BV1Gp421m7UN",
      "paid": 0,
      "catalogs": [
        "BV1Gp421m7UN"
      ],
      "catalogNote": "未选集：旧 ZooKeeper 部署与启动源码、Java/Spring/大数据集成、工具与扩展；主线专注消息正确性。KRaft 环境按当前官方说明配置。"
    },
    {
      "id": "network",
      "name": "湖科大教书匠：计算机网络微课堂",
      "year": "2019",
      "why": "以图解串联 TCP、DNS 和应用层，适合先建立一次请求的运行过程，再回小林文章复习。",
      "limit": "不补全物理层和考研题。TLS、HTTP/2/3、连接池与真实抓包排障仍看原主文档；旧课程不是现网配置指南。",
      "evidence": "https://www.bilibili.com/video/BV1c4411d7jb/",
      "url": "https://www.bilibili.com/video/BV1c4411d7jb/",
      "uploader": "湖科大教书匠",
      "parts": 73,
      "bvid": "BV1c4411d7jb",
      "paid": 0,
      "catalogs": [
        "BV1c4411d7jb"
      ],
      "catalogNote": "未选集：链路/物理/路由和题目在有前置缺口时查漏，不追加完整考研学习。"
    },
    {
      "id": "runtime",
      "name": "刘丹冰：GPM → GC 深入原理",
      "bvid": "BV19r4y1w7Nx",
      "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/",
      "evidence": "https://github.com/aceld/golang",
      "year": "2020",
      "uploader": "刘丹冰Aceld",
      "parts": 32,
      "paid": 0,
      "why": "两套完整专题由原作者仓库直接关联；先推演调度，再分析标记与写屏障，不是语法入门课。",
      "limit": "2020 年历史实现讲解，不是当前 runtime 源码全景。Go 1.26 默认启用 Green Tea；老课的队列/线程细节与 GC 图解不能原封不动当成当前实现。escape、pprof 与基准仍须实操。",
      "catalogs": [
        "BV19r4y1w7Nx",
        "BV1wz4y1y7Kd"
      ],
      "catalogNote": "本专题已全部分配；不额外要求通读原作者全部文章。"
    },
    {
      "id": "io",
      "name": "刘丹冰：Linux I/O 与服务器并发模型",
      "bvid": "BV1jK4y1N7ST",
      "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/",
      "evidence": "https://github.com/aceld/golang",
      "year": "2021",
      "uploader": "刘丹冰Aceld",
      "parts": 12,
      "paid": 0,
      "why": "12 集专题从阻塞、epoll 到六种服务器组织方式；最后有混合模型，不在概念介绍处中断。",
      "limit": "2021 年 Linux I/O 专题，不是完整 OS 课，也不是 Go netpoll 当前源码讲解。进程/线程、虚拟内存、缺页和零拷贝由原小林文档补齐。",
      "catalogs": [
        "BV1jK4y1N7ST"
      ],
      "catalogNote": "本专题已全部分配；不额外要求通读原作者全部文章。"
    },
    {
      "id": "heima-ai",
      "name": "黑马：RAG → Agent 项目实战",
      "bvid": "BV1yjz5BLEoY",
      "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/",
      "evidence": "https://www.bilibili.com/video/BV1yjz5BLEoY/",
      "year": "2026",
      "uploader": "黑马程序员",
      "parts": 67,
      "paid": 0,
      "why": "原发布者 67 集、原速约 15.5 小时；目录覆盖模型接入、提示、检索链、知识库项目、Agent 工具/中间件及最终界面。按同一课程前后模块接续。",
      "limit": "2026 年 Python/LangChain 示例。已到项目收尾，但不包含完整混合检索/重排、MCP、安全与工程评测课程；不能叫“AI 就业全栈”。不跟购课/加群领取资料流程；配套源码能否免登录公开下载未确认。模型 API 可能收费，先限额或用 mock；Go 交付不变。",
      "language": "Python 演示 → Go 交付",
      "catalogs": [
        "BV1yjz5BLEoY"
      ],
      "catalogNote": "P5–7 本地模型部署、P32 Python 运算符实现、P47/54/67 Web 界面选学；其余已分配到相关周。"
    },
    {
      "id": "zinx",
      "name": "刘丹冰：Zinx TCP 服务器完整项目",
      "bvid": "BV1wE411d7th",
      "url": "https://www.bilibili.com/video/BV1wE411d7th/",
      "evidence": "https://github.com/aceld/zinx",
      "year": "2019",
      "uploader": "刘丹冰Aceld",
      "parts": 91,
      "paid": 0,
      "why": "作者项目仓库直接链接原视频，91 集从服务器骨架、路由、消息封包、工作池、连接管理到 MMO 示例测试与总结。",
      "limit": "2019 年教学版本与当前仓库 API 不保证一致。它是长连接服务器，不包含任务租约/fencing/Outbox，不替代 ReliableTask。不额外强制再做一个 MMO 项目。",
      "optional": true,
      "where": "可选：W19 后补 TCP 工程，或 W28 工作池卡住时查对应模块。",
      "alternatives": true,
      "catalogs": [
        "BV1wE411d7th"
      ],
      "catalogNote": "整套可选，不与四个主项目叠加；仅在需要 TCP 工程补课时采用。"
    }
  ],
  "routes": {
    "1": {
      "sourceId": "go",
      "lessons": [
        {
          "page": 19,
          "part": "19_Go语言基础之包",
          "duration": 1971,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=19"
        }
      ],
      "cover": "只建立 package、导入与职责划分的直觉；视频不要求新建另一套工程。",
      "review": "回李文周原文补 Go module、接口与错误处理；工程目录、依赖方向和测试边界按本周任务决定。",
      "stop": "能在现有 Go 项目指出入口、业务包与依赖方向，就进入 T1；不要照抄旧 GOPATH 环境。",
      "checkOnly": true,
      "blocks": [
        {
          "label": "本周查漏范围",
          "lessons": [
            {
              "page": 19,
              "part": "19_Go语言基础之包",
              "duration": 1971,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=19"
            }
          ]
        }
      ]
    },
    "2": {
      "sourceId": "go",
      "lessons": [
        {
          "page": 8,
          "part": "08_Go语言基础之切片",
          "duration": 2849,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=8"
        },
        {
          "page": 9,
          "part": "09_Go语言基础之map",
          "duration": 2797,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=9"
        }
      ],
      "cover": "slice 的共享底层数组、扩容现象，以及 map 的基本用法。",
      "review": "查字符串/字节、JSON 与本周边界例子；视频的扩容现象不是所有版本不变的公式。",
      "stop": "先预测再运行本周容器例子；已能解释的基础演示可以跳过。",
      "checkOnly": true,
      "blocks": [
        {
          "label": "本周查漏范围",
          "lessons": [
            {
              "page": 8,
              "part": "08_Go语言基础之切片",
              "duration": 2849,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=8"
            },
            {
              "page": 9,
              "part": "09_Go语言基础之map",
              "duration": 2797,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=9"
            }
          ]
        }
      ]
    },
    "3": {
      "sourceId": "go",
      "lessons": [
        {
          "page": 15,
          "part": "15_Go语言基础之方法和接收者",
          "duration": 1454,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=15"
        },
        {
          "page": 20,
          "part": "20_Go语言基础之接口",
          "duration": 3136,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=20"
        }
      ],
      "cover": "方法集、值/指针接收者与接口；先把接口为什么满足、值是什么讲清。",
      "review": "补 typed nil、反射与泛型的使用边界；本系列没有泛型。errors.Is/As 属于错误处理复习，按任务需要查，不扩成另一套课。",
      "stop": "能用自己的例子说明接口实现和接收者差异，再做本周重构与测试。",
      "checkOnly": true,
      "blocks": [
        {
          "label": "本周查漏范围",
          "lessons": [
            {
              "page": 15,
              "part": "15_Go语言基础之方法和接收者",
              "duration": 1454,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=15"
            },
            {
              "page": 20,
              "part": "20_Go语言基础之接口",
              "duration": 3136,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=20"
            }
          ]
        }
      ]
    },
    "4": {
      "sourceId": "go",
      "lessons": [
        {
          "page": 24,
          "part": "24_Go语言基础之channel",
          "duration": 3199,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=24"
        },
        {
          "page": 25,
          "part": "25_Go语言基础之并发同步与锁",
          "duration": 2344,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=25"
        }
      ],
      "cover": "channel 的阻塞与关闭、并发同步和锁；一套老师接着讲。",
      "review": "补 select、Go 内存模型与 happens-before、数据竞争和所有权；再把 worker pool 的退出路径用于任务。context 留在 W5 系统学习。",
      "stop": "看完后画出生产者、消费者、关闭者和退出路径，再改自己的并发代码。",
      "docScope": "在原并发文章里只复习 channel、select、锁和并发安全中还不稳的例子，不把视频已经运行过的例子再全部运行一遍。",
      "checkOnly": true,
      "blocks": [
        {
          "label": "本周查漏范围",
          "lessons": [
            {
              "page": 24,
              "part": "24_Go语言基础之channel",
              "duration": 3199,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=24"
            },
            {
              "page": 25,
              "part": "25_Go语言基础之并发同步与锁",
              "duration": 2344,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=25"
            }
          ]
        }
      ]
    },
    "6": {
      "sourceId": "go",
      "lessons": [
        {
          "page": 27,
          "part": "27_Go语言基础之单元测试",
          "duration": 2272,
          "bvid": "BV1ZJ411W7jG",
          "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=27"
        }
      ],
      "cover": "表驱动单元测试与测试工具的基础演示。",
      "review": "补 Mock 边界、httptest、race、fuzz 和静态检查；旧视频没有覆盖的工具按原主文档和备用官方链接指定范围学习。",
      "stop": "给本周真实函数添加成功、错误、边界测试；不额外复制视频项目。",
      "checkOnly": true,
      "blocks": [
        {
          "label": "本周查漏范围",
          "lessons": [
            {
              "page": 27,
              "part": "27_Go语言基础之单元测试",
              "duration": 2272,
              "bvid": "BV1ZJ411W7jG",
              "url": "https://www.bilibili.com/video/BV1ZJ411W7jG/?p=27"
            }
          ]
        }
      ]
    },
    "7": {
      "sourceId": "runtime",
      "lessons": [
        {
          "page": 1,
          "part": "第1讲-课程阶段目标",
          "duration": 109,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=1"
        },
        {
          "page": 2,
          "part": "第2讲-调度器的由来和分析",
          "duration": 1358,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=2"
        },
        {
          "page": 3,
          "part": "第3讲-GMP模型简介",
          "duration": 622,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=3"
        },
        {
          "page": 4,
          "part": "第4讲-调度器的设计策略",
          "duration": 572,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=4"
        },
        {
          "page": 5,
          "part": "第5讲-go指令的调度流程",
          "duration": 449,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=5"
        },
        {
          "page": 6,
          "part": "第6讲-Go的启动周期M0和G0",
          "duration": 487,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=6"
        },
        {
          "page": 7,
          "part": "第7讲-GMP可视化调试",
          "duration": 751,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=7"
        },
        {
          "page": 8,
          "part": "第8讲-GMP终端GODEBUG调试",
          "duration": 474,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=8"
        },
        {
          "page": 9,
          "part": "第9讲-场景1-创建G",
          "duration": 198,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=9"
        },
        {
          "page": 10,
          "part": "第10讲-场景2-G执行完毕",
          "duration": 181,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=10"
        },
        {
          "page": 11,
          "part": "第11讲-场景3-4-5-连续创建多个G导致本地队列满",
          "duration": 316,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=11"
        },
        {
          "page": 12,
          "part": "第12讲-场景6-唤醒正在休眠的M",
          "duration": 229,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=12"
        },
        {
          "page": 13,
          "part": "第13讲-场景7-被唤醒的M从全局取G",
          "duration": 234,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=13"
        },
        {
          "page": 14,
          "part": "第14讲-场景8-偷取G情况",
          "duration": 213,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=14"
        },
        {
          "page": 15,
          "part": "第15讲-场景9-自旋线程的最大限制",
          "duration": 112,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=15"
        },
        {
          "page": 16,
          "part": "第16讲-场景10-G发生调用阻塞",
          "duration": 254,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=16"
        },
        {
          "page": 17,
          "part": "第17讲-场景11-G发生非阻塞",
          "duration": 198,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=17"
        },
        {
          "page": 18,
          "part": "第18讲-总结",
          "duration": 346,
          "bvid": "BV19r4y1w7Nx",
          "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=18"
        },
        {
          "page": 1,
          "part": "第1讲-课程目标",
          "duration": 193,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=1"
        },
        {
          "page": 2,
          "part": "第2讲-GoV1.3的标记清除法",
          "duration": 417,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=2"
        },
        {
          "page": 3,
          "part": "第3讲-GoV1.3的标记清除法的缺点",
          "duration": 264,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=3"
        },
        {
          "page": 4,
          "part": "第4讲-GoV1.5三色标记法",
          "duration": 499,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=4"
        },
        {
          "page": 5,
          "part": "第5讲-三色标记无STW的问题",
          "duration": 536,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=5"
        },
        {
          "page": 6,
          "part": "第6讲-强弱三色不变式",
          "duration": 433,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=6"
        },
        {
          "page": 7,
          "part": "第7讲-插入写屏障",
          "duration": 972,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=7"
        },
        {
          "page": 8,
          "part": "第8讲-删除写屏障(视频后面多余空白)",
          "duration": 972,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=8"
        },
        {
          "page": 9,
          "part": "第9讲-混合写屏障操作流程",
          "duration": 436,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=9"
        },
        {
          "page": 10,
          "part": "第10讲-混合写屏障场景1",
          "duration": 376,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=10"
        },
        {
          "page": 11,
          "part": "第11讲-混合写屏障场景2",
          "duration": 263,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=11"
        },
        {
          "page": 12,
          "part": "第12讲-混合写屏障场景3",
          "duration": 346,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=12"
        },
        {
          "page": 13,
          "part": "第13讲-混合写屏障场景4",
          "duration": 272,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=13"
        },
        {
          "page": 14,
          "part": "第14讲-总结",
          "duration": 601,
          "bvid": "BV1wz4y1y7Kd",
          "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=14"
        }
      ],
      "cover": "先完整建立 GPM 调度图景，再看 GC 标记/写屏障历史演进；最后回到自己的逃逸和性能证据。",
      "review": "原主文档只补逃逸、benchmark/pprof、trace 的操作；GC 当前行为按版本核对。不要把视频当成性能优化结论。",
      "stop": "完成 T1 逃逸预测，再做 T2 的热点定位和 T3 前后对照。验收仍由可复现数据决定，不要求背源码。",
      "docHours": 1.5,
      "supplement": {
        "name": "原作者《Golang 修养之路》",
        "url": "https://github.com/aceld/golang",
        "scope": "原作者目录第 2 篇调度器、第 5 篇 GC 复习视频；第 3 篇逃逸用于 T1。都是文章编号，不是新增阶段。",
        "versionUrl": "https://go.dev/doc/go1.26#runtime",
        "versionNote": "Go 1.26 的 GC 默认实现已有变化，旧课只用于理解基础机制。"
      },
      "blocks": [
        {
          "label": "调度器全场景",
          "lessons": [
            {
              "page": 1,
              "part": "第1讲-课程阶段目标",
              "duration": 109,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=1"
            },
            {
              "page": 2,
              "part": "第2讲-调度器的由来和分析",
              "duration": 1358,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=2"
            },
            {
              "page": 3,
              "part": "第3讲-GMP模型简介",
              "duration": 622,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=3"
            },
            {
              "page": 4,
              "part": "第4讲-调度器的设计策略",
              "duration": 572,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=4"
            },
            {
              "page": 5,
              "part": "第5讲-go指令的调度流程",
              "duration": 449,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=5"
            },
            {
              "page": 6,
              "part": "第6讲-Go的启动周期M0和G0",
              "duration": 487,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=6"
            },
            {
              "page": 7,
              "part": "第7讲-GMP可视化调试",
              "duration": 751,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=7"
            },
            {
              "page": 8,
              "part": "第8讲-GMP终端GODEBUG调试",
              "duration": 474,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=8"
            },
            {
              "page": 9,
              "part": "第9讲-场景1-创建G",
              "duration": 198,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=9"
            },
            {
              "page": 10,
              "part": "第10讲-场景2-G执行完毕",
              "duration": 181,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=10"
            },
            {
              "page": 11,
              "part": "第11讲-场景3-4-5-连续创建多个G导致本地队列满",
              "duration": 316,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=11"
            },
            {
              "page": 12,
              "part": "第12讲-场景6-唤醒正在休眠的M",
              "duration": 229,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=12"
            },
            {
              "page": 13,
              "part": "第13讲-场景7-被唤醒的M从全局取G",
              "duration": 234,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=13"
            },
            {
              "page": 14,
              "part": "第14讲-场景8-偷取G情况",
              "duration": 213,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=14"
            },
            {
              "page": 15,
              "part": "第15讲-场景9-自旋线程的最大限制",
              "duration": 112,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=15"
            },
            {
              "page": 16,
              "part": "第16讲-场景10-G发生调用阻塞",
              "duration": 254,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=16"
            },
            {
              "page": 17,
              "part": "第17讲-场景11-G发生非阻塞",
              "duration": 198,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=17"
            },
            {
              "page": 18,
              "part": "第18讲-总结",
              "duration": 346,
              "bvid": "BV19r4y1w7Nx",
              "url": "https://www.bilibili.com/video/BV19r4y1w7Nx/?p=18"
            }
          ]
        },
        {
          "label": "GC 标记与写屏障",
          "lessons": [
            {
              "page": 1,
              "part": "第1讲-课程目标",
              "duration": 193,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=1"
            },
            {
              "page": 2,
              "part": "第2讲-GoV1.3的标记清除法",
              "duration": 417,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=2"
            },
            {
              "page": 3,
              "part": "第3讲-GoV1.3的标记清除法的缺点",
              "duration": 264,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=3"
            },
            {
              "page": 4,
              "part": "第4讲-GoV1.5三色标记法",
              "duration": 499,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=4"
            },
            {
              "page": 5,
              "part": "第5讲-三色标记无STW的问题",
              "duration": 536,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=5"
            },
            {
              "page": 6,
              "part": "第6讲-强弱三色不变式",
              "duration": 433,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=6"
            },
            {
              "page": 7,
              "part": "第7讲-插入写屏障",
              "duration": 972,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=7"
            },
            {
              "page": 8,
              "part": "第8讲-删除写屏障(视频后面多余空白)",
              "duration": 972,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=8"
            },
            {
              "page": 9,
              "part": "第9讲-混合写屏障操作流程",
              "duration": 436,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=9"
            },
            {
              "page": 10,
              "part": "第10讲-混合写屏障场景1",
              "duration": 376,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=10"
            },
            {
              "page": 11,
              "part": "第11讲-混合写屏障场景2",
              "duration": 263,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=11"
            },
            {
              "page": 12,
              "part": "第12讲-混合写屏障场景3",
              "duration": 346,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=12"
            },
            {
              "page": 13,
              "part": "第13讲-混合写屏障场景4",
              "duration": 272,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=13"
            },
            {
              "page": 14,
              "part": "第14讲-总结",
              "duration": 601,
              "bvid": "BV1wz4y1y7Kd",
              "url": "https://www.bilibili.com/video/BV1wz4y1y7Kd/?p=14"
            }
          ]
        }
      ]
    },
    "9": {
      "sourceId": "mysql",
      "lessons": [
        {
          "page": 59,
          "part": "02. 进阶-存储引擎-MySQL体系结构",
          "duration": 287,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=59"
        },
        {
          "page": 60,
          "part": "03. 进阶-存储引擎-简介",
          "duration": 489,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=60"
        },
        {
          "page": 61,
          "part": "04. 进阶-存储引擎-InnoDB介绍",
          "duration": 538,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=61"
        },
        {
          "page": 66,
          "part": "09. 进阶-索引-概述",
          "duration": 528,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=66"
        },
        {
          "page": 67,
          "part": "10. 进阶-索引-结构-介绍",
          "duration": 227,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=67"
        },
        {
          "page": 68,
          "part": "11. 进阶-索引-结构-Btree",
          "duration": 721,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=68"
        },
        {
          "page": 69,
          "part": "12. 进阶-索引-结构-B+tree",
          "duration": 396,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=69"
        },
        {
          "page": 70,
          "part": "13. 进阶-索引-结构-hash",
          "duration": 293,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=70"
        },
        {
          "page": 71,
          "part": "14. 进阶-索引-结构-思考题",
          "duration": 199,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=71"
        },
        {
          "page": 72,
          "part": "15. 进阶-索引-分类",
          "duration": 564,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=72"
        },
        {
          "page": 73,
          "part": "16. 进阶-索引-思考题",
          "duration": 452,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=73"
        },
        {
          "page": 74,
          "part": "17. 进阶-索引-语法",
          "duration": 679,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=74"
        },
        {
          "page": 133,
          "part": "76. 进阶-InnoDB引擎-逻辑存储结构",
          "duration": 437,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=133"
        },
        {
          "page": 134,
          "part": "77. 进阶-InnoDB引擎-架构-内存结构1",
          "duration": 291,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=134"
        },
        {
          "page": 135,
          "part": "78. 进阶-InnoDB引擎-架构-内存结构2",
          "duration": 482,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=135"
        },
        {
          "page": 136,
          "part": "79. 进阶-InnoDB引擎-架构-磁盘结构",
          "duration": 620,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=136"
        },
        {
          "page": 137,
          "part": "80. 进阶-InnoDB引擎-架构-后台线程",
          "duration": 317,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=137"
        }
      ],
      "cover": "InnoDB 结构 → B/B+Tree → 聚簇/二级索引 → 页与内存/磁盘结构。",
      "review": "小林 MySQL 主文档只复习页、回表和索引选择，补本周模型设计需要的约束。",
      "stop": "完成 T1 模型与索引选择，再在 T2/T3 用查询和数据验证。",
      "blocks": [
        {
          "label": "引擎与索引结构",
          "lessons": [
            {
              "page": 59,
              "part": "02. 进阶-存储引擎-MySQL体系结构",
              "duration": 287,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=59"
            },
            {
              "page": 60,
              "part": "03. 进阶-存储引擎-简介",
              "duration": 489,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=60"
            },
            {
              "page": 61,
              "part": "04. 进阶-存储引擎-InnoDB介绍",
              "duration": 538,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=61"
            },
            {
              "page": 66,
              "part": "09. 进阶-索引-概述",
              "duration": 528,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=66"
            },
            {
              "page": 67,
              "part": "10. 进阶-索引-结构-介绍",
              "duration": 227,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=67"
            },
            {
              "page": 68,
              "part": "11. 进阶-索引-结构-Btree",
              "duration": 721,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=68"
            },
            {
              "page": 69,
              "part": "12. 进阶-索引-结构-B+tree",
              "duration": 396,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=69"
            },
            {
              "page": 70,
              "part": "13. 进阶-索引-结构-hash",
              "duration": 293,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=70"
            },
            {
              "page": 71,
              "part": "14. 进阶-索引-结构-思考题",
              "duration": 199,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=71"
            },
            {
              "page": 72,
              "part": "15. 进阶-索引-分类",
              "duration": 564,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=72"
            },
            {
              "page": 73,
              "part": "16. 进阶-索引-思考题",
              "duration": 452,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=73"
            },
            {
              "page": 74,
              "part": "17. 进阶-索引-语法",
              "duration": 679,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=74"
            }
          ]
        },
        {
          "label": "InnoDB 存储与运行结构",
          "lessons": [
            {
              "page": 133,
              "part": "76. 进阶-InnoDB引擎-逻辑存储结构",
              "duration": 437,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=133"
            },
            {
              "page": 134,
              "part": "77. 进阶-InnoDB引擎-架构-内存结构1",
              "duration": 291,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=134"
            },
            {
              "page": 135,
              "part": "78. 进阶-InnoDB引擎-架构-内存结构2",
              "duration": 482,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=135"
            },
            {
              "page": 136,
              "part": "79. 进阶-InnoDB引擎-架构-磁盘结构",
              "duration": 620,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=136"
            },
            {
              "page": 137,
              "part": "80. 进阶-InnoDB引擎-架构-后台线程",
              "duration": 317,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=137"
            }
          ]
        }
      ]
    },
    "10": {
      "sourceId": "mysql",
      "lessons": [
        {
          "page": 75,
          "part": "18. 进阶-索引-性能分析-查看执行频次",
          "duration": 327,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=75"
        },
        {
          "page": 76,
          "part": "19. 进阶-索引-性能分析-慢查询日志",
          "duration": 458,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=76"
        },
        {
          "page": 78,
          "part": "21. 进阶-索引-性能分析-explain",
          "duration": 1459,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=78"
        },
        {
          "page": 79,
          "part": "22. 进阶-索引-使用规则-验证索引效率",
          "duration": 495,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=79"
        },
        {
          "page": 80,
          "part": "23. 进阶-索引-使用规则-最左前缀法则",
          "duration": 701,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=80"
        },
        {
          "page": 81,
          "part": "24. 进阶-索引-使用规则-索引失效情况一",
          "duration": 500,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=81"
        },
        {
          "page": 82,
          "part": "25. 进阶-索引-使用规则-索引失效情况二",
          "duration": 727,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=82"
        },
        {
          "page": 83,
          "part": "26. 进阶-索引-使用规则-SQL提示",
          "duration": 440,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=83"
        },
        {
          "page": 84,
          "part": "27. 进阶-索引-使用规则-覆盖索引&回表查询",
          "duration": 945,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=84"
        },
        {
          "page": 85,
          "part": "28. 进阶-索引-使用规则-前缀索引",
          "duration": 865,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=85"
        },
        {
          "page": 86,
          "part": "29. 进阶-索引-使用规则-单列&联合索引",
          "duration": 596,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=86"
        },
        {
          "page": 87,
          "part": "30. 进阶-索引-设计原则",
          "duration": 322,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=87"
        },
        {
          "page": 88,
          "part": "31. 进阶-索引-小结",
          "duration": 620,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=88"
        },
        {
          "page": 89,
          "part": "32. 进阶-SQL优化-插入数据",
          "duration": 809,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=89"
        },
        {
          "page": 90,
          "part": "33. 进阶-SQL优化-主键优化",
          "duration": 820,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=90"
        },
        {
          "page": 91,
          "part": "34. 进阶-SQL优化-order by优化",
          "duration": 1000,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=91"
        },
        {
          "page": 92,
          "part": "35. 进阶-SQL优化-group by优化",
          "duration": 367,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=92"
        },
        {
          "page": 93,
          "part": "36. 进阶-SQL优化-limit优化",
          "duration": 396,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=93"
        },
        {
          "page": 94,
          "part": "37. 进阶-SQL优化-count优化",
          "duration": 606,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=94"
        },
        {
          "page": 96,
          "part": "39. 进阶-SQL优化-小结",
          "duration": 537,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=96"
        }
      ],
      "cover": "慢查询 → EXPLAIN → 索引使用规则 → 排序/分页/计数优化；同一课程连续跟进。",
      "review": "原文档补 EXPLAIN ANALYZE 与当前版本行为；不使用弃用的 SHOW PROFILE，也不沿用“行锁升级为表锁”标题推论。",
      "stop": "不要对每种优化都新建项目；只对原 T1/T2/T3 的 SQL 保存计划与前后数据。",
      "blocks": [
        {
          "label": "查询诊断与索引规则",
          "lessons": [
            {
              "page": 75,
              "part": "18. 进阶-索引-性能分析-查看执行频次",
              "duration": 327,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=75"
            },
            {
              "page": 76,
              "part": "19. 进阶-索引-性能分析-慢查询日志",
              "duration": 458,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=76"
            },
            {
              "page": 78,
              "part": "21. 进阶-索引-性能分析-explain",
              "duration": 1459,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=78"
            },
            {
              "page": 79,
              "part": "22. 进阶-索引-使用规则-验证索引效率",
              "duration": 495,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=79"
            },
            {
              "page": 80,
              "part": "23. 进阶-索引-使用规则-最左前缀法则",
              "duration": 701,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=80"
            },
            {
              "page": 81,
              "part": "24. 进阶-索引-使用规则-索引失效情况一",
              "duration": 500,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=81"
            },
            {
              "page": 82,
              "part": "25. 进阶-索引-使用规则-索引失效情况二",
              "duration": 727,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=82"
            },
            {
              "page": 83,
              "part": "26. 进阶-索引-使用规则-SQL提示",
              "duration": 440,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=83"
            },
            {
              "page": 84,
              "part": "27. 进阶-索引-使用规则-覆盖索引&回表查询",
              "duration": 945,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=84"
            },
            {
              "page": 85,
              "part": "28. 进阶-索引-使用规则-前缀索引",
              "duration": 865,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=85"
            }
          ]
        },
        {
          "label": "查询诊断与索引规则",
          "lessons": [
            {
              "page": 86,
              "part": "29. 进阶-索引-使用规则-单列&联合索引",
              "duration": 596,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=86"
            },
            {
              "page": 87,
              "part": "30. 进阶-索引-设计原则",
              "duration": 322,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=87"
            }
          ]
        },
        {
          "label": "SQL 优化闭环",
          "lessons": [
            {
              "page": 88,
              "part": "31. 进阶-索引-小结",
              "duration": 620,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=88"
            },
            {
              "page": 89,
              "part": "32. 进阶-SQL优化-插入数据",
              "duration": 809,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=89"
            },
            {
              "page": 90,
              "part": "33. 进阶-SQL优化-主键优化",
              "duration": 820,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=90"
            },
            {
              "page": 91,
              "part": "34. 进阶-SQL优化-order by优化",
              "duration": 1000,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=91"
            },
            {
              "page": 92,
              "part": "35. 进阶-SQL优化-group by优化",
              "duration": 367,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=92"
            },
            {
              "page": 93,
              "part": "36. 进阶-SQL优化-limit优化",
              "duration": 396,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=93"
            },
            {
              "page": 94,
              "part": "37. 进阶-SQL优化-count优化",
              "duration": 606,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=94"
            },
            {
              "page": 96,
              "part": "39. 进阶-SQL优化-小结",
              "duration": 537,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=96"
            }
          ]
        }
      ]
    },
    "11": {
      "sourceId": "mysql",
      "lessons": [
        {
          "page": 51,
          "part": "51. 基础-事务-简介",
          "duration": 299,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=51"
        },
        {
          "page": 52,
          "part": "52. 基础-事务-操作演示",
          "duration": 1045,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=52"
        },
        {
          "page": 53,
          "part": "53. 基础-事务-四大特性ACID",
          "duration": 296,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=53"
        },
        {
          "page": 54,
          "part": "54. 基础-事务-并发事务问题",
          "duration": 454,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=54"
        },
        {
          "page": 55,
          "part": "55. 基础-事务-并发事务演示及隔离级别",
          "duration": 1347,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=55"
        },
        {
          "page": 56,
          "part": "56. 基础-事务-小结",
          "duration": 132,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=56"
        },
        {
          "page": 121,
          "part": "64. 进阶-锁-介绍",
          "duration": 191,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=121"
        },
        {
          "page": 122,
          "part": "65. 进阶-锁-全局锁-介绍",
          "duration": 489,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=122"
        },
        {
          "page": 123,
          "part": "66. 进阶-锁-全局锁-一致性数据备份",
          "duration": 546,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=123"
        },
        {
          "page": 124,
          "part": "67. 进阶-锁-表级锁-表锁",
          "duration": 648,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=124"
        },
        {
          "page": 125,
          "part": "68. 进阶-锁-表级锁-元数据锁",
          "duration": 649,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=125"
        },
        {
          "page": 126,
          "part": "69. 进阶-锁-表级锁-意向锁",
          "duration": 376,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=126"
        },
        {
          "page": 127,
          "part": "70. 进阶-锁-表级锁-意向锁-测试",
          "duration": 360,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=127"
        },
        {
          "page": 128,
          "part": "71. 进阶-锁-行级锁-介绍",
          "duration": 326,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=128"
        },
        {
          "page": 129,
          "part": "72. 进阶-锁-行级锁-行锁",
          "duration": 913,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=129"
        },
        {
          "page": 130,
          "part": "73. 进阶-锁-行级锁-间隙锁&临键锁1",
          "duration": 260,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=130"
        },
        {
          "page": 131,
          "part": "74. 进阶-锁-行级锁-间隙锁&临键锁2",
          "duration": 536,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=131"
        },
        {
          "page": 132,
          "part": "75. 进阶-锁-小结",
          "duration": 213,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=132"
        },
        {
          "page": 138,
          "part": "81. 进阶-InnoDB引擎-事务原理-概述",
          "duration": 244,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=138"
        },
        {
          "page": 139,
          "part": "82. 进阶-InnoDB引擎-事务原理-redolog",
          "duration": 458,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=139"
        },
        {
          "page": 140,
          "part": "83. 进阶-InnoDB引擎-事务原理-undolog",
          "duration": 201,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=140"
        },
        {
          "page": 141,
          "part": "84. 进阶-InnoDB引擎-MVCC-基本概念",
          "duration": 379,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=141"
        },
        {
          "page": 142,
          "part": "85. 进阶-InnoDB引擎-MVCC-隐藏字段",
          "duration": 459,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=142"
        },
        {
          "page": 143,
          "part": "86. 进阶-InnoDB引擎-MVCC-undolog版本链",
          "duration": 535,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=143"
        },
        {
          "page": 144,
          "part": "87. 进阶-InnoDB引擎-MVCC-readview介绍",
          "duration": 318,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=144"
        },
        {
          "page": 145,
          "part": "88. 进阶-InnoDB引擎-MVCC-原理分析(RC级别)",
          "duration": 537,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=145"
        },
        {
          "page": 146,
          "part": "89. 进阶-InnoDB引擎-MVCC-原理分析(RR级别)",
          "duration": 221,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=146"
        },
        {
          "page": 147,
          "part": "90. 进阶-InnoDB引擎-小结",
          "duration": 267,
          "bvid": "BV1Kr4y1i7ru",
          "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=147"
        }
      ],
      "cover": "事务/隔离级别 → 全局/表/行锁 → redo/undo → ReadView/MVCC 推演，避免只有术语没有过程。",
      "review": "复习小林事务、锁和 MVCC 的指定范围；死锁日志与并发时序必须亲自复现。",
      "stop": "先完成事务/锁实验；下一自然周继续实现与验收，不赶成一周的笔记作业。",
      "blocks": [
        {
          "label": "事务基础",
          "lessons": [
            {
              "page": 51,
              "part": "51. 基础-事务-简介",
              "duration": 299,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=51"
            },
            {
              "page": 52,
              "part": "52. 基础-事务-操作演示",
              "duration": 1045,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=52"
            },
            {
              "page": 53,
              "part": "53. 基础-事务-四大特性ACID",
              "duration": 296,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=53"
            },
            {
              "page": 54,
              "part": "54. 基础-事务-并发事务问题",
              "duration": 454,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=54"
            },
            {
              "page": 55,
              "part": "55. 基础-事务-并发事务演示及隔离级别",
              "duration": 1347,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=55"
            },
            {
              "page": 56,
              "part": "56. 基础-事务-小结",
              "duration": 132,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=56"
            }
          ]
        },
        {
          "label": "锁与并发边界",
          "lessons": [
            {
              "page": 121,
              "part": "64. 进阶-锁-介绍",
              "duration": 191,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=121"
            },
            {
              "page": 122,
              "part": "65. 进阶-锁-全局锁-介绍",
              "duration": 489,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=122"
            },
            {
              "page": 123,
              "part": "66. 进阶-锁-全局锁-一致性数据备份",
              "duration": 546,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=123"
            },
            {
              "page": 124,
              "part": "67. 进阶-锁-表级锁-表锁",
              "duration": 648,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=124"
            },
            {
              "page": 125,
              "part": "68. 进阶-锁-表级锁-元数据锁",
              "duration": 649,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=125"
            },
            {
              "page": 126,
              "part": "69. 进阶-锁-表级锁-意向锁",
              "duration": 376,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=126"
            },
            {
              "page": 127,
              "part": "70. 进阶-锁-表级锁-意向锁-测试",
              "duration": 360,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=127"
            },
            {
              "page": 128,
              "part": "71. 进阶-锁-行级锁-介绍",
              "duration": 326,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=128"
            },
            {
              "page": 129,
              "part": "72. 进阶-锁-行级锁-行锁",
              "duration": 913,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=129"
            },
            {
              "page": 130,
              "part": "73. 进阶-锁-行级锁-间隙锁&临键锁1",
              "duration": 260,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=130"
            },
            {
              "page": 131,
              "part": "74. 进阶-锁-行级锁-间隙锁&临键锁2",
              "duration": 536,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=131"
            },
            {
              "page": 132,
              "part": "75. 进阶-锁-小结",
              "duration": 213,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=132"
            }
          ]
        },
        {
          "label": "事务实现与 MVCC",
          "lessons": [
            {
              "page": 138,
              "part": "81. 进阶-InnoDB引擎-事务原理-概述",
              "duration": 244,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=138"
            },
            {
              "page": 139,
              "part": "82. 进阶-InnoDB引擎-事务原理-redolog",
              "duration": 458,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=139"
            },
            {
              "page": 140,
              "part": "83. 进阶-InnoDB引擎-事务原理-undolog",
              "duration": 201,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=140"
            },
            {
              "page": 141,
              "part": "84. 进阶-InnoDB引擎-MVCC-基本概念",
              "duration": 379,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=141"
            },
            {
              "page": 142,
              "part": "85. 进阶-InnoDB引擎-MVCC-隐藏字段",
              "duration": 459,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=142"
            },
            {
              "page": 143,
              "part": "86. 进阶-InnoDB引擎-MVCC-undolog版本链",
              "duration": 535,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=143"
            },
            {
              "page": 144,
              "part": "87. 进阶-InnoDB引擎-MVCC-readview介绍",
              "duration": 318,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=144"
            },
            {
              "page": 145,
              "part": "88. 进阶-InnoDB引擎-MVCC-原理分析(RC级别)",
              "duration": 537,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=145"
            },
            {
              "page": 146,
              "part": "89. 进阶-InnoDB引擎-MVCC-原理分析(RR级别)",
              "duration": 221,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=146"
            },
            {
              "page": 147,
              "part": "90. 进阶-InnoDB引擎-小结",
              "duration": 267,
              "bvid": "BV1Kr4y1i7ru",
              "url": "https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=147"
            }
          ]
        }
      ]
    },
    "12": {
      "sourceId": "redis",
      "lessons": [
        {
          "page": 8,
          "part": "基础篇-07.Redis命令-数据结构介绍",
          "duration": 435,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=8"
        },
        {
          "page": 9,
          "part": "基础篇-08.Redis命令-通用命令",
          "duration": 702,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=9"
        },
        {
          "page": 10,
          "part": "基础篇-09.Redis命令-String类型",
          "duration": 792,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=10"
        },
        {
          "page": 11,
          "part": "基础篇-10.Redis命令-Key的层级格式",
          "duration": 470,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=11"
        },
        {
          "page": 12,
          "part": "基础篇-11.Redis命令-Hash类型",
          "duration": 734,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=12"
        },
        {
          "page": 13,
          "part": "基础篇-12.Redis命令-List类型",
          "duration": 876,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=13"
        },
        {
          "page": 14,
          "part": "基础篇-13.Redis命令-Set类型",
          "duration": 618,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=14"
        },
        {
          "page": 15,
          "part": "基础篇-14.Redis命令-SortedSet类型",
          "duration": 993,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=15"
        },
        {
          "page": 134,
          "part": "高级篇-Redis最佳实践-01.Redis最佳实践课程介绍",
          "duration": 79,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=134"
        },
        {
          "page": 135,
          "part": "高级篇-Redis最佳实践-02.键值设计-如何设计优雅的key",
          "duration": 562,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=135"
        },
        {
          "page": 136,
          "part": "高级篇-Redis最佳实践-03.键值设计-BigKey问题",
          "duration": 1421,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=136"
        },
        {
          "page": 137,
          "part": "高级篇-Redis最佳实践-04.键值设计-选择合适的数据结构",
          "duration": 1294,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=137"
        },
        {
          "page": 138,
          "part": "高级篇-Redis最佳实践-05.批处理优化-pipeline和mset",
          "duration": 1270,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=138"
        },
        {
          "page": 139,
          "part": "高级篇-Redis最佳实践-06.批处理优化-集群模式下的批处理问题",
          "duration": 848,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=139"
        },
        {
          "page": 174,
          "part": "原理篇-30.Redis内存回收-过期key处理",
          "duration": 1770,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=174"
        },
        {
          "page": 175,
          "part": "原理篇-31.Redis内存回收-内存淘汰策略",
          "duration": 2180,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=175"
        }
      ],
      "cover": "同套命令与数据类型 → key/BigKey/批处理 → 过期删除与淘汰，接到容量治理。",
      "review": "旧底层编码名称不作为当前版本结论。原小林文档补本周实际用到的编码与容量边界。",
      "stop": "把结果落回 T1/T2/T3 的数据结构选择、容量测量与淘汰实验。",
      "blocks": [
        {
          "label": "类型与命令",
          "lessons": [
            {
              "page": 8,
              "part": "基础篇-07.Redis命令-数据结构介绍",
              "duration": 435,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=8"
            },
            {
              "page": 9,
              "part": "基础篇-08.Redis命令-通用命令",
              "duration": 702,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=9"
            },
            {
              "page": 10,
              "part": "基础篇-09.Redis命令-String类型",
              "duration": 792,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=10"
            },
            {
              "page": 11,
              "part": "基础篇-10.Redis命令-Key的层级格式",
              "duration": 470,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=11"
            },
            {
              "page": 12,
              "part": "基础篇-11.Redis命令-Hash类型",
              "duration": 734,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=12"
            },
            {
              "page": 13,
              "part": "基础篇-12.Redis命令-List类型",
              "duration": 876,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=13"
            },
            {
              "page": 14,
              "part": "基础篇-13.Redis命令-Set类型",
              "duration": 618,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=14"
            },
            {
              "page": 15,
              "part": "基础篇-14.Redis命令-SortedSet类型",
              "duration": 993,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=15"
            }
          ]
        },
        {
          "label": "容量/批处理",
          "lessons": [
            {
              "page": 134,
              "part": "高级篇-Redis最佳实践-01.Redis最佳实践课程介绍",
              "duration": 79,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=134"
            },
            {
              "page": 135,
              "part": "高级篇-Redis最佳实践-02.键值设计-如何设计优雅的key",
              "duration": 562,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=135"
            },
            {
              "page": 136,
              "part": "高级篇-Redis最佳实践-03.键值设计-BigKey问题",
              "duration": 1421,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=136"
            },
            {
              "page": 137,
              "part": "高级篇-Redis最佳实践-04.键值设计-选择合适的数据结构",
              "duration": 1294,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=137"
            },
            {
              "page": 138,
              "part": "高级篇-Redis最佳实践-05.批处理优化-pipeline和mset",
              "duration": 1270,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=138"
            },
            {
              "page": 139,
              "part": "高级篇-Redis最佳实践-06.批处理优化-集群模式下的批处理问题",
              "duration": 848,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=139"
            }
          ]
        },
        {
          "label": "过期与淘汰",
          "lessons": [
            {
              "page": 174,
              "part": "原理篇-30.Redis内存回收-过期key处理",
              "duration": 1770,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=174"
            },
            {
              "page": 175,
              "part": "原理篇-31.Redis内存回收-内存淘汰策略",
              "duration": 2180,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=175"
            }
          ]
        }
      ]
    },
    "13": {
      "sourceId": "redis",
      "lessons": [
        {
          "page": 35,
          "part": "实战篇-商户查询缓存-01.什么是缓存",
          "duration": 619,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=35"
        },
        {
          "page": 36,
          "part": "实战篇-商户查询缓存-02.添加商户缓存",
          "duration": 854,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=36"
        },
        {
          "page": 37,
          "part": "实战篇-商户查询缓存-03.缓存练习题分析",
          "duration": 164,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=37"
        },
        {
          "page": 38,
          "part": "实战篇-商户查询缓存-04.缓存更新策略",
          "duration": 1587,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=38"
        },
        {
          "page": 39,
          "part": "实战篇-商户查询缓存-05.实现商铺缓存与数据库的双写一致",
          "duration": 599,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=39"
        },
        {
          "page": 40,
          "part": "实战篇-商户查询缓存-06.缓存穿透的解决思路",
          "duration": 525,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=40"
        },
        {
          "page": 41,
          "part": "实战篇-商户查询缓存-07.编码解决商铺查询的缓存穿透问题",
          "duration": 629,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=41"
        },
        {
          "page": 42,
          "part": "实战篇-商户查询缓存-08.缓存雪崩问题及解决思路",
          "duration": 574,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=42"
        },
        {
          "page": 43,
          "part": "实战篇-商户查询缓存-09.缓存击穿问题及解决方案",
          "duration": 960,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=43"
        },
        {
          "page": 44,
          "part": "实战篇-商户查询缓存-10.利用互斥锁解决缓存击穿问题",
          "duration": 1320,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=44"
        },
        {
          "page": 45,
          "part": "实战篇-商户查询缓存-11.利用逻辑过期解决缓存击穿问题",
          "duration": 1692,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=45"
        },
        {
          "page": 47,
          "part": "实战篇-商户查询缓存-13.缓存总结",
          "duration": 821,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=47"
        }
      ],
      "cover": "从加入缓存一直讲到一致性、穿透/雪崩/击穿与两种重建方式；保留问题到实现的过程。",
      "review": "原小林文档复习双写失败窗口和各策略代价；互斥锁重建与逻辑过期都不是任意故障下的强一致保证。",
      "stop": "观摩 Java 示例的数据流，实操仍改自己的 Go ShortLink；不另写 Spring 工程。",
      "blocks": [
        {
          "label": "缓存加入与一致性",
          "lessons": [
            {
              "page": 35,
              "part": "实战篇-商户查询缓存-01.什么是缓存",
              "duration": 619,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=35"
            },
            {
              "page": 36,
              "part": "实战篇-商户查询缓存-02.添加商户缓存",
              "duration": 854,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=36"
            },
            {
              "page": 37,
              "part": "实战篇-商户查询缓存-03.缓存练习题分析",
              "duration": 164,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=37"
            },
            {
              "page": 38,
              "part": "实战篇-商户查询缓存-04.缓存更新策略",
              "duration": 1587,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=38"
            },
            {
              "page": 39,
              "part": "实战篇-商户查询缓存-05.实现商铺缓存与数据库的双写一致",
              "duration": 599,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=39"
            }
          ]
        },
        {
          "label": "缓存故障与重建",
          "lessons": [
            {
              "page": 40,
              "part": "实战篇-商户查询缓存-06.缓存穿透的解决思路",
              "duration": 525,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=40"
            },
            {
              "page": 41,
              "part": "实战篇-商户查询缓存-07.编码解决商铺查询的缓存穿透问题",
              "duration": 629,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=41"
            },
            {
              "page": 42,
              "part": "实战篇-商户查询缓存-08.缓存雪崩问题及解决思路",
              "duration": 574,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=42"
            },
            {
              "page": 43,
              "part": "实战篇-商户查询缓存-09.缓存击穿问题及解决方案",
              "duration": 960,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=43"
            },
            {
              "page": 44,
              "part": "实战篇-商户查询缓存-10.利用互斥锁解决缓存击穿问题",
              "duration": 1320,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=44"
            },
            {
              "page": 45,
              "part": "实战篇-商户查询缓存-11.利用逻辑过期解决缓存击穿问题",
              "duration": 1692,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=45"
            },
            {
              "page": 47,
              "part": "实战篇-商户查询缓存-13.缓存总结",
              "duration": 821,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=47"
            }
          ]
        }
      ]
    },
    "14": {
      "sourceId": "redis",
      "lessons": [
        {
          "page": 97,
          "part": "高级篇-分布式缓存-02-Redis持久化-RDB演示",
          "duration": 827,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=97"
        },
        {
          "page": 98,
          "part": "高级篇-分布式缓存-03-Redis持久化-RDB的fork原理",
          "duration": 501,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=98"
        },
        {
          "page": 99,
          "part": "高级篇-分布式缓存-04-Redis持久化-AOF演示",
          "duration": 952,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=99"
        },
        {
          "page": 100,
          "part": "高级篇-分布式缓存-05-Redis持久化-RDB和AOF的对比",
          "duration": 247,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=100"
        },
        {
          "page": 101,
          "part": "高级篇-分布式缓存-06-Redis主从-主从集群结构",
          "duration": 226,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=101"
        },
        {
          "page": 102,
          "part": "高级篇-分布式缓存-07-Redis主从-搭建主从集群",
          "duration": 904,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=102"
        },
        {
          "page": 103,
          "part": "高级篇-分布式缓存-08-Redis主从-主从的全量同步原理",
          "duration": 808,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=103"
        },
        {
          "page": 104,
          "part": "高级篇-分布式缓存-09-Redis主从-增量同步原理",
          "duration": 739,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=104"
        },
        {
          "page": 105,
          "part": "高级篇-分布式缓存-10-Redis哨兵-哨兵的作用和工作原理",
          "duration": 806,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=105"
        },
        {
          "page": 106,
          "part": "高级篇-分布式缓存-11-Redis哨兵-搭建哨兵集群",
          "duration": 817,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=106"
        },
        {
          "page": 108,
          "part": "高级篇-分布式缓存-13-Redis分片集群-搭建分片集群",
          "duration": 813,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=108"
        },
        {
          "page": 109,
          "part": "高级篇-分布式缓存-14-Redis分片集群-散列插槽",
          "duration": 597,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=109"
        },
        {
          "page": 110,
          "part": "高级篇-分布式缓存-15-Redis分片集群-集群伸缩",
          "duration": 607,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=110"
        },
        {
          "page": 111,
          "part": "高级篇-分布式缓存-16-Redis分片集群-故障转移",
          "duration": 474,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=111"
        },
        {
          "page": 56,
          "part": "实战篇-09.分布式锁-基本原理和不同实现方式对比",
          "duration": 926,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=56"
        },
        {
          "page": 57,
          "part": "实战篇-10.分布式锁-Redis的分布式锁实现思路",
          "duration": 561,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=57"
        },
        {
          "page": 58,
          "part": "实战篇-11.分布式锁-实现Redis分布式锁版本1",
          "duration": 1087,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=58"
        },
        {
          "page": 59,
          "part": "实战篇-12.分布式锁-Redis分布式锁误删问题",
          "duration": 458,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=59"
        },
        {
          "page": 60,
          "part": "实战篇-13.分布式锁-解决Redis分布式锁误删问题",
          "duration": 550,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=60"
        },
        {
          "page": 61,
          "part": "实战篇-14.分布式锁-分布式锁的原子性问题",
          "duration": 253,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=61"
        },
        {
          "page": 62,
          "part": "实战篇-15.分布式锁-Lua脚本解决多条命令原子性问题",
          "duration": 1358,
          "bvid": "BV1cr4y1671t",
          "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=62"
        }
      ],
      "cover": "RDB/AOF → 主从复制 → 哨兵/分片/故障转移；接着读锁的原子性与误删失败过程。",
      "review": "原小林文档补当前版本持久化细节、复制丢失窗口和锁续期/过期持有者边界；不把 Redis 锁当租约/fencing 的替代品。",
      "stop": "只搭原任务需要的最小环境；做故障与恢复证据，不复制整套 Java 部署。",
      "blocks": [
        {
          "label": "持久化与复制",
          "lessons": [
            {
              "page": 97,
              "part": "高级篇-分布式缓存-02-Redis持久化-RDB演示",
              "duration": 827,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=97"
            },
            {
              "page": 98,
              "part": "高级篇-分布式缓存-03-Redis持久化-RDB的fork原理",
              "duration": 501,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=98"
            },
            {
              "page": 99,
              "part": "高级篇-分布式缓存-04-Redis持久化-AOF演示",
              "duration": 952,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=99"
            },
            {
              "page": 100,
              "part": "高级篇-分布式缓存-05-Redis持久化-RDB和AOF的对比",
              "duration": 247,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=100"
            },
            {
              "page": 101,
              "part": "高级篇-分布式缓存-06-Redis主从-主从集群结构",
              "duration": 226,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=101"
            },
            {
              "page": 102,
              "part": "高级篇-分布式缓存-07-Redis主从-搭建主从集群",
              "duration": 904,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=102"
            },
            {
              "page": 103,
              "part": "高级篇-分布式缓存-08-Redis主从-主从的全量同步原理",
              "duration": 808,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=103"
            },
            {
              "page": 104,
              "part": "高级篇-分布式缓存-09-Redis主从-增量同步原理",
              "duration": 739,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=104"
            }
          ]
        },
        {
          "label": "哨兵与分片",
          "lessons": [
            {
              "page": 105,
              "part": "高级篇-分布式缓存-10-Redis哨兵-哨兵的作用和工作原理",
              "duration": 806,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=105"
            },
            {
              "page": 106,
              "part": "高级篇-分布式缓存-11-Redis哨兵-搭建哨兵集群",
              "duration": 817,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=106"
            },
            {
              "page": 108,
              "part": "高级篇-分布式缓存-13-Redis分片集群-搭建分片集群",
              "duration": 813,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=108"
            },
            {
              "page": 109,
              "part": "高级篇-分布式缓存-14-Redis分片集群-散列插槽",
              "duration": 597,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=109"
            },
            {
              "page": 110,
              "part": "高级篇-分布式缓存-15-Redis分片集群-集群伸缩",
              "duration": 607,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=110"
            },
            {
              "page": 111,
              "part": "高级篇-分布式缓存-16-Redis分片集群-故障转移",
              "duration": 474,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=111"
            }
          ]
        },
        {
          "label": "分布式锁与失败边界",
          "lessons": [
            {
              "page": 56,
              "part": "实战篇-09.分布式锁-基本原理和不同实现方式对比",
              "duration": 926,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=56"
            },
            {
              "page": 57,
              "part": "实战篇-10.分布式锁-Redis的分布式锁实现思路",
              "duration": 561,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=57"
            },
            {
              "page": 58,
              "part": "实战篇-11.分布式锁-实现Redis分布式锁版本1",
              "duration": 1087,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=58"
            },
            {
              "page": 59,
              "part": "实战篇-12.分布式锁-Redis分布式锁误删问题",
              "duration": 458,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=59"
            },
            {
              "page": 60,
              "part": "实战篇-13.分布式锁-解决Redis分布式锁误删问题",
              "duration": 550,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=60"
            },
            {
              "page": 61,
              "part": "实战篇-14.分布式锁-分布式锁的原子性问题",
              "duration": 253,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=61"
            },
            {
              "page": 62,
              "part": "实战篇-15.分布式锁-Lua脚本解决多条命令原子性问题",
              "duration": 1358,
              "bvid": "BV1cr4y1671t",
              "url": "https://www.bilibili.com/video/BV1cr4y1671t/?p=62"
            }
          ]
        }
      ]
    },
    "15": {
      "sourceId": "kafka",
      "lessons": [
        {
          "page": 3,
          "part": "03-Kafka-软件介绍",
          "duration": 718,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=3"
        },
        {
          "page": 5,
          "part": "05-Kafka-组件",
          "duration": 277,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=5"
        },
        {
          "page": 13,
          "part": "13-kafka-基础架构图形推演",
          "duration": 1410,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=13"
        },
        {
          "page": 14,
          "part": "14-kafka-基础组件图形推演",
          "duration": 1076,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=14"
        },
        {
          "page": 24,
          "part": "24-kafka-生产数据-生产者流程分析",
          "duration": 748,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=24"
        },
        {
          "page": 25,
          "part": "25-kafka-生产数据-拦截器和序列化处理",
          "duration": 996,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=25"
        },
        {
          "page": 26,
          "part": "26-kafka-生产数据-分区器及分区计算策略",
          "duration": 1079,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=26"
        },
        {
          "page": 27,
          "part": "27-kafka-生产数据-数据收集器和Sender发送线程",
          "duration": 649,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=27"
        },
        {
          "page": 28,
          "part": "28-kafka-生产数据-数据的异步发送和同步发送",
          "duration": 398,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=28"
        },
        {
          "page": 29,
          "part": "29-kafka-生产数据-ACKS数据接收应答处理机制",
          "duration": 768,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=29"
        },
        {
          "page": 30,
          "part": "30-kafka-生产数据-数据重复及乱序的原因及原理",
          "duration": 975,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=30"
        },
        {
          "page": 31,
          "part": "31-kafka-生产数据-幂等性操作",
          "duration": 914,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=31"
        },
        {
          "page": 32,
          "part": "32-kafka-生产数据-事务操作",
          "duration": 760,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=32"
        },
        {
          "page": 33,
          "part": "33-kafka-生产数据-事务流程",
          "duration": 1894,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=33"
        },
        {
          "page": 34,
          "part": "34-kafka-存储数据-数据存储文件类型介绍",
          "duration": 1057,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=34"
        },
        {
          "page": 35,
          "part": "35-kafka-存储数据-数据存储流程",
          "duration": 583,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=35"
        },
        {
          "page": 36,
          "part": "36-kafka-存储数据-数据文件内容及数据定位",
          "duration": 1418,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=36"
        },
        {
          "page": 38,
          "part": "38-kafka-存储数据-数据同步一致性问题",
          "duration": 825,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=38"
        },
        {
          "page": 39,
          "part": "39-kafka-存储数据-副本同步时的水位线变化",
          "duration": 399,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=39"
        },
        {
          "page": 40,
          "part": "40-kafka-存储数据-ISR列表变化和传播",
          "duration": 658,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=40"
        },
        {
          "page": 41,
          "part": "41-kafka-存储数据-日志清理策略",
          "duration": 410,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=41"
        },
        {
          "page": 42,
          "part": "42-kafka-消费数据-消费数据的基本流程",
          "duration": 352,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=42"
        },
        {
          "page": 43,
          "part": "43-kafka-消费数据-数据消费的偏移量问题",
          "duration": 702,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=43"
        },
        {
          "page": 44,
          "part": "44-kafka-消费数据-偏移量同步提交和异步提交",
          "duration": 390,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=44"
        },
        {
          "page": 45,
          "part": "45-kafka-消费数据-事务数据的隔离级别",
          "duration": 919,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=45"
        },
        {
          "page": 46,
          "part": "46-kafka-消费数据-消费者组介绍",
          "duration": 1131,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=46"
        },
        {
          "page": 47,
          "part": "47-kafka-消费数据-消费者偏移量内部主题",
          "duration": 262,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=47"
        },
        {
          "page": 48,
          "part": "48-kafka-消费数据-分区分配策略介绍",
          "duration": 919,
          "bvid": "BV1Gp421m7UN",
          "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=48"
        }
      ],
      "cover": "架构 → 生产/ACK/幂等/事务 → 日志/副本/ISR → offset/消费者组/分区分配。一条顺序把可靠性学全到本周需要的深度。",
      "review": "原中文 Kafka 主文档复习概念；Go 消费循环、业务去重和 Outbox 仍看已注明范围的两份缺口资料。",
      "stop": "能解释处理前/后提交 offset 的差异，就用本周最小实验做重复消费与修复；不搭生产集群。",
      "gapRefs": [
        {
          "name": "AWS 中文：事务发件箱模式",
          "url": "https://docs.aws.amazon.com/zh_cn/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html",
          "scope": "只看“意图”“问题和注意事项”“将发件箱表与关系数据库配合使用”的图解；不照做 AWS/Java 部署。",
          "role": "主文档缺口 · 中文",
          "requiredGap": true
        },
        {
          "name": "IBM Sarama：Go 消费者组示例",
          "url": "https://github.com/IBM/sarama/tree/main/examples/consumergroup",
          "scope": "只查消息处理循环、MarkMessage 与配置；标记 offset 与实际提交不是同一时刻，用故障实验检验处理/提交边界。",
          "role": "Go 实操查阅",
          "requiredGap": true
        }
      ],
      "docScope": "只复习 Kafka 教程的“消费者”“可靠传输”中还答不出的 offset、重复/丢失与可靠性边界；视频已理解的快速入门与生产者基础不用重读。",
      "docHours": 1.5,
      "blocks": [
        {
          "label": "架构和组件",
          "lessons": [
            {
              "page": 3,
              "part": "03-Kafka-软件介绍",
              "duration": 718,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=3"
            },
            {
              "page": 5,
              "part": "05-Kafka-组件",
              "duration": 277,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=5"
            },
            {
              "page": 13,
              "part": "13-kafka-基础架构图形推演",
              "duration": 1410,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=13"
            },
            {
              "page": 14,
              "part": "14-kafka-基础组件图形推演",
              "duration": 1076,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=14"
            }
          ]
        },
        {
          "label": "生产流程",
          "lessons": [
            {
              "page": 24,
              "part": "24-kafka-生产数据-生产者流程分析",
              "duration": 748,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=24"
            },
            {
              "page": 25,
              "part": "25-kafka-生产数据-拦截器和序列化处理",
              "duration": 996,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=25"
            },
            {
              "page": 26,
              "part": "26-kafka-生产数据-分区器及分区计算策略",
              "duration": 1079,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=26"
            },
            {
              "page": 27,
              "part": "27-kafka-生产数据-数据收集器和Sender发送线程",
              "duration": 649,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=27"
            },
            {
              "page": 28,
              "part": "28-kafka-生产数据-数据的异步发送和同步发送",
              "duration": 398,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=28"
            }
          ]
        },
        {
          "label": "ACK/幂等/事务",
          "lessons": [
            {
              "page": 29,
              "part": "29-kafka-生产数据-ACKS数据接收应答处理机制",
              "duration": 768,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=29"
            },
            {
              "page": 30,
              "part": "30-kafka-生产数据-数据重复及乱序的原因及原理",
              "duration": 975,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=30"
            },
            {
              "page": 31,
              "part": "31-kafka-生产数据-幂等性操作",
              "duration": 914,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=31"
            },
            {
              "page": 32,
              "part": "32-kafka-生产数据-事务操作",
              "duration": 760,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=32"
            },
            {
              "page": 33,
              "part": "33-kafka-生产数据-事务流程",
              "duration": 1894,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=33"
            }
          ]
        },
        {
          "label": "日志存储",
          "lessons": [
            {
              "page": 34,
              "part": "34-kafka-存储数据-数据存储文件类型介绍",
              "duration": 1057,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=34"
            },
            {
              "page": 35,
              "part": "35-kafka-存储数据-数据存储流程",
              "duration": 583,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=35"
            },
            {
              "page": 36,
              "part": "36-kafka-存储数据-数据文件内容及数据定位",
              "duration": 1418,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=36"
            }
          ]
        },
        {
          "label": "副本与 ISR",
          "lessons": [
            {
              "page": 38,
              "part": "38-kafka-存储数据-数据同步一致性问题",
              "duration": 825,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=38"
            },
            {
              "page": 39,
              "part": "39-kafka-存储数据-副本同步时的水位线变化",
              "duration": 399,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=39"
            },
            {
              "page": 40,
              "part": "40-kafka-存储数据-ISR列表变化和传播",
              "duration": 658,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=40"
            },
            {
              "page": 41,
              "part": "41-kafka-存储数据-日志清理策略",
              "duration": 410,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=41"
            }
          ]
        },
        {
          "label": "消费与提交",
          "lessons": [
            {
              "page": 42,
              "part": "42-kafka-消费数据-消费数据的基本流程",
              "duration": 352,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=42"
            },
            {
              "page": 43,
              "part": "43-kafka-消费数据-数据消费的偏移量问题",
              "duration": 702,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=43"
            },
            {
              "page": 44,
              "part": "44-kafka-消费数据-偏移量同步提交和异步提交",
              "duration": 390,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=44"
            },
            {
              "page": 45,
              "part": "45-kafka-消费数据-事务数据的隔离级别",
              "duration": 919,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=45"
            },
            {
              "page": 46,
              "part": "46-kafka-消费数据-消费者组介绍",
              "duration": 1131,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=46"
            },
            {
              "page": 47,
              "part": "47-kafka-消费数据-消费者偏移量内部主题",
              "duration": 262,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=47"
            },
            {
              "page": 48,
              "part": "48-kafka-消费数据-分区分配策略介绍",
              "duration": 919,
              "bvid": "BV1Gp421m7UN",
              "url": "https://www.bilibili.com/video/BV1Gp421m7UN/?p=48"
            }
          ]
        }
      ]
    },
    "17": {
      "sourceId": "network",
      "lessons": [
        {
          "page": 59,
          "part": "5.3 UDP和TCP的对比",
          "duration": 625,
          "bvid": "BV1c4411d7jb",
          "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=59"
        },
        {
          "page": 60,
          "part": "5.4 TCP的流量控制",
          "duration": 835,
          "bvid": "BV1c4411d7jb",
          "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=60"
        },
        {
          "page": 61,
          "part": "5.5 TCP的拥塞控制",
          "duration": 1299,
          "bvid": "BV1c4411d7jb",
          "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=61"
        },
        {
          "page": 64,
          "part": "5.8.1 TCP的运输连接管理—TCP的连接建立",
          "duration": 775,
          "bvid": "BV1c4411d7jb",
          "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=64"
        },
        {
          "page": 65,
          "part": "5.8.2 TCP的运输连接管理—TCP的连接释放",
          "duration": 593,
          "bvid": "BV1c4411d7jb",
          "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=65"
        },
        {
          "page": 70,
          "part": "6.4 域名系统DNS",
          "duration": 1217,
          "bvid": "BV1c4411d7jb",
          "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=70"
        },
        {
          "page": 73,
          "part": "6.7 万维网WWW",
          "duration": 1631,
          "bvid": "BV1c4411d7jb",
          "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=73"
        }
      ],
      "cover": "UDP/TCP、流量/拥塞控制、连接建立/释放、DNS 与 WWW。",
      "review": "补 TLS、HTTP/2/3 与连接复用；抓包只围绕自己的一次请求，不补全考研网络课。",
      "stop": "能沿 DNS → TCP → HTTP 解释请求，并从抓包找对应阶段后进入 T1。",
      "blocks": [
        {
          "label": "本周查漏范围",
          "lessons": [
            {
              "page": 59,
              "part": "5.3 UDP和TCP的对比",
              "duration": 625,
              "bvid": "BV1c4411d7jb",
              "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=59"
            },
            {
              "page": 60,
              "part": "5.4 TCP的流量控制",
              "duration": 835,
              "bvid": "BV1c4411d7jb",
              "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=60"
            },
            {
              "page": 61,
              "part": "5.5 TCP的拥塞控制",
              "duration": 1299,
              "bvid": "BV1c4411d7jb",
              "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=61"
            },
            {
              "page": 64,
              "part": "5.8.1 TCP的运输连接管理—TCP的连接建立",
              "duration": 775,
              "bvid": "BV1c4411d7jb",
              "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=64"
            },
            {
              "page": 65,
              "part": "5.8.2 TCP的运输连接管理—TCP的连接释放",
              "duration": 593,
              "bvid": "BV1c4411d7jb",
              "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=65"
            },
            {
              "page": 70,
              "part": "6.4 域名系统DNS",
              "duration": 1217,
              "bvid": "BV1c4411d7jb",
              "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=70"
            },
            {
              "page": 73,
              "part": "6.7 万维网WWW",
              "duration": 1631,
              "bvid": "BV1c4411d7jb",
              "url": "https://www.bilibili.com/video/BV1c4411d7jb/?p=73"
            }
          ]
        }
      ]
    },
    "18": {
      "sourceId": "io",
      "lessons": [
        {
          "page": 1,
          "part": "1-理解IO复用-阻塞与非阻塞",
          "duration": 768,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=1"
        },
        {
          "page": 2,
          "part": "2-IO复用解决的问题",
          "duration": 919,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=2"
        },
        {
          "page": 3,
          "part": "3-(附加)epoll的API及内部机制",
          "duration": 900,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=3"
        },
        {
          "page": 4,
          "part": "4-(附加)epoll水平触发与边缘触发",
          "duration": 349,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=4"
        },
        {
          "page": 5,
          "part": "5-常见多路IO复用并发模型提纲",
          "duration": 302,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=5"
        },
        {
          "page": 6,
          "part": "6-模型1-单线程Accept",
          "duration": 453,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=6"
        },
        {
          "page": 7,
          "part": "7-模型2-单线程Accept+多线程读写业务",
          "duration": 698,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=7"
        },
        {
          "page": 8,
          "part": "8-模型3-单线程多路IO复用",
          "duration": 808,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=8"
        },
        {
          "page": 9,
          "part": "9-模型4-单线程多路IO复用+多线程读写业务(工作池)",
          "duration": 944,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=9"
        },
        {
          "page": 10,
          "part": "10-模型5-单线程IO复用+多线程IO复用(链接线程池)",
          "duration": 1159,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=10"
        },
        {
          "page": 11,
          "part": "11-模型5(进程版)",
          "duration": 564,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=11"
        },
        {
          "page": 12,
          "part": "12-模型6-单线程多路IO复用+多线程多路IO复用+多线程",
          "duration": 864,
          "bvid": "BV1jK4y1N7ST",
          "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=12"
        }
      ],
      "cover": "完整走过阻塞/非阻塞、epoll 与服务器并发模型，从图到连接/工作池组织方式。",
      "review": "原小林 OS 文档补进程/线程、虚拟内存/缺页与零拷贝；I/O 视频不覆盖这些整块 OS 知识。",
      "stop": "沿原任务做观察与排障，不手写六套服务器。把 I/O 现象和 Go 程序的资源行为对应起来。",
      "docHours": 2,
      "blocks": [
        {
          "label": "阻塞/非阻塞与 epoll",
          "lessons": [
            {
              "page": 1,
              "part": "1-理解IO复用-阻塞与非阻塞",
              "duration": 768,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=1"
            },
            {
              "page": 2,
              "part": "2-IO复用解决的问题",
              "duration": 919,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=2"
            },
            {
              "page": 3,
              "part": "3-(附加)epoll的API及内部机制",
              "duration": 900,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=3"
            },
            {
              "page": 4,
              "part": "4-(附加)epoll水平触发与边缘触发",
              "duration": 349,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=4"
            }
          ]
        },
        {
          "label": "服务器并发模型",
          "lessons": [
            {
              "page": 5,
              "part": "5-常见多路IO复用并发模型提纲",
              "duration": 302,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=5"
            },
            {
              "page": 6,
              "part": "6-模型1-单线程Accept",
              "duration": 453,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=6"
            },
            {
              "page": 7,
              "part": "7-模型2-单线程Accept+多线程读写业务",
              "duration": 698,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=7"
            },
            {
              "page": 8,
              "part": "8-模型3-单线程多路IO复用",
              "duration": 808,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=8"
            },
            {
              "page": 9,
              "part": "9-模型4-单线程多路IO复用+多线程读写业务(工作池)",
              "duration": 944,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=9"
            },
            {
              "page": 10,
              "part": "10-模型5-单线程IO复用+多线程IO复用(链接线程池)",
              "duration": 1159,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=10"
            },
            {
              "page": 11,
              "part": "11-模型5(进程版)",
              "duration": 564,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=11"
            },
            {
              "page": 12,
              "part": "12-模型6-单线程多路IO复用+多线程多路IO复用+多线程",
              "duration": 864,
              "bvid": "BV1jK4y1N7ST",
              "url": "https://www.bilibili.com/video/BV1jK4y1N7ST/?p=12"
            }
          ]
        }
      ]
    },
    "33": {
      "sourceId": "heima-ai",
      "lessons": [
        {
          "page": 1,
          "part": "课程导学",
          "duration": 318,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=1"
        },
        {
          "page": 2,
          "part": "前置准备-01、通义千问大模型的接入",
          "duration": 429,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=2"
        },
        {
          "page": 3,
          "part": "前置准备-02、代码调用云端的大模型",
          "duration": 483,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=3"
        },
        {
          "page": 4,
          "part": "前置准备-03、使用环境变量保护APIKEY",
          "duration": 489,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=4"
        },
        {
          "page": 8,
          "part": "OpenAI库基础使用-01、OpenAI库的基础使用",
          "duration": 872,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=8"
        },
        {
          "page": 9,
          "part": "OpenAI库基础使用-02、OpenAI库的流式输出模式",
          "duration": 315,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=9"
        },
        {
          "page": 10,
          "part": "OpenAI库基础使用-03、OpenAI库附带历史消息调用模型",
          "duration": 282,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=10"
        }
      ],
      "cover": "云端模型接入、环境变量、普通/流式调用和历史消息；先有一次可观测的模型请求。",
      "review": "原文档补 Token/上下文窗口、采样参数、usage/cost、重试与结构化结果校验，视频没有覆盖全部边界。",
      "stop": "只理解 Python 示例中的输入、输出和调用流程；用 Go 完成原 T1–T3，不另交 Python 项目。",
      "prerequisiteHours": 2,
      "docHours": 1,
      "prerequisite": "开始前需能读 Python 的 def/class、list/dict、import 和异常处理。已会就跳过；不会先留 2h 读中文教程的 4.8、5.5、6、8.3、9.3 节，只到能跟读示例为止。2h 不够就顺延，不要求学成 Python 后端。",
      "prerequisiteUrl": "https://docs.python.org/zh-cn/3/tutorial/",
      "blocks": [
        {
          "label": "模型调用入手",
          "lessons": [
            {
              "page": 1,
              "part": "课程导学",
              "duration": 318,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=1"
            },
            {
              "page": 2,
              "part": "前置准备-01、通义千问大模型的接入",
              "duration": 429,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=2"
            },
            {
              "page": 3,
              "part": "前置准备-02、代码调用云端的大模型",
              "duration": 483,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=3"
            },
            {
              "page": 4,
              "part": "前置准备-03、使用环境变量保护APIKEY",
              "duration": 489,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=4"
            },
            {
              "page": 8,
              "part": "OpenAI库基础使用-01、OpenAI库的基础使用",
              "duration": 872,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=8"
            },
            {
              "page": 9,
              "part": "OpenAI库基础使用-02、OpenAI库的流式输出模式",
              "duration": 315,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=9"
            },
            {
              "page": 10,
              "part": "OpenAI库基础使用-03、OpenAI库附带历史消息调用模型",
              "duration": 282,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=10"
            }
          ]
        }
      ]
    },
    "34": {
      "sourceId": "heima-ai",
      "lessons": [
        {
          "page": 11,
          "part": "提示词工程-01、大模型prompt工程指南",
          "duration": 623,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=11"
        },
        {
          "page": 12,
          "part": "提示词工程-02、提示词优化案例介绍和零样本少样本思想",
          "duration": 695,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=12"
        },
        {
          "page": 13,
          "part": "提示词工程-03、提示词优化案例_金融文本分类任务",
          "duration": 839,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=13"
        },
        {
          "page": 14,
          "part": "提示词工程-04、Json数据格式",
          "duration": 897,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=14"
        },
        {
          "page": 15,
          "part": "提示词工程-05、提示词优化案例_金融文本信息抽取",
          "duration": 826,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=15"
        },
        {
          "page": 16,
          "part": "提示词工程-06、提示词优化案例_金融文本匹配",
          "duration": 620,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=16"
        },
        {
          "page": 17,
          "part": "RAG开发-01、LangChain的简介",
          "duration": 205,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=17"
        },
        {
          "page": 18,
          "part": "RAG开发-02、LangChain的环境部署",
          "duration": 215,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=18"
        },
        {
          "page": 19,
          "part": "RAG开发-03、RAG介绍",
          "duration": 824,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=19"
        },
        {
          "page": 20,
          "part": "RAG开发-04、[扩展]向量的基础概念",
          "duration": 548,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=20"
        },
        {
          "page": 21,
          "part": "RAG开发-05、[扩展]余弦相似度算法",
          "duration": 1080,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=21"
        },
        {
          "page": 22,
          "part": "RAG开发-06、LangChain调用大语言模型",
          "duration": 576,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=22"
        },
        {
          "page": 23,
          "part": "RAG开发-07、LangChain模型的流式输出",
          "duration": 362,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=23"
        },
        {
          "page": 24,
          "part": "RAG开发-08、LangChain调用聊天模型",
          "duration": 778,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=24"
        },
        {
          "page": 25,
          "part": "RAG开发-09、LangChain消息的简写形式",
          "duration": 470,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=25"
        },
        {
          "page": 26,
          "part": "RAG开发-10、LangChain调用嵌入模型",
          "duration": 731,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=26"
        },
        {
          "page": 27,
          "part": "RAG开发-11、LangChain通用提示词模板",
          "duration": 704,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=27"
        },
        {
          "page": 28,
          "part": "RAG开发-12、FewShot提示词模板",
          "duration": 1049,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=28"
        },
        {
          "page": 29,
          "part": "RAG开发-13、模板类的format和invoke方法",
          "duration": 873,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=29"
        },
        {
          "page": 30,
          "part": "RAG开发-14、ChatPromptTemplate的使用",
          "duration": 858,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=30"
        },
        {
          "page": 31,
          "part": "RAG开发-15、Chain的基础使用",
          "duration": 1093,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=31"
        },
        {
          "page": 33,
          "part": "RAG开发-17、简单理解Runnable接口",
          "duration": 466,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=33"
        },
        {
          "page": 34,
          "part": "RAG开发-18、StrOutputParser字符串输出解析器",
          "duration": 751,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=34"
        },
        {
          "page": 35,
          "part": "RAG开发-19、JsonOutputParser和多模型执行链",
          "duration": 1189,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=35"
        },
        {
          "page": 36,
          "part": "RAG开发-20、自定义函数加入链",
          "duration": 878,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=36"
        },
        {
          "page": 37,
          "part": "RAG开发-21、Memory临时会话记忆",
          "duration": 1684,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=37"
        },
        {
          "page": 38,
          "part": "RAG开发-22、Memory长期会话记忆",
          "duration": 1483,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=38"
        }
      ],
      "cover": "提示案例 → RAG/向量背景 → LangChain 模型/提示/链/解析器 → 临时与持久化历史。连续铺好 W35/W37 项目的调用前置。",
      "review": "当前周只验收输入契约和回归测试；LangChain 链/历史讲解是后续项目的前置，不增加必须掌握的第二套后端框架。原文档补 prompt version、注入和 Go schema 校验。",
      "stop": "第一自然周看提示案例并做 T1；第二自然周继续链与历史模块、完成 T2/T3 与原验收。只观摩链的数据流，不背 Python API。",
      "docHours": 1,
      "blocks": [
        {
          "label": "提示案例与框架入口",
          "lessons": [
            {
              "page": 11,
              "part": "提示词工程-01、大模型prompt工程指南",
              "duration": 623,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=11"
            },
            {
              "page": 12,
              "part": "提示词工程-02、提示词优化案例介绍和零样本少样本思想",
              "duration": 695,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=12"
            },
            {
              "page": 13,
              "part": "提示词工程-03、提示词优化案例_金融文本分类任务",
              "duration": 839,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=13"
            },
            {
              "page": 14,
              "part": "提示词工程-04、Json数据格式",
              "duration": 897,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=14"
            },
            {
              "page": 15,
              "part": "提示词工程-05、提示词优化案例_金融文本信息抽取",
              "duration": 826,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=15"
            },
            {
              "page": 16,
              "part": "提示词工程-06、提示词优化案例_金融文本匹配",
              "duration": 620,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=16"
            },
            {
              "page": 17,
              "part": "RAG开发-01、LangChain的简介",
              "duration": 205,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=17"
            },
            {
              "page": 18,
              "part": "RAG开发-02、LangChain的环境部署",
              "duration": 215,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=18"
            }
          ]
        },
        {
          "label": "向量背景与模型接口",
          "lessons": [
            {
              "page": 19,
              "part": "RAG开发-03、RAG介绍",
              "duration": 824,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=19"
            },
            {
              "page": 20,
              "part": "RAG开发-04、[扩展]向量的基础概念",
              "duration": 548,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=20"
            },
            {
              "page": 21,
              "part": "RAG开发-05、[扩展]余弦相似度算法",
              "duration": 1080,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=21"
            },
            {
              "page": 22,
              "part": "RAG开发-06、LangChain调用大语言模型",
              "duration": 576,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=22"
            },
            {
              "page": 23,
              "part": "RAG开发-07、LangChain模型的流式输出",
              "duration": 362,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=23"
            },
            {
              "page": 24,
              "part": "RAG开发-08、LangChain调用聊天模型",
              "duration": 778,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=24"
            },
            {
              "page": 25,
              "part": "RAG开发-09、LangChain消息的简写形式",
              "duration": 470,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=25"
            },
            {
              "page": 26,
              "part": "RAG开发-10、LangChain调用嵌入模型",
              "duration": 731,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=26"
            }
          ]
        },
        {
          "label": "提示模板与链",
          "lessons": [
            {
              "page": 27,
              "part": "RAG开发-11、LangChain通用提示词模板",
              "duration": 704,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=27"
            },
            {
              "page": 28,
              "part": "RAG开发-12、FewShot提示词模板",
              "duration": 1049,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=28"
            },
            {
              "page": 29,
              "part": "RAG开发-13、模板类的format和invoke方法",
              "duration": 873,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=29"
            },
            {
              "page": 30,
              "part": "RAG开发-14、ChatPromptTemplate的使用",
              "duration": 858,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=30"
            },
            {
              "page": 31,
              "part": "RAG开发-15、Chain的基础使用",
              "duration": 1093,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=31"
            }
          ]
        },
        {
          "label": "解析器与自定义函数",
          "lessons": [
            {
              "page": 33,
              "part": "RAG开发-17、简单理解Runnable接口",
              "duration": 466,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=33"
            },
            {
              "page": 34,
              "part": "RAG开发-18、StrOutputParser字符串输出解析器",
              "duration": 751,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=34"
            },
            {
              "page": 35,
              "part": "RAG开发-19、JsonOutputParser和多模型执行链",
              "duration": 1189,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=35"
            },
            {
              "page": 36,
              "part": "RAG开发-20、自定义函数加入链",
              "duration": 878,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=36"
            }
          ]
        },
        {
          "label": "会话历史",
          "lessons": [
            {
              "page": 37,
              "part": "RAG开发-21、Memory临时会话记忆",
              "duration": 1684,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=37"
            },
            {
              "page": 38,
              "part": "RAG开发-22、Memory长期会话记忆",
              "duration": 1483,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=38"
            }
          ]
        }
      ]
    },
    "35": {
      "sourceId": "heima-ai",
      "lessons": [
        {
          "page": 39,
          "part": "RAG开发-23、CSVLoader",
          "duration": 1000,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=39"
        },
        {
          "page": 40,
          "part": "RAG开发-24、JSONLoader",
          "duration": 1018,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=40"
        },
        {
          "page": 41,
          "part": "RAG开发-25、TextLoader和文档分割器",
          "duration": 714,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=41"
        },
        {
          "page": 42,
          "part": "RAG开发-26、PyPDFLoader",
          "duration": 418,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=42"
        },
        {
          "page": 43,
          "part": "RAG开发-27、VectorStores向量存储",
          "duration": 1313,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=43"
        }
      ],
      "cover": "承接 W34 的向量背景，连续看 CSV/JSON/Text/PDF 加载、切分和向量存储。",
      "review": "原文档补文档 ID/权限/版本、chunk 对照和 Recall@5。视频里的向量相似度不等于相关性或事实正确。",
      "stop": "使用自己的 Go/值班文档做 T1–T3；不照搬示例数据充当评测集。",
      "docHours": 1,
      "blocks": [
        {
          "label": "文档加载、切分与存储",
          "lessons": [
            {
              "page": 39,
              "part": "RAG开发-23、CSVLoader",
              "duration": 1000,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=39"
            },
            {
              "page": 40,
              "part": "RAG开发-24、JSONLoader",
              "duration": 1018,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=40"
            },
            {
              "page": 41,
              "part": "RAG开发-25、TextLoader和文档分割器",
              "duration": 714,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=41"
            },
            {
              "page": 42,
              "part": "RAG开发-26、PyPDFLoader",
              "duration": 418,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=42"
            },
            {
              "page": 43,
              "part": "RAG开发-27、VectorStores向量存储",
              "duration": 1313,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=43"
            }
          ]
        }
      ]
    },
    "37": {
      "sourceId": "heima-ai",
      "lessons": [
        {
          "page": 44,
          "part": "RAG开发-28、基于向量检索构建提示词",
          "duration": 621,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=44"
        },
        {
          "page": 45,
          "part": "RAG开发-29、RunnablePassthrough的使用",
          "duration": 1420,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=45"
        },
        {
          "page": 46,
          "part": "RAG项目-01、RAG项目案例介绍",
          "duration": 377,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=46"
        },
        {
          "page": 48,
          "part": "RAG项目-03、RAG项目-md5工具函数开发",
          "duration": 1033,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=48"
        },
        {
          "page": 49,
          "part": "RAG项目-04、RAG项目-知识库更新服务",
          "duration": 1143,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=49"
        },
        {
          "page": 50,
          "part": "RAG项目-05、RAG项目-完成离线流程开发",
          "duration": 772,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=50"
        },
        {
          "page": 51,
          "part": "RAG项目-06、RAG项目-在线流程向量存储服务代码",
          "duration": 676,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=51"
        },
        {
          "page": 52,
          "part": "RAG项目-07、RAG项目-rag服务核心代码开发",
          "duration": 862,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=52"
        },
        {
          "page": 53,
          "part": "RAG项目-08、RAG项目-历史会话记录功能的实现",
          "duration": 1163,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=53"
        }
      ],
      "cover": "检索接提示 → 完整知识库服务 → 去重/更新 → 在线检索链 → 历史问答；不是只看 16 分钟 RAG 概览。",
      "review": "原文档补引用、拒答、冲突/过期文档测试及可观测字段。上传页和聊天 UI 为选学，不影响后端项目闭环。",
      "stop": "先把完整请求流画出来，然后只在自己的 Go DeepRAG 上完成 T1–T3；不交第二个 Python 知识库。",
      "docHours": 1,
      "blocks": [
        {
          "label": "检索链到知识库",
          "lessons": [
            {
              "page": 44,
              "part": "RAG开发-28、基于向量检索构建提示词",
              "duration": 621,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=44"
            },
            {
              "page": 45,
              "part": "RAG开发-29、RunnablePassthrough的使用",
              "duration": 1420,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=45"
            },
            {
              "page": 46,
              "part": "RAG项目-01、RAG项目案例介绍",
              "duration": 377,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=46"
            },
            {
              "page": 48,
              "part": "RAG项目-03、RAG项目-md5工具函数开发",
              "duration": 1033,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=48"
            },
            {
              "page": 49,
              "part": "RAG项目-04、RAG项目-知识库更新服务",
              "duration": 1143,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=49"
            }
          ]
        },
        {
          "label": "在线问答闭环",
          "lessons": [
            {
              "page": 50,
              "part": "RAG项目-05、RAG项目-完成离线流程开发",
              "duration": 772,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=50"
            },
            {
              "page": 51,
              "part": "RAG项目-06、RAG项目-在线流程向量存储服务代码",
              "duration": 676,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=51"
            },
            {
              "page": 52,
              "part": "RAG项目-07、RAG项目-rag服务核心代码开发",
              "duration": 862,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=52"
            },
            {
              "page": 53,
              "part": "RAG项目-08、RAG项目-历史会话记录功能的实现",
              "duration": 1163,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=53"
            }
          ]
        }
      ]
    },
    "41": {
      "sourceId": "heima-ai",
      "lessons": [
        {
          "page": 55,
          "part": "Agent智能体-01、Agent智能体介绍",
          "duration": 388,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=55"
        },
        {
          "page": 56,
          "part": "Agent智能体-02、Agent智能体初体验",
          "duration": 740,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=56"
        },
        {
          "page": 57,
          "part": "Agent智能体-03、Agent的流式输出",
          "duration": 893,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=57"
        },
        {
          "page": 58,
          "part": "Agent智能体-04、Agent的ReAct行动框架",
          "duration": 583,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=58"
        },
        {
          "page": 59,
          "part": "Agent智能体-05、Agent的middleware中间件",
          "duration": 899,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=59"
        }
      ],
      "cover": "从工具调用到流式、ReAct 与中间件，建立工具选择和执行的完整流程直觉。",
      "review": "原文档补 schema 强校验、权限、只读凭据、超时和输出限制；课中中间件示例不代表安全闭环。",
      "stop": "只实现本周三个 mock 只读工具及失败测试，下一周才组合诊断 Agent。",
      "docHours": 1,
      "blocks": [
        {
          "label": "工具调用与 ReAct 机制",
          "lessons": [
            {
              "page": 55,
              "part": "Agent智能体-01、Agent智能体介绍",
              "duration": 388,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=55"
            },
            {
              "page": 56,
              "part": "Agent智能体-02、Agent智能体初体验",
              "duration": 740,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=56"
            },
            {
              "page": 57,
              "part": "Agent智能体-03、Agent的流式输出",
              "duration": 893,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=57"
            },
            {
              "page": 58,
              "part": "Agent智能体-04、Agent的ReAct行动框架",
              "duration": 583,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=58"
            },
            {
              "page": 59,
              "part": "Agent智能体-05、Agent的middleware中间件",
              "duration": 899,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=59"
            }
          ]
        }
      ]
    },
    "42": {
      "sourceId": "heima-ai",
      "lessons": [
        {
          "page": 60,
          "part": "Agent智能体-06、Agent智能体项目介绍",
          "duration": 355,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=60"
        },
        {
          "page": 61,
          "part": "Agent智能体-07、[Agent项目]日志和路径工具开发",
          "duration": 1258,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=61"
        },
        {
          "page": 62,
          "part": "Agent智能体-08、[Agent项目]配置工具文件工具和提示词加载工具开发",
          "duration": 1738,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=62"
        },
        {
          "page": 63,
          "part": "Agent智能体-09、[Agent项目]向量存储服务开发",
          "duration": 2074,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=63"
        },
        {
          "page": 64,
          "part": "Agent智能体-10、[Agent项目]RAG总结服务开发",
          "duration": 741,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=64"
        },
        {
          "page": 65,
          "part": "Agent智能体-11、[Agent项目]tools工具开发",
          "duration": 1316,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=65"
        },
        {
          "page": 66,
          "part": "Agent智能体-12、[Agent项目]中间件和Agent创建",
          "duration": 2323,
          "bvid": "BV1yjz5BLEoY",
          "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=66"
        }
      ],
      "cover": "同套 Agent 项目依次走日志/配置/提示、向量库、RAG、工具、中间件与创建 Agent 的收尾。",
      "review": "用原 Hello-Agents 文档补 workflow 与 Plan-Execute 比较、步数/预算/终止；视频没有完整 LangGraph 图执行课程。",
      "stop": "把课里的组件关系映射到现有 OnCall 项目；实现确定性 workflow，再有限 ReAct，不重造全部课程工程。",
      "docHours": 1,
      "blocks": [
        {
          "label": "项目组织与检索组件",
          "lessons": [
            {
              "page": 60,
              "part": "Agent智能体-06、Agent智能体项目介绍",
              "duration": 355,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=60"
            },
            {
              "page": 61,
              "part": "Agent智能体-07、[Agent项目]日志和路径工具开发",
              "duration": 1258,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=61"
            },
            {
              "page": 62,
              "part": "Agent智能体-08、[Agent项目]配置工具文件工具和提示词加载工具开发",
              "duration": 1738,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=62"
            },
            {
              "page": 63,
              "part": "Agent智能体-09、[Agent项目]向量存储服务开发",
              "duration": 2074,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=63"
            }
          ]
        },
        {
          "label": "工具/中间件/Agent 集成",
          "lessons": [
            {
              "page": 64,
              "part": "Agent智能体-10、[Agent项目]RAG总结服务开发",
              "duration": 741,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=64"
            },
            {
              "page": 65,
              "part": "Agent智能体-11、[Agent项目]tools工具开发",
              "duration": 1316,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=65"
            },
            {
              "page": 66,
              "part": "Agent智能体-12、[Agent项目]中间件和Agent创建",
              "duration": 2323,
              "bvid": "BV1yjz5BLEoY",
              "url": "https://www.bilibili.com/video/BV1yjz5BLEoY/?p=66"
            }
          ]
        }
      ]
    }
  },
  "gaps": {
    "5": "context、取消传播与超时，优先用现有李文周文档；已核对的七米视频目录不覆盖这块，不拼零散搬运课。",
    "19": "RPC、deadline 与重试需要按当前 Go SDK 实操；本轮没有选到兼顾版本和 Go 路线的成套免费视频。",
    "20": "微服务边界与发现配置继续原主文档；不为看课转入 Java/Spring Cloud 技术栈。",
    "21": "一致性和故障模型继续原中文主文档，不塞完整分布式大学课程。",
    "22": "超时、重试、限流、熔断要和同一服务验证；不新增视频平台项目。",
    "23": "观测与排障靠本周日志/指标/链路证据；命令与配置查原项目文档。",
    "36": "黑马课没有完整 BM25/Hybrid/RRF/Rerank 模块。本周继续原中文 RAG 主文档的检索部分和原对照实验；不能把上一周 VectorStore 演示当成已经学完检索工程。",
    "38": "黑马 RAG 项目是基线流程；查询改写、路由与降级需要原中文主文档补齐。只实现原任务指定的两项优化，不叠加另一套框架课程。",
    "39": "评测以固定数据集与前后对照为主；没有用泛泛大模型导读替代评测教学。",
    "43": "黑马 67 集目录没有 MCP；这一缺口不隐藏。本周接同一 Hello-Agents 第十章与 Go SDK 做 Server/Client。已核对九天 Hector 的 MCP 9 集专题，但依赖 Python/LangGraph 与作者工具，不作为可直接照做的 Go 主课。",
    "44": "W34 已在黑马同套 P37–38 学过会话历史，这里不重复刷。用原主文档推进预算、摘要、权限、TTL 与 checkpoint；历史列表不等于可靠的恢复机制。",
    "45": "安全、权限和注入测试不能由入门导读代替，继续原安全资料和本周攻击样本。",
    "46": "轨迹、评测与成本要检查本周产物，继续原文档；不把“看懂”当“效果通过”。",
    "47": "完成只读 OnCall Agent 集成，用已有代码与文档查缺，不新开项目视频。",
    "49": "年度能力整合使用已有四个项目，按本周任务补最低分项，不重学一整套课。",
    "50": "后端综合验收优先独立表达与证据，不新增视频。",
    "51": "Agent 综合验收优先独立解释与回归测试，不新增视频。"
  },
  "optional": {
    "name": "李宏毅：2025 秋季生成式 AI 与机器学习",
    "url": "https://speech.ee.ntu.edu.tw/~hylee/GenAI-ML/2025-fall.php",
    "scope": "更完整的中文概念课。可选第 1 讲（生成式 AI 原理）、第 2 讲（上下文工程）、第 4 讲（评估陷阱）。不学整门训练与深度学习课程。",
    "limit": "官方课程页提供完整影片与学习素材；视频主要在 YouTube，访问可能受限。未核对全部播放时长，不列入必修与下方预算，也不阻塞进度。不是 Go 工程手把手项目课。"
  },
  "checkedCatalog": [
    {
      "bvid": "BV1ZJ411W7jG",
      "title": "最新Go语言急速入门视频教程（七米出品）",
      "uploader": "七米老师",
      "published": "2019-12-25",
      "paid": 0,
      "count": 27,
      "pages": [
        {
          "page": 1,
          "part": "搭建Go开发环境并编写第一个Go程序",
          "duration": 2157
        },
        {
          "page": 2,
          "part": "02_Go语言基础语法",
          "duration": 667
        },
        {
          "page": 3,
          "part": "03_Go语言基础之变量和常量",
          "duration": 1873
        },
        {
          "page": 4,
          "part": "04_Go语言基础之基本数据类型",
          "duration": 2250
        },
        {
          "page": 5,
          "part": "05_Go语言基础之运算符",
          "duration": 1028
        },
        {
          "page": 6,
          "part": "06_Go语言基础之流程控制语句",
          "duration": 1593
        },
        {
          "page": 7,
          "part": "07_Go语言基础之数组",
          "duration": 1604
        },
        {
          "page": 8,
          "part": "08_Go语言基础之切片",
          "duration": 2849
        },
        {
          "page": 9,
          "part": "09_Go语言基础之map",
          "duration": 2797
        },
        {
          "page": 10,
          "part": "10_Go语言基础之函数",
          "duration": 2626
        },
        {
          "page": 11,
          "part": "11_Go语言基础之函数进阶",
          "duration": 1595
        },
        {
          "page": 12,
          "part": "12_Go语言基础之指针",
          "duration": 1502
        },
        {
          "page": 13,
          "part": "13_Go语言基础之自定义类型和类型别名",
          "duration": 547
        },
        {
          "page": 14,
          "part": "14_Go语言基础之结构体初识",
          "duration": 2367
        },
        {
          "page": 15,
          "part": "15_Go语言基础之方法和接收者",
          "duration": 1454
        },
        {
          "page": 16,
          "part": "16_Go语言基础之结构体嵌套",
          "duration": 1810
        },
        {
          "page": 17,
          "part": "17_Go语言基础之结构体字段可见性和JSON",
          "duration": 1737
        },
        {
          "page": 18,
          "part": "18_Go语言基础之结构体实战",
          "duration": 2091
        },
        {
          "page": 19,
          "part": "19_Go语言基础之包",
          "duration": 1971
        },
        {
          "page": 20,
          "part": "20_Go语言基础之接口",
          "duration": 3136
        },
        {
          "page": 21,
          "part": "21_Go语言基础之反射初识",
          "duration": 2160
        },
        {
          "page": 22,
          "part": "22_Go语言基础之结构体反射",
          "duration": 1317
        },
        {
          "page": 23,
          "part": "23_Go语言基础之goroutine",
          "duration": 2305
        },
        {
          "page": 24,
          "part": "24_Go语言基础之channel",
          "duration": 3199
        },
        {
          "page": 25,
          "part": "25_Go语言基础之并发同步与锁",
          "duration": 2344
        },
        {
          "page": 26,
          "part": "26_Go语言基础之网络编程",
          "duration": 2568
        },
        {
          "page": 27,
          "part": "27_Go语言基础之单元测试",
          "duration": 2272
        }
      ]
    },
    {
      "bvid": "BV1Kr4y1i7ru",
      "title": "黑马程序员 MySQL数据库入门到精通，从mysql安装到mysql高级、mysql优化全囊括",
      "uploader": "黑马程序员",
      "published": "2022-01-18",
      "paid": 0,
      "count": 195,
      "pages": [
        {
          "page": 1,
          "part": "01.MySQL课程介绍",
          "duration": 688
        },
        {
          "page": 2,
          "part": "02. 基础-课程内容-数据库相关概念",
          "duration": 598
        },
        {
          "page": 3,
          "part": "03. 基础-概述-MySQL安装及启动",
          "duration": 1044
        },
        {
          "page": 4,
          "part": "04. 基础-概述-数据模型",
          "duration": 357
        },
        {
          "page": 5,
          "part": "05. 基础-SQL-通用语法及分类",
          "duration": 351
        },
        {
          "page": 6,
          "part": "06. 基础-SQL-DDL-数据库操作",
          "duration": 636
        },
        {
          "page": 7,
          "part": "07. 基础-SQL-DDL-表操作-创建&查询",
          "duration": 635
        },
        {
          "page": 8,
          "part": "08. 基础-SQL-DDL-数据类型及案例",
          "duration": 1244
        },
        {
          "page": 9,
          "part": "09. 基础-SQL-DDL-表操作-修改&删除",
          "duration": 624
        },
        {
          "page": 10,
          "part": "10. 基础-SQL-DDL小结",
          "duration": 189
        },
        {
          "page": 11,
          "part": "11. 基础-SQL-图形化界面工具DataGrip",
          "duration": 643
        },
        {
          "page": 12,
          "part": "12. 基础-SQL-DML-插入",
          "duration": 893
        },
        {
          "page": 13,
          "part": "13. 基础-SQL-DML-更新和删除",
          "duration": 495
        },
        {
          "page": 14,
          "part": "14. 基础-SQL-DML小结",
          "duration": 155
        },
        {
          "page": 15,
          "part": "15. 基础-SQL-DQL-基础查询",
          "duration": 866
        },
        {
          "page": 16,
          "part": "16. 基础-SQL-DQL-条件查询",
          "duration": 1077
        },
        {
          "page": 17,
          "part": "17. 基础-SQL-DQL-聚合函数",
          "duration": 399
        },
        {
          "page": 18,
          "part": "18. 基础-SQL-DQL-分组查询",
          "duration": 618
        },
        {
          "page": 19,
          "part": "19. 基础-SQL-DQL-排序查询",
          "duration": 396
        },
        {
          "page": 20,
          "part": "20. 基础-SQL-DQL-分页查询",
          "duration": 334
        },
        {
          "page": 21,
          "part": "21. 基础-SQL-DQL-案例练习",
          "duration": 683
        },
        {
          "page": 22,
          "part": "22. 基础-SQL-DQL-执行顺序",
          "duration": 477
        },
        {
          "page": 23,
          "part": "23. 基础-SQL-DQL小结",
          "duration": 191
        },
        {
          "page": 24,
          "part": "24. 基础-SQL-DCL-用户管理-",
          "duration": 658
        },
        {
          "page": 25,
          "part": "25. 基础-SQL-DCL-权限控制-",
          "duration": 505
        },
        {
          "page": 26,
          "part": "26. 基础-SQL-DCL小结",
          "duration": 176
        },
        {
          "page": 27,
          "part": "27. 基础-函数-字符串函数",
          "duration": 909
        },
        {
          "page": 28,
          "part": "28. 基础-函数-数值函数",
          "duration": 556
        },
        {
          "page": 29,
          "part": "29. 基础-函数-日期函数",
          "duration": 567
        },
        {
          "page": 30,
          "part": "30. 基础-函数-流程函数",
          "duration": 721
        },
        {
          "page": 31,
          "part": "31. 基础-函数-小结",
          "duration": 218
        },
        {
          "page": 32,
          "part": "32. 基础-约束-概述",
          "duration": 270
        },
        {
          "page": 33,
          "part": "33. 基础-约束-演示",
          "duration": 900
        },
        {
          "page": 34,
          "part": "34. 基础-约束-外键约束",
          "duration": 614
        },
        {
          "page": 35,
          "part": "35. 基础-约束-外键删除更新行为",
          "duration": 538
        },
        {
          "page": 36,
          "part": "36. 基础-约束-小结",
          "duration": 135
        },
        {
          "page": 37,
          "part": "37. 基础-多表查询-多表关系介绍",
          "duration": 732
        },
        {
          "page": 38,
          "part": "38. 基础-多表查询-概述",
          "duration": 484
        },
        {
          "page": 39,
          "part": "39. 基础-多表查询-内连接",
          "duration": 495
        },
        {
          "page": 40,
          "part": "40. 基础-多表查询-外连接",
          "duration": 447
        },
        {
          "page": 41,
          "part": "41. 基础-多表查询-自连接",
          "duration": 510
        },
        {
          "page": 42,
          "part": "42. 基础-多表查询-联合查询union",
          "duration": 348
        },
        {
          "page": 43,
          "part": "43. 基础-多表查询-子查询介绍",
          "duration": 150
        },
        {
          "page": 44,
          "part": "44. 基础-多表查询-标量子查询",
          "duration": 353
        },
        {
          "page": 45,
          "part": "45. 基础-多表查询-列子查询",
          "duration": 611
        },
        {
          "page": 46,
          "part": "46. 基础-多表查询-行子查询",
          "duration": 276
        },
        {
          "page": 47,
          "part": "47. 基础-多表查询-表子查询",
          "duration": 425
        },
        {
          "page": 48,
          "part": "48. 基础-多表查询-练习1",
          "duration": 1062
        },
        {
          "page": 49,
          "part": "49. 基础-多表查询-练习2",
          "duration": 1289
        },
        {
          "page": 50,
          "part": "50. 基础-多表查询-小结",
          "duration": 254
        },
        {
          "page": 51,
          "part": "51. 基础-事务-简介",
          "duration": 299
        },
        {
          "page": 52,
          "part": "52. 基础-事务-操作演示",
          "duration": 1045
        },
        {
          "page": 53,
          "part": "53. 基础-事务-四大特性ACID",
          "duration": 296
        },
        {
          "page": 54,
          "part": "54. 基础-事务-并发事务问题",
          "duration": 454
        },
        {
          "page": 55,
          "part": "55. 基础-事务-并发事务演示及隔离级别",
          "duration": 1347
        },
        {
          "page": 56,
          "part": "56. 基础-事务-小结",
          "duration": 132
        },
        {
          "page": 57,
          "part": "57. 基础篇总结",
          "duration": 266
        },
        {
          "page": 58,
          "part": "01. 进阶-课程介绍",
          "duration": 199
        },
        {
          "page": 59,
          "part": "02. 进阶-存储引擎-MySQL体系结构",
          "duration": 287
        },
        {
          "page": 60,
          "part": "03. 进阶-存储引擎-简介",
          "duration": 489
        },
        {
          "page": 61,
          "part": "04. 进阶-存储引擎-InnoDB介绍",
          "duration": 538
        },
        {
          "page": 62,
          "part": "05. 进阶-存储引擎-MyISAM和Memory",
          "duration": 324
        },
        {
          "page": 63,
          "part": "06. 进阶-存储引擎-选择",
          "duration": 223
        },
        {
          "page": 64,
          "part": "07. 进阶-存储引擎-小结",
          "duration": 187
        },
        {
          "page": 65,
          "part": "08. 进阶-MySQL安装(linux版本)",
          "duration": 1083
        },
        {
          "page": 66,
          "part": "09. 进阶-索引-概述",
          "duration": 528
        },
        {
          "page": 67,
          "part": "10. 进阶-索引-结构-介绍",
          "duration": 227
        },
        {
          "page": 68,
          "part": "11. 进阶-索引-结构-Btree",
          "duration": 721
        },
        {
          "page": 69,
          "part": "12. 进阶-索引-结构-B+tree",
          "duration": 396
        },
        {
          "page": 70,
          "part": "13. 进阶-索引-结构-hash",
          "duration": 293
        },
        {
          "page": 71,
          "part": "14. 进阶-索引-结构-思考题",
          "duration": 199
        },
        {
          "page": 72,
          "part": "15. 进阶-索引-分类",
          "duration": 564
        },
        {
          "page": 73,
          "part": "16. 进阶-索引-思考题",
          "duration": 452
        },
        {
          "page": 74,
          "part": "17. 进阶-索引-语法",
          "duration": 679
        },
        {
          "page": 75,
          "part": "18. 进阶-索引-性能分析-查看执行频次",
          "duration": 327
        },
        {
          "page": 76,
          "part": "19. 进阶-索引-性能分析-慢查询日志",
          "duration": 458
        },
        {
          "page": 77,
          "part": "20. 进阶-索引-性能分析-show profiles",
          "duration": 484
        },
        {
          "page": 78,
          "part": "21. 进阶-索引-性能分析-explain",
          "duration": 1459
        },
        {
          "page": 79,
          "part": "22. 进阶-索引-使用规则-验证索引效率",
          "duration": 495
        },
        {
          "page": 80,
          "part": "23. 进阶-索引-使用规则-最左前缀法则",
          "duration": 701
        },
        {
          "page": 81,
          "part": "24. 进阶-索引-使用规则-索引失效情况一",
          "duration": 500
        },
        {
          "page": 82,
          "part": "25. 进阶-索引-使用规则-索引失效情况二",
          "duration": 727
        },
        {
          "page": 83,
          "part": "26. 进阶-索引-使用规则-SQL提示",
          "duration": 440
        },
        {
          "page": 84,
          "part": "27. 进阶-索引-使用规则-覆盖索引&回表查询",
          "duration": 945
        },
        {
          "page": 85,
          "part": "28. 进阶-索引-使用规则-前缀索引",
          "duration": 865
        },
        {
          "page": 86,
          "part": "29. 进阶-索引-使用规则-单列&联合索引",
          "duration": 596
        },
        {
          "page": 87,
          "part": "30. 进阶-索引-设计原则",
          "duration": 322
        },
        {
          "page": 88,
          "part": "31. 进阶-索引-小结",
          "duration": 620
        },
        {
          "page": 89,
          "part": "32. 进阶-SQL优化-插入数据",
          "duration": 809
        },
        {
          "page": 90,
          "part": "33. 进阶-SQL优化-主键优化",
          "duration": 820
        },
        {
          "page": 91,
          "part": "34. 进阶-SQL优化-order by优化",
          "duration": 1000
        },
        {
          "page": 92,
          "part": "35. 进阶-SQL优化-group by优化",
          "duration": 367
        },
        {
          "page": 93,
          "part": "36. 进阶-SQL优化-limit优化",
          "duration": 396
        },
        {
          "page": 94,
          "part": "37. 进阶-SQL优化-count优化",
          "duration": 606
        },
        {
          "page": 95,
          "part": "38. 进阶-SQL优化-update优化(避免行锁升级为表锁)",
          "duration": 492
        },
        {
          "page": 96,
          "part": "39. 进阶-SQL优化-小结",
          "duration": 537
        },
        {
          "page": 97,
          "part": "40. 进阶-视图-介绍及基本语法",
          "duration": 729
        },
        {
          "page": 98,
          "part": "41. 进阶-视图-检查选项(cascaded)",
          "duration": 1037
        },
        {
          "page": 99,
          "part": "42. 进阶-视图-检查选项(local)",
          "duration": 546
        },
        {
          "page": 100,
          "part": "43. 进阶-视图-更新及作用",
          "duration": 400
        },
        {
          "page": 101,
          "part": "44. 进阶-视图-案例",
          "duration": 513
        },
        {
          "page": 102,
          "part": "45. 进阶-存储过程-介绍",
          "duration": 258
        },
        {
          "page": 103,
          "part": "46. 进阶-存储过程-基本语法",
          "duration": 735
        },
        {
          "page": 104,
          "part": "47. 进阶-存储过程-变量-系统变量",
          "duration": 749
        },
        {
          "page": 105,
          "part": "48. 进阶-存储过程-变量-用户定义变量",
          "duration": 438
        },
        {
          "page": 106,
          "part": "49. 进阶-存储过程-变量-局部变量",
          "duration": 302
        },
        {
          "page": 107,
          "part": "50. 进阶-存储过程-if判断",
          "duration": 405
        },
        {
          "page": 108,
          "part": "51. 进阶-存储过程-参数(IN,OUT,INOUT)",
          "duration": 772
        },
        {
          "page": 109,
          "part": "52. 进阶-存储过程-case",
          "duration": 532
        },
        {
          "page": 110,
          "part": "53. 进阶-存储过程-循环-while",
          "duration": 382
        },
        {
          "page": 111,
          "part": "54. 进阶-存储过程-循环-repeat",
          "duration": 313
        },
        {
          "page": 112,
          "part": "55. 进阶-存储过程-循环-loop",
          "duration": 696
        },
        {
          "page": 113,
          "part": "56. 进阶-存储过程-游标-cursor",
          "duration": 1270
        },
        {
          "page": 114,
          "part": "57. 进阶-存储过程-条件处理程序-handler",
          "duration": 490
        },
        {
          "page": 115,
          "part": "58. 进阶-存储函数",
          "duration": 504
        },
        {
          "page": 116,
          "part": "59. 进阶-触发器-介绍",
          "duration": 212
        },
        {
          "page": 117,
          "part": "60. 进阶-触发器-案例1(insert类型)",
          "duration": 854
        },
        {
          "page": 118,
          "part": "61. 进阶-触发器-案例2(update类型)",
          "duration": 429
        },
        {
          "page": 119,
          "part": "62. 进阶-触发器-案例3(delete类型)",
          "duration": 226
        },
        {
          "page": 120,
          "part": "63. 进阶-视图&存储过程&触发器-小结",
          "duration": 327
        },
        {
          "page": 121,
          "part": "64. 进阶-锁-介绍",
          "duration": 191
        },
        {
          "page": 122,
          "part": "65. 进阶-锁-全局锁-介绍",
          "duration": 489
        },
        {
          "page": 123,
          "part": "66. 进阶-锁-全局锁-一致性数据备份",
          "duration": 546
        },
        {
          "page": 124,
          "part": "67. 进阶-锁-表级锁-表锁",
          "duration": 648
        },
        {
          "page": 125,
          "part": "68. 进阶-锁-表级锁-元数据锁",
          "duration": 649
        },
        {
          "page": 126,
          "part": "69. 进阶-锁-表级锁-意向锁",
          "duration": 376
        },
        {
          "page": 127,
          "part": "70. 进阶-锁-表级锁-意向锁-测试",
          "duration": 360
        },
        {
          "page": 128,
          "part": "71. 进阶-锁-行级锁-介绍",
          "duration": 326
        },
        {
          "page": 129,
          "part": "72. 进阶-锁-行级锁-行锁",
          "duration": 913
        },
        {
          "page": 130,
          "part": "73. 进阶-锁-行级锁-间隙锁&临键锁1",
          "duration": 260
        },
        {
          "page": 131,
          "part": "74. 进阶-锁-行级锁-间隙锁&临键锁2",
          "duration": 536
        },
        {
          "page": 132,
          "part": "75. 进阶-锁-小结",
          "duration": 213
        },
        {
          "page": 133,
          "part": "76. 进阶-InnoDB引擎-逻辑存储结构",
          "duration": 437
        },
        {
          "page": 134,
          "part": "77. 进阶-InnoDB引擎-架构-内存结构1",
          "duration": 291
        },
        {
          "page": 135,
          "part": "78. 进阶-InnoDB引擎-架构-内存结构2",
          "duration": 482
        },
        {
          "page": 136,
          "part": "79. 进阶-InnoDB引擎-架构-磁盘结构",
          "duration": 620
        },
        {
          "page": 137,
          "part": "80. 进阶-InnoDB引擎-架构-后台线程",
          "duration": 317
        },
        {
          "page": 138,
          "part": "81. 进阶-InnoDB引擎-事务原理-概述",
          "duration": 244
        },
        {
          "page": 139,
          "part": "82. 进阶-InnoDB引擎-事务原理-redolog",
          "duration": 458
        },
        {
          "page": 140,
          "part": "83. 进阶-InnoDB引擎-事务原理-undolog",
          "duration": 201
        },
        {
          "page": 141,
          "part": "84. 进阶-InnoDB引擎-MVCC-基本概念",
          "duration": 379
        },
        {
          "page": 142,
          "part": "85. 进阶-InnoDB引擎-MVCC-隐藏字段",
          "duration": 459
        },
        {
          "page": 143,
          "part": "86. 进阶-InnoDB引擎-MVCC-undolog版本链",
          "duration": 535
        },
        {
          "page": 144,
          "part": "87. 进阶-InnoDB引擎-MVCC-readview介绍",
          "duration": 318
        },
        {
          "page": 145,
          "part": "88. 进阶-InnoDB引擎-MVCC-原理分析(RC级别)",
          "duration": 537
        },
        {
          "page": 146,
          "part": "89. 进阶-InnoDB引擎-MVCC-原理分析(RR级别)",
          "duration": 221
        },
        {
          "page": 147,
          "part": "90. 进阶-InnoDB引擎-小结",
          "duration": 267
        },
        {
          "page": 148,
          "part": "91. 进阶-MySQL管理-系统数据库介绍",
          "duration": 547
        },
        {
          "page": 149,
          "part": "92. 进阶-MySQL管理-常用工具1",
          "duration": 1164
        },
        {
          "page": 150,
          "part": "93. 进阶-MySQL管理-常用工具2",
          "duration": 987
        },
        {
          "page": 151,
          "part": "94. 进阶-MySQL管理-小结",
          "duration": 205
        },
        {
          "page": 152,
          "part": "95. 进阶篇总结",
          "duration": 288
        },
        {
          "page": 153,
          "part": "01. 运维-课程介绍",
          "duration": 145
        },
        {
          "page": 154,
          "part": "02. 运维-日志-错误日志",
          "duration": 429
        },
        {
          "page": 155,
          "part": "03. 运维-日志-二进制日志",
          "duration": 1217
        },
        {
          "page": 156,
          "part": "04. 运维-日志-查询日志",
          "duration": 350
        },
        {
          "page": 157,
          "part": "05. 运维-日志-慢查询日志",
          "duration": 559
        },
        {
          "page": 158,
          "part": "06. 运维-主从复制-概述",
          "duration": 254
        },
        {
          "page": 159,
          "part": "07. 运维-主从复制-原理",
          "duration": 204
        },
        {
          "page": 160,
          "part": "08. 运维-主从复制-主库配置",
          "duration": 678
        },
        {
          "page": 161,
          "part": "09. 运维-主从复制-从库配置",
          "duration": 603
        },
        {
          "page": 162,
          "part": "10. 运维-主从复制-测试",
          "duration": 364
        },
        {
          "page": 163,
          "part": "11. 运维-分库分表-介绍",
          "duration": 335
        },
        {
          "page": 164,
          "part": "12. 运维-分库分表-介绍-拆分方式",
          "duration": 737
        },
        {
          "page": 165,
          "part": "13. 运维-分库分表-MyCat概述-安装",
          "duration": 762
        },
        {
          "page": 166,
          "part": "14. 运维-分库分表-MyCat概述-核心概念",
          "duration": 207
        },
        {
          "page": 167,
          "part": "15. 运维-分库分表-MyCat入门",
          "duration": 1205
        },
        {
          "page": 168,
          "part": "16. 运维-分库分表-MyCat入门-测试",
          "duration": 1005
        },
        {
          "page": 169,
          "part": "17. 运维-分库分表-MyCat配置1",
          "duration": 891
        },
        {
          "page": 170,
          "part": "18. 运维-分库分表-MyCat配置2",
          "duration": 795
        },
        {
          "page": 171,
          "part": "19. 运维-分库分表-Mycat分片-垂直分库",
          "duration": 760
        },
        {
          "page": 172,
          "part": "20. 运维-分库分表-Mycat分片-垂直分库-测试",
          "duration": 1429
        },
        {
          "page": 173,
          "part": "21. 运维-分库分表-Mycat分片-水平分表",
          "duration": 890
        },
        {
          "page": 174,
          "part": "22. 运维-分库分表-分片规则-范围分片",
          "duration": 266
        },
        {
          "page": 175,
          "part": "23. 运维-分库分表-分片规则-取模分片",
          "duration": 210
        },
        {
          "page": 176,
          "part": "24. 运维-分库分表-分片规则-一致性hash算法",
          "duration": 477
        },
        {
          "page": 177,
          "part": "25. 运维-分库分表-分片规则-枚举分片",
          "duration": 786
        },
        {
          "page": 178,
          "part": "26. 运维-分库分表-分片规则-应用指定算法",
          "duration": 686
        },
        {
          "page": 179,
          "part": "27. 运维-分库分表-分片规则-固定hash算法",
          "duration": 1009
        },
        {
          "page": 180,
          "part": "28. 运维-分库分表-分片规则-字符串hash解析",
          "duration": 793
        },
        {
          "page": 181,
          "part": "29. 运维-分库分表-分片规则-按天分片",
          "duration": 657
        },
        {
          "page": 182,
          "part": "30. 运维-分库分表-分片规则-按自然月分片",
          "duration": 757
        },
        {
          "page": 183,
          "part": "31. 运维-分库分表-Mycat管理与监控-原理",
          "duration": 780
        },
        {
          "page": 184,
          "part": "32. 运维-分库分表-Mycat管理工具",
          "duration": 593
        },
        {
          "page": 185,
          "part": "33. 运维-分库分表-MyCat监控1",
          "duration": 807
        },
        {
          "page": 186,
          "part": "34. 运维-分库分表-MyCat监控2",
          "duration": 492
        },
        {
          "page": 187,
          "part": "35. 运维-分库分表-总结",
          "duration": 409
        },
        {
          "page": 188,
          "part": "36. 运维-读写分离-介绍",
          "duration": 284
        },
        {
          "page": 189,
          "part": "37. 运维-读写分离-一主一从准备",
          "duration": 291
        },
        {
          "page": 190,
          "part": "38. 运维-读写分离-一主一从读写分离",
          "duration": 1074
        },
        {
          "page": 191,
          "part": "39. 运维-读写分离-双主双从介绍",
          "duration": 371
        },
        {
          "page": 192,
          "part": "40. 运维-读写分离-双主双从搭建",
          "duration": 1340
        },
        {
          "page": 193,
          "part": "41. 运维-读写分离-双主双从读写分离",
          "duration": 855
        },
        {
          "page": 194,
          "part": "42. 运维-读写分离-总结",
          "duration": 283
        },
        {
          "page": 195,
          "part": "43. 运维篇总结",
          "duration": 440
        }
      ]
    },
    {
      "bvid": "BV1cr4y1671t",
      "title": "黑马程序员Redis入门到实战教程，深度透析redis底层原理+redis分布式锁+企业解决方案+黑马点评实战项目",
      "uploader": "黑马程序员",
      "published": "2022-02-28",
      "paid": 0,
      "count": 175,
      "pages": [
        {
          "page": 1,
          "part": "Redis课程介绍导学",
          "duration": 835
        },
        {
          "page": 2,
          "part": "基础篇-01.Redis入门课程介绍",
          "duration": 316
        },
        {
          "page": 3,
          "part": "基础篇-02.初始Redis-认识NoSQL",
          "duration": 1284
        },
        {
          "page": 4,
          "part": "基础篇-03.初识Redis-认识Redis",
          "duration": 428
        },
        {
          "page": 5,
          "part": "基础篇-04.初识Redis-安装Redis及启动的三种方式",
          "duration": 1023
        },
        {
          "page": 6,
          "part": "基础篇-05.初识Redis-Redis命令行客户端",
          "duration": 279
        },
        {
          "page": 7,
          "part": "基础篇-06.初识Redis-Redis的图形化界面客户端",
          "duration": 261
        },
        {
          "page": 8,
          "part": "基础篇-07.Redis命令-数据结构介绍",
          "duration": 435
        },
        {
          "page": 9,
          "part": "基础篇-08.Redis命令-通用命令",
          "duration": 702
        },
        {
          "page": 10,
          "part": "基础篇-09.Redis命令-String类型",
          "duration": 792
        },
        {
          "page": 11,
          "part": "基础篇-10.Redis命令-Key的层级格式",
          "duration": 470
        },
        {
          "page": 12,
          "part": "基础篇-11.Redis命令-Hash类型",
          "duration": 734
        },
        {
          "page": 13,
          "part": "基础篇-12.Redis命令-List类型",
          "duration": 876
        },
        {
          "page": 14,
          "part": "基础篇-13.Redis命令-Set类型",
          "duration": 618
        },
        {
          "page": 15,
          "part": "基础篇-14.Redis命令-SortedSet类型",
          "duration": 993
        },
        {
          "page": 16,
          "part": "基础篇-15-Redis的Java客户端-客户端对比",
          "duration": 406
        },
        {
          "page": 17,
          "part": "基础篇-16.Redis的Java客户端-Jedis快速入门",
          "duration": 718
        },
        {
          "page": 18,
          "part": "基础篇-17.Redis的Java客户端-Jedis的连接池",
          "duration": 433
        },
        {
          "page": 19,
          "part": "基础篇-18.Redis的Java客户端-认识SpringDataRedis",
          "duration": 469
        },
        {
          "page": 20,
          "part": "基础篇-19.Redis的Java客户端-RedisTemplate快速入门",
          "duration": 600
        },
        {
          "page": 21,
          "part": "基础篇-20.Redis的Java客户端-RedisTemplate的RedisSerializer",
          "duration": 1017
        },
        {
          "page": 22,
          "part": "基础篇-21.Redis的Java客户端-StringRedisTemplate",
          "duration": 638
        },
        {
          "page": 23,
          "part": "基础篇-22.Redis的Java客户端-RedisTemplate操作Hash类型",
          "duration": 226
        },
        {
          "page": 24,
          "part": "实战篇-01.Redis企业实战课程介绍",
          "duration": 416
        },
        {
          "page": 25,
          "part": "实战篇-02.短信登录-导入黑马点评项目",
          "duration": 947
        },
        {
          "page": 26,
          "part": "实战篇-03.短信登录-基于session实现短信登录的流程",
          "duration": 458
        },
        {
          "page": 27,
          "part": "实战篇-04.短信登录-实现发送短信验证码功能",
          "duration": 617
        },
        {
          "page": 28,
          "part": "实战篇-05.短信登录-实现短信验证码登录和注册功能",
          "duration": 1186
        },
        {
          "page": 29,
          "part": "实战篇-06.短信登录-实现登录校验拦截器",
          "duration": 974
        },
        {
          "page": 30,
          "part": "实战篇-07.短信登录-隐藏用户敏感信息",
          "duration": 365
        },
        {
          "page": 31,
          "part": "实战篇-08.短信登录-session共享的问题分析",
          "duration": 345
        },
        {
          "page": 32,
          "part": "实战篇-09.短信登录-Redis代替session的业务流程",
          "duration": 838
        },
        {
          "page": 33,
          "part": "实战篇-10.短信登录-基于Redis实现短信登录",
          "duration": 2153
        },
        {
          "page": 34,
          "part": "实战篇-11.短信登录-解决状态登录刷新的问题",
          "duration": 683
        },
        {
          "page": 35,
          "part": "实战篇-商户查询缓存-01.什么是缓存",
          "duration": 619
        },
        {
          "page": 36,
          "part": "实战篇-商户查询缓存-02.添加商户缓存",
          "duration": 854
        },
        {
          "page": 37,
          "part": "实战篇-商户查询缓存-03.缓存练习题分析",
          "duration": 164
        },
        {
          "page": 38,
          "part": "实战篇-商户查询缓存-04.缓存更新策略",
          "duration": 1587
        },
        {
          "page": 39,
          "part": "实战篇-商户查询缓存-05.实现商铺缓存与数据库的双写一致",
          "duration": 599
        },
        {
          "page": 40,
          "part": "实战篇-商户查询缓存-06.缓存穿透的解决思路",
          "duration": 525
        },
        {
          "page": 41,
          "part": "实战篇-商户查询缓存-07.编码解决商铺查询的缓存穿透问题",
          "duration": 629
        },
        {
          "page": 42,
          "part": "实战篇-商户查询缓存-08.缓存雪崩问题及解决思路",
          "duration": 574
        },
        {
          "page": 43,
          "part": "实战篇-商户查询缓存-09.缓存击穿问题及解决方案",
          "duration": 960
        },
        {
          "page": 44,
          "part": "实战篇-商户查询缓存-10.利用互斥锁解决缓存击穿问题",
          "duration": 1320
        },
        {
          "page": 45,
          "part": "实战篇-商户查询缓存-11.利用逻辑过期解决缓存击穿问题",
          "duration": 1692
        },
        {
          "page": 46,
          "part": "实战篇-商户查询缓存-12.封装Redis工具类",
          "duration": 1796
        },
        {
          "page": 47,
          "part": "实战篇-商户查询缓存-13.缓存总结",
          "duration": 821
        },
        {
          "page": 48,
          "part": "实战篇-01.优惠券秒杀-全局唯一ID",
          "duration": 860
        },
        {
          "page": 49,
          "part": "实战篇-02.优惠券秒杀-Redis实现全局唯一id",
          "duration": 1523
        },
        {
          "page": 50,
          "part": "实战篇-03.优惠券秒杀-添加优惠券",
          "duration": 650
        },
        {
          "page": 51,
          "part": "实战篇-04.优惠券秒杀-实现秒杀下单",
          "duration": 1040
        },
        {
          "page": 52,
          "part": "实战篇-05.优惠券秒杀-库存超卖问题分析",
          "duration": 1130
        },
        {
          "page": 53,
          "part": "实战篇-06.优惠券秒杀-乐观锁解决超卖",
          "duration": 698
        },
        {
          "page": 54,
          "part": "实战篇-07.优惠券秒杀-实现一人一单功能",
          "duration": 1319
        },
        {
          "page": 55,
          "part": "实战篇-08.优惠券秒杀-集群下的线程并发安全问题",
          "duration": 796
        },
        {
          "page": 56,
          "part": "实战篇-09.分布式锁-基本原理和不同实现方式对比",
          "duration": 926
        },
        {
          "page": 57,
          "part": "实战篇-10.分布式锁-Redis的分布式锁实现思路",
          "duration": 561
        },
        {
          "page": 58,
          "part": "实战篇-11.分布式锁-实现Redis分布式锁版本1",
          "duration": 1087
        },
        {
          "page": 59,
          "part": "实战篇-12.分布式锁-Redis分布式锁误删问题",
          "duration": 458
        },
        {
          "page": 60,
          "part": "实战篇-13.分布式锁-解决Redis分布式锁误删问题",
          "duration": 550
        },
        {
          "page": 61,
          "part": "实战篇-14.分布式锁-分布式锁的原子性问题",
          "duration": 253
        },
        {
          "page": 62,
          "part": "实战篇-15.分布式锁-Lua脚本解决多条命令原子性问题",
          "duration": 1358
        },
        {
          "page": 63,
          "part": "实战篇-16.分布式锁-Java调用lua脚本改造分布式锁",
          "duration": 861
        },
        {
          "page": 64,
          "part": "实战篇-17.分布式锁-Redisson功能介绍",
          "duration": 537
        },
        {
          "page": 65,
          "part": "实战篇-18.分布式锁-Redisson快速入门",
          "duration": 689
        },
        {
          "page": 66,
          "part": "实战篇-19.分布式锁-Redisson的可重入锁原理",
          "duration": 1375
        },
        {
          "page": 67,
          "part": "实战篇-20.分布式锁-Redisson的锁重试和WatchDog机制",
          "duration": 1888
        },
        {
          "page": 68,
          "part": "实战篇-21.分布式锁-Redisson的multiLock原理",
          "duration": 1547
        },
        {
          "page": 69,
          "part": "实战篇-22.秒杀优化-异步秒杀思路",
          "duration": 1295
        },
        {
          "page": 70,
          "part": "实战篇-23.秒杀优化-基于Redis完成秒杀资格判断",
          "duration": 1547
        },
        {
          "page": 71,
          "part": "实战篇-24.秒杀优化-基于阻塞队列实现秒杀异步下单",
          "duration": 1431
        },
        {
          "page": 72,
          "part": "实战篇-25.Redis消息队列-认识消息队列",
          "duration": 540
        },
        {
          "page": 73,
          "part": "实战篇-26.Redis消息队列-基于List实现消息队列",
          "duration": 429
        },
        {
          "page": 74,
          "part": "实战篇-27.Redis消息队列-PubSub实现消息队列",
          "duration": 578
        },
        {
          "page": 75,
          "part": "实战篇-28.Redis消息队列-Stream的单消费模式",
          "duration": 856
        },
        {
          "page": 76,
          "part": "实战篇-29.Redis消息队列-Stream的消费者组模式",
          "duration": 1670
        },
        {
          "page": 77,
          "part": "实战篇-30.Redis消息队列-基于Stream消息队列实现异步秒杀",
          "duration": 1974
        },
        {
          "page": 78,
          "part": "实战篇-01.达人探店-发布探店笔记",
          "duration": 622
        },
        {
          "page": 79,
          "part": "实战篇-02.达人探店-查看探店笔记",
          "duration": 534
        },
        {
          "page": 80,
          "part": "实战篇-03.达人探店-点赞功能",
          "duration": 1243
        },
        {
          "page": 81,
          "part": "实战篇-04.达人探店-点赞排行榜",
          "duration": 1760
        },
        {
          "page": 82,
          "part": "实战篇-05.好友关注-关注和取关",
          "duration": 993
        },
        {
          "page": 83,
          "part": "实战篇-06.好友关注-共同关注",
          "duration": 1100
        },
        {
          "page": 84,
          "part": "实战篇-07.好友关注-Feed流实现方案分析",
          "duration": 1040
        },
        {
          "page": 85,
          "part": "实战篇-08.好友关注-推送到粉丝收件箱",
          "duration": 1111
        },
        {
          "page": 86,
          "part": "实战篇-09.好友关注-滚动分页查询收件箱的思路",
          "duration": 1222
        },
        {
          "page": 87,
          "part": "实战篇-10.好友关注-实现滚动分页查询",
          "duration": 1519
        },
        {
          "page": 88,
          "part": "实战篇-11.附近商铺-GEO数据结构的基本用法",
          "duration": 886
        },
        {
          "page": 89,
          "part": "实战篇-12.附近商铺-导入店铺数据到GEO",
          "duration": 1266
        },
        {
          "page": 90,
          "part": "实战篇-13.附近商铺-实现附近商户功能",
          "duration": 1666
        },
        {
          "page": 91,
          "part": "实战篇-15.用户签到-BitMap功能演示",
          "duration": 1195
        },
        {
          "page": 92,
          "part": "实战篇-16.用户签到-实现签到功能",
          "duration": 748
        },
        {
          "page": 93,
          "part": "实战篇-17.用户签到-统计连续签到",
          "duration": 1332
        },
        {
          "page": 94,
          "part": "实战篇-18.UV统计-HyperLogLog的用法",
          "duration": 510
        },
        {
          "page": 95,
          "part": "实战篇-19.UV统计-测试百万数据的统计",
          "duration": 515
        },
        {
          "page": 96,
          "part": "高级篇-分布式缓存-01-今日课程介绍",
          "duration": 364
        },
        {
          "page": 97,
          "part": "高级篇-分布式缓存-02-Redis持久化-RDB演示",
          "duration": 827
        },
        {
          "page": 98,
          "part": "高级篇-分布式缓存-03-Redis持久化-RDB的fork原理",
          "duration": 501
        },
        {
          "page": 99,
          "part": "高级篇-分布式缓存-04-Redis持久化-AOF演示",
          "duration": 952
        },
        {
          "page": 100,
          "part": "高级篇-分布式缓存-05-Redis持久化-RDB和AOF的对比",
          "duration": 247
        },
        {
          "page": 101,
          "part": "高级篇-分布式缓存-06-Redis主从-主从集群结构",
          "duration": 226
        },
        {
          "page": 102,
          "part": "高级篇-分布式缓存-07-Redis主从-搭建主从集群",
          "duration": 904
        },
        {
          "page": 103,
          "part": "高级篇-分布式缓存-08-Redis主从-主从的全量同步原理",
          "duration": 808
        },
        {
          "page": 104,
          "part": "高级篇-分布式缓存-09-Redis主从-增量同步原理",
          "duration": 739
        },
        {
          "page": 105,
          "part": "高级篇-分布式缓存-10-Redis哨兵-哨兵的作用和工作原理",
          "duration": 806
        },
        {
          "page": 106,
          "part": "高级篇-分布式缓存-11-Redis哨兵-搭建哨兵集群",
          "duration": 817
        },
        {
          "page": 107,
          "part": "高级篇-分布式缓存-12-Redis哨兵-RedisTemplate连接哨兵",
          "duration": 954
        },
        {
          "page": 108,
          "part": "高级篇-分布式缓存-13-Redis分片集群-搭建分片集群",
          "duration": 813
        },
        {
          "page": 109,
          "part": "高级篇-分布式缓存-14-Redis分片集群-散列插槽",
          "duration": 597
        },
        {
          "page": 110,
          "part": "高级篇-分布式缓存-15-Redis分片集群-集群伸缩",
          "duration": 607
        },
        {
          "page": 111,
          "part": "高级篇-分布式缓存-16-Redis分片集群-故障转移",
          "duration": 474
        },
        {
          "page": 112,
          "part": "高级篇-分布式缓存-17-Redis分片集群-RedisTemplate访问分片集群",
          "duration": 264
        },
        {
          "page": 113,
          "part": "高级篇-多级缓存-01-什么是多级缓存",
          "duration": 493
        },
        {
          "page": 114,
          "part": "高级篇-多级缓存-02-JVM进程缓存-导入Demo数据",
          "duration": 466
        },
        {
          "page": 115,
          "part": "高级篇-多级缓存-03-JVM进程缓存-导入Demo工程",
          "duration": 612
        },
        {
          "page": 116,
          "part": "高级篇-多级缓存-04-JVM进程缓存-初识Caffeine",
          "duration": 899
        },
        {
          "page": 117,
          "part": "高级篇-多级缓存-05-JVM进程缓存-实现进程缓存",
          "duration": 474
        },
        {
          "page": 118,
          "part": "高级篇-多级缓存-06-Lua语法-初识Lua",
          "duration": 335
        },
        {
          "page": 119,
          "part": "高级篇-多级缓存-07-Lua语法-变量和循环",
          "duration": 819
        },
        {
          "page": 120,
          "part": "高级篇-多级缓存-08-Lua语法-函数和条件控制",
          "duration": 478
        },
        {
          "page": 121,
          "part": "高级篇-多级缓存-09-多级缓存-安装OpenResty",
          "duration": 590
        },
        {
          "page": 122,
          "part": "高级篇-多级缓存-10-多级缓存-OpenResty快速入门",
          "duration": 718
        },
        {
          "page": 123,
          "part": "高级篇-多级缓存-11-多级缓存-OpenResty获取请求参数",
          "duration": 457
        },
        {
          "page": 124,
          "part": "高级篇-多级缓存-12-多级缓存-封装Http请求工具",
          "duration": 864
        },
        {
          "page": 125,
          "part": "高级篇-多级缓存-13-多级缓存-向tomcat发送http请求",
          "duration": 653
        },
        {
          "page": 126,
          "part": "高级篇-多级缓存-14-多级缓存-根据商品id对tomcat集群负载均衡",
          "duration": 527
        },
        {
          "page": 127,
          "part": "高级篇-多级缓存-15-多级缓存-Redis缓存预热",
          "duration": 716
        },
        {
          "page": 128,
          "part": "高级篇-多级缓存-16-多级缓存-查询Redis",
          "duration": 883
        },
        {
          "page": 129,
          "part": "高级篇-多级缓存-17-多级缓存-nginx本地缓存",
          "duration": 834
        },
        {
          "page": 130,
          "part": "高级篇-多级缓存-18-缓存同步-数据同步策略",
          "duration": 419
        },
        {
          "page": 131,
          "part": "高级篇-多级缓存-19-缓存同步-安装Canal",
          "duration": 733
        },
        {
          "page": 132,
          "part": "高级篇-多级缓存-20-缓存同步-监听canal 实现缓存同步",
          "duration": 895
        },
        {
          "page": 133,
          "part": "高级篇-多级缓存-21-课程总结",
          "duration": 322
        },
        {
          "page": 134,
          "part": "高级篇-Redis最佳实践-01.Redis最佳实践课程介绍",
          "duration": 79
        },
        {
          "page": 135,
          "part": "高级篇-Redis最佳实践-02.键值设计-如何设计优雅的key",
          "duration": 562
        },
        {
          "page": 136,
          "part": "高级篇-Redis最佳实践-03.键值设计-BigKey问题",
          "duration": 1421
        },
        {
          "page": 137,
          "part": "高级篇-Redis最佳实践-04.键值设计-选择合适的数据结构",
          "duration": 1294
        },
        {
          "page": 138,
          "part": "高级篇-Redis最佳实践-05.批处理优化-pipeline和mset",
          "duration": 1270
        },
        {
          "page": 139,
          "part": "高级篇-Redis最佳实践-06.批处理优化-集群模式下的批处理问题",
          "duration": 848
        },
        {
          "page": 140,
          "part": "高级篇-Redis最佳实践-07.服务端优化-持久化配置",
          "duration": 820
        },
        {
          "page": 141,
          "part": "高级篇-Redis最佳实践-08.服务端优化-慢查询问题",
          "duration": 574
        },
        {
          "page": 142,
          "part": "高级篇-Redis最佳实践-09.服务器优化-命令及安全配置",
          "duration": 941
        },
        {
          "page": 143,
          "part": "高级篇-Redis最佳实践-10.服务器优化-内存安全和配置",
          "duration": 1281
        },
        {
          "page": 144,
          "part": "高级篇-Redis最佳实践-11.Redis优化-集群还是主从",
          "duration": 945
        },
        {
          "page": 145,
          "part": "原理篇-01.Redis原理篇课程介绍",
          "duration": 276
        },
        {
          "page": 146,
          "part": "原理篇-02.Redis数据结构-动态字符串",
          "duration": 1378
        },
        {
          "page": 147,
          "part": "原理篇-03.Redis数据结构-intset",
          "duration": 1879
        },
        {
          "page": 148,
          "part": "原理篇-04.Redis数据结构-Dict",
          "duration": 1080
        },
        {
          "page": 149,
          "part": "原理篇-05.Redis数据结构-Dict的渐进式rehash",
          "duration": 1737
        },
        {
          "page": 150,
          "part": "原理篇-06.Redis数据结构-ZipList",
          "duration": 2253
        },
        {
          "page": 151,
          "part": "原理篇-07.Redis数据结构-ZipList的连锁更新问题",
          "duration": 592
        },
        {
          "page": 152,
          "part": "原理篇-08.Redis数据结构-QuickList",
          "duration": 894
        },
        {
          "page": 153,
          "part": "原理篇-09.Redis数据结构-SkipList",
          "duration": 934
        },
        {
          "page": 154,
          "part": "原理篇-10.Redis数据结构-RedisObject",
          "duration": 600
        },
        {
          "page": 155,
          "part": "原理篇-11.Redis数据结构-五种数据类型-String",
          "duration": 708
        },
        {
          "page": 156,
          "part": "原理篇-12.Redis数据结构-五种数据类型-List",
          "duration": 1126
        },
        {
          "page": 157,
          "part": "原理篇-13.Redis数据结构-五种数据类型-Set",
          "duration": 1149
        },
        {
          "page": 158,
          "part": "原理篇-14.Redis数据结构-五种数据类型-ZSet",
          "duration": 1673
        },
        {
          "page": 159,
          "part": "原理篇-15.Redis数据结构-五种数据类型-Hash",
          "duration": 1315
        },
        {
          "page": 160,
          "part": "原理篇-16.Redis网络模型-用户空间与内核空间",
          "duration": 819
        },
        {
          "page": 161,
          "part": "原理篇-17.Redis网络模型-阻塞IO",
          "duration": 265
        },
        {
          "page": 162,
          "part": "原理篇-18.Redis网络模型-非阻塞IO",
          "duration": 269
        },
        {
          "page": 163,
          "part": "原理篇-19.Redis网络模型-IO多路复用",
          "duration": 1151
        },
        {
          "page": 164,
          "part": "原理篇-20.Redis网络模型-IO多路复用之select",
          "duration": 940
        },
        {
          "page": 165,
          "part": "原理篇-21.Redis网络模型-IO多路复用之poll",
          "duration": 497
        },
        {
          "page": 166,
          "part": "原理篇-22.Redis网络模型-IO多路复用之epoll",
          "duration": 1181
        },
        {
          "page": 167,
          "part": "原理篇-23.Redis网络模型-epoll的ET和LT模式",
          "duration": 736
        },
        {
          "page": 168,
          "part": "原理篇-24.Redis网络模型-基于epoll的服务端流程",
          "duration": 496
        },
        {
          "page": 169,
          "part": "原理篇-25.Redis网络模型-信号驱动IO及异步IO",
          "duration": 571
        },
        {
          "page": 170,
          "part": "原理篇-26.Redis网络模型-Redis是单线程吗,为什么用单线程",
          "duration": 438
        },
        {
          "page": 171,
          "part": "原理篇-27.Redis网络模型-Redis单线程及多线程网络模型变更",
          "duration": 2904
        },
        {
          "page": 172,
          "part": "原理篇-28.Redis通信协议-RESP协议",
          "duration": 960
        },
        {
          "page": 173,
          "part": "原理篇-29.Redis通信协议-基于Socket的自定义Redis客户端",
          "duration": 1876
        },
        {
          "page": 174,
          "part": "原理篇-30.Redis内存回收-过期key处理",
          "duration": 1770
        },
        {
          "page": 175,
          "part": "原理篇-31.Redis内存回收-内存淘汰策略",
          "duration": 2180
        }
      ]
    },
    {
      "bvid": "BV1Gp421m7UN",
      "title": "尚硅谷Kafka教程，2024新版kafka视频，零基础入门到实战",
      "uploader": "尚硅谷",
      "published": "2024-03-26",
      "paid": 0,
      "count": 65,
      "pages": [
        {
          "page": 1,
          "part": "01-Kafka-课程介绍",
          "duration": 184
        },
        {
          "page": 2,
          "part": "02-kafka-文件目录说明",
          "duration": 80
        },
        {
          "page": 3,
          "part": "03-Kafka-软件介绍",
          "duration": 718
        },
        {
          "page": 4,
          "part": "04-Kafka-JMS介绍",
          "duration": 698
        },
        {
          "page": 5,
          "part": "05-Kafka-组件",
          "duration": 277
        },
        {
          "page": 6,
          "part": "06-Kafka-安装与启动",
          "duration": 528
        },
        {
          "page": 7,
          "part": "07-kafka-命令行操作-主题创建",
          "duration": 706
        },
        {
          "page": 8,
          "part": "08-kafka-命令行操作-生产者和消费者",
          "duration": 396
        },
        {
          "page": 9,
          "part": "09-kafka-代码-生产者",
          "duration": 764
        },
        {
          "page": 10,
          "part": "10-kafka-代码-消费者",
          "duration": 687
        },
        {
          "page": 11,
          "part": "11-kafka-客户端便利小工具",
          "duration": 360
        },
        {
          "page": 12,
          "part": "12-kafka-构建源码环境",
          "duration": 433
        },
        {
          "page": 13,
          "part": "13-kafka-基础架构图形推演",
          "duration": 1410
        },
        {
          "page": 14,
          "part": "14-kafka-基础组件图形推演",
          "duration": 1076
        },
        {
          "page": 15,
          "part": "15-kafka-Windows集群部署",
          "duration": 1155
        },
        {
          "page": 16,
          "part": "16-kafka-启动服务-ZooKeeper的核心功能",
          "duration": 446
        },
        {
          "page": 17,
          "part": "17-kafka-启动服务-Broker启动后ZooKeeper节点的变化",
          "duration": 727
        },
        {
          "page": 18,
          "part": "18-kafka-启动服务-Controller的选举",
          "duration": 850
        },
        {
          "page": 19,
          "part": "19-kafka-启动服务-Controller和Broker的通信原理及底层通信机制",
          "duration": 2137
        },
        {
          "page": 20,
          "part": "20-kafka-启动服务-Broker组件对象介绍",
          "duration": 382
        },
        {
          "page": 21,
          "part": "21-kafka-主题创建-代码简析",
          "duration": 1262
        },
        {
          "page": 22,
          "part": "22-kafka-主题创建-主题分区副本分配策略",
          "duration": 1460
        },
        {
          "page": 23,
          "part": "23-kafka-主题创建-底层流程分析",
          "duration": 889
        },
        {
          "page": 24,
          "part": "24-kafka-生产数据-生产者流程分析",
          "duration": 748
        },
        {
          "page": 25,
          "part": "25-kafka-生产数据-拦截器和序列化处理",
          "duration": 996
        },
        {
          "page": 26,
          "part": "26-kafka-生产数据-分区器及分区计算策略",
          "duration": 1079
        },
        {
          "page": 27,
          "part": "27-kafka-生产数据-数据收集器和Sender发送线程",
          "duration": 649
        },
        {
          "page": 28,
          "part": "28-kafka-生产数据-数据的异步发送和同步发送",
          "duration": 398
        },
        {
          "page": 29,
          "part": "29-kafka-生产数据-ACKS数据接收应答处理机制",
          "duration": 768
        },
        {
          "page": 30,
          "part": "30-kafka-生产数据-数据重复及乱序的原因及原理",
          "duration": 975
        },
        {
          "page": 31,
          "part": "31-kafka-生产数据-幂等性操作",
          "duration": 914
        },
        {
          "page": 32,
          "part": "32-kafka-生产数据-事务操作",
          "duration": 760
        },
        {
          "page": 33,
          "part": "33-kafka-生产数据-事务流程",
          "duration": 1894
        },
        {
          "page": 34,
          "part": "34-kafka-存储数据-数据存储文件类型介绍",
          "duration": 1057
        },
        {
          "page": 35,
          "part": "35-kafka-存储数据-数据存储流程",
          "duration": 583
        },
        {
          "page": 36,
          "part": "36-kafka-存储数据-数据文件内容及数据定位",
          "duration": 1418
        },
        {
          "page": 37,
          "part": "37-kafka-存储数据-数据文件字节计算方式",
          "duration": 615
        },
        {
          "page": 38,
          "part": "38-kafka-存储数据-数据同步一致性问题",
          "duration": 825
        },
        {
          "page": 39,
          "part": "39-kafka-存储数据-副本同步时的水位线变化",
          "duration": 399
        },
        {
          "page": 40,
          "part": "40-kafka-存储数据-ISR列表变化和传播",
          "duration": 658
        },
        {
          "page": 41,
          "part": "41-kafka-存储数据-日志清理策略",
          "duration": 410
        },
        {
          "page": 42,
          "part": "42-kafka-消费数据-消费数据的基本流程",
          "duration": 352
        },
        {
          "page": 43,
          "part": "43-kafka-消费数据-数据消费的偏移量问题",
          "duration": 702
        },
        {
          "page": 44,
          "part": "44-kafka-消费数据-偏移量同步提交和异步提交",
          "duration": 390
        },
        {
          "page": 45,
          "part": "45-kafka-消费数据-事务数据的隔离级别",
          "duration": 919
        },
        {
          "page": 46,
          "part": "46-kafka-消费数据-消费者组介绍",
          "duration": 1131
        },
        {
          "page": 47,
          "part": "47-kafka-消费数据-消费者偏移量内部主题",
          "duration": 262
        },
        {
          "page": 48,
          "part": "48-kafka-消费数据-分区分配策略介绍",
          "duration": 919
        },
        {
          "page": 49,
          "part": "49-kafka-消费数据-分区分配策略演示",
          "duration": 1268
        },
        {
          "page": 50,
          "part": "50-kafka-消费数据-消费者Leader选举",
          "duration": 1121
        },
        {
          "page": 51,
          "part": "51-kafka-扩展-分布式集群脑裂问题",
          "duration": 474
        },
        {
          "page": 52,
          "part": "52-kafka-扩展-零拷贝",
          "duration": 794
        },
        {
          "page": 53,
          "part": "53-kafka-扩展-顺写日志",
          "duration": 362
        },
        {
          "page": 54,
          "part": "54-kafka-扩展-KafkaLinux集群部署-虚拟机安装",
          "duration": 969
        },
        {
          "page": 55,
          "part": "55-kafka-扩展-KafkaLinux集群部署-Java安装",
          "duration": 252
        },
        {
          "page": 56,
          "part": "56-kafka-扩展-KafkaLinux集群部署-ZooKeeper安装",
          "duration": 404
        },
        {
          "page": 57,
          "part": "57-kafka-扩展-KafkaLinux集群部署-Kafka安装",
          "duration": 482
        },
        {
          "page": 58,
          "part": "58-kafka-扩展-KafkaLinux集群部署-监控软件安装",
          "duration": 479
        },
        {
          "page": 59,
          "part": "59-kafka-扩展-KafkaLinux集群部署-KRaft模式安装",
          "duration": 395
        },
        {
          "page": 60,
          "part": "60-kafka-集成-大数据场景-Flume",
          "duration": 375
        },
        {
          "page": 61,
          "part": "61-kafka-集成-大数据场景-Spark",
          "duration": 339
        },
        {
          "page": 62,
          "part": "62-kafka-集成-大数据场景-Flink",
          "duration": 215
        },
        {
          "page": 63,
          "part": "63-kafka-集成-Java场景-SpringBoot",
          "duration": 584
        },
        {
          "page": 64,
          "part": "64-kafka-优化简介",
          "duration": 611
        },
        {
          "page": 65,
          "part": "65-kafka-常见问题",
          "duration": 1006
        }
      ]
    },
    {
      "bvid": "BV1c4411d7jb",
      "title": "计算机网络微课堂（有字幕无背景音乐版）",
      "uploader": "湖科大教书匠",
      "published": "2019-08-20",
      "paid": 0,
      "count": 73,
      "pages": [
        {
          "page": 1,
          "part": "1.1 计算机网络在信息时代的作用",
          "duration": 234
        },
        {
          "page": 2,
          "part": "1.2 因特网概述",
          "duration": 787
        },
        {
          "page": 3,
          "part": "1.3 三种交换方式：电路交换、分组交换和报文交换",
          "duration": 1031
        },
        {
          "page": 4,
          "part": "1.4 计算机网络的定义和分类",
          "duration": 573
        },
        {
          "page": 5,
          "part": "1.5 计算机网络的性能指标（1）",
          "duration": 1066
        },
        {
          "page": 6,
          "part": "1.5 计算机网络的性能指标（2）",
          "duration": 465
        },
        {
          "page": 7,
          "part": "1.6 计算机网络体系结构（1）—常见的计算机网络体系结构",
          "duration": 522
        },
        {
          "page": 8,
          "part": "1.6 计算机网络体系结构（2）—分层的必要性",
          "duration": 701
        },
        {
          "page": 9,
          "part": "1.6 计算机网络体系结构（3）—分层思想举例",
          "duration": 417
        },
        {
          "page": 10,
          "part": "1.6 计算机网络体系结构（4）—专用术语",
          "duration": 647
        },
        {
          "page": 11,
          "part": "1.7 第1章 概述 章节小结",
          "duration": 713
        },
        {
          "page": 12,
          "part": "1.8 第1章 概述 习题课（1）— 体系结构相关习题",
          "duration": 1057
        },
        {
          "page": 13,
          "part": "1.8 第1章 概述 习题课（2）— 时延相关习题",
          "duration": 1525
        },
        {
          "page": 14,
          "part": "2.1 物理层的基本概念",
          "duration": 198
        },
        {
          "page": 15,
          "part": "2.2 物理层下面的传输媒体",
          "duration": 1008
        },
        {
          "page": 16,
          "part": "2.3 传输方式",
          "duration": 316
        },
        {
          "page": 17,
          "part": "2.4 编码与调制",
          "duration": 809
        },
        {
          "page": 18,
          "part": "2.5 信道的极限容量",
          "duration": 756
        },
        {
          "page": 19,
          "part": "2.6 第2章 物理层 章节小结",
          "duration": 900
        },
        {
          "page": 20,
          "part": "2.7 第2章 物理层 习题课",
          "duration": 806
        },
        {
          "page": 21,
          "part": "3.1 数据链路层概述",
          "duration": 580
        },
        {
          "page": 22,
          "part": "3.2 封装成帧",
          "duration": 591
        },
        {
          "page": 23,
          "part": "3.3 差错检测",
          "duration": 710
        },
        {
          "page": 24,
          "part": "3.4.1 可靠传输的基本概念",
          "duration": 341
        },
        {
          "page": 25,
          "part": "3.4.2 可靠传输的实现机制 — 停止-等待协议",
          "duration": 979
        },
        {
          "page": 26,
          "part": "3.4.3 可靠传输的实现机制 — 回退N帧协议",
          "duration": 976
        },
        {
          "page": 27,
          "part": "3.4.4 可靠传输的实现机制 — 选择重传协议",
          "duration": 817
        },
        {
          "page": 28,
          "part": "3.5 点对点协议PPP",
          "duration": 702
        },
        {
          "page": 29,
          "part": "3.6.1 媒体接入控制的基本概念",
          "duration": 262
        },
        {
          "page": 30,
          "part": "3.6.2 媒体接入控制 — 静态划分信道",
          "duration": 1057
        },
        {
          "page": 31,
          "part": "3.6.3 随机接入 — CSMA/CD协议",
          "duration": 1261
        },
        {
          "page": 32,
          "part": "3.6.4 随机接入— CSMA/CA协议",
          "duration": 1356
        },
        {
          "page": 33,
          "part": "3.7 MAC地址、IP地址以及ARP协议（1） — MAC地址",
          "duration": 1069
        },
        {
          "page": 34,
          "part": "3.7 MAC地址、IP地址以及ARP协议（2） — IP地址",
          "duration": 775
        },
        {
          "page": 35,
          "part": "3.7 MAC地址、IP地址以及ARP协议（3） — ARP协议",
          "duration": 449
        },
        {
          "page": 36,
          "part": "3.8 集线器与交换机的区别",
          "duration": 845
        },
        {
          "page": 37,
          "part": "3.9 以太网交换机自学习和转发帧的流程",
          "duration": 814
        },
        {
          "page": 38,
          "part": "3.10 以太网交换机的生成树协议STP",
          "duration": 494
        },
        {
          "page": 39,
          "part": "3.11.1 虚拟局域网VLAN概述",
          "duration": 322
        },
        {
          "page": 40,
          "part": "3.11.2 虚拟局域网VLAN的实现机制",
          "duration": 1156
        },
        {
          "page": 41,
          "part": "4.1 网络层概述",
          "duration": 456
        },
        {
          "page": 42,
          "part": "4.2 网络层提供的两种服务",
          "duration": 286
        },
        {
          "page": 43,
          "part": "4.3.1 IPv4地址概述",
          "duration": 492
        },
        {
          "page": 44,
          "part": "4.3.2 分类编址的IPv4地址",
          "duration": 1001
        },
        {
          "page": 45,
          "part": "4.3.3 划分子网的IPv4地址",
          "duration": 890
        },
        {
          "page": 46,
          "part": "4.3.4 无分类编址的IPv4地址",
          "duration": 711
        },
        {
          "page": 47,
          "part": "4.3.5 IPv4地址的应用规划",
          "duration": 838
        },
        {
          "page": 48,
          "part": "4.4 IP数据报的发送和转发过程",
          "duration": 791
        },
        {
          "page": 49,
          "part": "4.5 静态路由配置及其可能产生的路由环路问题",
          "duration": 895
        },
        {
          "page": 50,
          "part": "4.6.1 路由选择协议概述",
          "duration": 632
        },
        {
          "page": 51,
          "part": "4.6.2 路由信息协议RIP的基本工作原理",
          "duration": 983
        },
        {
          "page": 52,
          "part": "4.6.3 开放最短路径优先OSPF的基本工作原理",
          "duration": 982
        },
        {
          "page": 53,
          "part": "4.6.4 边界网关协议BGP的基本工作原理",
          "duration": 563
        },
        {
          "page": 54,
          "part": "4.7 IPv4数据报的首部格式",
          "duration": 1487
        },
        {
          "page": 55,
          "part": "4.8 网际控制报文协议ICMP",
          "duration": 782
        },
        {
          "page": 56,
          "part": "4.9 虚拟专用网VPN与网络地址转换NAT",
          "duration": 790
        },
        {
          "page": 57,
          "part": "5.1 运输层概述",
          "duration": 242
        },
        {
          "page": 58,
          "part": "5.2 运输层端口号、复用与分用的概念",
          "duration": 780
        },
        {
          "page": 59,
          "part": "5.3 UDP和TCP的对比",
          "duration": 625
        },
        {
          "page": 60,
          "part": "5.4 TCP的流量控制",
          "duration": 835
        },
        {
          "page": 61,
          "part": "5.5 TCP的拥塞控制",
          "duration": 1299
        },
        {
          "page": 62,
          "part": "5.6 TCP超时重传时间的选择",
          "duration": 720
        },
        {
          "page": 63,
          "part": "5.7 TCP可靠传输的实现",
          "duration": 1084
        },
        {
          "page": 64,
          "part": "5.8.1 TCP的运输连接管理—TCP的连接建立",
          "duration": 775
        },
        {
          "page": 65,
          "part": "5.8.2 TCP的运输连接管理—TCP的连接释放",
          "duration": 593
        },
        {
          "page": 66,
          "part": "5.9 TCP报文段的首部格式",
          "duration": 939
        },
        {
          "page": 67,
          "part": "6.1 应用层概述",
          "duration": 208
        },
        {
          "page": 68,
          "part": "6.2 客户—服务器方式和对等方式",
          "duration": 375
        },
        {
          "page": 69,
          "part": "6.3 动态主机配置协议DHCP",
          "duration": 917
        },
        {
          "page": 70,
          "part": "6.4 域名系统DNS",
          "duration": 1217
        },
        {
          "page": 71,
          "part": "6.5 文件传送协议FTP",
          "duration": 585
        },
        {
          "page": 72,
          "part": "6.6 电子邮件",
          "duration": 1321
        },
        {
          "page": 73,
          "part": "6.7 万维网WWW",
          "duration": 1631
        }
      ]
    },
    {
      "bvid": "BV178w1z7EHQ",
      "title": "黑马程序员2026最新版LangChain+LangGraph开发实战全套视频课程，从Agent开发，到LangSmith的监控、调试、评估一套搞定",
      "uploader": "黑马程序员",
      "published": "2026-03-20",
      "paid": 0,
      "count": 28,
      "pages": [
        {
          "page": 1,
          "part": "00-课程介绍",
          "duration": 426
        },
        {
          "page": 2,
          "part": "01-AI通识与基础-认识人工智能",
          "duration": 297
        },
        {
          "page": 3,
          "part": "02-AI通识与基础-神经网络原理",
          "duration": 975
        },
        {
          "page": 4,
          "part": "03.AI通识与基础-大语言模型",
          "duration": 1363
        },
        {
          "page": 5,
          "part": "04-AI通识-大模型应用",
          "duration": 753
        },
        {
          "page": 6,
          "part": "05-AI通识-大模型服务",
          "duration": 353
        },
        {
          "page": 7,
          "part": "06-AI通识-大模型服务-注册DeepSeek",
          "duration": 447
        },
        {
          "page": 8,
          "part": "07-AI通识-大模型服务-注册阿里云百炼",
          "duration": 430
        },
        {
          "page": 9,
          "part": "08-AI通识-大模型服务-Ollama",
          "duration": 954
        },
        {
          "page": 10,
          "part": "09-AI通识-大模型API-接口规范",
          "duration": 1103
        },
        {
          "page": 11,
          "part": "10-AI通识-大模型API-会话记忆",
          "duration": 513
        },
        {
          "page": 12,
          "part": "11-AI通识-大模型API-开发环境",
          "duration": 773
        },
        {
          "page": 13,
          "part": "12-AI通识-大模型API-编程调用大模型",
          "duration": 1079
        },
        {
          "page": 14,
          "part": "13-LangChain入门-认识LangChain",
          "duration": 772
        },
        {
          "page": 15,
          "part": "14-LangChain入门-快速入门和Agent原理",
          "duration": 1366
        },
        {
          "page": 16,
          "part": "15-LangChain入门-初始化模型",
          "duration": 1138
        },
        {
          "page": 17,
          "part": "16-LangChain入门-模型-调用模型",
          "duration": 1043
        },
        {
          "page": 18,
          "part": "17-LangChain入门-消息（Message）",
          "duration": 1488
        },
        {
          "page": 19,
          "part": "18-LangChain入门-提示词工程",
          "duration": 1217
        },
        {
          "page": 20,
          "part": "19-LangChain入门-工具（Tools）",
          "duration": 1414
        },
        {
          "page": 21,
          "part": "20-LangChain入门-预定义工具Tavily",
          "duration": 991
        },
        {
          "page": 22,
          "part": "21-LangChain入门-短期记忆",
          "duration": 967
        },
        {
          "page": 23,
          "part": "22-LangChain入门-短期记忆-持久存储",
          "duration": 703
        },
        {
          "page": 24,
          "part": "23-LangChain入门-记忆管理策略",
          "duration": 1069
        },
        {
          "page": 25,
          "part": "24-LangChain入门-实战-需求分析与功能验证",
          "duration": 879
        },
        {
          "page": 26,
          "part": "25-LangChain入门-实战-对接LangSmith",
          "duration": 1209
        },
        {
          "page": 27,
          "part": "26-LangChain入门-实战-搭建服务端并对接OSS",
          "duration": 1210
        },
        {
          "page": 28,
          "part": "27-LangChain入门-AI私厨-完成Agent开发",
          "duration": 1371
        }
      ]
    },
    {
      "bvid": "BV1yjz5BLEoY",
      "title": "黑马程序员大模型RAG与Agent智能体项目实战教程，基于主流的LangChain技术从大模型提示词到实战项目",
      "uploader": "黑马程序员",
      "published": "2026-01-21",
      "paid": 0,
      "count": 67,
      "pages": [
        {
          "page": 1,
          "part": "课程导学",
          "duration": 318
        },
        {
          "page": 2,
          "part": "前置准备-01、通义千问大模型的接入",
          "duration": 429
        },
        {
          "page": 3,
          "part": "前置准备-02、代码调用云端的大模型",
          "duration": 483
        },
        {
          "page": 4,
          "part": "前置准备-03、使用环境变量保护APIKEY",
          "duration": 489
        },
        {
          "page": 5,
          "part": "前置准备-04、Ollama简介",
          "duration": 332
        },
        {
          "page": 6,
          "part": "前置准备-05、win&mac部署ollama并运行蒸馏模型",
          "duration": 787
        },
        {
          "page": 7,
          "part": "前置准备-06、代码调用ollama的本地模型",
          "duration": 221
        },
        {
          "page": 8,
          "part": "OpenAI库基础使用-01、OpenAI库的基础使用",
          "duration": 872
        },
        {
          "page": 9,
          "part": "OpenAI库基础使用-02、OpenAI库的流式输出模式",
          "duration": 315
        },
        {
          "page": 10,
          "part": "OpenAI库基础使用-03、OpenAI库附带历史消息调用模型",
          "duration": 282
        },
        {
          "page": 11,
          "part": "提示词工程-01、大模型prompt工程指南",
          "duration": 623
        },
        {
          "page": 12,
          "part": "提示词工程-02、提示词优化案例介绍和零样本少样本思想",
          "duration": 695
        },
        {
          "page": 13,
          "part": "提示词工程-03、提示词优化案例_金融文本分类任务",
          "duration": 839
        },
        {
          "page": 14,
          "part": "提示词工程-04、Json数据格式",
          "duration": 897
        },
        {
          "page": 15,
          "part": "提示词工程-05、提示词优化案例_金融文本信息抽取",
          "duration": 826
        },
        {
          "page": 16,
          "part": "提示词工程-06、提示词优化案例_金融文本匹配",
          "duration": 620
        },
        {
          "page": 17,
          "part": "RAG开发-01、LangChain的简介",
          "duration": 205
        },
        {
          "page": 18,
          "part": "RAG开发-02、LangChain的环境部署",
          "duration": 215
        },
        {
          "page": 19,
          "part": "RAG开发-03、RAG介绍",
          "duration": 824
        },
        {
          "page": 20,
          "part": "RAG开发-04、[扩展]向量的基础概念",
          "duration": 548
        },
        {
          "page": 21,
          "part": "RAG开发-05、[扩展]余弦相似度算法",
          "duration": 1080
        },
        {
          "page": 22,
          "part": "RAG开发-06、LangChain调用大语言模型",
          "duration": 576
        },
        {
          "page": 23,
          "part": "RAG开发-07、LangChain模型的流式输出",
          "duration": 362
        },
        {
          "page": 24,
          "part": "RAG开发-08、LangChain调用聊天模型",
          "duration": 778
        },
        {
          "page": 25,
          "part": "RAG开发-09、LangChain消息的简写形式",
          "duration": 470
        },
        {
          "page": 26,
          "part": "RAG开发-10、LangChain调用嵌入模型",
          "duration": 731
        },
        {
          "page": 27,
          "part": "RAG开发-11、LangChain通用提示词模板",
          "duration": 704
        },
        {
          "page": 28,
          "part": "RAG开发-12、FewShot提示词模板",
          "duration": 1049
        },
        {
          "page": 29,
          "part": "RAG开发-13、模板类的format和invoke方法",
          "duration": 873
        },
        {
          "page": 30,
          "part": "RAG开发-14、ChatPromptTemplate的使用",
          "duration": 858
        },
        {
          "page": 31,
          "part": "RAG开发-15、Chain的基础使用",
          "duration": 1093
        },
        {
          "page": 32,
          "part": "RAG开发-16、[扩展]或运算符的重写",
          "duration": 927
        },
        {
          "page": 33,
          "part": "RAG开发-17、简单理解Runnable接口",
          "duration": 466
        },
        {
          "page": 34,
          "part": "RAG开发-18、StrOutputParser字符串输出解析器",
          "duration": 751
        },
        {
          "page": 35,
          "part": "RAG开发-19、JsonOutputParser和多模型执行链",
          "duration": 1189
        },
        {
          "page": 36,
          "part": "RAG开发-20、自定义函数加入链",
          "duration": 878
        },
        {
          "page": 37,
          "part": "RAG开发-21、Memory临时会话记忆",
          "duration": 1684
        },
        {
          "page": 38,
          "part": "RAG开发-22、Memory长期会话记忆",
          "duration": 1483
        },
        {
          "page": 39,
          "part": "RAG开发-23、CSVLoader",
          "duration": 1000
        },
        {
          "page": 40,
          "part": "RAG开发-24、JSONLoader",
          "duration": 1018
        },
        {
          "page": 41,
          "part": "RAG开发-25、TextLoader和文档分割器",
          "duration": 714
        },
        {
          "page": 42,
          "part": "RAG开发-26、PyPDFLoader",
          "duration": 418
        },
        {
          "page": 43,
          "part": "RAG开发-27、VectorStores向量存储",
          "duration": 1313
        },
        {
          "page": 44,
          "part": "RAG开发-28、基于向量检索构建提示词",
          "duration": 621
        },
        {
          "page": 45,
          "part": "RAG开发-29、RunnablePassthrough的使用",
          "duration": 1420
        },
        {
          "page": 46,
          "part": "RAG项目-01、RAG项目案例介绍",
          "duration": 377
        },
        {
          "page": 47,
          "part": "RAG项目-02、RAG项目-文本上传WEB服务",
          "duration": 848
        },
        {
          "page": 48,
          "part": "RAG项目-03、RAG项目-md5工具函数开发",
          "duration": 1033
        },
        {
          "page": 49,
          "part": "RAG项目-04、RAG项目-知识库更新服务",
          "duration": 1143
        },
        {
          "page": 50,
          "part": "RAG项目-05、RAG项目-完成离线流程开发",
          "duration": 772
        },
        {
          "page": 51,
          "part": "RAG项目-06、RAG项目-在线流程向量存储服务代码",
          "duration": 676
        },
        {
          "page": 52,
          "part": "RAG项目-07、RAG项目-rag服务核心代码开发",
          "duration": 862
        },
        {
          "page": 53,
          "part": "RAG项目-08、RAG项目-历史会话记录功能的实现",
          "duration": 1163
        },
        {
          "page": 54,
          "part": "RAG项目-09、RAG项目-聊天页面开发",
          "duration": 1385
        },
        {
          "page": 55,
          "part": "Agent智能体-01、Agent智能体介绍",
          "duration": 388
        },
        {
          "page": 56,
          "part": "Agent智能体-02、Agent智能体初体验",
          "duration": 740
        },
        {
          "page": 57,
          "part": "Agent智能体-03、Agent的流式输出",
          "duration": 893
        },
        {
          "page": 58,
          "part": "Agent智能体-04、Agent的ReAct行动框架",
          "duration": 583
        },
        {
          "page": 59,
          "part": "Agent智能体-05、Agent的middleware中间件",
          "duration": 899
        },
        {
          "page": 60,
          "part": "Agent智能体-06、Agent智能体项目介绍",
          "duration": 355
        },
        {
          "page": 61,
          "part": "Agent智能体-07、[Agent项目]日志和路径工具开发",
          "duration": 1258
        },
        {
          "page": 62,
          "part": "Agent智能体-08、[Agent项目]配置工具文件工具和提示词加载工具开发",
          "duration": 1738
        },
        {
          "page": 63,
          "part": "Agent智能体-09、[Agent项目]向量存储服务开发",
          "duration": 2074
        },
        {
          "page": 64,
          "part": "Agent智能体-10、[Agent项目]RAG总结服务开发",
          "duration": 741
        },
        {
          "page": 65,
          "part": "Agent智能体-11、[Agent项目]tools工具开发",
          "duration": 1316
        },
        {
          "page": 66,
          "part": "Agent智能体-12、[Agent项目]中间件和Agent创建",
          "duration": 2323
        },
        {
          "page": 67,
          "part": "Agent智能体-13、[Agent项目]用户界面开发",
          "duration": 1048
        }
      ]
    },
    {
      "bvid": "BV1wz4y1y7Kd",
      "title": "Golang中GC回收机制三色标记与混合写屏障",
      "uploader": "刘丹冰Aceld",
      "published": "2020-11-09",
      "paid": 0,
      "count": 14,
      "pages": [
        {
          "page": 1,
          "part": "第1讲-课程目标",
          "duration": 193
        },
        {
          "page": 2,
          "part": "第2讲-GoV1.3的标记清除法",
          "duration": 417
        },
        {
          "page": 3,
          "part": "第3讲-GoV1.3的标记清除法的缺点",
          "duration": 264
        },
        {
          "page": 4,
          "part": "第4讲-GoV1.5三色标记法",
          "duration": 499
        },
        {
          "page": 5,
          "part": "第5讲-三色标记无STW的问题",
          "duration": 536
        },
        {
          "page": 6,
          "part": "第6讲-强弱三色不变式",
          "duration": 433
        },
        {
          "page": 7,
          "part": "第7讲-插入写屏障",
          "duration": 972
        },
        {
          "page": 8,
          "part": "第8讲-删除写屏障(视频后面多余空白)",
          "duration": 972
        },
        {
          "page": 9,
          "part": "第9讲-混合写屏障操作流程",
          "duration": 436
        },
        {
          "page": 10,
          "part": "第10讲-混合写屏障场景1",
          "duration": 376
        },
        {
          "page": 11,
          "part": "第11讲-混合写屏障场景2",
          "duration": 263
        },
        {
          "page": 12,
          "part": "第12讲-混合写屏障场景3",
          "duration": 346
        },
        {
          "page": 13,
          "part": "第13讲-混合写屏障场景4",
          "duration": 272
        },
        {
          "page": 14,
          "part": "第14讲-总结",
          "duration": 601
        }
      ]
    },
    {
      "bvid": "BV1jK4y1N7ST",
      "title": "深入理解Linux中网络I/O复用并发模型",
      "uploader": "刘丹冰Aceld",
      "published": "2021-05-04",
      "paid": 0,
      "count": 12,
      "pages": [
        {
          "page": 1,
          "part": "1-理解IO复用-阻塞与非阻塞",
          "duration": 768
        },
        {
          "page": 2,
          "part": "2-IO复用解决的问题",
          "duration": 919
        },
        {
          "page": 3,
          "part": "3-(附加)epoll的API及内部机制",
          "duration": 900
        },
        {
          "page": 4,
          "part": "4-(附加)epoll水平触发与边缘触发",
          "duration": 349
        },
        {
          "page": 5,
          "part": "5-常见多路IO复用并发模型提纲",
          "duration": 302
        },
        {
          "page": 6,
          "part": "6-模型1-单线程Accept",
          "duration": 453
        },
        {
          "page": 7,
          "part": "7-模型2-单线程Accept+多线程读写业务",
          "duration": 698
        },
        {
          "page": 8,
          "part": "8-模型3-单线程多路IO复用",
          "duration": 808
        },
        {
          "page": 9,
          "part": "9-模型4-单线程多路IO复用+多线程读写业务(工作池)",
          "duration": 944
        },
        {
          "page": 10,
          "part": "10-模型5-单线程IO复用+多线程IO复用(链接线程池)",
          "duration": 1159
        },
        {
          "page": 11,
          "part": "11-模型5(进程版)",
          "duration": 564
        },
        {
          "page": 12,
          "part": "12-模型6-单线程多路IO复用+多线程多路IO复用+多线程",
          "duration": 864
        }
      ]
    },
    {
      "bvid": "BV12Z63BCEn6",
      "title": "Agent开发必学的神级项目！Hello-Agents第四章：智能体范式构建（上）",
      "uploader": "二次元的Datawhale",
      "published": "2026-01-27",
      "paid": 0,
      "count": 1,
      "pages": [
        {
          "page": 1,
          "part": "Agent开发必学的神级项目！Hello-Agents第四章：智能体范式构建（上）",
          "duration": 1374
        }
      ]
    },
    {
      "bvid": "BV19r4y1w7Nx",
      "title": "Golang深入理解GPM模型",
      "uploader": "刘丹冰Aceld",
      "published": "2020-11-08",
      "paid": 0,
      "count": 18,
      "pages": [
        {
          "page": 1,
          "part": "第1讲-课程阶段目标",
          "duration": 109
        },
        {
          "page": 2,
          "part": "第2讲-调度器的由来和分析",
          "duration": 1358
        },
        {
          "page": 3,
          "part": "第3讲-GMP模型简介",
          "duration": 622
        },
        {
          "page": 4,
          "part": "第4讲-调度器的设计策略",
          "duration": 572
        },
        {
          "page": 5,
          "part": "第5讲-go指令的调度流程",
          "duration": 449
        },
        {
          "page": 6,
          "part": "第6讲-Go的启动周期M0和G0",
          "duration": 487
        },
        {
          "page": 7,
          "part": "第7讲-GMP可视化调试",
          "duration": 751
        },
        {
          "page": 8,
          "part": "第8讲-GMP终端GODEBUG调试",
          "duration": 474
        },
        {
          "page": 9,
          "part": "第9讲-场景1-创建G",
          "duration": 198
        },
        {
          "page": 10,
          "part": "第10讲-场景2-G执行完毕",
          "duration": 181
        },
        {
          "page": 11,
          "part": "第11讲-场景3-4-5-连续创建多个G导致本地队列满",
          "duration": 316
        },
        {
          "page": 12,
          "part": "第12讲-场景6-唤醒正在休眠的M",
          "duration": 229
        },
        {
          "page": 13,
          "part": "第13讲-场景7-被唤醒的M从全局取G",
          "duration": 234
        },
        {
          "page": 14,
          "part": "第14讲-场景8-偷取G情况",
          "duration": 213
        },
        {
          "page": 15,
          "part": "第15讲-场景9-自旋线程的最大限制",
          "duration": 112
        },
        {
          "page": 16,
          "part": "第16讲-场景10-G发生调用阻塞",
          "duration": 254
        },
        {
          "page": 17,
          "part": "第17讲-场景11-G发生非阻塞",
          "duration": 198
        },
        {
          "page": 18,
          "part": "第18讲-总结",
          "duration": 346
        }
      ]
    },
    {
      "bvid": "BV1wE411d7th",
      "title": "zinx-Golang轻量级TCP服务器框架(适合Go语言自学-深入浅出)",
      "uploader": "刘丹冰Aceld",
      "published": "2019-10-13",
      "paid": 0,
      "count": 91,
      "pages": [
        {
          "page": 1,
          "part": "01-zinx课程简介",
          "duration": 191
        },
        {
          "page": 2,
          "part": "02-基于zinx框架的服务器应用演示",
          "duration": 287
        },
        {
          "page": 3,
          "part": "03-zinxV0.1-基础server模块定义",
          "duration": 520
        },
        {
          "page": 4,
          "part": "04-zinxV0.1-基础server模块启动实现",
          "duration": 1422
        },
        {
          "page": 5,
          "part": "05-zinxV0.1-开发服务器应用.",
          "duration": 627
        },
        {
          "page": 6,
          "part": "06-zinxV0.2-链接模块的封装(方法与属性)",
          "duration": 1149
        },
        {
          "page": 7,
          "part": "07-zinxV0.2-链接模块的方法实现",
          "duration": 639
        },
        {
          "page": 8,
          "part": "08-zinxV0.2-server与connection的集成",
          "duration": 633
        },
        {
          "page": 9,
          "part": "09-zinxV0.3-Request请求消息的封装定义",
          "duration": 465
        },
        {
          "page": 10,
          "part": "10-zinxV0.3-Router模块的定义",
          "duration": 690
        },
        {
          "page": 11,
          "part": "11-zinxV0.3-框架集成router模块",
          "duration": 899
        },
        {
          "page": 12,
          "part": "12-zinxV0.3-开发服务器应用",
          "duration": 752
        },
        {
          "page": 13,
          "part": "13-zinxV0.4-添加全局配置模块思路及目标",
          "duration": 336
        },
        {
          "page": 14,
          "part": "14-zinxV0.4-实现全局配置模块",
          "duration": 667
        },
        {
          "page": 15,
          "part": "15-zinxV0.4-全局参数的硬代码替换",
          "duration": 372
        },
        {
          "page": 16,
          "part": "16-ZinxV0.4-开发服务器应用",
          "duration": 384
        },
        {
          "page": 17,
          "part": "17-zinxV0.5-Message消息模块定义实现",
          "duration": 590
        },
        {
          "page": 18,
          "part": "18-zinxV0.5-TCP粘包问题的解决思路",
          "duration": 500
        },
        {
          "page": 19,
          "part": "19-zinxV0.5-封包拆包过程实现",
          "duration": 1316
        },
        {
          "page": 20,
          "part": "20-zinxV0.5-封包拆包模块的单元测试",
          "duration": 1578
        },
        {
          "page": 21,
          "part": "21-ZinxV0.5-Zinx框架集成消息封装机制",
          "duration": 1603
        },
        {
          "page": 22,
          "part": "22-ZinxV0.5-使用Zinx框架开发-server端实现",
          "duration": 341
        },
        {
          "page": 23,
          "part": "23-ZinxV0.5-使用Zinx框架开发-client端实",
          "duration": 907
        },
        {
          "page": 24,
          "part": "24-ZinxV0.5-消息管理模块思路分析",
          "duration": 283
        },
        {
          "page": 25,
          "part": "25-ZinxV0.5-消息管理模块的定义与实现",
          "duration": 755
        },
        {
          "page": 26,
          "part": "26-ZinxV0.5-集成消息管理模块思路",
          "duration": 327
        },
        {
          "page": 27,
          "part": "27-ZinxV0.6-集成消息管理模块实现",
          "duration": 441
        },
        {
          "page": 28,
          "part": "28-ZinxV0.6-使用Zinx框架开发",
          "duration": 414
        },
        {
          "page": 29,
          "part": "29-ZinxV0.7-读写分离模型思路分析",
          "duration": 287
        },
        {
          "page": 30,
          "part": "30-ZinxV0.7-读写分离模型实现",
          "duration": 880
        },
        {
          "page": 31,
          "part": "31-ZinxV0.7-使用Zinx框架开发",
          "duration": 330
        },
        {
          "page": 32,
          "part": "32-ZinxV0.8-开辟任务池限定业务Gourtine的意义及流程",
          "duration": 696
        },
        {
          "page": 33,
          "part": "33-ZinxV0.8-创建消息队列属性和全局配置worker工作池数量",
          "duration": 680
        },
        {
          "page": 34,
          "part": "34-ZinxV0.8-工作池的创建与Worker的流程实现",
          "duration": 915
        },
        {
          "page": 35,
          "part": "35-ZinxV0.8-发送消息队列机制方法实现",
          "duration": 727
        },
        {
          "page": 36,
          "part": "36-ZinxV0.8-消息队列及工作池机制集成Zinx到框架",
          "duration": 379
        },
        {
          "page": 37,
          "part": "37-ZinxV0.8-使用zinx框架开发",
          "duration": 286
        },
        {
          "page": 38,
          "part": "38-ZinxV0.9-连接管理模块目标分析",
          "duration": 351
        },
        {
          "page": 39,
          "part": "39-ZinxV0.9-连接管理器的定义实现",
          "duration": 1100
        },
        {
          "page": 40,
          "part": "40-ZinxV0.9-连接管理器与Server模块关联",
          "duration": 573
        },
        {
          "page": 41,
          "part": "41-ZinxV0.9-连接管理器与Connection模块关联",
          "duration": 550
        },
        {
          "page": 42,
          "part": "42-ZinxV0.9-链接管理模块的功能测试",
          "duration": 377
        },
        {
          "page": 43,
          "part": "43-ZinxV0.9-链接的创建销毁的Hook方法顺序",
          "duration": 371
        },
        {
          "page": 44,
          "part": "44-ZinxV0.9-链接的创建-销毁Hook方法实现",
          "duration": 982
        },
        {
          "page": 45,
          "part": "45-ZinxV0.9-使用Zinx框架开发",
          "duration": 515
        },
        {
          "page": 46,
          "part": "46-ZinxV1.0-链接属性定义及实现",
          "duration": 681
        },
        {
          "page": 47,
          "part": "47-ZinxV1.0-使用Zinx框架开发",
          "duration": 740
        },
        {
          "page": 48,
          "part": "48-Zinx服务器应用-MMO游戏-整体结构介绍",
          "duration": 390
        },
        {
          "page": 49,
          "part": "49-Zinx服务器应用-MMO游戏-AOI兴趣点的介绍",
          "duration": 306
        },
        {
          "page": 50,
          "part": "50-Zinx服务器应用-MMO游戏-AOI格子的属性和方法分析",
          "duration": 515
        },
        {
          "page": 51,
          "part": "51-Zinx服务器应用-MMO游戏-AOI格子类型的代码实现",
          "duration": 712
        },
        {
          "page": 52,
          "part": "52-Zinx服务器应用-MMO游戏-AOI区域管理模块的属性和方法分析",
          "duration": 554
        },
        {
          "page": 53,
          "part": "53-Zinx服务器应用-MMO游戏-AOI区域管理膜的初始化与打印方法实现",
          "duration": 1160
        },
        {
          "page": 54,
          "part": "54-Zinx服务器应用-MMO游戏-AOI区域管理模块初始化单元测试",
          "duration": 265
        },
        {
          "page": 55,
          "part": "55-Zinx服务器应用-MMO游戏-AOI区域的一些计算方法",
          "duration": 253
        },
        {
          "page": 56,
          "part": "56-Zinx服务器应用-MMO游戏-根据格子ID得到九宫格格子信息",
          "duration": 1133
        },
        {
          "page": 57,
          "part": "57-Zinx服务器应用-MMO游戏-九宫格信息获取单元测试",
          "duration": 335
        },
        {
          "page": 58,
          "part": "58-Zinx服务器应用-MMO游戏-通过坐标得到周边九宫格的全部玩家坐标集合",
          "duration": 656
        },
        {
          "page": 59,
          "part": "59-Zinx服务器应用-MMO游戏-AOI管理模块的针对Player的添加删除查询实现",
          "duration": 456
        },
        {
          "page": 60,
          "part": "60-Zinx服务器应用-MMO游戏-protobuf简介-与json-xml的对比",
          "duration": 394
        },
        {
          "page": 61,
          "part": "61-Zinx服务器应用-MMO游戏-protocol_buffer的环境配置",
          "duration": 526
        },
        {
          "page": 62,
          "part": "62-Zinx服务器应用-MMO游戏-protocol_buffer语法快速理解",
          "duration": 537
        },
        {
          "page": 63,
          "part": "63-Zinx服务器应用-MMO游戏-protobuf的编译步骤",
          "duration": 368
        },
        {
          "page": 64,
          "part": "64-Zinx服务器应用-MMO游戏-protobuf协议编程",
          "duration": 657
        },
        {
          "page": 65,
          "part": "65-Zinx服务器应用-MMO游戏-protobuf协议编程流程总结",
          "duration": 148
        },
        {
          "page": 66,
          "part": "66-Zinx服务器应用-MMO游戏-游戏proto3协议介绍",
          "duration": 632
        },
        {
          "page": 67,
          "part": "67-Zinx服务器应用-MMO游戏-服务器项目构建",
          "duration": 602
        },
        {
          "page": 68,
          "part": "68-Zinx服务器应用-MMO游戏-玩家上线业务分析及步骤",
          "duration": 455
        },
        {
          "page": 69,
          "part": "69-Zinx服务器应用-MMO游戏-玩家上线proto协议生成",
          "duration": 228
        },
        {
          "page": 70,
          "part": "70-Zinx服务器应用-MMO游戏-玩家Player模块定义",
          "duration": 1108
        },
        {
          "page": 71,
          "part": "71-Zinx服务器应用-MMO游戏-上线业务的实现",
          "duration": 821
        },
        {
          "page": 72,
          "part": "72-Zinx服务器应用-MMO游戏-玩家上线功能测试与Zinx框架bug修复",
          "duration": 281
        },
        {
          "page": 73,
          "part": "73-Zinx服务器应用-MMO游戏-世界聊天proto协议生成",
          "duration": 309
        },
        {
          "page": 74,
          "part": "74-Zinx服务器应用-MMO游戏-世界管理模块属性方法分析",
          "duration": 263
        },
        {
          "page": 75,
          "part": "75-Zinx服务器应用-MMO游戏-世界管理模块实现",
          "duration": 1055
        },
        {
          "page": 76,
          "part": "76-Zinx服务器应用-MMO游戏-玩家上线添加到世界管理模块",
          "duration": 140
        },
        {
          "page": 77,
          "part": "77-Zinx服务器应用-MMO游戏-世界聊天了路由业务注册和业务实现",
          "duration": 968
        },
        {
          "page": 78,
          "part": "78-Zinx服务器应用-MMO游戏-玩家的广播聊天方法实现",
          "duration": 254
        },
        {
          "page": 79,
          "part": "79-Zinx服务器应用-MMO游戏-世界聊天测试",
          "duration": 181
        },
        {
          "page": 80,
          "part": "80-Zinx服务器应用-MMO游戏-同步上线玩家位置广播思路分析",
          "duration": 470
        },
        {
          "page": 81,
          "part": "81-Zinx服务器应用-MMO游戏-让周围玩家显示当前玩家",
          "duration": 579
        },
        {
          "page": 82,
          "part": "82-Zinx服务器应用-MMO游戏-测试周围玩家显示自己",
          "duration": 108
        },
        {
          "page": 83,
          "part": "83-Zinx服务器应用-MMO游戏-实现当前玩家显示周边玩家位置信息",
          "duration": 574
        },
        {
          "page": 84,
          "part": "84-Zinx服务器应用-MMO游戏-测试当前玩家显示周围玩家位置信息",
          "duration": 148
        },
        {
          "page": 85,
          "part": "85-Zinx服务器应用-MMO游戏-玩家移动过程实现",
          "duration": 499
        },
        {
          "page": 86,
          "part": "86-Zinx服务器应用-MMO游戏-玩家移动信息的广播实现",
          "duration": 533
        },
        {
          "page": 87,
          "part": "87-Zinx服务器应用-MMO游戏-玩家移动广播测试",
          "duration": 359
        },
        {
          "page": 88,
          "part": "88-Zinx服务器应用-MMO游戏-玩家下线业务分析",
          "duration": 164
        },
        {
          "page": 89,
          "part": "89-Zinx服务器应用-MMO游戏-玩家下线业务的实现",
          "duration": 489
        },
        {
          "page": 90,
          "part": "90-Zinx服务器应用-MMO游戏-玩家下线业务的测试",
          "duration": 100
        },
        {
          "page": 91,
          "part": "91-Zinx服务器课程总结",
          "duration": 322
        }
      ]
    },
    {
      "bvid": "BV1pYKgzAE5C",
      "title": "工业级智能体开发实践，LangChain从零入门与智能体开发实战！RAG知识库检索、MCP智能体开发、数据分析智能体搭建全领域实战！从零学会LangChain！",
      "uploader": "九天Hector",
      "published": "2025-06-24",
      "paid": 0,
      "count": 19,
      "pages": [
        {
          "page": 1,
          "part": "1.LangChain快速入门介绍",
          "duration": 274
        },
        {
          "page": 2,
          "part": "2.LangChain技术生态介绍",
          "duration": 1323
        },
        {
          "page": 3,
          "part": "3.LangChain框架优劣势对比介绍",
          "duration": 572
        },
        {
          "page": 4,
          "part": "4.各类大模型接入LangChain流程",
          "duration": 2128
        },
        {
          "page": 5,
          "part": "5.LangChain核心功能Chain搭建方法",
          "duration": 1038
        },
        {
          "page": 6,
          "part": "6.复杂功能Chain搭建方法",
          "duration": 850
        },
        {
          "page": 7,
          "part": "7.自定义Chain节点实现方法",
          "duration": 1449
        },
        {
          "page": 8,
          "part": "8.借助LangChain搭建多轮对话机器人",
          "duration": 451
        },
        {
          "page": 9,
          "part": "9.LangChain调用内置工具实现方法",
          "duration": 983
        },
        {
          "page": 10,
          "part": "10.LangChain调内置工具优化方法",
          "duration": 578
        },
        {
          "page": 11,
          "part": "11.LangChain接入自定义工具流程",
          "duration": 1228
        },
        {
          "page": 12,
          "part": "12.LangChain Agent API调用方法详解",
          "duration": 844
        },
        {
          "page": 13,
          "part": "13.基于LangChain内置工具创建智能体",
          "duration": 502
        },
        {
          "page": 14,
          "part": "14.【实战】浏览器自动化与网络爬虫实战",
          "duration": 1260
        },
        {
          "page": 15,
          "part": "15.MCP技术回顾与客户端、服务器开发流程",
          "duration": 1156
        },
        {
          "page": 16,
          "part": "16.【实战】基于LangChain搭建MCP客户端",
          "duration": 1415
        },
        {
          "page": 17,
          "part": "17.RAG基础概念介绍",
          "duration": 685
        },
        {
          "page": 18,
          "part": "18.【实战】RAG知识库检索系统搭建实战",
          "duration": 1022
        },
        {
          "page": 19,
          "part": "19.【实战】AI数据分析Agent搭建实战",
          "duration": 1752
        }
      ]
    },
    {
      "bvid": "BV1bzMdzkERM",
      "title": "最热门智能体开发技术栈，最低零代码开发企业级Agent！LangChain&LangGraph+MCP技术实战，双向MCP接入与封装双向开发实践！",
      "uploader": "九天Hector",
      "published": "2025-07-13",
      "paid": 0,
      "count": 9,
      "pages": [
        {
          "page": 1,
          "part": "1.LangGraph+MCP技术实战",
          "duration": 287
        },
        {
          "page": 2,
          "part": "2.MCP技术生态介绍",
          "duration": 876
        },
        {
          "page": 3,
          "part": "3.MCP与LangGraph核心技术概念介绍",
          "duration": 1149
        },
        {
          "page": 4,
          "part": "4.自定义MCP服务器开发流程",
          "duration": 519
        },
        {
          "page": 5,
          "part": "5.LangGraph+MCP客户端开发",
          "duration": 1294
        },
        {
          "page": 6,
          "part": "6.各类MCP工具方法",
          "duration": 1324
        },
        {
          "page": 7,
          "part": "7.Data Agent开发与启动流程",
          "duration": 1203
        },
        {
          "page": 8,
          "part": "8.LangGraph Agent逆向封装为MCP工具流程",
          "duration": 547
        },
        {
          "page": 9,
          "part": "9.零代码LangGraph+MCP开发平台搭建与使用",
          "duration": 1358
        }
      ]
    }
  ],
  "rejected": [
    {
      "name": "黑马 LangChain＋LangGraph「全套」标题",
      "url": "https://www.bilibili.com/video/BV178w1z7EHQ/",
      "finding": "本次接口实际返回 28 集，末集为 LangChain 入门 AI 私厨完成 Agent 开发，未见 LangGraph 分集。因此不标为完整 LangGraph 后续课；后续若补更需重新核查。"
    },
    {
      "name": "Hello-Agents 第四章视频",
      "url": "https://www.bilibili.com/video/BV12Z63BCEn6/",
      "finding": "本次稿件 1 集 22.9 分钟，关联 Hello-Agents 合集仅同一条。不能用视频共创计划代替已完结视频；中文书仍保留。"
    },
    {
      "name": "九天 Hector：LangGraph＋MCP",
      "url": "https://www.bilibili.com/video/BV1bzMdzkERM/",
      "finding": "9 集约 143 分钟，真实包含双向 MCP 接入/封装；但用 Python/LangGraph 和作者工具，配套源码公开可得性未确认。不作为无额外条件的 Go 主修课。"
    },
    {
      "name": "七米 Go Web 开发进阶实战（付费可选）",
      "url": "https://www.bilibili.com/cheese/play/ep265224",
      "finding": "原作者页面列已完结 81 课时、页面价 199 元（2026-09-03 检索，结算为准）。比其 27 集免费 Web 入门更完整，含数据库/组件/项目/性能/部署，但不是免费课；未购买或试看付费部分，不纳入默认学习与预算。"
    }
  ],
  "coverage": [
    [
      "W1–W8",
      "Go 基础查漏 → 运行时深入",
      "七米只查漏；W7 刘丹冰 GPM 全 18 集 + GC 全 14 集。context/fuzz/新版本行为仍由中文主文档与实验补齐。",
      "理解 → 应用 → 分析；W8 不新增课。"
    ],
    [
      "W9–W16",
      "同套数据课逐层推进",
      "黑马 MySQL 索引→SQL→事务；黑马 Redis 容量→缓存→高可用；尚硅谷 Kafka 架构→可靠生产→日志副本→消费。",
      "发展数据正确性；W16 用故障证据检验。"
    ],
    [
      "W17–W24",
      "网络 → I/O 模型 → Go 服务",
      "W17 湖科大 TCP/DNS；W18 刘丹冰 I/O 全 12 集。RPC/一致性/稳定性/观测保留原 Go 文档，不用 Java 全家桶填充。",
      "分析线上请求；W24 设计一题讲透。"
    ],
    [
      "W25–W32",
      "ReliableTask：独立做工程",
      "不新增另一套必做项目。Zinx 是可选完整 TCP 项目，不冒充租约/幂等/Outbox 教程。前面已学内容用于状态机与故障恢复。",
      "综合应用 → 独立交付；W32 答辩。"
    ],
    [
      "W33–W40",
      "黑马模型接入 → 知识库项目",
      "同一 67 集课程按模块接到 W33/34/35/37；W36/38/39 明确用原中文文档补检索调优与评测，不把 Naive RAG 称作全部 RAG。",
      "引入 AI → 应用/分析；W40 固定测试集验收。"
    ],
    [
      "W41–W48",
      "同套 Agent → MCP/安全/评测",
      "W41/42 接黑马工具与 Agent 项目。W43–47 进入视频未覆盖的 Go 工程边界，同一 Hello-Agents 文档继续推进。",
      "发展工具工程 → 独立评价；W48 攻防答辩。"
    ],
    [
      "W49–W52",
      "整合而非再刷一套课",
      "四项目、原算法安排与七个复盘节点保持；看完视频只是接触，不代表独立掌握。",
      "综合验收；用证据决定下一季度方向。"
    ]
  ],
  "modules": {
    "runtime": [
      [
        "GPM：由来到全场景",
        "BV19r4y1w7Nx",
        1,
        18
      ],
      [
        "GC：标记到混合写屏障",
        "BV1wz4y1y7Kd",
        1,
        14
      ]
    ],
    "io": [
      [
        "阻塞、非阻塞与 epoll",
        "BV1jK4y1N7ST",
        1,
        4
      ],
      [
        "六种服务器并发组织",
        "BV1jK4y1N7ST",
        5,
        12
      ]
    ],
    "heima-ai": [
      [
        "模型接入/普通、流式调用",
        "BV1yjz5BLEoY",
        1,
        10
      ],
      [
        "提示案例与应用框架",
        "BV1yjz5BLEoY",
        11,
        18
      ],
      [
        "检索/向量背景与模型接口",
        "BV1yjz5BLEoY",
        19,
        26
      ],
      [
        "提示模板/链/解析器/历史",
        "BV1yjz5BLEoY",
        27,
        38
      ],
      [
        "加载切分与向量存储",
        "BV1yjz5BLEoY",
        39,
        43
      ],
      [
        "完整 RAG 知识库项目",
        "BV1yjz5BLEoY",
        44,
        54
      ],
      [
        "工具调用与 ReAct",
        "BV1yjz5BLEoY",
        55,
        59
      ],
      [
        "完整 Agent 项目",
        "BV1yjz5BLEoY",
        60,
        67
      ]
    ],
    "zinx": [
      [
        "Server/Connection/Router/配置",
        "BV1wE411d7th",
        1,
        16
      ],
      [
        "消息协议/单测/管理",
        "BV1wE411d7th",
        17,
        28
      ],
      [
        "读写分离/工作池",
        "BV1wE411d7th",
        29,
        37
      ],
      [
        "连接管理/生命周期/属性",
        "BV1wE411d7th",
        38,
        47
      ],
      [
        "MMO 应用/测试/总结",
        "BV1wE411d7th",
        48,
        91
      ]
    ]
  }
};

(function(data){
  "use strict";
  const reviewWeeks=[8,16,24,32,40,48,52];
  const esc=v=>String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const fmt=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
  const total=list=>list.reduce((n,l)=>n+l.duration,0);
  const round=v=>Number(v.toFixed(2));
  data.plan=function(no){
    const route=data.routes[String(no)],isReview=reviewWeeks.includes(Number(no));
    const seconds=route?total(route.lessons):0;
    const docHours=route?(route.docHours??0.5):isReview?0:1;
    const prerequisiteHours=route?.prerequisiteHours||0;
    return {route,isReview,seconds,minutes:Math.ceil(seconds/60),docHours,prerequisiteHours,
      inputHours:Math.ceil((seconds/3600*1.5+docHours+prerequisiteHours)*2)/2,
      reason:data.gaps[no]||(isReview?"复盘周不新增视频；先闭卷，只修已有证据暴露的缺口。":"本周在同一项目中应用已有知识；继续原主文档与代码，不追加另一套必做项目。")};
  };
  data.budget=function(no,week){
    const p=data.plan(no),r=(week.hours.match(/[0-9]+(?:\.[0-9]+)?/g)||["0"]).map(Number);
    const baseLow=r[0]+(p.isReview?0:1)+p.inputHours,baseHigh=(r[1]||r[0])+(p.isReview?0:1)+p.inputHours;
    // Each natural week retains its own algorithm budget; extension is not free.
    const calendarWeeks=Math.max(1,Math.ceil(baseHigh/16));
    return {low:round(baseLow+1.5*calendarWeeks),high:round(baseHigh+2*calendarWeeks),
      input:p.inputHours,calendarWeeks,baseLow,baseHigh,suggestSplit:baseHigh+2>16,
      exceedsCapacity:baseHigh+2>18,perWeekHigh:round(baseHigh/calendarWeeks+2)};
  };
  data.budgetMarkup=function(no,week){
    const p=data.plan(no),b=data.budget(no,week);
    const cut=p.route?Math.max(1,Math.floor(p.route.blocks.length/2)):0;
    return `<div class="capacity-note media-budget ${b.suggestSplit?"needs-buffer":""}">
      <strong>W${no} 学习单元约 ${b.low}–${b.high}h · ${b.calendarWeeks>1?"明确分 "+b.calendarWeeks+" 个自然周":"按 1 周起步，允许顺延"}</strong>
      <span>原任务 ${esc(week.hours)} + ${p.isReview?"验收已含在任务内":"闭卷验收约 1h"} + 学习输入 ${p.inputHours}h + 算法 ${1.5*b.calendarWeeks}–${2*b.calendarWeeks}h。
      输入按原速 × 1.5（暂停/回看）+ 文档 ${p.docHours}h${p.prerequisiteHours?" + Python 跟读准备 "+p.prerequisiteHours+"h":""}估算，向上取半小时。熟悉的基础讲解可跳过；估算不等于已实测。</span>
      <span>${b.calendarWeeks>1?(p.route?.blocks.length>1?"第一自然周：视频模块 1–"+cut+"，完成 T1；第二自然周：模块 "+(cut+1)+"–"+p.route.blocks.length+"，完成 T2 及后续任务与验收。":"第一自然周：完成语言准备、视频与 T1；第二自然周：完成 T2 及后续任务与验收。")+"若超过两周，先继续当前模块，不打开下一个 W。每个自然周保留算法 1.5–2h：首次按本 W 新题，延长周只复做旧题，不提前领取下周新题。":"通常做到 14–16h 就收口，16–18h 是可用上限，不是目标。卡住就顺延；延长周算法只复做旧题。"}
      W01–W52 是顺序编号，已不是 52 个自然周必完的承诺；不靠倍速或删除实操达标。</span></div>`;
  };
  function locationOf(bvid,page){
    const match=Object.entries(data.routes).find(([,r])=>r.lessons.some(l=>l.bvid===bvid&&l.page===page));
    return match?Number(match[0]):null;
  }
  data.outlineMarkup=function(sourceId){
    const s=data.sources.find(s=>s.id===sourceId);
    const cats=s.catalogs.map(id=>data.checkedCatalog.find(c=>c.bvid===id));
    return `<details class="media-full-outline"><summary>看整套课程地图：已学 / 后续 / 不学的范围</summary>
      <div><p>${esc(s.catalogNote)}</p>
      ${(data.modules[sourceId]||[]).map(([label,bvid,a,b])=>{
        const weeks=[...new Set(Array.from({length:b-a+1},(_,i)=>locationOf(bvid,a+i)).filter(Boolean))];
        return `<div class="media-module-row"><span>${esc(label)} <small>P${a}–${b}</small></span><span>${weeks.length?weeks.map(n=>`<button type="button" data-week="${n}">W${n} →</button>`).join(""):"可选完整旁路"}</span></div>`;
      }).join("")}
      <details class="media-catalog"><summary>全部 ${cats.reduce((n,c)=>n+c.count,0)} 集与取舍（已替你分配，不用逐一判断）</summary>
        ${cats.map(c=>`<h4>${esc(c.title)} · ${c.count} 集 · 原速 ${round(total(c.pages)/3600)}h</h4>
          <ol>${c.pages.map(p=>{const n=locationOf(c.bvid,p.page);return `<li><span class="media-disposition">${n?"W"+n:"非主修"}</span><a href="https://www.bilibili.com/video/${c.bvid}/?p=${p.page}" target="_blank" rel="noreferrer">P${p.page} · ${esc(p.part)}</a><small>${fmt(p.duration)}</small></li>`;}).join("")}</ol>`).join("")}
      </details></div></details>`;
  };
  data.weekMarkup=function(no){
    const p=data.plan(no),r=p.route;
    if(!r)return `<div class="media-document-note"><span class="media-mode">${p.isReview?"复盘 · 不加新课":"本周继续原文档 / 项目"}</span><p>${esc(p.reason)}</p><small>这里是明确的资料边界，不表示视频中已讲过。保持同一中文主文档，不凑不相关的视频。</small></div>`;
    const s=data.sources.find(s=>s.id===r.sourceId);
    const weeks=Object.keys(data.routes).map(Number).filter(n=>data.routes[n].sourceId===s.id);
    const current=weeks.indexOf(Number(no)),prev=weeks[current-1],next=weeks[current+1];
    const gap=r.review;
    return `<article class="media-week">
      <div class="media-week-top"><div><span class="media-mode">${r.checkOnly?"基础查漏 · 已会可跳过":"成套视频主线 · 先看模块，再做原任务"}</span><h3>${esc(s.name)}</h3></div><span class="media-duration">本单元 ${r.lessons.length} 集<br><b>原速约 ${p.minutes} 分钟</b></span></div>
      <div class="media-route-strip"><span>同套路线 · 第 ${current+1} / ${weeks.length} 站</span>${prev?`<button type="button" data-week="${prev}">← W${prev}</button>`:""}<b>W${no}</b>${next?`<button type="button" data-week="${next}">W${next} →</button>`:""}<small>${esc(s.language||"同一作者 / 课程，按模块递进")}</small></div>
      <p class="media-cover"><b>这部分具体学什么：</b>${esc(r.cover)}</p>
      <div class="media-scope-warning"><b>尚未覆盖，不能算学完：</b>${esc(gap)}</div>
      ${r.prerequisite?`<details class="media-prerequisite"><summary>先确认示例语言：Python 跟读，Go 交付</summary><p>${esc(r.prerequisite)}</p><a href="${esc(r.prerequisiteUrl)}" target="_blank" rel="noreferrer">中文教程，仅看上述小节 ↗</a></details>`:""}
      <div class="media-blocks">${r.blocks.map((block,i)=>`<details class="media-block" ${i===0?"open":""}><summary><span><b>模块 ${i+1} · ${esc(block.label)}</b><small>${block.lessons.length} 集 · 原速 ${Math.ceil(total(block.lessons)/60)} 分钟 · 按顺序继续</small></span><em>展开 / 收起</em></summary>
        <ol class="media-lessons">${block.lessons.map((l,j)=>`<li><a href="${esc(l.url)}" target="_blank" rel="noreferrer"><span class="media-order">${j+1}</span><span><b>${esc(l.part)}</b><small>原课 P${l.page} · 本模块范围已选好</small></span><em>${fmt(l.duration)} ↗</em></a></li>`).join("")}</ol></details>`).join("")}</div>
      <div class="media-stop"><strong>学完接到哪个任务</strong><p>${esc(r.stop)}</p></div>
      ${r.supplement?`<div class="media-companion"><a href="${esc(r.supplement.url)}" target="_blank" rel="noreferrer">${esc(r.supplement.name)} ↗</a><p>${esc(r.supplement.scope)}</p><a href="${esc(r.supplement.versionUrl)}" target="_blank" rel="noreferrer">版本核对（按需） ↗</a><small>${esc(r.supplement.versionNote)}</small></div>`:""}
      <div class="media-week-footer"><span>输入估算 ${p.inputHours}h；原任务在下方，未增加视频项目</span><span>整套≠全看 · 非主修内容和后续缺口提前标明</span></div>
      ${data.outlineMarkup(s.id)}
      <details class="media-boundary"><summary>原始来源、版本与核验边界</summary><p>${esc(s.year)} · ${esc(s.uploader)}。${esc(s.limit)}</p><p>${esc(data.verification)}</p><p><a href="${esc(s.evidence)}" target="_blank" rel="noreferrer">原作者 / 机构依据 ↗</a></p></details>
    </article>`;
  };
  data.libraryMarkup=function(){
    const course=window.GO_COURSE_V2;
    const budgets=course?course.weeks.map((w,i)=>data.budget(i+1,w)):[];
    const extended=budgets.reduce((n,b)=>n+b.calendarWeeks,0);
    return `<details class="media-library" id="videoLibrary"><summary><span><b>成套课程地图 · 入门之后接着学什么</b><small>8 条主线/查漏系列 + Zinx 完整可选项目；章节、后续和未覆盖项都在这里</small></span><em>展开查看</em></summary>
      <div class="media-library-body"><p><b>不再以“全套”标题作为完整依据。</b>按原发布目录核对概念、机制、实现和收尾。主线仍为 Go 后端 → RAG → Agent；课程里 Java/Python 的示例仅帮助理解，交付仍用 Go。基础已经会的跳过，不从安装环境刷起。</p>
      <div class="media-scope-warning"><b>时间已经重算：</b>当前 52 个学习单元中，按保守上限超过 18h 拆分后，初始排期约 ${extended} 个自然周（约 ${(extended/4.35).toFixed(1)} 个月）。这是本版本含暂停/复习的排期估算，不含加班、长假和额外补课；可跳过已会部分，但不压缩验收。每周通常 14–16h，最高 18h。</div>
      <div class="media-phase-map">${data.coverage.map(g=>`<article><span>${esc(g[0])}</span><h4>${esc(g[1])}</h4><p>${esc(g[2])}</p><small>${esc(g[3])}</small></article>`).join("")}</div>
      <h3>完整系列、具体模块与未学部分</h3><div class="media-source-list">
        ${data.sources.map(s=>`<details><summary><span>${esc(s.name)}</span><em>${s.optional?"可选 · ":""}${s.parts} 集 · ${esc(s.year)}</em></summary><div><p>为什么选：${esc(s.why)}</p><p><b>边界：</b>${esc(s.limit)}</p>${s.where?`<p>${esc(s.where)}</p>`:""}<a href="${esc(s.url)}" target="_blank" rel="noreferrer">原课程 ↗</a><a href="${esc(s.evidence)}" target="_blank" rel="noreferrer">原始依据 ↗</a>${data.outlineMarkup(s.id)}</div></details>`).join("")}</div>
      <details class="media-screening"><summary>找到但不当作免费完整主课的内容</summary>${data.rejected.map(r=>`<article><a href="${esc(r.url)}" target="_blank" rel="noreferrer">${esc(r.name)} ↗</a><p>${esc(r.finding)}</p></article>`).join("")}</details>
      <p class="media-verification"><b>核查于 ${esc(data.verifiedAt)}：</b>${esc(data.verification)} 免费指核查时公开非付费视频，不代表配套资料和模型 API 免费；不要求加群、留手机号、报名或网盘下载。网页抓取受限时以公开目录接口补查，不声称逐集已在你的设备播放。</p>
      </div></details>`;
  };
})(window.COURSE_MEDIA_V11);

