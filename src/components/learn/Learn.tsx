import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import LearnPresentation from "./LearnPresentation";
import { initialState, actions } from "./services/optionsReducer";
import { useCallback, useEffect } from "react";
import { setLessonTypeName } from "../../redux/lessonInfo/lessonActions";
import localforage from "localforage";
import { Redirect } from "react-router";
import { learn } from "../../router/routes";

interface stateProp {
  onSetLessonNameHandler: (p: string) => void;
}

function Learn({ onSetLessonNameHandler }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);
  const [pathRedirect, setPathRedirect] = useState("");

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
      localforage.setItem("currLesson", event.target.dataset.source);
    },
    [onSetLessonNameHandler]
  );

  useEffect(() => {
    localforage
      .getItem("currLesson")
      .then((data: any) =>
        data !== null ? setPathRedirect(data) : setPathRedirect("")
      );
  }, []);

  return (
    <>
      {pathRedirect !== "" && (
        <Redirect
          to={{
            pathname: `${learn}/${pathRedirect}`,
          }}
        />
      )}

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
