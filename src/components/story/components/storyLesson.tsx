import React from "react";
import ActionReturnback from "./actionReturnback";
import cardPack from "../assets/cardPack.json";
import CardStory from "./cardStory";
import VideoModalStory from "./videoModalStory";
import cardlesson from "../assets/cardLesson1.json";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardReplicaActivePerson from "./cardReplicaActivePerson";
import CardReplicaNonActivePerson from "./cardReplicaNonActivePerson";

interface stateProp {
  currentTheme: string;
  isVisibleModal: boolean;
  currElementDialog: number;
  lessonObj: any;

  onToggleModalVisibleHandler: (p: any) => void;
  onChangeThemeHandler: (p: any) => void;
  onChangeCounterCurrElementDialog: (p: any) => void;
}

export default function storyLesson({
  currentTheme,
  isVisibleModal,
  currElementDialog,
  lessonObj,
  onChangeThemeHandler,
  onToggleModalVisibleHandler,
  onChangeCounterCurrElementDialog,
}: stateProp) {
  const { id, title, description, originalTitle, urlVideo } = cardPack
    .flat()
    .filter(({ description }) => description === currentTheme)[0];

  const { title: titleText, dialog } = cardlesson;
  const currItem = dialog[currElementDialog];

  // console.log(currItem);
  // console.log(titleText);

  return (
    <div className="wrapperStoryLessson">
      <ActionReturnback onChangeThemeHandler={onChangeThemeHandler} />

      <CardStory
        key={id}
        description={description}
        title={title}
        onToggleModalVisibleHandler={onToggleModalVisibleHandler}
        originalTitle={originalTitle}
      />

      <VideoModalStory
        urlVideo={urlVideo}
        isVisibleModal={isVisibleModal}
        onToggleModalVisibleHandler={onToggleModalVisibleHandler}
      />

      <CSSTransition
        in={Boolean(currElementDialog >= 0)}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <h1 className="titleTextStoryLesson">{titleText}</h1>
      </CSSTransition>

      <TransitionGroup component="ul">
        {lessonObj.map(
          (
            {
              id,
              person,
              replica,
              actionType,
              correctAnswer,
              variantAnswer,
            }: any,
            idx: number
          ) =>
            actionType === "active" ? (
              <CSSTransition key={id} timeout={300} classNames="alert">
                <CardReplicaActivePerson
                  // key={id}
                  person={person}
                  replica={replica}
                  correctAnswer={correctAnswer}
                  variantAnswer={variantAnswer}
                />
              </CSSTransition>
            ) : (
              <CSSTransition key={id} timeout={300} classNames="alert">
                <CardReplicaNonActivePerson
                  // key={id}
                  idx={idx}
                  person={person}
                  replica={replica}
                />
              </CSSTransition>
            )
        )}
      </TransitionGroup>

      <button
        className="js-btn__openWindow"
        onClick={() => onChangeCounterCurrElementDialog(currItem)}
      >
        далее
      </button>
    </div>
  );
}
