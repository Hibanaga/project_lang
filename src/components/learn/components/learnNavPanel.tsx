import ProfileInfo from "../components/profileInfo";
import NavPanel from "../components/navPanel";
import MessageInformation from "./messageInformation";
import React, { useCallback, useReducer } from "react";
import { initialState, actions } from "../services/optionsReducerMessage";

interface stateProp {
  pathname: string;
}

function LearnNavPanel({ pathname }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);
  // console.log(state);
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

  console.log(state);

  return (
    <div className="wrapperContainer">
      <div className="containerNavLearn">
        <NavPanel pathname={pathname} />
        <ProfileInfo onChangePathMessageHandler={changePathMessageHandler} />

        <MessageInformation
          isOpenMessageWindow={state.isOpenMessageWindow}
          currentTheme={state.currentTheme}
        />
      </div>
    </div>
  );
}

export default React.memo(LearnNavPanel);
