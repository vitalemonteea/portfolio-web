"use client";

import { motion } from "framer-motion";
import { Terminal, MessagesSquare, Lightbulb, Code2 } from "lucide-react";

interface IterationStep {
    phase: string;
    prompt: string;
    description: string;
    icon: React.ReactNode;
}

const iterations: IterationStep[] = [
    {
        phase: "阶段一：MVP 定义",
        prompt: "请利用 AI 辅助编程工具，通过自然语言对话驱动 AI 构建一个属于你的个人展示网站。核心内容需包含个人简介、以及其他你想展示的内容。要求网站需完成部署，并生成一个公开可访问的链接。",
        description: "初始需求定义，确立了以 MVP 思路构建网站，不仅展示结果，更要展示“使用 AI 产出结果的过程”。",
        icon: <Lightbulb className="w-5 h-5" />,
    },
    {
        phase: "阶段二：架构搭建",
        prompt: "把功能讨论清楚，比如这个网站要有几个 tab，然后功能布局是怎么样的，我才能给他让他生成前端模型。另外，既然需要体现我们的 MVP 思路，那我们是不是可以将相关的提示词放到网页中进行展示？",
        description: "确定了网站的基本骨架，并诞生了核心创意点：AI Dev Mode (模拟终端展示生成当前模块的 Prompt)。",
        icon: <MessagesSquare className="w-5 h-5" />,
    },
    {
        phase: "阶段三：视觉重组",
        prompt: "现在需要你来完成这个前端设计了。https://ddaniel.dev/#about 我觉得这个里面的设计还不错，你要不要看看？",
        description: "基于 ddaniel.dev 确立了 Cyber-Minimalist（极客极简）风格：纯黑背景、青柠色高亮霓虹、代码块包裹排版。",
        icon: <Code2 className="w-5 h-5" />,
    },
    {
        phase: "阶段四：增益迭代",
        prompt: "我是想让你学习他的首页，他的布局及展示。还有我们确实也需要增加一个 resume 的入口提供给他们下载。关于展示快速迭代能力，我想的是将我们每一次的对话展示在网页之中。",
        description: "优化首页布局（左对齐，增加简历入口），并新增了当前的这部分：将人类与 AI 的实际思考迭代过程作为内容的一部分展示出来。",
        icon: <Terminal className="w-5 h-5" />,
    },
];

export function Process() {
    return (
        <section id="process" className="py-24 relative bg-[#050505]">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-baseline gap-4"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        <span className="text-primary font-mono text-xl md:text-3xl mr-2">04.</span> 迭代记录 {"{"}
                    </h2>
                </motion.div>

                <div className="relative border-l border-border/50 ml-4 md:ml-8 pl-8 md:pl-16 space-y-16 py-8">
                    {/* Glow line */}
                    <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

                    {iterations.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Dot */}
                            <div className="absolute top-0 -left-[41px] md:-left-[73px] w-5 h-5 rounded-full bg-black border-2 border-primary group-hover:bg-primary transition-colors z-10 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-black transition-colors" />
                            </div>

                            <div className="bg-card border border-border p-6 md:p-8 hover:border-primary/50 transition-all duration-300 relative">
                                <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-primary text-black z-10">
                                    {step.icon}
                                </div>
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white group-hover:border-primary transition-colors z-20" />

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-wider pl-6">
                                    {step.phase}
                                </h3>

                                <div className="bg-black border border-primary/20 p-5 font-mono text-sm md:text-base text-primary/90 leading-relaxed mb-6 font-medium shadow-[inset_0_0_20px_rgba(217,235,63,0.02)] border-l-2 border-l-primary">
                                    <span className="text-muted-foreground select-none block mb-2">&gt; 用户指令 (USER_PROMPT):</span>
                                    "{step.prompt}"
                                </div>

                                <p className="text-muted-foreground leading-relaxed flex items-start gap-3">
                                    <span className="text-primary font-mono mt-1">&gt;</span>
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-4xl md:text-6xl font-black text-white/20 uppercase tracking-tight"
                >
                    {"}"}
                </motion.div>
            </div>
        </section>
    );
}
