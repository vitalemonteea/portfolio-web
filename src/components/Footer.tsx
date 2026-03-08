"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border/40 bg-background py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground font-mono">
                    &copy; {currentYear} {t.footer.rights}
                </p>

                <div className="flex items-center space-x-4 text-muted-foreground">
                    <motion.a
                        whileHover={{ scale: 1.1, color: "var(--primary)" }}
                        href="mailto:opt1889@163.com"
                        className="transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
}
