"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
    { id: "home", label: "00." },
    { id: "about", label: "01." },
    { id: "education", label: "02." },
    { id: "experience", label: "03." },
    { id: "projects", label: "04." },
    { id: "tech-stack", label: "05." },
    { id: "contact", label: "06." },
];

export function RightNav() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sectionElements = document.querySelectorAll("section[id]");
        sectionElements.forEach((section) => observer.observe(section));

        return () => {
            sectionElements.forEach((section) => observer.unobserve(section));
        };
    }, []);

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
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
            {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                return (
                    <button
                        key={section.id}
                        onClick={() => scrollTo(section.id)}
                        className="group flex items-center justify-end gap-4 outline-none"
                    >
                        <span
                            className={cn(
                                "font-mono text-sm transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0",
                                isActive ? "text-primary opacity-100 translate-x-0" : "text-muted-foreground"
                            )}
                        >
                            {section.label}
                        </span>
                        <div className="relative flex items-center justify-center w-3 h-3">
                            {isActive && (
                                <motion.div
                                    layoutId="nav-dot-active"
                                    className="absolute inset-0 rounded-full border border-primary bg-primary/20"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <div
                                className={cn(
                                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                    isActive ? "bg-primary scale-100" : "bg-muted-foreground/40 group-hover:bg-primary/50 group-hover:scale-125"
                                )}
                            />
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
