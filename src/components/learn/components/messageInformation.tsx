import {
  MessageArrowCurrentPath,
  ButtonSelectLang,
  CardCrownCard,
} from "../styles/learn-comp";
import { imgCrown, profileIMG } from "../images/imageExport";
import flagObj from "../images/flagExport";
import { supportedLang } from "../../../translation/assets/lang";

interface stateProp {
  isOpenMessageWindow: boolean;
  currentTheme: string;
  currLang: string;
  onUpdateLangHandler: (p: any) => void;
  t: (p: any) => string;
  coin: number;
  crown: number;
}

export default function messageInformation({
  isOpenMessageWindow,
  currentTheme,
  currLang,
  onUpdateLangHandler,
  coin,
  crown,
  t,
}: stateProp) {
  return (
    <>
      {isOpenMessageWindow && (
        <>
          <div className="containerMessageInformation">
            <MessageArrowCurrentPath
              theme={{
                currTheme: currentTheme,
              }}
            />

            {currentTheme === "flag" && (
              <div className="wrapperMessage">
                <div className="rowMessage">
                  {supportedLang.map(({ id, lang, code }) => (
                    <ButtonSelectLang
                      className="js-btn__changeLang"
                      onClick={onUpdateLangHandler}
                      data-source={code}
                      key={id}
                      theme={{
                        imgURL: flagObj[code],
                        currentLang: currLang === code,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {currentTheme === "rubin" && (
              <div className="wrapperMessage">
                <div className="rowRubinMessage">
                  <img src={flagObj.chest} alt="" className="imgChestRubin" />

                  <div className="containerMessageInfo">
                    <h2 className="subTitleNameMessage">{t("Learn.actionUsers.rubin.rubinsTitle")}</h2>

                    <span className="descriptionMessage">
                      {t("Learn.actionUsers.rubin.rubinsDescription_1")}{coin}{t("Learn.actionUsers.rubin.rubinsDescription_2")}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {currentTheme === "crown" && (
              <div className="wrapperMessage">
                <div className="rowMessage rowMessageCrown">
                  <CardCrownCard theme={{ crownIMG: imgCrown }}>
                    <span className="descriptionCountCrown">{crown}</span>
                  </CardCrownCard>

                  <div className="containerMessageInfo">
                    <h2 className="subTitleNameMessage">{t("Learn.actionUsers.crown.crownTitle")}</h2>

                    <span className="descriptionMessage">
                      {t("Learn.actionUsers.crown.crownDescription")}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {currentTheme === "profile" && (
              <div className="wrapperMessage">
                <div className="rowMessage rowMessageProfile">
                  <img src={profileIMG} alt="" className="imgProfile" />

                  <div className="containerMessageInfo">
                    <h2 className="subTitleNameMessage">
                      {t("Learn.actionUsers.profile.profileTiTle")}
                    </h2>

                    <span className="descriptionMessage">
                      {t("Learn.actionUsers.profile.profileDescription")}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
