import {
  MessageArrowCurrentPath,
  ButtonSelectLang,
  CardCrownCard,
} from "../styles/learn-comp";
import { imgCrown } from "../images/imageExport";
import flagObj from "../images/flagExport";
import { supportedLang } from "../../../translation/assets/lang";

interface stateProp {
  isOpenMessageWindow: boolean;
  currentTheme: string;
  currLang: string;
  onUpdateLangHandler: (p: any) => void;
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
                    <h2 className="subTitleNameMessage">Рубины</h2>

                    <span className="descriptionMessage">
                      Ваше богатство - {coin} рубинов.
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
                    <h2 className="subTitleNameMessage">Короны</h2>

                    <span className="descriptionMessage">
                      Получайте короны, повышая уровень навыков!
                    </span>
                  </div>
                </div>
              </div>
            )}

            {currentTheme === "profile" && (
              <div className="wrapperMessage"></div>
            )}
          </div>
        </>
      )}
    </>
  );
}
