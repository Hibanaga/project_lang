import { useState } from "react";
import HomePresentation from "./HomePresentation";
//i18n translation
import { defaultLang } from "../../translation/assets/lang";
import { useLang } from "./hooks/customHooks";
import "./styles/home.scss";

export default function Home() {
  //set new lang
  const [selectedLang, setSelectedLang] = useState(defaultLang);
  const currLang = useLang(selectedLang);

  //fucntion set new lang
  const updateLangHandler = (lang: string) => {
    setSelectedLang(lang);
  };

  return (
    Object.keys(currLang).length > 0 && (
      <HomePresentation
        currLang={currLang}
        onUpdateLangHandler={updateLangHandler}
      />
    )
  );
}
