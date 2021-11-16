import React from "react";
import ActionReturnback from "./actionReturnback";
import cardPack from "../assets/cardPack.json";
import CardStory from "./cardStory";
import VideoModalStory from "./videoModalStory";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardReplicaActivePerson from "./cardReplicaActivePerson";
import CardReplicaNonActivePerson from "./cardReplicaNonActivePerson";

interface stateProp {
  currentTheme: string;
  selectVariant: string;
  isVisibleModal: boolean;
  isDisable: boolean;
  isOpenResultWindow: boolean;
  currElementDialog: number;
  lessonObj: any;
  falsyAnswerObj: any;
  cardlesson: any;

  onToggleModalVisibleHandler: (p: any) => void;
  onChangeThemeHandler: (p: any) => void;
  onChangeCounterCurrElementDialog: (p: any) => void;
  onUpdateSelectWordHandler: (p: any, p1: any) => void;
  onOpenResultLessonWindowHandler: () => void;
}

export default function storyLesson({
  currentTheme,
  isVisibleModal,
  isDisable,
  currElementDialog,
  lessonObj,
  selectVariant,
  falsyAnswerObj,
  cardlesson,

  onChangeThemeHandler,
  onToggleModalVisibleHandler,
  onChangeCounterCurrElementDialog,
  onUpdateSelectWordHandler,
  onOpenResultLessonWindowHandler,
}: stateProp) {
  const { id, title, description, originalTitle, urlVideo } = cardPack
    .flat()
    .filter(({ description }) => description === currentTheme)[0];

  const { title: titleText, dialog } = cardlesson;
  const currItem = dialog[currElementDialog];
  const currElement = dialog[currElementDialog - 1];

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
          ({
            id,
            person,
            title,
            replica,
            actionType,
            correctAnswer,
            variantAnswer,
            countQuestion,
          }: any) =>
            actionType === "active" ? (
              <CSSTransition key={id} timeout={300} classNames="alert">
                <CardReplicaActivePerson
                  person={person}
                  replica={replica}
                  title={title}
                  isDisable={isDisable}
                  selectVariant={selectVariant}
                  correctAnswer={correctAnswer}
                  variantAnswer={variantAnswer}
                  lessonObjLength={lessonObj.length}
                  falsyAnswerObj={falsyAnswerObj}
                  currItem={currElement}
                  countQuestion={countQuestion}
                  onUpdateSelectWordHandler={onUpdateSelectWordHandler}
                />
              </CSSTransition>
            ) : (
              <CSSTransition key={id} timeout={300} classNames="alert">
                <CardReplicaNonActivePerson person={person} replica={replica} />
              </CSSTransition>
            )
        )}
      </TransitionGroup>

      <button
        className="js-btn__openWindow"
        disabled={isDisable}
        onClick={
          lessonObj.length >= cardlesson.dialog.length
            ? () => onOpenResultLessonWindowHandler()
            : () => onChangeCounterCurrElementDialog(currItem)
        }
      >
        {lessonObj.length < cardlesson.dialog.length
          ? "далее"
          : cardlesson.dialog.length === lessonObj.length && "Завершить"}
      </button>
    </div>
  );
}
