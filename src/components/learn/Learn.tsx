import React, { useReducer } from "react";
// import { connect } from "react-redux";
import LearnPresentation from "./LearnPresentation";
import { initialState, actions } from "./services/optionsReducer";
import { useCallback } from "react";

function Learn() {
  const [state, dispatch] = useReducer(actions, initialState);

  const toggleDropDownHandler = useCallback(
    (event) => {
      // console.log(event.currentTarget.dataset.source);

      if (event.currentTarget.dataset.source === "Основы") {
        dispatch({ type: "toggleIntroduction", payload: state.introduction });
      }
    },
    [state.introduction]
  );

  return (
    <LearnPresentation
      onToggleDropDownHandler={toggleDropDownHandler}
      introduction={state.introduction}
    />
  );
}

export default React.memo(Learn);
