import { NavLink } from "react-router-dom";
import { learn } from "../../../router/routes";
import { SubTitleSearchWord, TitleQuestion } from "../styles/styled-lesson";

interface stateProp {
  onSubmitLessonHandler: (p: any) => void;
}

export default function successfulCompletedLesson({
  onSubmitLessonHandler,
}: stateProp) {
  return (
    <div className="wrapperSuccesfulCompletedLesson">
      <TitleQuestion className="titleSuccesfullMessage">
        Поздравляем
      </TitleQuestion>

      <SubTitleSearchWord className="subTitleSuccesfullMessage">
        Вы успешно завершили этот урок
      </SubTitleSearchWord>

      <NavLink
        to={learn}
        onClick={onSubmitLessonHandler}
        className="routeReturnToMain"
      >
        Завершить
      </NavLink>
    </div>
  );
}
