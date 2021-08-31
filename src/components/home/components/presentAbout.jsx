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

function presentAbout() {
  return (
    <Wrapper className="wrapper_presentAbout">
      <Row>
        <IMG_BACK loading="lazy" src={bgPresent} alt="bg present info" />
        <SubTitle>Collearn English Test</SubTitle>

        <Description className="description">
          Так же coollearn предоставляет удобное тестирование знаний чтобы
          каждый пользователь мог узнать свой уровень владения языком.
        </Description>

        <NavLink to={englishTest}>ПОДТВЕРДИТЕ ВЛАДЕНИЕ АНГЛИЙСКИМ</NavLink>
      </Row>
    </Wrapper>
  );
}

export default React.memo(presentAbout);
