import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json'; 
import translationRU from './locales/ru/translation.json'; 
import translationAM from './locales/am/translation.json'; 
const resources = { 
en: { translation: translationEN }, 
ru: { translation: translationRU },
am: { translation: translationAM }  
}; 
  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ru: { translation: translationRU },
      am: { translation: translationAM }
    },
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
