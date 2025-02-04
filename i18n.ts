import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Permite carregar arquivos JSON externos com as traduções
  .use(LanguageDetector) // Detecta automaticamente o idioma do usuário
  .use(initReactI18next) // Inicializa o react-i18next
  .init({
    fallbackLng: "pt", // Idioma padrão
    debug: true, // Mostra logs no console (desative em produção)
    interpolation: {
      escapeValue: false, // React já faz a sanitização
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
        },
      },
      pt: {
        translation: {
          welcome: "Bem-vindo",
        },
      },
    },
  });

export default i18n;
