import { Wrapper } from "../../../styles/styled-comp";
import { ProgressBar, ProgressInlineBar } from "../styles/styled-lesson";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { NavLink } from "react-router-dom";
import { learn } from "../../../router/routes";
import React from "react";
import { detectCurrWidthProgressBar } from "../utils/validateLessonExamples";

interface stateProp {
  countQuestion: number;
  catalogLength: number;
  onRemovePathRedirectHandler: () => void;
}

function actionReturnBack({
  countQuestion,
  catalogLength,
  onRemovePathRedirectHandler,
}: stateProp) {
  // console.log(detectCurrWidthProgressBar(countQuestion, catalogLength));

  return (
    <Wrapper className="wrapperActionsRouter">
      <NavLink
        to={learn}
        onClick={onRemovePathRedirectHandler}
        className="js-link__returnLearn"
      >
        <CloseRoundedIcon />
      </NavLink>

      <div className="wrapperProgressBar">
        <ProgressBar
          className="progressBar"
          theme={{
            currWidth: detectCurrWidthProgressBar(countQuestion, catalogLength),
          }}
        >
          <ProgressInlineBar
            theme={{
              currWidth: detectCurrWidthProgressBar(
                countQuestion,
                catalogLength
              ),
            }}
          />
        </ProgressBar>
      </div>
    </Wrapper>
  );
}

export default React.memo(actionReturnBack);
