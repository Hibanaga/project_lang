import ProfileInfo from "../components/profileInfo";
import NavPanel from "../components/navPanel";
import MessageInformation from "./messageInformation";
import React, { useCallback, useReducer } from "react";
import { initialState, actions } from "../services/optionsReducerMessage";

<<<<<<< HEAD
import { withTranslation } from "react-i18next";
import i18next from "i18next";

interface stateProp {
  pathname: string;
  profile: any;
}

function LearnNavPanel({ pathname, profile }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);
  const { coin, crown } = profile;

=======
interface stateProp {
  pathname: string;
}

function LearnNavPanel({ pathname }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);
  // console.log(state);
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6
  const changePathMessageHandler = useCallback(
    (event: any) => {
      const { dataset } = event.currentTarget;
      const { currentTheme, isOpenMessageWindow } = state;
      if (dataset.theme !== currentTheme) {
        dispatch({ type: "setNewCurrentTheme", payload: dataset.theme });

        if (isOpenMessageWindow === false) {
          dispatch({
            type: "toggleMessageWindow",
            payload: isOpenMessageWindow,
          });
        }
      } else {
        dispatch({ type: "toggleMessageWindow", payload: isOpenMessageWindow });
      }
    },
    [state]
  );

<<<<<<< HEAD
  const updateLangHandler = useCallback(
    (event) => i18next.changeLanguage(event.target.dataset.source),
    []
  );
=======
  console.log(state);
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6

  return (
    <div className="wrapperContainer">
      <div className="containerNavLearn">
        <NavPanel pathname={pathname} />
<<<<<<< HEAD
        <ProfileInfo
          currLang={i18next.language}
          onChangePathMessageHandler={changePathMessageHandler}
        />
=======
        <ProfileInfo onChangePathMessageHandler={changePathMessageHandler} />
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6

        <MessageInformation
          isOpenMessageWindow={state.isOpenMessageWindow}
          currentTheme={state.currentTheme}
<<<<<<< HEAD
          onUpdateLangHandler={updateLangHandler}
          currLang={i18next.language}
          coin={coin}
          crown={crown}
=======
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6
        />
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default withTranslation()(React.memo(LearnNavPanel));
=======
export default React.memo(LearnNavPanel);
>>>>>>> 0d9bff4779fc9ce4d5c34247b271222a9c2feef6
