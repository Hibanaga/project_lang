import { useCallback, useReducer } from "react";
import StoryPresentation from "./StoryPresentation";
import { initialState, actions } from "./services/optionsReducer";

export default function Story() {
  const [{ currentTheme, isOpen, isVisibleModal }, dispatch] = useReducer(
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

  const toggleModalVisibleHandler = () => {
    dispatch({ type: "toggleVisibleModal", payload: isVisibleModal });
  };

  return (
    <StoryPresentation
      onChangeThemeHandler={changeThemeHandler}
      onToggleModalVisibleHandler={toggleModalVisibleHandler}
      isVisibleModal={isVisibleModal}
      currentTheme={currentTheme}
      isOpen={isOpen}
    />
  );
}
