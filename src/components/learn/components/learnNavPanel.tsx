import ProfileInfo from "../components/profileInfo";
import NavPanel from "../components/navPanel";
import MessageInformation from "./messageInformation";
import React, { useCallback, useReducer,memo } from "react";
import { initialState, actions } from "../services/optionsReducerMessage";
import i18next from "i18next";
import { withTranslation } from "react-i18next";


interface stateProp {
  pathname: string;
  profile: any;
  t: (prop:any) => string;
}

function LearnNavPanel({ pathname, profile, t }: stateProp) {
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
        <NavPanel pathname={pathname} clientID={profile.clientID} />
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
          t={t}
        />
      </div>
    </div>
  );
}


export default withTranslation()(memo(LearnNavPanel));
