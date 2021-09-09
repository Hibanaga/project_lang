import React from "react";
import { Header, Wrapper, Title, Link } from "../../../styles/styled-comp";
import { register, log_in } from "../../../router/routes";
import { linksDefaultStyles } from "../styles/styled_links";
import { worldSVG, starBack } from "../images/imageExportPath";

interface InfoProp {
  headerLang: any;
}

function HeaderContainer({ headerLang }: InfoProp) {
  return (
    <Header theme={starBack} className="container__header">
      <Wrapper>
        <img src={worldSVG} alt="world logo svg" />
        <div className="wrapper_desc">
          <Title>{headerLang.title}</Title>
          <Link theme={linksDefaultStyles} to={register}>
            {headerLang.link_1}
          </Link>
          <Link theme={linksDefaultStyles} to={log_in}>
            {headerLang.link_2}
          </Link>
        </div>
      </Wrapper>
    </Header>
  );
}

export default React.memo(HeaderContainer);
