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

function presentAbout({ presentAbout }) {
  return (
    <Wrapper className="wrapper_presentAbout">
      <Row className="row_presentAbout">
        <IMG_BACK loading="lazy" src={bgPresent} alt="bg present info" />
        <div className="wrapper_desc">
          <SubTitle>{presentAbout.title}</SubTitle>

          <Description className="description">
            {presentAbout.description}
          </Description>
        </div>
        <NavLink to={englishTest}>{presentAbout.link}</NavLink>
      </Row>
    </Wrapper>
  );
}

export default React.memo(presentAbout);
