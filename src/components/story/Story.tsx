import { useCallback, useEffect, useReducer, useState, useRef } from "react";
import StoryPresentation from "./StoryPresentation";
import { initialState, actions } from "./services/optionsReducer";
import { connect } from "react-redux";
import { updateProgressStory } from "../../redux/userInfo/userActions";

interface stateProp {
  clientID: string;
  progressStory: string;
  crown: number;

  updateProgressStoryHandler: (p: string) => void;
}

function Story({
  clientID,
  progressStory,
  crown,
  updateProgressStoryHandler,
}: stateProp) {
  //the reducer to use from another needs
  // currentTheme: to check current open theme
  // isOpen:  to open window with story
  // isVisibleModal: to open modal with video of story
  // lessonObj: the array to show current elems of story shows to user
  const [
    {
      currentTheme,
      isOpen,
      isVisibleModal,
      lessonObj,
      falsyAnswerObj,
      titleStory,
      dialogResponse,
    },
    dispatch,
  ] = useReducer(actions, initialState);
  //show to user elem of dialog to show next
  const [currElementDialog, setCurrelementDialog] = useState(-1);
  //disable botton prop if user don't click to variant answer
  const [isDisable, setIsDisable] = useState(false);
  //selected variant of answer from user
  const [selectVariant, setSelectVariant] = useState("");
  //calculate the count of falsy answer count from user
  const [isOpenResultWindow, setOpenResultWindow] = useState(false);
  //item ref
  const outerRef = useRef<HTMLLinkElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (currentTheme !== "") {
      fetch("/get_storyLesson", {
        method: "POST",
        signal: signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          theme: currentTheme,
        }),
      })
        .then((res) => res.json())
        .then(({ title, dialog }) => {
          dispatch({ type: "setTitleStory", payload: title });
          dispatch({ type: "setDialogResponse", payload: dialog });
        });
    }
  }, [currentTheme]);

  //toggle window handler to open/close from user
  const changeThemeHandler = useCallback(
    (event: any, coinCount?: number) => {
      if (coinCount !== undefined && coinCount > 0) {
        return false;
      }

      if (event.currentTarget.dataset.theme !== undefined) {
        dispatch({
          type: "setNewCurrentTheme",
          payload: event.currentTarget.dataset.theme,
        });
      }

      //reset all props
      dispatch({ type: "toggleStoryWindow", payload: isOpen });
      setCurrelementDialog(-1);
      setIsDisable(false);
      setSelectVariant("");

      dispatch({ type: "resetLessonObj", payload: [] });
      dispatch({ type: "resetFalsyAnswerObj", payload: [] });
    },
    [isOpen]
  );

  //effect scroll to bottom dialog
  const scrollToBottom = () => {
    outerRef.current && outerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom, [currElementDialog]);

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
  const openResultLessonWindowHandler = () => {
    setOpenResultWindow(true);
  };

  const closeResultLessonWindowHandler = () => {
    setOpenResultWindow(false);

    updateProgressStoryHandler(currentTheme);

    //reset all props
    dispatch({ type: "toggleStoryWindow", payload: isOpen });
    setCurrelementDialog(16);
    setIsDisable(false);
    setSelectVariant("");

    dispatch({ type: "resetLessonObj", payload: [] });
    dispatch({ type: "resetFalsyAnswerObj", payload: [] });

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/update_progressStory", {
      method: "POST",
      signal: signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientID: clientID,
        progress: currentTheme,
      }),
    })
      .then((res) => res.json)
      .then((data) => { });
  };

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
      cardlesson={dialogResponse}
      outerRef={outerRef}
      titleStory={titleStory}
      progressStory={progressStory}
      crown={crown}
      //methods
      onToggleModalVisibleHandler={toggleModalVisibleHandler}
      onChangeCounterCurrElementDialog={changeCounterCurrElementDialog}
      onChangeThemeHandler={changeThemeHandler}
      onUpdateSelectWordHandler={updateSelectWordHandler}
      onOpenResultLessonWindowHandler={openResultLessonWindowHandler}
      onCloseResultLessonWindowHandler={closeResultLessonWindowHandler}
    />
  );
}

const mapStateToProps = ({ profile }: any) => ({
  clientID: profile.clientID,
  progressStory: profile.progressStory,
  crown: profile.crown,
});

const mapDispatchToProps = {
  updateProgressStoryHandler: updateProgressStory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Story);
