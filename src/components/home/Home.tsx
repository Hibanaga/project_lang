import { useState } from "react";
import HomePresentation from "./HomePresentation";
//i18n translation
import { defaultLang } from "../../translation/assets/lang";
import { useLang } from "./hooks/customHooks";
import "./styles/home.scss";

export default function Home() {
  //set new lang
  const [selectedLang, setSelectedLang] = useState(defaultLang);

  //toggle login and register page
  const [isLoginPage, setLoginPage] = useState(false);
  const [isRegisterPage, setRegisterPage] = useState(false);

  const currLang = useLang(selectedLang);

  //fucntion set new lang
  const updateLangHandler = (lang: string) => {
    setSelectedLang(lang);
  };

  //toggle login page
  const toggleLoginPage = () => setLoginPage(!isLoginPage);
  //toggle register page
  const toggleRegisterPage = () => setRegisterPage(!isRegisterPage);

  return (
    Object.keys(currLang).length > 0 && (
      <HomePresentation
        currLang={currLang}
        onUpdateLangHandler={updateLangHandler}
        isLoginPage={isLoginPage}
        isRegisterPage={isRegisterPage}
        onToggleLoginPage={toggleLoginPage}
        onToggleRegisterPage={toggleRegisterPage}
      />
    )
  );
}
