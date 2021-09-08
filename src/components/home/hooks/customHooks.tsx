import { useEffect, useState } from "react";
import { defaultLang } from "../../../translation/assets/lang";
// import { useTranslation } from "react-i18next";
// import { languageCodeOnly } from "../../../translation/i18n";

const useLang = (currLang = defaultLang) => {
  const [lang, setLang] = useState({});

  useEffect(() => {
    fetch(`/locales/${currLang}/translation.json`)
      .then((res) => res.json())
      .then((data) => setLang(data));
  }, [currLang]);

  return lang;
};

export { useLang };
