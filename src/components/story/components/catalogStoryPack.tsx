import React from "react";
import CardStory from "./cardStory";

interface stateProp {
  cardPack: any;
}

export default function catalogStoryPack({ cardPack }: stateProp) {
  // console.log(cardPack);

  return (
    <div className="containerStoryCatalog">
      {cardPack.map(({ id, description, title }: any) => (
        <CardStory key={id} description={description} title={title} />
      ))}
    </div>
  );
}
