import React from "react";
import {
  selectUsersImg,
  prayImg,
  goalImg,
  interestImg,
  studyImg,
} from "../images/imageExportPath";
import { Row, Wrapper, IMG_BACK, SubTitle } from "../../../styles/styled-comp";

function selectUsersContainer() {
  return (
    <Wrapper className="wrapperSelectUser">
      <Row>
        <IMG_BACK src={selectUsersImg} alt="users select bg" />

        <SubTitle>Почему вам стоит выбрать именно coollearn</SubTitle>
        <div className="rowSelectUser">
          <div className="cardSelectUser"></div>
        </div>
      </Row>
    </Wrapper>
  );
}

export default React.memo(selectUsersContainer);
