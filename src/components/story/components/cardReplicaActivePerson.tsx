import React from "react";
import objExported from "../images/imageExporter";
import { SubTitleStory, VariantAnswerCardStory } from "../styles/story-comp";
import { replaceVariantStory } from "../utils/validateStoryHelpers";

interface stateProp {
  person: string;
  replica: string;
  title: string;
  selectVariant: string;
  correctAnswer: string | undefined;
  variantAnswer: any;

  onUpdateSelectWordHandler: (p: any) => void;
}

export default function cardReplicaActivePerson({
  person,
  replica,
  title,
  correctAnswer,
  variantAnswer,
  selectVariant,
  //methods
  onUpdateSelectWordHandler,
}: stateProp) {
  console.log(selectVariant);
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

      <div className="rowVariantAnswerStory">
        {variantAnswer.map(({ id, replica }: any) => (
          <VariantAnswerCardStory
            theme={{ isNowSelected: selectVariant === replica }}
            onClick={onUpdateSelectWordHandler}
            key={id}
          >
            {replica}
          </VariantAnswerCardStory>
        ))}
      </div>
    </>
  );
}
