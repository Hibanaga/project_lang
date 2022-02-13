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
import { withTranslation } from "react-i18next";

interface stateProp {
  falsyAnswerObj: any;
  cardlesson: any;

  t: (prop:any) => string;
  onCloseResultLessonWindowHandler: () => void;
}

function resultLessonWindow({
  falsyAnswerObj,
  cardlesson,
  onCloseResultLessonWindowHandler,
  t,
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
        {t("resultLesson.descriptionCongrats")}
      </TitleStory>

      <div className="wrapperResultStoryLesson">
        <SubTitleStory className="subTitleStoryResult">
          {t("resultLesson.yourResult")}:
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
        {t("resultLesson.submitFinishCongrats")}
      </button>
    </div>
  );
}


export default withTranslation()(resultLessonWindow);