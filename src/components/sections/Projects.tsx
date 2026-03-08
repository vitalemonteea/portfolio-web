"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, X, ExternalLink, Terminal } from "lucide-react";
import { Button } from "../ui/Button";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
    id: string;
    title: string;
    role: string;
    period: string;
    summary: string;
    background: string;
    duties: string[];
    results: string;
    tags: string[];
    image: string; // Placeholder for now
}

export function Projects() {
    const { t } = useLanguage();
    const projects = t.projects.items;

    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedProject = projects.find((p) => p.id === selectedId);

    return (
        <section id="projects" className="py-24 relative bg-[#030303]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-baseline justify-between"
                >
                    <div className="flex items-baseline gap-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            <span className="text-primary font-mono text-xl md:text-3xl mr-2">{t.projects.number}</span> {t.projects.title} {"{"}
                        </h2>
                    </div>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-0 lg:ml-8 border-l border-border/50 pl-0 lg:pl-12 pt-4">
                    {projects.map((project, i) => (
                        <motion.div
                            layoutId={`card-container-${project.id}`}
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer bg-card overflow-hidden border border-border hover:border-primary transition-all duration-300 flex flex-col h-full relative"
                        >
                            {/* Top Left Corner Accent */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-primary transition-colors z-10" />

                            <motion.div
                                layoutId={`card-image-${project.id}`}
                                className="w-full h-48 relative border-b border-border grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden"
                            >
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
                            </motion.div>

                            <div className="p-6 flex flex-col flex-1 bg-card group-hover:bg-[#0a0a0a] transition-colors">
                                <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl font-bold mb-3 text-white uppercase group-hover:text-primary transition-colors tracking-wide">
                                    {project.title}
                                </motion.h3>
                                <motion.p layoutId={`card-summary-${project.id}`} className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed font-mono">
                                    {project.summary}
                                </motion.p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                        <span key={idx} className="text-xs font-mono text-muted-foreground px-2 py-1 bg-black border border-border group-hover:border-primary/50 transition-colors uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-black border border-border group-hover:border-primary/50 transition-colors">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
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

                {/* Modal */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 cursor-pointer"
                            />

                            {/* Modal Content */}
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
                                <motion.div
                                    layoutId={`card-container-${selectedProject.id}`}
                                    className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-primary/50 shadow-[0_0_50px_rgba(217,235,63,0.15)] pointer-events-auto flex flex-col rounded-none"
                                >
                                    {/* Header / Cover */}
                                    <motion.div
                                        layoutId={`card-image-${selectedProject.id}`}
                                        className="w-full h-40 md:h-64 relative flex items-center justify-center border-b border-primary/20 overflow-hidden"
                                    >
                                        <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-black hover:text-primary transition-colors border border-border hover:border-primary z-10"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </motion.div>

                                    <div className="p-6 md:p-10 bg-card">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10 border-b border-border/50 pb-8">
                                            <div>
                                                <motion.span
                                                    className="font-mono text-primary bg-primary/10 px-3 py-1 border border-primary/20 text-sm mb-4 inline-block"
                                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                                                >
                                                    {selectedProject.period} | {selectedProject.role}
                                                </motion.span>
                                                <motion.h3
                                                    layoutId={`card-title-${selectedProject.id}`}
                                                    className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white"
                                                >
                                                    {selectedProject.title}
                                                </motion.h3>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                            {/* Left Col: Details */}
                                            <div className="lg:col-span-2 space-y-10">
                                                <div>
                                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-white">
                                                        <span className="text-primary font-mono text-base">&gt;</span> {t.projects.backgroundLabel}
                                                    </h4>
                                                    <p className="text-muted-foreground leading-relaxed font-medium">
                                                        {selectedProject.background}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-white">
                                                        <span className="text-primary font-mono text-base">&gt;</span> {t.projects.dutiesLabel}
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {selectedProject.duties.map((duty, i) => (
                                                            <motion.li
                                                                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                                                                key={i} className="flex gap-3 text-muted-foreground font-medium"
                                                            >
                                                                <span className="text-primary font-mono flex-shrink-0 mt-0.5">~</span>
                                                                <span className="leading-relaxed">{duty}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="bg-black border border-primary/30 p-6 relative overflow-hidden group">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                                    <h4 className="text-lg font-bold mb-3 text-primary uppercase tracking-wider">
                                                        {t.projects.resultsLabel}
                                                    </h4>
                                                    <p className="text-white leading-relaxed font-mono text-sm">
                                                        {selectedProject.results}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Col: Tags */}
                                            <div>
                                                <h4 className="font-bold mb-6 text-sm tracking-widest text-muted-foreground uppercase pb-2 border-b border-border/50">
                                                    {t.projects.techStackLabel}
                                                </h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {selectedProject.tags.map((tag, i) => (
                                                        <motion.span
                                                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.05 }}
                                                            key={i} className="text-sm font-mono text-primary bg-black px-4 py-2 border border-primary/30 hover:bg-primary/10 transition-colors uppercase"
                                                        >
                                                            {tag}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
