import React from "react";

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
  return <div className="wrapperActivePerson">{person}</div>;
}
