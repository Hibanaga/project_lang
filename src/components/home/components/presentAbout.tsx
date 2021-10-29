import React from "react";
import {
  Row,
  Wrapper,
  IMG_BACK,
  SubTitle,
  Description,
} from "../../../styles/styled-comp";
import { bgPresent } from "../images/imageExportPath";
import { englishTest } from "../../../router/routes";
import { NavLink } from "react-router-dom";

import { withTranslation } from "react-i18next";

interface InfoProp {
  t: (p: string) => object;
}

function presentAbout({ t }: InfoProp) {
  return (
    <Wrapper className="wrapper_presentAbout">
      <Row className="row_presentAbout">
        <IMG_BACK loading="lazy" src={bgPresent} alt="bg present info" />
        <div className="wrapper_desc">
          <SubTitle>{t("home.presentAbout.title")}</SubTitle>

          <Description className="description">
            {t("home.presentAbout.description")}
          </Description>
        </div>
        <NavLink to={englishTest}>{t("home.presentAbout.link")}</NavLink>
      </Row>
    </Wrapper>
  );
}

export default withTranslation()(React.memo(presentAbout));
