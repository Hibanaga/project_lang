import React from "react";
import HomePresentation from "./HomePresentation";
import "./styles/home.scss";

interface stateProp {
  currLang: any;
  onUpdateLangHandler: (p: string) => void;
}

export default function Home({
  currLang,
  onUpdateLangHandler,
}: stateProp): React.ReactNode {
  console.log(currLang);
  return (
    Object.keys(currLang).length > 0 && (
      <HomePresentation
        currLang={currLang}
        onUpdateLangHandler={onUpdateLangHandler}
      />
    )
  );
}
