import appleIMG from "./apple.png";
import carrotIMG from "./carrot.png";
import lemonIMG from "./lemon.png";
import milkIMG from "./milk.png";
import pineappleIMG from "./pineapple.png";
import tomatoIMG from "./tomato.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  Apple: appleIMG,
  Carrot: carrotIMG,
  Lemon: lemonIMG,
  Milk: milkIMG,
  Pineapple: pineappleIMG,
  Tomato: tomatoIMG,
};

export default objExported;
