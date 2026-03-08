"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, Rocket } from "lucide-react";
import { Button } from "../ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { t } = useLanguage();
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden bg-black"
        >
            {/* Background grain texture for geek feel */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            {/* Soft Green Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/20 blur-[150px] rounded-full pointer-events-none opacity-50 z-0" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-start max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center gap-3 mb-8 bg-[#0a0a0a] border border-primary/30 px-4 py-2 rounded-none w-fit group hover:border-primary transition-colors cursor-default"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline-block">{t.hero.sysStatus}</span>
                    <span className="text-xs font-mono text-white/90 group-hover:text-primary transition-colors">{t.hero.available}</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -8, 0]
                    }}
                    transition={{
                        opacity: { duration: 0.5 },
                        x: { duration: 0.5, type: "spring", stiffness: 100 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    }}
                    className="w-24 h-24 md:w-32 md:h-32 border border-primary bg-card overflow-hidden mb-8 shadow-[6px_6px_0px_0px_#D9EB3F] relative"
                >
                    <img
                        src="/avatar.png"
                        alt="钱金城"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-110"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white uppercase text-left w-full"
                >
                    <span className="text-primary">{t.hero.lastName}</span>{t.hero.firstName}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl md:text-3xl text-primary font-bold mb-6 h-8 flex items-center justify-start text-left w-full"
                >
                    <span className="font-bold mr-3 font-mono">&gt;</span>
                    <span className="inline-block border-r-4 border-primary pr-2 animate-[blink_1s_step-end_infinite] font-semibold text-white/90">
                        {t.hero.titlePrefix}
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-muted-foreground text-left max-w-2xl text-lg font-medium leading-relaxed mb-10"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                    <Button
                        size="lg"
                        className="w-full sm:w-auto gap-2 group relative overflow-hidden bg-primary text-black font-black hover:bg-primary/90 rounded-none border border-primary text-lg px-8 py-6 h-auto tracking-wide"
                        onClick={() => scrollTo("contact")}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {t.hero.contactBtn}
                        </span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="lg"
                        className="w-full sm:w-auto gap-2 group font-bold text-primary hover:bg-primary/10 hover:text-primary rounded-none border border-primary px-8 py-6 h-auto text-lg transition-all"
                        onClick={() => scrollTo("about")}
                    >
                        {t.hero.learnMoreBtn} <span className="group-hover:translate-x-1 transition-transform ml-1">&rarr;</span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="lg"
                        className="w-full sm:w-auto gap-2 group font-mono text-muted-foreground hover:text-white rounded-none border border-border hover:border-white px-8 py-6 h-auto text-lg transition-all"
                        onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                        <span className="group-hover:-translate-y-1 transition-transform mr-1 text-primary">↓</span> {t.hero.resumeBtn}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
