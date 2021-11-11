import { useCallback, useReducer, useState } from "react";
import StoryPresentation from "./StoryPresentation";
import { initialState, actions } from "./services/optionsReducer";

export default function Story() {
  const [{ currentTheme, isOpen, isVisibleModal, lessonObj }, dispatch] =
    useReducer(actions, initialState);
  const [currElementDialog, setCurrelementDialog] = useState(-1);
  const [isDisable, setIsDisable] = useState(false);
  const [selectVariant, setSelectVariant] = useState("");

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
      setIsDisable(false);
      dispatch({ type: "resetLessonObj", payload: [] });
    },
    [isOpen]
  );

  const changeCounterCurrElementDialog = (newItem: any) => {
    setCurrelementDialog(currElementDialog + 1);
    if (newItem !== undefined) {
      let keys = Object.keys(newItem);
      keys.length === 7 && setIsDisable(true);
      dispatch({ type: "updateLessonObj", payload: newItem });
    }
  };

  const toggleModalVisibleHandler = () => {
    dispatch({ type: "toggleVisibleModal", payload: isVisibleModal });
  };

  const updateSelectWordHandler = useCallback((event: any) => {
    console.log(event.target.textContent);
    setSelectVariant(event.target.textContent);
  }, []);

  // console.log(lessonObj);

  return (
    <StoryPresentation
      //primitives
      isVisibleModal={isVisibleModal}
      isDisable={isDisable}
      currentTheme={currentTheme}
      isOpen={isOpen}
      currElementDialog={currElementDialog}
      lessonObj={lessonObj}
      selectVariant={selectVariant}
      //methods
      onToggleModalVisibleHandler={toggleModalVisibleHandler}
      onChangeCounterCurrElementDialog={changeCounterCurrElementDialog}
      onChangeThemeHandler={changeThemeHandler}
      onUpdateSelectWordHandler={updateSelectWordHandler}
    />
  );
}
