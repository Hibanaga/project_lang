import React from "react";
import { Header, Wrapper, Title, Link } from "../../../styles/styled-comp";
import { register, log_in } from "../../../router/routes";
import { linksDefaultStyles } from "../styles/styled_links";
import { worldSVG, starBack } from "../images/imageExportPath";

function headerContainer() {
  return (
    <Header theme={starBack}>
      <Wrapper>
        <img src={worldSVG} alt="world logo svg" />
        <Title>Учите языки бесплатно, весело и эффективно!</Title>
        <Link theme={linksDefaultStyles} to={register}>
          начать
        </Link>
        <Link theme={linksDefaultStyles} to={log_in}>
          У меня уже есть аккаунт
        </Link>
      </Wrapper>
    </Header>
  );
}

export default React.memo(headerContainer);
