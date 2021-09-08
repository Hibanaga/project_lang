import React, { useCallback } from "react";
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
import { supportedLang } from "../../../translation/assets/lang";

function FooterContainer({ onUpdateLangHandler, footerLang }) {
  const updateLangHandler = useCallback(
    (event) => {
      onUpdateLangHandler(event.target.dataset.source);
    },
    [onUpdateLangHandler]
  );

  return (
    <Header theme={starBack} className="wrapperFooter">
      <Wrapper>
        <Title>{footerLang.title}</Title>
        <Link theme={linksDefaultStyles} to={register}>
          {footerLang.link}
        </Link>

        <div className="container_lang">
          <SubTitle>{footerLang.subtitle}</SubTitle>

          <div className="row_lang">
            {supportedLang.map(({ id, lang, code }) => (
              <button
                className="js-btn_lang"
                data-source={code}
                key={id}
                onClick={updateLangHandler}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </Header>
  );
}

export default React.memo(FooterContainer);
