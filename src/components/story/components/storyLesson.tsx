import React from "react";
import ActionReturnback from "./actionReturnback";
import cardPack from "../assets/cardPack.json";
import CardStory from "./cardStory";
import VideoModalStory from "./videoModalStory";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardReplicaActivePerson from "./cardReplicaActivePerson";
import CardReplicaNonActivePerson from "./cardReplicaNonActivePerson";
import { withTranslation } from "react-i18next";

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
  outerRef: any;
  titleStory: string;

  onToggleModalVisibleHandler: (p: any) => void;
  onChangeThemeHandler: (p: any, p1?: number) => void;
  onChangeCounterCurrElementDialog: (p: any) => void;
  onUpdateSelectWordHandler: (p: any, p1: any) => void;
  onOpenResultLessonWindowHandler: () => void;
  t: (prop:string) => string
}

 function storyLesson({
   currentTheme,
   isVisibleModal,
   isDisable,
   currElementDialog,
   lessonObj,
   selectVariant,
   falsyAnswerObj,
   cardlesson,
   outerRef,
   titleStory,

   onChangeThemeHandler,
   onToggleModalVisibleHandler,
   onChangeCounterCurrElementDialog,
   onUpdateSelectWordHandler,
   onOpenResultLessonWindowHandler,
   t,
 }: stateProp) {
   const { id, title, description, originalTitle, urlVideo } = cardPack
     .flat()
     .filter(({ description }) => description === currentTheme)[0];

   // const { title: titleText, dialog } = cardlesson;
   const currItem =
     cardlesson === undefined ? undefined : cardlesson[currElementDialog];
   const currElement =
     cardlesson === undefined ? undefined : cardlesson[currElementDialog - 1];

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
         <h1 className="titleTextStoryLesson">{titleStory}</h1>
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
                 <CardReplicaNonActivePerson
                   person={person}
                   replica={replica}
                 />
               </CSSTransition>
             )
         )}
       </TransitionGroup>

       <>
         <button
           className="js-btn__openWindow"
           disabled={isDisable}
           onClick={
             lessonObj.length >= cardlesson.length
               ? () => onOpenResultLessonWindowHandler()
               : () => onChangeCounterCurrElementDialog(currItem)
           }
         >
           {lessonObj.length < cardlesson.length
             ? t("resultLesson.buttonInfoNext")
             : cardlesson.length === lessonObj.length &&
               t("resultLesson.submitFinishCongrats")}
         </button>
       </>

       <div className="outerScroll" ref={outerRef}></div>
     </div>
   );
 }


export default withTranslation()(storyLesson);