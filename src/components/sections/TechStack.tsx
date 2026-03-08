"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Database, Box } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TechStack() {
    const { t } = useLanguage();
    const categories = [
        {
            title: t.techStack.categories[0].title,
            icon: <Cpu className="w-5 h-5" />,
            items: t.techStack.categories[0].items,
            color: "border-purple-500/30 text-purple-400 group-hover:border-purple-500/80 group-hover:text-purple-300",
        },
        {
            title: t.techStack.categories[1].title,
            icon: <Code className="w-5 h-5" />,
            items: t.techStack.categories[1].items,
            color: "border-blue-500/30 text-blue-400 group-hover:border-blue-500/80 group-hover:text-blue-300",
        },
        {
            title: t.techStack.categories[2].title,
            icon: <Database className="w-5 h-5" />,
            items: t.techStack.categories[2].items,
            color: "border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/80 group-hover:text-emerald-300",
        },
        {
            title: t.techStack.categories[3].title,
            icon: <Box className="w-5 h-5" />,
            items: t.techStack.categories[3].items,
            color: "border-amber-500/30 text-amber-400 group-hover:border-amber-500/80 group-hover:text-amber-300",
        },
    ];

    return (
        <section id="tech-stack" className="py-24 relative bg-[#050505] overflow-hidden border-y border-border/30">
            {/* Background cyber grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(217,235,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,235,63,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div className="flex items-baseline gap-4">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            <span className="text-primary font-mono text-xl md:text-2xl mr-2">{t.techStack.number}</span> {t.techStack.title} <span className="opacity-50 text-3xl">{"{"}</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest max-w-sm text-right">
                        {t.techStack.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-black/50 border border-border/50 p-6 flex flex-col group hover:bg-[#0a0a0a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,235,63,0.05)] hover:border-primary/30"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 bg-black border ${category.color} transition-colors duration-300`}>
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-mono text-muted-foreground bg-black px-2 py-1.5 border border-border/50 group-hover:border-primary/20 hover:!border-primary hover:!text-primary transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-3xl md:text-4xl font-black text-white/20 uppercase tracking-tight"
                >
                    {"}"}
                </motion.div>
            </div>
        </section>
    );
}
