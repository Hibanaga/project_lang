import { NavLink } from "react-router-dom";
import {
  TitleQuestion,
  CountScore,
  SubTitleSearchWord,
} from "../styles/styled-lesson";
import {
  detectCurrWidthProgressBar,
  getResultsMessages,
} from "../utils/validateLessonExamples";
import { learn } from "../../../router/routes";
import messageResults from "../services/messageResults.json";
import { withTranslation } from "react-i18next";

interface stateProp {
  countScore: number;
  catalogLength: number;
  onSubmitLessonHandler: (p: any) => void;
  t: (prop:any) => string;
  currentProgressArr: any;
  progressArr:any;
}

 function resultScrore({
  countScore,
  catalogLength,
  currentProgressArr,
  progressArr,
  onSubmitLessonHandler,
  t
}: stateProp) {
  return (
    <div className="containerCountScore">
      {progressArr && catalogLength === currentProgressArr.length ? (
        <div className="wrapperSuccesfulCompletedLesson">
          <TitleQuestion className="titleSuccesfullMessage">
            {t("resultLesson.congratsMessage")}
          </TitleQuestion>

          <SubTitleSearchWord className="subTitleSuccesfullMessage">
            {t("resultLesson.descriptionCongrats")}
          </SubTitleSearchWord>
        </div>
      ) : (
        <>
          <TitleQuestion className="titleResultCountScore">
            {t("resultLesson.resultMessage")}
            {":"}
          </TitleQuestion>

          <ul className="ulResultList">
            <li className="liItemResultList">
              <h2 className="subTitleProperty">
                {t("resultLesson.countResultCongrats")}
                {":"}
              </h2>
              <span className="countValueProperty">
                <CountScore>{currentProgressArr.length}</CountScore> /{" "}
                {catalogLength}
              </span>
            </li>
            <li className="liItemResultList">
              <h2 className="subTitleProperty">
                {t("resultLesson.countCrownsCongrats")}:
              </h2>
              <span className="countValueProperty">
                <CountScore>+{countScore}</CountScore>
              </span>
            </li>
            <li className="liItemResultList">
              <h2 className="subTitleProperty">
                {t("resultLesson.countCoinCongrats")}:
              </h2>
              <span className="countValueProperty">
                <CountScore>+{countScore}</CountScore>
              </span>
            </li>
          </ul>

          <span className="resultMessageToUser">
            {getResultsMessages(
              detectCurrWidthProgressBar(countScore, catalogLength),
              messageResults
            )}
          </span>
        </>
      )}

      <NavLink
        onClick={onSubmitLessonHandler}
        to={learn}
        className="routeReturnToMain"
      >
        {t("resultLesson.submitFinishCongrats")}
      </NavLink>
    </div>
  );
}


export default withTranslation()(resultScrore);
