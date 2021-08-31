import React from "react";
import {
  Header,
  Title,
  Wrapper,
  Link,
  SubTitle,
} from "../../../styles/styled-comp";
import { starBack } from "../images/imageExportPath";
import { register } from "../../../router/routes";
import { linksDefaultStyles } from "../styles/styled_links";
import lang from "../assets/lang.json";

function footerContainer() {
  return (
    <Header theme={starBack} className="wrapperFooter">
      <Wrapper>
        <Title>Изучайте английский с Coollearn</Title>
        <Link theme={linksDefaultStyles} to={register}>
          Начать
        </Link>

        <div className="container_lang">
          <SubTitle>Язык сайта:</SubTitle>

          <div className="row_lang">
            {lang.map(({ id, lang }) => (
              <button className="js-btn_lang" key={id}>
                {lang}
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </Header>
  );
}

export default React.memo(footerContainer);
