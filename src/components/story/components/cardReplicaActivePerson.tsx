import React from "react";
import objExported from "../images/imageExporter";
import {
  SubTitleStory,
  VariantAnswerCardStory,
  RowVariantAnswer,
} from "../styles/story-comp";
import { replaceVariantStory } from "../utils/validateStoryHelpers";

interface stateProp {
  person: string;
  replica: string;
  title: string;
  selectVariant: string;
  isDisable: boolean;
  correctAnswer: string | undefined;
  variantAnswer: any;
  currItem: any | undefined;
  lessonObjLength: number;
  countQuestion: number;
  falsyAnswerObj: any;

  onUpdateSelectWordHandler: (p: any, p1: any) => void;
}

export default function cardReplicaActivePerson({
  person,
  replica,
  title,
  isDisable,
  correctAnswer,
  variantAnswer,
  selectVariant,
  currItem,
  lessonObjLength,
  countQuestion,
  falsyAnswerObj,

  //methods
  onUpdateSelectWordHandler,
}: stateProp) {
  return (
    <>
      {currItem.correctAnswer === correctAnswer && (
        <SubTitleStory className="titleStoryCardReplica">{title}</SubTitleStory>
      )}

      <div className="wrapperActivePerson">
        <img src={objExported[person]} alt="" />

        <div className="bubble">
          <span className="descriptionReplica">
            {replica}
            {lessonObjLength > countQuestion
              ? correctAnswer
              : selectVariant !== correctAnswer
              ? replaceVariantStory(correctAnswer, "___________________")
              : correctAnswer}
          </span>
        </div>
      </div>

      {currItem.correctAnswer === correctAnswer && (
        <RowVariantAnswer
          theme={{
            isNowSelected: !isDisable,
          }}
          className="rowVariantAnswerStory"
        >
          {variantAnswer.map(({ id, replica }: any) => (
            <VariantAnswerCardStory
              theme={{
                isCorrectAnswer: selectVariant === correctAnswer,
              }}
              disabled={
                falsyAnswerObj.some((item: string) => item === replica) ||
                !isDisable
              }
              onClick={(event) =>
                onUpdateSelectWordHandler(event, correctAnswer)
              }
              key={id}
            >
              {replica}
            </VariantAnswerCardStory>
          ))}
        </RowVariantAnswer>
      )}
    </>
  );
}
