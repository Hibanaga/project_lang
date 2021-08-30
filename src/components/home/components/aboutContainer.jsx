import React from "react";
import { SubTitle, Wrapper, Row, IMG_BACK } from "../../../styles/styled-comp";
import { bg_mainHeader } from "../images/imageExportPath";

function about() {
  return (
    <Wrapper className="wrapperAbout__container">
      <SubTitle>Ресурс для обучения английскому языку</SubTitle>
      <Row>
        <IMG_BACK src={bg_mainHeader} alt="bg_main container_image" />
        <span className="description">
          Учиться с помощью{" "}
          <span className="description_strong">Coollearn</span> очень весело и
          эффективно. Мы предоставляем уникальную возможность сделать процесс
          обучения, где каждый может найти задания которые помогут ему освоить
          новые знания.
        </span>
      </Row>
    </Wrapper>
  );
}

export default React.memo(about);
