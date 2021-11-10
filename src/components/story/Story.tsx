import { useCallback, useReducer, useState } from "react";
import StoryPresentation from "./StoryPresentation";
import { initialState, actions } from "./services/optionsReducer";

export default function Story() {
  const [{ currentTheme, isOpen, isVisibleModal, lessonObj }, dispatch] =
    useReducer(actions, initialState);
  const [currElementDialog, setCurrelementDialog] = useState(-1);

  const changeThemeHandler = useCallback(
    (event: any) => {
      if (event.currentTarget.dataset.theme !== undefined) {
        dispatch({
          type: "setNewCurrentTheme",
          payload: event.currentTarget.dataset.theme,
        });
      }
      dispatch({ type: "toggleStoryWindow", payload: isOpen });
      setCurrelementDialog(-1);
      dispatch({ type: "resetLessonObj", payload: [] });
    },
    [isOpen]
  );

  const changeCounterCurrElementDialog = (newItem: any) => {
    setCurrelementDialog(currElementDialog + 1);
    if (newItem !== undefined) {
      dispatch({ type: "updateLessonObj", payload: newItem });
    }
  };

  const toggleModalVisibleHandler = () => {
    dispatch({ type: "toggleVisibleModal", payload: isVisibleModal });
  };

  console.log(lessonObj);

  return (
    <StoryPresentation
      //primitives
      isVisibleModal={isVisibleModal}
      currentTheme={currentTheme}
      isOpen={isOpen}
      currElementDialog={currElementDialog}
      lessonObj={lessonObj}
      //methods
      onToggleModalVisibleHandler={toggleModalVisibleHandler}
      onChangeCounterCurrElementDialog={changeCounterCurrElementDialog}
      onChangeThemeHandler={changeThemeHandler}
    />
  );
}
