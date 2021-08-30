import React from "react";
import { Wrapper } from "../../../styles/styled-comp";
import { imgLogo } from "../images/imageExportPath";

function navPanel() {
  return (
    <nav className="nav__wrapper">
      <Wrapper>
        <img src={imgLogo} alt="main_logo_info" className="img_mainLogo" />
      </Wrapper>
    </nav>
  );
}

export default React.memo(navPanel);
