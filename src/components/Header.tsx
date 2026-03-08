"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TerminalSquare, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { useLanguage } from "@/context/LanguageContext";


export function Header({
    isAiDevMode,
    setIsAiDevMode,
}: {
    isAiDevMode: boolean;
    setIsAiDevMode: (v: boolean) => void;
}) {
    const { t, locale, toggleLanguage } = useLanguage();
    const [activeTab, setActiveTab] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t.nav.home, href: "#home" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.education, href: "#education" },
        { name: t.nav.experience, href: "#experience" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.techStack, href: "#tech-stack" },
        { name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple intersection observer logic for active tab highlight
            const sections = navLinks.map((link) => link.href.substring(1));
            let currentSection = sections[0];

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 150) {
                    currentSection = section;
                }
            }
            setActiveTab(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id.substring(1));
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Offset for sticky header
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
                isScrolled
                    ? "bg-background/80 border-b border-border/40 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="text-2xl font-bold font-mono tracking-tighter cursor-pointer group flex items-center gap-2"
                    onClick={() => scrollTo("#home")}
                >
                    <span className="text-primary group-hover:animate-pulse">&gt;</span> JC.
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                                activeTab === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                            {activeTab === link.href.substring(1) && (
                                <motion.div
                                    layoutId="activeTabBadge"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-mono text-muted-foreground hover:text-white"
                        title="Switch Language"
                    >
                        <Languages className="w-3.5 h-3.5" />
                        <span className="font-bold">{locale === 'zh' ? 'EN' : '中'}</span>
                    </button>

                    {/* AI Dev Mode Toggle */}
                    <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full p-1 pl-3 overflow-hidden shadow-inner">
                        <span className={cn("text-xs font-mono font-medium hidden sm:block transition-colors", isAiDevMode ? "text-primary" : "text-muted-foreground")}>
                            {locale === 'zh' ? 'AI 开发者模式' : 'AI DEV MODE'}
                        </span>
                        <button
                            onClick={() => setIsAiDevMode(!isAiDevMode)}
                            className={cn(
                                "relative flex h-6 w-10 items-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                isAiDevMode ? "bg-primary/20" : "bg-muted"
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute flex items-center justify-center top-0.5 h-5 w-5 rounded-full bg-background shadow-sm transition-transform duration-300",
                                    isAiDevMode ? "translate-x-4 border border-primary text-primary" : "translate-x-0.5 border border-border text-muted-foreground"
                                )}
                            >
                                <TerminalSquare className="w-3 h-3" />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl border-t border-border flex flex-col items-center justify-center space-y-8 z-40"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.href)}
                                className={cn(
                                    "text-2xl font-bold tracking-wider",
                                    activeTab === link.href.substring(1) ? "text-primary" : "text-foreground"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
