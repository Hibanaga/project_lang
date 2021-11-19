import React from "react";
import CardStory from "./cardStory";

interface stateProp {
  cardPack: any;
  progressStory: any;
  crown: number;

  onChangeThemeHandler: (p: any, p1?: number) => void;
}

export default function catalogStoryPack({
  cardPack,
  progressStory,
  crown,
  onChangeThemeHandler,
}: stateProp) {
  return (
    <div className="containerStoryCatalog">
      {cardPack.map(({ id, description, title, countPoints }: any) => (
        <CardStory
          key={id}
          isAlreadyComplete={progressStory.indexOf(description) > -1}
          description={description}
          countPoints={countPoints - crown}
          title={title}
          onChangeThemeHandler={onChangeThemeHandler}
        />
      ))}
    </div>
  );
}
