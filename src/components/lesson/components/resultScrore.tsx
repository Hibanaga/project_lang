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

interface stateProp {
  countScore: number;
  catalogLength: number;
  onSubmitLessonHandler: (p: any) => void;
  currentProgressArr: any;
  progressArr:any;
}

export default function resultScrore({
  countScore,
  catalogLength,
  currentProgressArr,
  progressArr,
  onSubmitLessonHandler,
}: stateProp) {
  return (
    <div className="containerCountScore">
      {progressArr && catalogLength === currentProgressArr.length ? (
        <div className="wrapperSuccesfulCompletedLesson">
          <TitleQuestion className="titleSuccesfullMessage">
            Поздравляем
          </TitleQuestion>

          <SubTitleSearchWord className="subTitleSuccesfullMessage">
            Вы успешно завершили этот урок
          </SubTitleSearchWord>
        </div>
      ) : (
        <>
          <TitleQuestion className="titleResultCountScore">
            Результат:
          </TitleQuestion>

          <ul className="ulResultList">
            <li className="liItemResultList">
              <h2 className="subTitleProperty">Количество:</h2>
              <span className="countValueProperty">
                <CountScore>{currentProgressArr.length}</CountScore> /{" "}
                {catalogLength}
              </span>
            </li>
            <li className="liItemResultList">
              <h2 className="subTitleProperty">Заработано корон:</h2>
              <span className="countValueProperty">
                <CountScore>+{countScore}</CountScore>
              </span>
            </li>
            <li className="liItemResultList">
              <h2 className="subTitleProperty">Заработано рубинов:</h2>
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
        Завершить
      </NavLink>
    </div>
  );
}
