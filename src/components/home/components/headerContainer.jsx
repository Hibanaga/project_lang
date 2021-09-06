import React from "react";
import { Header, Wrapper, Title, Link } from "../../../styles/styled-comp";
import { register, log_in } from "../../../router/routes";
import { linksDefaultStyles } from "../styles/styled_links";
import { worldSVG, starBack } from "../images/imageExportPath";

function HeaderContainer({ headerLang }) {
  return (
    <Header theme={starBack}>
      <Wrapper>
        <img src={worldSVG} alt="world logo svg" />
        <Title>{headerLang.title}</Title>
        <Link theme={linksDefaultStyles} to={register}>
          {headerLang.link_1}
        </Link>
        <Link theme={linksDefaultStyles} to={log_in}>
          {headerLang.link_2}
        </Link>
      </Wrapper>
    </Header>
  );
}

export default React.memo(HeaderContainer);
