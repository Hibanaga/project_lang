import React from "react";

import AboutContainer from "./components/aboutContainer";
import FooterContainer from "./components/footerContainert";
import HeaderContainer from "./components/headerContainer";
import NavPanel from "./components/navPanel";
import PresentAbout from "./components/presentAbout";
import SelectUsersContainer from "./components/selectUsersContainer";

//anotherPage
import Login from "../form/loginForm/Login";
import Register from "../form/registerForm/Register";

interface InfoProp {
  currLang: any;
  onUpdateLangHandler: (lang: string) => void;
  isLoginPage: boolean;
  isRegisterPage: boolean;
  onToggleLoginPage: () => void;
  onToggleRegisterPage: () => void;
}

function HomePresentation({
  currLang,
  onUpdateLangHandler,
  isLoginPage,
  isRegisterPage,
  onToggleLoginPage,
  onToggleRegisterPage,
}: InfoProp) {
  console.log(isLoginPage === false || isRegisterPage === false);
  return (
    <>
      {isLoginPage && (
        <Login
          onToggleLoginPage={onToggleLoginPage}
          onToggleRegisterPage={onToggleRegisterPage}
        />
      )}
      {isRegisterPage && (
        <Register onToggleRegisterPage={onToggleRegisterPage} />
      )}
      {isLoginPage === false && isRegisterPage === false && (
        <>
          <NavPanel />
          <HeaderContainer
            headerLang={currLang.home.headerContainer}
            onToggleLoginPage={onToggleLoginPage}
            onToggleRegisterPage={onToggleRegisterPage}
          />
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
      )}
    </>
  );
}

export default React.memo(HomePresentation);
