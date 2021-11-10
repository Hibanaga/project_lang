import React from "react";
import objExported from "../images/imageExporter";

interface stateProp {
  person: string;
  replica: string;
}

export default function wrapperReplicaNonActivePerson({
  person,
  replica,
}: stateProp) {
  return (
    <div className="wrapperNonActivePerson">
      <img src={objExported[person]} alt="" />

      <div className="bubble">
        <span className="descriptionReplica">{replica}</span>
      </div>
    </div>
  );
}
