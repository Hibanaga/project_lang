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
  actionType: string;
  correctAnswer: string | undefined;
  variantAnswer: any;

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
  actionType,
  //methods
  onUpdateSelectWordHandler,
}: stateProp) {
  console.log(actionType);

  return (
    <>
      <SubTitleStory className="titleStoryCardReplica">{title}</SubTitleStory>

      <div className="wrapperActivePerson">
        <img src={objExported[person]} alt="" />

        <div className="bubble">
          <span className="descriptionReplica">
            {replica}
            {selectVariant !== correctAnswer
              ? replaceVariantStory(correctAnswer, "___________________")
              : correctAnswer}
          </span>
        </div>
      </div>

      <RowVariantAnswer
        theme={{
          isNowSelected: selectVariant === replica,
        }}
        className="rowVariantAnswerStory"
      >
        {variantAnswer.map(({ id, replica }: any) => (
          <VariantAnswerCardStory
            theme={{
              isNowSelected: selectVariant === replica,
            }}
            onClick={(event) => onUpdateSelectWordHandler(event, replica)}
            disabled={replica === correctAnswer}
            key={id}
          >
            {replica}
          </VariantAnswerCardStory>
        ))}
      </RowVariantAnswer>
    </>
  );
}
