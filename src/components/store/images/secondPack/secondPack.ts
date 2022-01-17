import beeIMG from "./bee.png";
import jellyFishIMG from "./jellyfish.png";
import owlIMG from "./owl.png"
import toucanIMG from "./toucan.png"

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  bee: beeIMG,
  jellyFish: jellyFishIMG,
  owl: owlIMG,
  toucan: toucanIMG
}

export default objExported;