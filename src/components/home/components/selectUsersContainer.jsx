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

function selectUsersContainer() {
  return (
    <Wrapper className="wrapperSelectUser">
      <Row>
        <IMG_BACK src={selectUsersImg} alt="users select bg" />

        <SubTitle>Почему вам стоит выбрать именно coollearn</SubTitle>
        <Row className="rowSelectUser">
          <Card className="cardSelectUser">
            <img src={goalImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>Быстрый прогресс</SubTitle>
              <Description className="description">
                Эффективное обучение построено на практических задачах чтобы
                пользователь мог освоить новые знания.
              </Description>
            </div>
          </Card>

          <Card className="cardSelectUser">
            <img src={studyImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>Индивидуальное обучение</SubTitle>
              <Description className="description">
                Наши уроки сочетают лучшие достижения искусственного интеллекта
                и лингвистики. Мы балансируем сложность и темп обучения для
                каждого пользователя индивидуально!
              </Description>
            </div>
          </Card>

          <Card className="cardSelectUser">
            <img src={prayImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>Стимул к учёбе</SubTitle>
              <Description className="description">
                С нашим игровым подходом ежедневные занятия входят в привычку.
                Вам помогут забавные задания и напоминания от нашего талисмана —
                совёнка Duo.
              </Description>
            </div>
          </Card>

          <Card className="cardSelectUser">
            <img src={interestImg} alt="select user success" />

            <div className="wrapper__description">
              <SubTitle>Нескучные уроки!</SubTitle>
              <Description className="description">
                Эффективное обучение не должно быть скучным! Интересные задания
                и забавные персонажи дают стимул заниматься каждый день.
              </Description>
            </div>
          </Card>
        </Row>
      </Row>
    </Wrapper>
  );
}

export default React.memo(selectUsersContainer);
