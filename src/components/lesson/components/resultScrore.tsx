import { NavLink } from "react-router-dom";
import { TitleQuestion, CountScore } from "../styles/styled-lesson";
import {
  detectCurrWidthProgressBar,
  getResultsMessages,
} from "../utils/validateLessonExamples";
import { learn } from "../../../router/routes";
import messageResults from "../services/messageResults.json";

interface stateProp {
  countScore: number;
  catalogLength: number;
}

export default function resultScrore({ countScore, catalogLength }: stateProp) {
  console.log(detectCurrWidthProgressBar(countScore, catalogLength));
  return (
    <div className="containerCountScore">
      <TitleQuestion className="titleResultCountScore">
        Результат:
      </TitleQuestion>

      <ul className="ulResultList">
        <li className="liItemResultList">
          <h2 className="subTitleProperty">Количество:</h2>
          <span className="countValueProperty">
            <CountScore>{countScore}</CountScore> / {catalogLength}
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

      <NavLink onClick={() => ""} to={learn} className="routeReturnToMain">
        Завершить
      </NavLink>
    </div>
  );
}
