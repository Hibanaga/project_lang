import { useEffect, useState, useCallback } from "react";
import { defaultLang } from "../../../translation/assets/lang";
// import { useTranslation } from "react-i18next";
// import { languageCodeOnly } from "../../../translation/i18n";

const useLang = (currLang = defaultLang) => {
  const [selectedLang, setSelectedLang] = useState(defaultLang);
  const [lang, setLang] = useState({});

  useEffect(() => {
    fetch(`/locales/${selectedLang}/translation.json`)
      .then((res) => res.json())
      .then((data) => setLang(data));
  }, [selectedLang]);

  const updateLang = useCallback(() => setSelectedLang(currLang), [currLang]);

  return [lang, updateLang];
};

export { useLang };
