"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Experience() {
    const { t } = useLanguage();
    const experiences = t.experience.items;
    return (
        <section id="experience" className="py-24 relative bg-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-baseline gap-4"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        <span className="text-primary font-mono text-xl md:text-3xl mr-2">{t.experience.number}</span> {t.experience.title} {"{"}
                    </h2>
                </motion.div>

                <div className="space-y-8 pl-0 md:pl-8 border-none md:border-l border-border/50">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card border border-border p-6 md:p-8 hover:border-primary transition-all duration-300 group relative"
                        >
                            {/* Accent decorator top left corner */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-primary transition-colors" />

                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg text-muted-foreground font-medium flex items-center gap-2">
                                        <BriefcaseBusiness className="w-4 h-4" /> {exp.company}
                                    </div>
                                </div>
                                <div className="font-mono text-sm px-3 py-1 bg-black text-primary border border-primary/50 shadow-[0_0_10px_rgba(217,235,63,0.1)] whitespace-nowrap w-fit">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8 text-muted-foreground font-medium bg-black/50 p-4 border border-border/50">
                                {exp.duties.map((duty, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="text-primary mt-1 font-mono">&gt;</span>
                                        <span className="leading-relaxed">{duty}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-mono text-muted-foreground bg-black px-2 py-1 border border-border group-hover:border-primary/50 transition-colors uppercase"
                                    >
                                        #{tag}
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
                    className="mt-16 text-4xl md:text-6xl font-black text-white/20 uppercase tracking-tight"
                >
                    {"}"}
                </motion.div>
            </div>
        </section>
    );
}
