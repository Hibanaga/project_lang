import React from "react";
import {
  SubTitle,
  Wrapper,
  Row,
  IMG_BACK,
  Description,
} from "../../../styles/styled-comp";
import { bg_mainHeader } from "../images/imageExportPath";
import { withTranslation } from "react-i18next";

interface InfoProp {
  t: (p: string) => object;
}

function about({ t }: InfoProp) {
  return (
    <Wrapper className="wrapperAbout__container">
      <SubTitle>{t("home.aboutContainer.subtitle")}</SubTitle>
      <Row>
        <IMG_BACK src={bg_mainHeader} alt="bg_main container_image" />
        <Description className="description">
          {t("home.aboutContainer.description_1")}{" "}
          <span className="description_strong">
            {" "}
            {t("home.aboutContainer.description_2")}
          </span>{" "}
          {t("home.aboutContainer.description_3")}
        </Description>
      </Row>
    </Wrapper>
  );
}

export default withTranslation()(React.memo(about));
