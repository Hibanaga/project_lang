import React, { useState } from "react";
import AboutContainer from "./components/aboutContainer";
import FooterContainer from "./components/footerContainer";
import HeaderContainer from "./components/headerContainer";
import NavPanel from "./components/navPanel";
import PresentAbout from "./components/presentAbout";
import SelectUsersContainer from "./components/selectUsersContainer";
//i18n translation
import { defaultLang } from "../../translation/assets/lang";
import { useLang } from "./hooks/customHooks";

function HomePresentation() {
  const [currLang, setLang] = useLang(defaultLang);

  const updateLangHandler = (lang) => {
    console.log(lang);
    setLang(lang);
  };

  return (
    Object.keys(currLang).length > 0 && (
      <>
        <NavPanel />
        <HeaderContainer headerLang={currLang.home.headerContainer} />
        <AboutContainer />
        <SelectUsersContainer />
        <PresentAbout />
        <FooterContainer onUpdateLangHandler={updateLangHandler} />
      </>
    )
  );
}

export default React.memo(HomePresentation);
