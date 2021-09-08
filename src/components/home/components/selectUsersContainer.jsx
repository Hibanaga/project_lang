import React from "react";
import {
  selectUsersImg,
  prayImg,
  goalImg,
  interestImg,
  studyImg,
} from "../images/imageExportPath";
import {
  Row,
  Wrapper,
  IMG_BACK,
  SubTitle,
  Card,
  Description,
} from "../../../styles/styled-comp";

function selectUsersContainer({ selectUserLang }) {
  return (
    <Wrapper className="wrapperSelectUser">
      <Row>
        <IMG_BACK src={selectUsersImg} alt="users select bg" />

        <SubTitle>{selectUserLang.title}</SubTitle>
        <Row className="rowSelectUser">
          <Card className="cardSelectUser">
            <img src={goalImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>{selectUserLang.card_1.subtitle}</SubTitle>
              <Description className="description">
                {selectUserLang.card_1.description}
              </Description>
            </div>
          </Card>

          <Card className="cardSelectUser">
            <img src={studyImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>{selectUserLang.card_2.subtitle}</SubTitle>
              <Description className="description">
                {selectUserLang.card_2.description}
              </Description>
            </div>
          </Card>

          <Card className="cardSelectUser">
            <img src={prayImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>{selectUserLang.card_3.subtitle}</SubTitle>
              <Description className="description">
                {selectUserLang.card_3.description}
              </Description>
            </div>
          </Card>

          <Card className="cardSelectUser">
            <img src={interestImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>{selectUserLang.card_4.subtitle}</SubTitle>
              <Description className="description">
                {selectUserLang.card_4.description}
              </Description>
            </div>
          </Card>
        </Row>
      </Row>
    </Wrapper>
  );
}

export default React.memo(selectUsersContainer);
