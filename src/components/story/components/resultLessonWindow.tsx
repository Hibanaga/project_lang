import React from "react";
import {
  TitleStory,
  CloseWindowButton,
  SubTitleStory,
} from "../styles/story-comp";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  returnCountActiveReplics,
  returnPercentangeSuccesfullyAnswer,
} from "../utils/validateStoryHelpers";

interface stateProp {
  falsyAnswerObj: any;
  cardlesson: any;
}

export default function resultLessonWindow({
  falsyAnswerObj,
  cardlesson,
}: stateProp) {
  console.log(
    returnPercentangeSuccesfullyAnswer(
      4,
      returnCountActiveReplics(cardlesson.dialog)
    )
  );
  return (
    <div className="wrapperResultWindow">
      <CloseWindowButton className="js-btn__returnStory">
        <CloseRoundedIcon />
      </CloseWindowButton>

      <SubTitleStory></SubTitleStory>

      <TitleStory className="titleStoryResult">
        Вы успешно завершили урок
      </TitleStory>
    </div>
  );
}
