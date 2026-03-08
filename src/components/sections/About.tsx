"use client";

import { motion } from "framer-motion";
import { Terminal, Database, BrainCircuit, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { t } = useLanguage();
    const cards = [
        {
            title: t.about.cards[0].title,
            icon: <Terminal className="w-6 h-6 text-primary" />,
            desc: t.about.cards[0].desc,
        },
        {
            title: t.about.cards[1].title,
            icon: <Database className="w-6 h-6 text-primary" />,
            desc: t.about.cards[1].desc,
        },
        {
            title: t.about.cards[2].title,
            icon: <BrainCircuit className="w-6 h-6 text-primary" />,
            desc: t.about.cards[2].desc,
        },
    ];

    return (
        <section id="about" className="py-24 relative bg-[#030303]">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-baseline gap-4 justify-center md:justify-start"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                        <span className="text-primary font-mono text-xl md:text-3xl mr-2">{t.about.number}</span> {t.about.title} {"{"}
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground leading-relaxed text-lg font-medium space-y-6 max-w-3xl"
                    >
                        <p>
                            <span className="text-primary mr-2 font-mono">&gt;</span>
                            {t.about.bio1_1}<span className="text-white font-bold mx-1 border-b-2 border-primary">{t.about.bio1_name}</span>{t.about.bio1_2}
                        </p>
                        <p>
                            <span className="text-primary mr-2 font-mono">&gt;</span>
                            {t.about.bio2_1} <span className="text-primary font-mono bg-primary/10 px-2 py-1 mx-1 rounded-sm border border-primary/20">{t.about.bio2_highlight}</span>
                            {t.about.bio2_2}
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card border border-border p-6 hover:border-primary transition-all duration-300 group flex flex-col"
                            >
                                <div className="mb-6 w-12 h-12 flex items-center justify-center bg-black/50 border border-primary/20 rounded-none">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide group-hover:text-primary transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-mono flex-grow">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-4xl md:text-6xl font-black text-white/20 uppercase tracking-tight flex justify-end"
                >
                    {"}"}
                </motion.div>
            </div>
        </section>
    );
}
