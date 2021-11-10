import React from "react";
import { CSSTransition } from "react-transition-group";

interface stateProp {
  person: string;
  replica: string;
  idx: number;
}

export default function wrapperReplicaNonActivePerson({
  person,
  replica,
  idx,
}: stateProp) {
  return <div className="div">{person}</div>;
}
