import React from "react";
import { Header, Wrapper, Title, Link } from "../../../styles/styled-comp";
import { linksDefaultStyles } from "../styles/styled_links";
import { worldSVG, starBack } from "../images/imageExportPath";
import { register, log_in } from "../../../router/routes";

interface InfoProp {
  headerLang: any;
}

function HeaderContainer({ headerLang }: InfoProp) {
  return (
    <Header theme={starBack} className="container__header">
      <Wrapper className="wrapper__header">
        <img src={worldSVG} alt="world logo svg" />
        <div className="wrapper_desc">
          <Title>{headerLang.title}</Title>
          <Link to={register} theme={linksDefaultStyles} title="register page">
            {headerLang.link_1}
          </Link>
          <Link to={log_in} theme={linksDefaultStyles} title="login page">
            {headerLang.link_2}
          </Link>
        </div>
      </Wrapper>
    </Header>
  );
}

export default React.memo(HeaderContainer);
