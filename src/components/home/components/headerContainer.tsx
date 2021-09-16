import React from "react";
import { Header, Wrapper, Title, Link } from "../../../styles/styled-comp";
import { linksDefaultStyles } from "../styles/styled_links";
import { worldSVG, starBack } from "../images/imageExportPath";

interface InfoProp {
  headerLang: any;
  onToggleRegisterPage: () => void;
  onToggleLoginPage: () => void;
}

function HeaderContainer({
  headerLang,
  onToggleRegisterPage,
  onToggleLoginPage,
}: InfoProp) {
  return (
    <Header theme={starBack} className="container__header">
      <Wrapper className="wrapper__header">
        <img src={worldSVG} alt="world logo svg" />
        <div className="wrapper_desc">
          <Title>{headerLang.title}</Title>
          <Link
            onClick={onToggleRegisterPage}
            theme={linksDefaultStyles}
            title="register page"
          >
            {headerLang.link_1}
          </Link>
          <Link
            onClick={onToggleLoginPage}
            theme={linksDefaultStyles}
            title="login page"
          >
            {headerLang.link_2}
          </Link>
        </div>
      </Wrapper>
    </Header>
  );
}

export default React.memo(HeaderContainer);
