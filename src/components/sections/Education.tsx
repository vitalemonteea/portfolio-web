"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Education() {
    const { t } = useLanguage();
    const education = t.education.items;

    return (
        <section id="education" className="py-24 relative bg-[#050505] border-y border-border/30">
            {/* Background grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(217,235,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,235,63,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-baseline gap-4"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight flex items-center gap-4">
                        <span className="text-primary font-mono text-xl md:text-2xl mr-2">{t.education.number}</span> <GraduationCap className="w-8 h-8 text-primary" /> {t.education.title}
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-1 before:-translate-x-px before:h-full before:w-px before:bg-border/50">
                        {education.map((edu, i) => (
                            <div key={i} className="relative flex items-start pl-10 group">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-1.5 flex items-center justify-center w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(217,235,63,0.5)]" />

                                {/* Content */}
                                <div className="flex flex-col w-full bg-black/40 border border-border/50 p-6 hover:border-primary/50 transition-colors duration-300">
                                    <div className="flex flex-col mb-4">
                                        <span className="font-mono text-primary text-sm mb-2 opacity-80">{edu.time}</span>
                                        <div className="flex items-center gap-4">
                                            {edu.logo && (
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 p-1 flex-shrink-0 border border-primary/20 bg-[#0a0a0a]">
                                                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                                                </div>
                                            )}
                                            <h4 className="font-bold text-2xl text-white tracking-wide">{edu.school}</h4>
                                        </div>
                                    </div>
                                    <div className="text-muted-foreground font-medium mb-4 text-lg border-b border-border/40 pb-4">{edu.degree}</div>

                                    {edu.courses && (
                                        <div className="text-sm text-muted-foreground/80 font-mono mb-4 leading-relaxed border-l-2 border-primary/30 pl-4 py-2 bg-primary/5">
                                            {edu.courses}
                                        </div>
                                    )}

                                    <div className="text-xs font-mono text-white/80 bg-[#0a0a0a] inline-flex items-center px-4 py-2 border border-border w-fit group-hover:border-primary/30 transition-colors">
                                        <span className="text-primary mr-2 text-lg leading-none">*</span>
                                        {edu.highlights}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
