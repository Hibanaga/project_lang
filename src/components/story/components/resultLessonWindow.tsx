import React from "react";
import {
  TitleStory,
  CloseWindowButton,
  SubTitleStory,
  ResultMessage,
} from "../styles/story-comp";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  returnCountActiveReplics,
  returnPercentangeSuccesfullyAnswer,
  returnMessageCongratulations,
} from "../utils/validateStoryHelpers";
import messageCongratulations from "../assets/messageCongratulations.json";

interface stateProp {
  falsyAnswerObj: any;
  cardlesson: any;

  onCloseResultLessonWindowHandler: () => void;
}

export default function resultLessonWindow({
  falsyAnswerObj,
  cardlesson,
  onCloseResultLessonWindowHandler,
}: stateProp) {
  return (
    <div className="wrapperResultWindow">
      <CloseWindowButton
        className="js-btn__returnStory"
        onClick={onCloseResultLessonWindowHandler}
      >
        <CloseRoundedIcon />
      </CloseWindowButton>

      <TitleStory className="titleStoryResult">
        Вы успешно завершили урок
      </TitleStory>

      <div className="wrapperResultStoryLesson">
        <SubTitleStory className="subTitleStoryResult">
          Ваш результат:
        </SubTitleStory>

        <ResultMessage>
          {returnMessageCongratulations(
            messageCongratulations,
            returnPercentangeSuccesfullyAnswer(
              falsyAnswerObj.length,
              returnCountActiveReplics(cardlesson)
            )
          )}
        </ResultMessage>
      </div>

      <button
        className="js-btn_finshLesson"
        onClick={onCloseResultLessonWindowHandler}
      >
        Завершить
      </button>
    </div>
  );
}
