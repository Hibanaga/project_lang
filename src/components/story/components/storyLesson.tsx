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
  selectVariant: string;
  isVisibleModal: boolean;
  isDisable: boolean;
  currElementDialog: number;
  lessonObj: any;

  onToggleModalVisibleHandler: (p: any) => void;
  onChangeThemeHandler: (p: any) => void;
  onChangeCounterCurrElementDialog: (p: any) => void;
  onUpdateSelectWordHandler: (p: any, p1: any) => void;
}

export default function storyLesson({
  currentTheme,
  isVisibleModal,
  isDisable,
  currElementDialog,
  lessonObj,
  selectVariant,
  onChangeThemeHandler,
  onToggleModalVisibleHandler,
  onChangeCounterCurrElementDialog,
  onUpdateSelectWordHandler,
}: stateProp) {
  const { id, title, description, originalTitle, urlVideo } = cardPack
    .flat()
    .filter(({ description }) => description === currentTheme)[0];

  const { title: titleText, dialog } = cardlesson;
  const currItem = dialog[currElementDialog];

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
          }: any) =>
            actionType === "active" ? (
              <CSSTransition key={id} timeout={300} classNames="alert">
                <CardReplicaActivePerson
                  person={person}
                  replica={replica}
                  title={title}
                  isDisable={isDisable}
                  actionType={actionType}
                  selectVariant={selectVariant}
                  correctAnswer={correctAnswer}
                  variantAnswer={variantAnswer}
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
        onClick={() => onChangeCounterCurrElementDialog(currItem)}
      >
        далее
      </button>
    </div>
  );
}
