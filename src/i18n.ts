import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des fichiers de traduction
import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18n.use(LanguageDetector) // Détection automatique de la langue du navigateur
    .use(initReactI18next) // Liaison avec React
    .init({
        resources: {
            en: { translation: en }, // Traductions en anglais
            fr: { translation: fr }, // Traductions en français
        },
        fallbackLng: "en", // langue par défaut
        interpolation: {
            escapeValue: false, // React échappe déjà les valeurs
        },
    });

export default i18n;
