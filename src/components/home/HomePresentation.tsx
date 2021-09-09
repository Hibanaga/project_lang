import React from "react";
import AboutContainer from "./components/aboutContainer";
import FooterContainer from "./components/footerContainert";
import HeaderContainer from "./components/headerContainer";
import NavPanel from "./components/navPanel";
import PresentAbout from "./components/presentAbout";
import SelectUsersContainer from "./components/selectUsersContainer";

interface InfoProp {
  currLang: any;
  onUpdateLangHandler: (lang: string) => void;
}

function HomePresentation({ currLang, onUpdateLangHandler }: InfoProp) {
  return (
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
        onUpdateLangHandler={onUpdateLangHandler}
      />
    </>
  );
}

export default React.memo(HomePresentation);
