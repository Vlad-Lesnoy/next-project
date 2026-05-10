"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import {
    LANGUAGES,
    FALLBACK_LANG,
    DEFAULT_NS,
} from "./config";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend((language: string, namespace: string) => {
            return import(`./locales/${language}/${namespace}.json`);
        })
    )
    .init({
        supportedLngs: LANGUAGES,

        fallbackLng: FALLBACK_LANG,

        lng: undefined,

        defaultNS: DEFAULT_NS,

        fallbackNS: DEFAULT_NS,

        detection: {
            order: ["path", "navigator"],
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;