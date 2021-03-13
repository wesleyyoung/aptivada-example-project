import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translate: '../../public/locals/en/translation.json'
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources,
    fallbackLng: "en",
    debug: true,
    // ns: ["translations"],
    // defaultNS: "translations",
    // keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
