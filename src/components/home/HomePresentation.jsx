import React, { useState } from "react";
import AboutContainer from "./components/aboutContainer";
import FooterContainer from "./components/footerContainert";
import HeaderContainer from "./components/headerContainer";
import NavPanel from "./components/navPanel";
import PresentAbout from "./components/presentAbout";
import SelectUsersContainer from "./components/selectUsersContainer";
//i18n translation
import { defaultLang } from "../../translation/assets/lang";
import { useLang } from "./hooks/customHooks";

function HomePresentation() {
  //set new lang
  const [selectedLang, setSelectedLang] = useState(defaultLang);
  const currLang = useLang(selectedLang);

  //fucntion set new lang
  const updateLangHandler = (lang) => {
    setSelectedLang(lang);
  };

  return (
    Object.keys(currLang).length > 0 && (
      <>
        <NavPanel />
        <HeaderContainer headerLang={currLang.home.headerContainer} />
        <AboutContainer aboutLang={currLang.home.aboutContainer} />
        <SelectUsersContainer
          selectUserLang={currLang.home.selectUsersContainer}
        />
        <PresentAbout presentAbout={currLang.home.presentAbout} />
        <FooterContainer
          footerLang={currLang.home.footerContainer}
          onUpdateLangHandler={updateLangHandler}
        />
      </>
    )
  );
}

export default React.memo(HomePresentation);
