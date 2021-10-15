import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import LearnPresentation from "./LearnPresentation";
import { initialState, actions } from "./services/optionsReducer";
import { useCallback, useEffect } from "react";
import { setLessonTypeName } from "../../redux/lessonInfo/lessonActions";
import localforage from "localforage";
import { Redirect } from "react-router";
import { learn } from "../../router/routes";
import { setCountCoin, setCountCrown } from "../../redux/userInfo/userActions";

interface stateProp {
  onSetLessonNameHandler: (p: string) => void;
  restoreCoinHandler: (p: number) => void;
  restoreCrownHandler: (p: number) => void;
  profile?: any;
}

function Learn({
  onSetLessonNameHandler,
  restoreCoinHandler,
  restoreCrownHandler,
  profile,
}: stateProp) {
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

    fetch("/profileStats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientID: profile.clientID }),
    })
      .then((res) => res.json())
      .then((data) => {
        restoreCoinHandler(data.coin);
        restoreCrownHandler(data.crown);
        // setFirthAuthHandler(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

const mapStateToProps = ({ profile }: any) => ({
  profile: profile,
});

const mapDispatchToProps = {
  onSetLessonNameHandler: setLessonTypeName,
  restoreCoinHandler: setCountCoin,
  restoreCrownHandler: setCountCrown,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Learn));
