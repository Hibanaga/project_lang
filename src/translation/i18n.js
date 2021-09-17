import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { defaultLang, supportedLang } from "./assets/lang";

const options = {
  order: ["navigator", "htmlTag", "path", "subdomain"],
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"],

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",
  preload: true,

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step
  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    detection: options,

    fallbackLng: defaultLang,

    supportedLngs: supportedLang.map((lang) => lang.code),

    backend: {
      loadPath: "/project_lang/locales/{{lng}}/{{ns}}.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
