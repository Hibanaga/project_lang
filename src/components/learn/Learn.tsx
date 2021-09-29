import React, { useReducer } from "react";
import { connect } from "react-redux";
import LearnPresentation from "./LearnPresentation";
import { initialState, actions } from "./services/optionsReducer";
import { useCallback } from "react";
import { setLessonTypeName } from "../../redux/lessonInfo/lessonActions";

interface stateProp {
  onSetLessonNameHandler: (p: string) => void;
}

function Learn({ onSetLessonNameHandler }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);

  const toggleDropDownHandler = useCallback(
    (event) => {
      if (
        event.currentTarget.dataset.source === "Learn.trainingSection.mainTitle"
      ) {
        dispatch({ type: "toggleIntroduction", payload: state.introduction });
      }
    },
    [state.introduction]
  );

  const setLessonNameHandler = useCallback(
    (event: any) => {
      onSetLessonNameHandler(event.target.dataset.source);
    },
    [onSetLessonNameHandler]
  );

  return (
    <>
      <LearnPresentation
        onToggleDropDownHandler={toggleDropDownHandler}
        introduction={state.introduction}
        onSetLessonNameHandler={setLessonNameHandler}
      />
    </>
  );
}

const mapDispatchToProps = {
  onSetLessonNameHandler: setLessonTypeName,
};

export default connect(null, mapDispatchToProps)(React.memo(Learn));
