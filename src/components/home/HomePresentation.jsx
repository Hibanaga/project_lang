import React from "react";
import AboutContainer from "./components/aboutContainer";
import HeaderContainer from "./components/headerContainer";
import NavPanel from "./components/navPanel";
import SelectUsersContainer from "./components/selectUsersContainer";

function HomePresentation() {
  return (
    <>
      <NavPanel />
      <HeaderContainer />
      <AboutContainer />
      <SelectUsersContainer />
    </>
  );
}

export default React.memo(HomePresentation);
