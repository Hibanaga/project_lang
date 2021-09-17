import React, { useCallback } from "react";

import {
  Header,
  Title,
  Wrapper,
  Link,
  SubTitle,
} from "../../../styles/styled-comp";
import { starBack } from "../images/imageExportPath";
import { linksDefaultStyles } from "../styles/styled_links";
import { supportedLang } from "../../../translation/assets/lang";
import { register } from "../../../router/routes";

import { withTranslation } from "react-i18next";
import i18next from "i18next";

interface InfoProp {
  t: (p: string) => object;
}

function FooterContainer({ t }: InfoProp) {
  const updateLangHandler = useCallback((event) => {
    i18next.changeLanguage(event.target.dataset.source);
  }, []);

  return (
    <Header theme={starBack} className="wrapperFooter">
      <Wrapper>
        <Title>{t("home.footerContainer.title")}</Title>
        <Link
          to={register}
          className="js_btn__routeFooter"
          title="register page"
          theme={linksDefaultStyles}
        >
          {t("home.footerContainer.link")}
        </Link>

        <div className="container_lang">
          <SubTitle>{t("home.footerContainer.subtitle")}</SubTitle>

          <div className="row_lang">
            {supportedLang.map(({ id, lang, code }) => (
              <button
                className="js-btn_lang"
                onClick={updateLangHandler}
                data-source={code}
                key={id}
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

export default withTranslation()(React.memo(FooterContainer));
