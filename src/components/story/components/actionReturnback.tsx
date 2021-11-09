import React from "react";
import { Wrapper } from "../../../styles/styled-comp";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  ProgressBar,
  ProgressInlineBar,
} from "../../lesson/styles/styled-lesson";
import { detectCurrWidthProgressBar } from "../../lesson/utils/validateLessonExamples";

interface stateProp {
  onChangeThemeHandler: (p: any) => void;
}

export default function actionReturnback({ onChangeThemeHandler }: stateProp) {
  return (
    <Wrapper className="wrapperActionsStory">
      <button className="js-btn__returnStory" onClick={onChangeThemeHandler}>
        <CloseRoundedIcon />
      </button>

      <div className="wrapperProgressBarStory">
        <ProgressBar
          className="progressBar"
          theme={{
            currWidth: detectCurrWidthProgressBar(0, 6),
          }}
        >
          <ProgressInlineBar
            theme={{
              currWidth: detectCurrWidthProgressBar(0, 6),
            }}
          />
        </ProgressBar>
      </div>
    </Wrapper>
  );
}
