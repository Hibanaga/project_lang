import ProfileInfo from "../components/profileInfo";
import NavPanel from "../components/navPanel";
import MessageInformation from "./messageInformation";
import React, { useCallback, useReducer } from "react";
import { initialState, actions } from "../services/optionsReducerMessage";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

interface stateProp {
  pathname: string;
  profile: any;
}

function LearnNavPanel({ pathname, profile }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);
  const { coin, crown } = profile;
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

  const updateLangHandler = useCallback(
    (event) => i18next.changeLanguage(event.target.dataset.source),
    []
  );

  return (
    <div className="wrapperContainer">
      <div className="containerNavLearn">
        <NavPanel pathname={pathname} />
        <ProfileInfo
          currLang={i18next.language}
          onChangePathMessageHandler={changePathMessageHandler}
        />

        <MessageInformation
          isOpenMessageWindow={state.isOpenMessageWindow}
          currentTheme={state.currentTheme}
          onUpdateLangHandler={updateLangHandler}
          currLang={i18next.language}
          coin={coin}
          crown={crown}
        />
      </div>
    </div>
  );
}

export default withTranslation()(React.memo(LearnNavPanel));
