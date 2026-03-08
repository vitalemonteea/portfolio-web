import { LocaleType } from './zh';

export const en: LocaleType = {
    nav: {
        home: "Home",
        about: "About",
        education: "Education",
        experience: "Experience",
        projects: "Projects",
        techStack: "Tech Stack",
        contact: "Contact",
    },
    hero: {
        sysStatus: "Sys_Status: ",
        available: "Available For Work ",
        lastName: "Jincheng ",
        firstName: "Qian",
        titlePrefix: "AI-Native Product Manager_",
        description: "An explorer combining product architecture with a geek spirit. Adept at rapid full-web troubleshooting and utilizing LLMs to break through R&D boundaries. Currently dedicated to exploring and building next-gen intelligent business models.",
        contactBtn: "Contact Me",
        learnMoreBtn: "Learn More",
        resumeBtn: "View / Download Resume.pdf",
    },
    about: {
        number: "01.",
        title: "About Me",
        bio1_1: "I am",
        bio1_name: "Jincheng Qian",
        bio1_2: ", a master's student in Electronic and Information Engineering at The Hong Kong Polytechnic University, soon graduating as a Product Manager.",
        bio2_1: "Passionate about elevating product efficiency with AI tools, with hands-on experience independently building 0-to-1 systems via",
        bio2_highlight: "AI Coding",
        bio2_2: ". I believe that in the AI era, a product manager is not only defining requirements, but directly architecting and building the solutions.",
        cards: [
            {
                title: "Full-Stack AI Delivery",
                desc: "Deeply involved in building Agent apps from 0 to 1, proficient in LLM routing strategies, capable of independently completing full-stack system setups and business delivery via AI-assisted coding under zero R&D resources.",
            },
            {
                title: "B2B Architecture",
                desc: "Experienced in enterprise SCRM and core transaction chains (e.g., insurance flows). Highly capable in business logic abstraction and cross-team collaboration when addressing real B2B pain points like complex API refactoring.",
            },
            {
                title: "AI Risk Control",
                desc: "Possess rigorous data-loop thinking, adept at building Datart dashboard monitoring, tracking RPA trigger rates and LLM Bad Cases, and establishing fallback mechanisms and tuning loops to prevent AI hallucinations.",
            },
        ],
    },
    education: {
        number: "02.",
        title: "Education",
        items: [
            {
                degree: "Master of Electronic and Information Engineering",
                school: "The Hong Kong Polytechnic University",
                time: "09.2024 - 03.2026",
                highlights: "GPA 3.38/4.0, Top 10% in Major",
                courses: "Core: Data Mining & Applications, Embedded Systems, Big Data Computing, Data Security",
                logo: "/poly-logo.png",
            },
            {
                degree: "Bachelor of Computer Science and Technology",
                school: "Chongqing University of Posts & Telecommunications",
                time: "09.2020 - 06.2024",
                highlights: "3-year Academic Scholarship, Avg 85.8, Top 5% in Class",
                courses: "Core: Software Engineering, Database Systems, Data Structures, Web App Development",
                logo: "/cqupt-logo.png",
            },
        ]
    },
    experience: {
        number: "03.",
        title: "Experience",
        items: [
            {
                company: "Huize Holding",
                role: "Product Manager · TOB Business Group",
                period: "06.2025 - Present",
                duties: [
                    "Core Coordination: Responsible for B2B SCRM, Intelligent Customer Service, and Middle-Platform Digitalization.",
                    "Business Output: Formulated standardized API SOP for heterogeneous systems, lifting external channel integration efficiency by 30% with zero transaction breakdowns; independently abstracted SCRM business models and built Datart dashboards to track RPA trigger rates and cost-reduction ROI.",
                ],
                tags: ["SCRM", "AI Customer Service", "Digital Middle-Platform", "API Standardization", "Datart"],
            },
            {
                company: "Hangzhou Shidu Technology Co., Ltd.",
                role: "Product Manager",
                period: "04.2024 - 07.2024",
                duties: [
                    "Compliance Refactoring: Participated in the digitalization refactoring of the Zhejiang Provincial Department of Justice Legal Aid System (ToG).",
                    "Under strict government compliance constraints, led the decoupling and migration design of the 'Work Order Module', ensuring the smooth upgrade of the provincial e-government system.",
                ],
                tags: ["ToG", "E-Government", "Decoupling Refactor", "System Migration"],
            },
        ]
    },
    projects: {
        number: "04.",
        title: "Projects",
        backgroundLabel: "PROJECT BACKGROUND",
        dutiesLabel: "CORE DUTIES",
        resultsLabel: "BUSINESS RESULTS",
        techStackLabel: "TECH STACK",
        items: [
            {
                id: "ai-marketing",
                title: "AI Marketing System",
                role: "Product Manager",
                period: "01.2026 - 02.2026",
                summary: "Full-stack marketing automation system built independently via AI Vibe Coding",
                background: "Business heavily relied on manual repetitive distribution of marketing materials across groups, leading to high omission rates and low efficiency; meanwhile, the product team faced a severe lack of internal R&D resources (0 allocation).",
                duties: [
                    "Leveraged LLM-assisted programming (AI Vibe Coding) to independently build front-to-back systems and server deployment.",
                    "Integrated RPA interfaces, designing a dual-trigger (scheduled/immediate) mass messaging flow with a state machine monitoring success/failure states.",
                    "Simultaneously built an AIGC dynamic poster middle-platform, supporting one-click parameter replacement and sub-second HD synthesis on mobile.",
                    "Practiced lean MVP strategy to quickly validate plain text mass messaging, then agilely iterated to add the AIGC poster platform.",
                ],
                results: "Successfully covered 200+ core enterprise WeChat groups. Achieved a business leap from 'single tool' to 'automated marketing loop', shrinking distribution time to seconds, slashing operation manpower by over 80% per campaign, and realizing tangible profit with zero R&D investment.",
                tags: ["AI Coding", "RPA", "AIGC", "MVP", "Solo Delivery"],
                image: "/ai-marketing.png",
            },
            {
                id: "ai-agent",
                title: "Intelligent CS & Automated Operations Platform",
                role: "Project Lead",
                period: "11.2025 - 12.2025",
                summary: "Utilized AI Agents to achieve automated cost-reduction in customer service",
                background: "Channel inquiry groups were flooded with highly repetitive questions, and heavy manual reliance caused long turnarounds and severe labor consumption, urgently demanding AI Agents for automated cost-reduction.",
                duties: [
                    "Designed large/small model routing strategy: offline small models clustered to lock down Top 7 high-frequency scenarios; online Qwen + RAG architecture ensured high-precision inference.",
                    "Combined with RPA to forge an unattended flow: 'Group Listening → Agent Inference → Auto Reply', setting strict knowledge base boundaries to prevent hallucinations.",
                    "Built a Datart dashboard to track trigger rates, conducting weekly targeted tuning of Prompts and knowledge base chunks through Bad Case analysis.",
                ],
                results: "Forged a 'data-feedback-driven' operational flywheel. Leaning on dashboard tracking and Bad Case analysis, stabilized and lifted the system's first-response resolution rate from 40% (cold start) to over 70%; shortened turnaround time by 20%, completely reshaping the channel-side service SOP and achieving scalable cost-reduction.",
                tags: ["AI Agent", "RAG", "Datart", "RPA", "Model Routing"],
                image: "/ai-agent.png",
            },
            {
                id: "scrm",
                title: "Silent Client Activation & SCRM Asset System",
                role: "Product Manager",
                period: "10.2025 - 11.2025",
                summary: "Activated dormant silent clients, building a private traffic flow",
                background: "Online self-insuring 'silent clients' were untied from agents, and traditional SMS recall suffered extreme interception rates, leading to massive loss of high-potential client assets.",
                duties: [
                    "Full-loop refactoring and rule engine construction: led the underlying integration across C-end (insurer), Consultant Workbench, and SCRM Backend.",
                    "Front-end pioneered 'Dynamic Enterprise WeChat Card Display' and anti-interception short-link strategies; back-end built the 'Silent Client Intelligent Routing Rule Engine'.",
                    "Realized a complete private traffic loop from 'Precision Reach → Automated Profiling → 1-minute Dynamic Agent Assignment'.",
                ],
                results: "Successfully built a private traffic moat of 'Transaction Equals Accumulation'. Not only broke the ice by lifting silent client conversion from 0% to 20%, but also established a zero-marginal-cost private traffic base from a commercial global view, reviving dormant high-potential assets for subsequent automated reach and high-ticket conversion.",
                tags: ["SCRM", "Private Traffic", "Rule Engine", "Client Clustering"],
                image: "/scrm.png",
            },
        ]
    },
    techStack: {
        number: "05.",
        title: "Tech Stack",
        subtitle: "Weapon Arsenal & Tech Capability",
        categories: [
            {
                title: "AI Models",
                items: ["Gemini", "Claude", "Qwen", "DeepSeek"],
            },
            {
                title: "AI Dev Tools",
                items: ["Cursor", "Antigravity", "Copilot"],
            },
            {
                title: "Data & Automation",
                items: ["Datart", "RPA", "SQL", "Python", "Data Dashboarding"],
            },
            {
                title: "Product Workflow",
                items: ["Coze", "Hiagent", "OpenClaw", "Figma", "SCRM", "MVP Prototyping"],
            },
        ]
    },
    contact: {
        number: "06.",
        title: "Contact",
        pitch: "I am currently looking for an internship or full-time opportunity as a Product Manager. If you have any suitable positions, or just want to discuss how AI is changing the product landscape, feel free to reach out to me.",
        btn: "Connect on WeChat",
        scanTitle: "Scan & Connect",
        scanDesc: "Scan the QR code",
        emailAlt: "Or send an email to"
    },
    footer: {
        rights: "Jincheng Qian. All rights reserved."
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
