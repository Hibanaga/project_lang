import React from "react";

import AboutContainer from "./components/aboutContainer";
import FooterContainer from "./components/footerContainert";
import HeaderContainer from "./components/headerContainer";
import NavPanel from "./components/navPanel";
import PresentAbout from "./components/presentAbout";
import SelectUsersContainer from "./components/selectUsersContainer";

function HomePresentation() {
  return (
    <>
      <NavPanel />
      <HeaderContainer />
      <AboutContainer />
      <SelectUsersContainer />
      <PresentAbout />
      <FooterContainer />
    </>
  );
}

export default React.memo(HomePresentation);
