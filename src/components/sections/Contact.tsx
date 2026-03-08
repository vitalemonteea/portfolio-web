"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, X, QrCode } from "lucide-react";
import { Button } from "../ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const contactInfo = [
        { icon: <Mail />, text: "opt1889@163.com", href: "mailto:opt1889@163.com" },
        { icon: <Phone />, text: "15320421661", href: "tel:15320421661" },
        { icon: <MapPin />, text: "深圳", href: "#" },
    ];

    return (
        <section id="contact" className="py-24 relative bg-black">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 space-y-6"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight flex items-baseline gap-4">
                        <span className="text-primary font-mono text-xl md:text-3xl">{t.contact.number}</span>
                        <span>{t.contact.title}</span>
                        <span className="text-white/30 font-mono font-medium">{"{"}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl font-medium">
                        <span className="text-primary font-mono mr-2">&gt;</span>
                        {t.contact.pitch}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
                >
                    {contactInfo.map((info, i) => (
                        <a
                            key={i}
                            href={info.href}
                            className="flex items-center gap-3 px-6 py-4 bg-card border border-border hover:border-primary group transition-all duration-300 w-full md:w-auto relative"
                        >
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-primary transition-colors" />
                            <span className="w-5 h-5 flex items-center justify-center text-primary">{info.icon}</span>
                            <span className="font-mono text-white group-hover:text-primary transition-colors">{info.text}</span>
                        </a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center"
                >
                    <Button
                        size="lg"
                        onClick={() => setIsModalOpen(true)}
                        className="px-12 py-6 text-lg bg-primary text-black font-black tracking-wider hover:bg-primary/90 rounded-none border border-primary transition-colors flex items-center gap-3 group"
                    >
                        {t.contact.btn} <span className="font-mono group-hover:translate-x-1 transition-transform">_</span>
                    </Button>
                </motion.div>
            </div>

            {/* WeChat QR Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 cursor-pointer"
                        />

                        {/* Modal Content */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-card w-full max-w-md border border-primary/50 shadow-[0_0_50px_rgba(217,235,63,0.15)] pointer-events-auto flex flex-col rounded-none relative overflow-hidden"
                            >
                                {/* Top corner accent */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary z-10" />

                                <div className="p-8 pb-10 flex flex-col items-center text-center">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight mt-4">
                                        {t.contact.scanTitle}
                                    </h3>
                                    <p className="text-muted-foreground mb-8 text-sm font-mono">
                                        &gt; {t.contact.scanDesc}
                                    </p>

                                    {/* QR Code Placeholder Box */}
                                    <div className="w-64 h-64 bg-black border-2 border-primary/30 p-4 relative group hover:border-primary transition-colors duration-300 flex items-center justify-center mb-6">
                                        {/* Scanner laser animation */}
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_#D9EB3F] animate-[scan_3s_ease-in-out_infinite]" />

                                        {/* Corner brackets */}
                                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors" />
                                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors" />
                                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors" />
                                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors" />

                                        {/* Actual QR Image */}
                                        <img
                                            src="/wechat-qr.jpg"
                                            alt="WeChat QR Code"
                                            className="w-full h-full object-contain relative z-20"
                                        />
                                    </div>

                                    <div className="bg-primary/10 border border-primary/20 px-6 py-3 font-mono text-primary text-sm">
                                        {t.contact.emailAlt} opt1889@163.com
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section >
    );
}
