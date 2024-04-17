import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './languages';

/* const resources = {
  en: {
    translation: {
      test: "Test english",
    }
  },
  es: {
    translation: {
      test: "Test spanish",
    }
  }
} */

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en',
    resources,
    debug: true,
    resources,
  });


export default i18n;