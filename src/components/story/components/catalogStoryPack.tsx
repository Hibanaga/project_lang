import React from "react";
import CardStory from "./cardStory";

interface stateProp {
  cardPack: any;

  onChangeThemeHandler: (p: any) => void;
}

export default function catalogStoryPack({
  cardPack,
  onChangeThemeHandler,
}: stateProp) {
  return (
    <div className="containerStoryCatalog">
      {cardPack.map(({ id, description, title }: any) => (
        <CardStory
          key={id}
          description={description}
          title={title}
          onChangeThemeHandler={onChangeThemeHandler}
        />
      ))}
    </div>
  );
}
