"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Mock prompts used for each section to simulate the AI generation process
const sectionPrompts: Record<string, string> = {
    home: `> Generate a Hero section for a Personal Portfolio.
> Layout: Full screen, centered content.
> Content:
  - Name: "钱金城"
  - Subtitle: "AI-Native 产品经理 · 从 0 到 1 构建者"
  - Call to Action buttons: "查看项目" and "联系我"
> Style: Dark theme (#0a0a0a), monospace font accents, minimalist geek aesthetic. Add a subtle glowing effect to the primary button.`,

    about: `> Create an "About Me" section with split layout.
> Left side: 2-3 short paragraphs introducing my background in AI product management, from HK PolyU to B-to-B SCRM optimization.
> Right side: 3 capability cards:
  1. AI 全栈交付 (AI Coding, MVP strategies)
  2. B端产品架构 (SCRM, API integration)
  3. 数据驱动决策 (Datart, RPA tracking)
> Below: A minimalist vertical timeline for Education history (HK PolyU MSc & CQUPT BSc).`,

    experience: `> Build a timeline or card-based "Experience" section.
> Card 1: 慧择控股 - 产品经理 (TOB事业部)
  - Focus points: SCRM, AI Customer Service, API Standardization, RPA ROI Tracking.
  - Tags: #SCRM #RPA #Datart
> Card 2: 杭州识度科技 - 产品经理
  - Focus points: ToG digital transformation, system decoupling.
  - Tags: #ToG #GovernmentSys #Migration
> Add hover effects to the cards highlighting the borders in #00ff41.`,

    projects: `> Design an interactive "Projects" showcase section.
> Layout: CSS Grid, 3 columns on desktop, 1 on mobile.
> Interactions: Hover lift effect. Click opens a detailed modal.
> Project 1: AI Marketing System (AI Vibe Coding, full-stack, RPA, AIGC)
> Project 2: AI Agent Customer Service Platform (Model Routing, RAG, 40% initial answer accuracy increase)
> Project 3: Insurance Private Domain Activation (SCRM, Silent customer conversion 0%->20%)`,

    education: `> Build an "Education" timeline section with a clean, modern layout.
> Entry 1: The Hong Kong Polytechnic University
  - Degree: MSc Electronic & Information Engineering
  - Period: 2024.09 - 2026.03
  - Highlights: GPA 3.38/4.0, Top 10% in Major
  - Core courses: Data Mining, Embedded Systems, Big Data, Data Security
> Entry 2: Chongqing University of Posts & Telecommunications
  - Degree: BSc Computer Science and Technology
  - Period: 2020.09 - 2024.06
  - Highlights: 3-year Scholarship, Avg 85.8, Top 5% in Class
> Style: Vertical timeline with glowing dot indicators. Include school logos.`,

    "tech-stack": `> Design a "Tech Stack / Arsenal" section in a 4-column grid layout.
> Category 1 — AI Models (purple accent): Gemini, Claude, Qwen, DeepSeek
> Category 2 — AI Dev Tools (blue accent): Cursor, Antigravity, Copilot
> Category 3 — Data & Automation (emerald accent): Datart, RPA, SQL, Python
> Category 4 — Product & Workflow (amber accent): Coze, Hiagent, OpenClaw, Figma, SCRM, MVP Prototyping
> Style: Dark card background (#111), color-coded category titles, monospace font for tool names. Add hover scale effect on each card.`,

    contact: `> Generate a minimalist "Contact" footer section.
> Content: "欢迎交流，随时联系我"
> Links: Email (opt1889@163.com), Phone (15320421661), Location (Shenzhen).
> Layout: Centered. Use Lucide React icons for the contact details. Add copyright text at the very bottom.`,
};

export function AIDevMode({
    isOpen,
    setIsOpen,
    activeSection,
}: {
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    activeSection: string;
}) {
    const [copied, setCopied] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    const currentPrompt = sectionPrompts[activeSection] || sectionPrompts.home;

    // Typewriter effect
    useEffect(() => {
        if (!isOpen) return;

        let i = 0;
        setDisplayedText("");

        const intervalId = setInterval(() => {
            setDisplayedText(currentPrompt.slice(0, i + 1));
            i++;
            if (i >= currentPrompt.length) {
                clearInterval(intervalId);
            }
        }, 15);

        return () => clearInterval(intervalId);
    }, [currentPrompt, isOpen, activeSection]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-24 right-4 z-40 w-[90vw] md:w-[400px] h-[calc(100vh-120px)] rounded-lg shadow-2xl overflow-hidden border border-border/50 bg-[#0d1117] flex flex-col"
                >
                    {/* Mac-like Window Header */}
                    <div className="bg-[#161b22] px-4 py-2 border-b border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-primary" />
                            <span className="text-xs font-mono text-muted-foreground font-semibold">
                                ai-generator-terminal ~ {activeSection}.prompt
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={copyToClipboard}
                                className="text-muted-foreground hover:text-white transition-colors"
                                title="Copy prompt"
                            >
                                {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground hover:text-red-400 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="flex-1 p-4 overflow-y-auto font-mono text-sm leading-relaxed text-[#c9d1d9] whitespace-pre-wrap relative">
                        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#0d1117] to-transparent pointer-events-none" />

                        <div className="mb-2 text-primary/70">
                            <span className="text-primary">$</span> Generating section: <span className="text-white font-bold">{activeSection}</span>...
                        </div>

                        <div className="pl-4 border-l-2 border-primary/30 py-1">
                            {displayedText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                            />
                        </div>

                        {displayedText.length === currentPrompt.length && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 text-green-400"
                            >
                                <span className="text-primary">$</span> ✨ Successfully generated {activeSection}.tsx component!
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
