"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { zh, LocaleType } from '../locales/zh';
import { en } from '../locales/en';

type LanguageContextType = {
    locale: 'zh' | 'en';
    t: LocaleType;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocale] = useState<'zh' | 'en'>('zh');
    const [t, setT] = useState<LocaleType>(zh);

    useEffect(() => {
        // Load language from localStorage if available
        const savedLang = localStorage.getItem('app-lang');
        if (savedLang === 'en') {
            setLocale('en');
            setT(en);
        } else {
            setLocale('zh');
            setT(zh);
        }
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === 'zh' ? 'en' : 'zh';
        setLocale(newLocale);
        setT(newLocale === 'zh' ? zh : en);
        localStorage.setItem('app-lang', newLocale);

        // Optionally inject lang attribute
        document.documentElement.lang = newLocale;
    };

    return (
        <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
