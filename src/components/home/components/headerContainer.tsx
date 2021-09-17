import React from "react";
import { Header, Wrapper, Title, Link } from "../../../styles/styled-comp";
import { linksDefaultStyles } from "../styles/styled_links";
import { worldSVG, starBack } from "../images/imageExportPath";
import { register, log_in } from "../../../router/routes";
import { withTranslation } from "react-i18next";

interface InfoProp {
  t: (p: string) => object;
}

function HeaderContainer({ t }: InfoProp) {
  console.log(typeof t);
  return (
    <Header theme={starBack} className="container__header">
      <Wrapper className="wrapper__header">
        <img src={worldSVG} alt="world logo svg" />
        <div className="wrapper_desc">
          <Title>{t("home.headerContainer.title")}</Title>
          <Link to={register} theme={linksDefaultStyles} title="register page">
            {t("home.headerContainer.link_1")}
          </Link>
          <Link to={log_in} theme={linksDefaultStyles} title="login page">
            {t("home.headerContainer.link_2")}
          </Link>
        </div>
      </Wrapper>
    </Header>
  );
}

export default withTranslation()(React.memo(HeaderContainer));
