import React from "react";
import objExported from "../images/imageExporter";

interface stateProp {
  person: string;
  replica: string;
  correctAnswer: string | undefined;
  variantAnswer: any;
}

export default function cardReplicaActivePerson({
  person,
  replica,
  correctAnswer,
  variantAnswer,
}: stateProp) {
  return (
    <div className="wrapperActivePerson">
      <img src={objExported[person]} alt="" />

      <div className="bubble">
        <span className="descriptionReplica">
          {replica} correct: {correctAnswer}
        </span>
      </div>
    </div>
  );
}
