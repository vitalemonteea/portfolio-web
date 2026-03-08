export const zh = {
    nav: {
        home: "首页",
        about: "关于我",
        education: "教育背景",
        experience: "经历",
        projects: "项目",
        techStack: "技术池",
        contact: "联系我",
    },
    hero: {
        sysStatus: "Sys_Status: ",
        available: "Available For Work ",
        lastName: "钱",
        firstName: " 金城",
        titlePrefix: "AI 原生产品经理_",
        description: "兼具产品架构与极客精神的探索者。擅长通过全网检索高效排查 Bug，熟练运用大模型突破研发边界。目前正致力于探索和构建下一代智能化业务模型。",
        contactBtn: "联系我",
        learnMoreBtn: "了解更多",
        resumeBtn: "预览 / 下载简历.pdf",
    },
    about: {
        number: "01.",
        title: "关于我",
        bio1_1: "我是",
        bio1_name: "钱金城",
        bio1_2: "，香港理工大学电子信息工程硕士在读，即将毕业的产品经理方向应届生。",
        bio2_1: "热爱用 AI 工具提升产品效率，拥有从 0 到 1 借助",
        bio2_highlight: "AI Coding",
        bio2_2: "独立搭建系统的实战经验。我相信在 AI 时代，产品经理不仅是需求的定义者，更是解决方案的直接构建者。",
        cards: [
            {
                title: "AI 全栈交付",
                desc: "深度参与 Agent 应用从 0 到 1 的构建，能熟练运用大模型路由策略，具备在零研发资源下借助 AI 辅助编程独立完成系统从 0 到 1 搭建与业务交付的能力。",
            },
            {
                title: "B端业务架构",
                desc: "拥有企服 SCRM 与核心交易链路（投保流程）优化经验。面对复杂 API 接口变更等真实 B 端痛点，具备出色的业务逻辑抽象与跨团队协同能力。",
            },
            {
                title: "AI 业务风控",
                desc: "具备严谨的数据闭环思维，能熟练搭建 Datart 监控大盘，追踪 RPA 触发率与大模型 Bad Case，建立防范 AI 幻觉的兜底机制与调优闭环。",
            },
        ],
    },
    education: {
        number: "02.",
        title: "教育背景",
        items: [
            {
                degree: "电子信息工程 硕士",
                school: "香港理工大学",
                time: "2024.09 - 2026.03",
                highlights: "GPA 3.38/4.0, 专业排名前 10%",
                courses: "核心课程：数据挖掘与数据及隐私应用、嵌入式开发、大数据计算、数据及信息安全",
                logo: "/poly-logo.png",
            },
            {
                degree: "计算机科学与技术 本科",
                school: "重庆邮电大学",
                time: "2020.09 - 2024.06",
                highlights: "连续三年获得学业奖学金，均分 85.8，班级排名前 5%",
                courses: "核心课程：软件工程、数据库系统原理、数据结构、Web 应用开发",
                logo: "/cqupt-logo.png",
            },
        ]
    },
    experience: {
        number: "03.",
        title: "工作经历",
        items: [
            {
                company: "慧择控股",
                role: "产品经理 · TOB 事业部",
                period: "2025.06 - 至今",
                duties: [
                    "核心统筹：负责 B端 SCRM、智能客服及中台数字化。",
                    "业务产出：针对保司异构系统制定 API 标准化对接 SOP，使外部渠道接入效率提升 30% 并保障交易链路零瘫痪事故；独立抽象标准化 SCRM 业务模型，并搭建 Datart 数据看板持续追踪 RPA 触发率与降本 ROI。",
                ],
                tags: ["SCRM", "智能客服", "中台数字化", "API标准化", "Datart"],
            },
            {
                company: "杭州识度科技有限公司",
                role: "产品经理",
                period: "2024.04 - 2024.07",
                duties: [
                    "合规重构：参与浙江省司法厅法律援助系统 (ToG) 数字化重构。",
                    "在强政务合规约束下，主导“工单模块”的业务解耦与新系统迁移设计，保障省级政务系统平稳升级。",
                ],
                tags: ["ToG", "政务系统", "解耦重构", "系统迁移"],
            },
        ]
    },
    projects: {
        number: "04.",
        title: "项目大厅",
        backgroundLabel: "项目背景 (BACKGROUND)",
        dutiesLabel: "核心职责 (DUTIES)",
        resultsLabel: "业务收益 (RESULTS)",
        techStackLabel: "核心技术栈 (TECH STACK)",
        items: [
            {
                id: "ai-marketing",
                title: "AI 营销系统",
                role: "产品经理",
                period: "2026.01 - 2026.02",
                summary: "借助 AI Vibe Coding 独立完成全栈搭建的营销自动化系统",
                background: "业务侧高度依赖人工跨群重复分发营销物料，漏发率高且协同极其低效；同时，产品团队面临内部研发资源 0 投入的极端困境。",
                duties: [
                    "利用 LLM 辅助编程 (AI Vibe Coding) 独立完成系统前后端搭建与服务器部署。",
                    "打通 RPA 接口，设计涵盖「成功/失败/进行中」监控状态机的「定时/立即」双触发群发流。",
                    "同步构建 AIGC 动态海报中台，支持移动端富文本参数一键替换与秒级高清合成。",
                    "践行极简 MVP 策略快速跑通纯文本群发验证，随后敏捷迭代增筑 AIGC 动态海报中台。",
                ],
                results: "系统成功覆盖 200+ 核心企微群。通过敏捷迭代实现从“单点工具”到“自动化营销闭环”的业务跃升，将物料分发压缩至秒级，单场活动运营人力缩减 80% 以上，在零产研投入下创造真实业务利润。",
                tags: ["AI Coding", "RPA", "AIGC", "MVP", "独立交付"],
                image: "/ai-marketing.png",
            },
            {
                id: "ai-agent",
                title: "渠道智能客服问答与自动化运营平台",
                role: "项目负责人",
                period: "2025.11 - 2025.12",
                summary: "利用 AI Agent 实现客服服务链路自动化降本增效",
                background: "渠道对接群高频重复问题占比极大，高度依赖人工导致流转周期长、人力消耗重，亟需引入 AI Agent 实现客服服务链路的自动化降本增效。",
                duties: [
                    "设计大小模型路由策略：离线小模型聚类锁定 Top 7 高频场景降本；在线 Qwen 大模型+RAG 架构保障高精度推理。",
                    "结合 RPA 打通「群监听→ Agent 推理→自动回复」无人值守流，并设定严谨的知识库兜底边界防幻觉。",
                    "搭建 Datart 大盘追踪系统触发率，通过分析 Bad Case，每周完成 Prompt 与知识库切片的定向调优。",
                ],
                results: "成功构建“数据反馈驱动”的运营飞轮。依托大盘追踪与 Bad Case 下钻分析，将系统首答解决率从冷启阶段的 40% 稳步调优并拉升至 70%+；流转时长缩短 20%，彻底重塑渠道侧服务 SOP，实现可规模化复制的降本增效。",
                tags: ["AI Agent", "RAG", "Datart", "RPA", "大小模型路由"],
                image: "/ai-agent.png",
            },
            {
                id: "scrm",
                title: "保险静默客户私域激活与 SCRM 资产沉淀系统",
                role: "产品经理",
                period: "2025.10 - 2025.11",
                summary: "激活沉睡的静默客户，构建高潜私域流转体系",
                background: "线上自主投保的“静默客户”处于脱绑状态，传统短信召回拦截率极高，导致大量高潜客户资产流失。",
                duties: [
                    "全链路重构与规则引擎搭建：主导 C端（投保端）、顾问工作台与 SCRM 后台的三端底层链路打通。",
                    "前端首创「动态企微名片展示（添加后即刻隐身）」与防拦截短链策略；后端构建「静默客户智能路由规则引擎」。",
                    "实现从“精准触达 → 自动化画像打标 → 1分钟内动态分配专属运营” 的私域流转全闭环。",
                ],
                results: "成功构建“成交即沉淀”的私域护城河。不仅将静默客户转化率从 0% 破冰提升至 20%，更从商业全局视角，为后续的自动化触达与高客单价险种转化（续保/加保）建立了零边际成本的私域流量底座，彻底盘活沉睡的高潜商业资产。",
                tags: ["SCRM", "私域运营", "自动化规则引擎", "客户分群"],
                image: "/scrm.png",
            },
        ]
    },
    techStack: {
        number: "05.",
        title: "核心技术池",
        subtitle: "Weapon Arsenal & Tech Capability",
        categories: [
            {
                title: "AI 大模型",
                items: ["Gemini", "Claude", "Qwen", "DeepSeek"],
            },
            {
                title: "AI 研发工具",
                items: ["Cursor", "Antigravity", "Copilot"],
            },
            {
                title: "数据与自动化",
                items: ["Datart", "RPA", "SQL", "Python", "Data Dashboarding"],
            },
            {
                title: "产品与工作流",
                items: ["Coze", "Hiagent", "OpenClaw", "Figma", "SCRM", "MVP Prototyping"],
            },
        ]
    },
    contact: {
        number: "06.",
        title: "联系我",
        pitch: "目前我正在寻找产品经理方向的实习/全职机会。如果你有合适的职位推荐，或者只是想探讨 AI 与自动化的演进，随时欢迎联系我。",
        btn: "加我的微信",
        scanTitle: "Scan & Connect",
        scanDesc: "扫描二维码",
        emailAlt: "或者发送邮件至"
    },
    footer: {
        rights: "钱金城. All rights reserved."
    },
    devMode: {
        terminalTitle: "root@jc-portfolio:~",
        generating: "GENERATING SECTIONS VIA PROMPT...",
        initialization: "Initializing AI Dev Mode v1.0",
        scanning: "Scanning architecture constraints...",
        injecting: "Injecting Tailwind capabilities...",
        online: "System online. Listening for scroll events.",
    }
};

export type LocaleType = typeof zh;
