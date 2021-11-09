import { useCallback, useReducer } from "react";
import StoryPresentation from "./StoryPresentation";
import { initialState, actions } from "./services/optionsReducer";

// include styles
import "rodal/lib/rodal.css";

export default function Story() {
  const [{ currentTheme, isOpen }, dispatch] = useReducer(
    actions,
    initialState
  );

  const changeThemeHandler = useCallback(
    (event: any) => {
      if (event.currentTarget.dataset.theme !== undefined) {
        dispatch({
          type: "setNewCurrentTheme",
          payload: event.currentTarget.dataset.theme,
        });
      }
      dispatch({ type: "toggleStoryWindow", payload: isOpen });
    },
    [isOpen]
  );

  return (
    <StoryPresentation
      onChangeThemeHandler={changeThemeHandler}
      currentTheme={currentTheme}
      isOpen={isOpen}
    />
  );
}
