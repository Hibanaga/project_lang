import React from "react";
import {
  SubTitle,
  Wrapper,
  Row,
  IMG_BACK,
  Description,
} from "../../../styles/styled-comp";
import { bg_mainHeader } from "../images/imageExportPath";

function about({ aboutLang }) {
  return (
    <Wrapper className="wrapperAbout__container">
      <SubTitle>{aboutLang.subtitle}</SubTitle>
      <Row>
        <IMG_BACK src={bg_mainHeader} alt="bg_main container_image" />
        <Description className="description">
          {aboutLang.description_1}{" "}
          <span className="description_strong"> {aboutLang.description_2}</span>{" "}
          {aboutLang.description_3}
        </Description>
      </Row>
    </Wrapper>
  );
}

export default React.memo(about);
