import { useCallback, useReducer, useState } from "react";
import StoryPresentation from "./StoryPresentation";
import { initialState, actions } from "./services/optionsReducer";
import cardlesson from "./assets/cardLesson1.json";

export default function Story() {
  //the reducer to use from another needs
  // currentTheme: to check current open theme
  // isOpen:  to open window with story
  // isVisibleModal: to open modal with video of story
  // lessonObj: the array to show current elems of story shows to user
  const [
    { currentTheme, isOpen, isVisibleModal, lessonObj, falsyAnswerObj },
    dispatch,
  ] = useReducer(actions, initialState);
  //show to user elem of dialog to show next
  const [currElementDialog, setCurrelementDialog] = useState(16);
  //disable botton prop if user don't click to variant answer
  const [isDisable, setIsDisable] = useState(false);
  //selected variant of answer from user
  const [selectVariant, setSelectVariant] = useState("");
  //calculate the count of falsy answer count from user
  const [isOpenResultWindow, setOpenResultWindow] = useState(false);

  //toggle window handler to open/close from user
  const changeThemeHandler = useCallback(
    (event: any) => {
      if (event.currentTarget.dataset.theme !== undefined) {
        dispatch({
          type: "setNewCurrentTheme",
          payload: event.currentTarget.dataset.theme,
        });
      }

      //reset all props
      dispatch({ type: "toggleStoryWindow", payload: isOpen });
      setCurrelementDialog(16);
      setIsDisable(false);
      setSelectVariant("");

      dispatch({ type: "resetLessonObj", payload: [] });
      dispatch({ type: "resetFalsyAnswerObj", payload: [] });
    },
    [isOpen]
  );

  //update current count of dialog replice show to user
  const changeCounterCurrElementDialog = (newItem: any) => {
    setCurrelementDialog(currElementDialog + 1);
    if (newItem !== undefined) {
      let keys = Object.keys(newItem);
      keys.length >= 6 ? setIsDisable(true) : setIsDisable(false);
      dispatch({ type: "updateLessonObj", payload: newItem });
      setSelectVariant("");
    }
  };

  //toggle modal to show to user video of story
  const toggleModalVisibleHandler = () => {
    dispatch({ type: "toggleVisibleModal", payload: isVisibleModal });
  };

  //update selected word of user to answer and calculate count of falsy answer from user
  const updateSelectWordHandler = useCallback((event: any, prop: string) => {
    // console.log(event.currentTarget.textContent);
    setSelectVariant(event.currentTarget.textContent);

    if (event.currentTarget.textContent === prop) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
      dispatch({
        type: "updateFalsyAnswerObj",
        payload: event.currentTarget.textContent,
      });
    }
  }, []);

  //open window result
  const openResultLessonWindowHandler = () => setOpenResultWindow(true);

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
      isOpenResultWindow={isOpenResultWindow}
      falsyAnswerObj={falsyAnswerObj}
      cardlesson={cardlesson}
      //methods
      onToggleModalVisibleHandler={toggleModalVisibleHandler}
      onChangeCounterCurrElementDialog={changeCounterCurrElementDialog}
      onChangeThemeHandler={changeThemeHandler}
      onUpdateSelectWordHandler={updateSelectWordHandler}
      onOpenResultLessonWindowHandler={openResultLessonWindowHandler}
    />
  );
}
