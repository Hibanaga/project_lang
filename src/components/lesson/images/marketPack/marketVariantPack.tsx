import shopIMG from "./shops.png";
import marketIMG from "./market.png";
import storeIMG from "./store.png";
import eggIMG from "./eggs.png";
import potatoIMG from "./potato.png";



type Dict = {
  [key: string]: string;
};

export const objExported: Dict = {
  Shop: shopIMG,
  Market: marketIMG,
  Store: storeIMG,
  Egg: eggIMG,
  Potato: potatoIMG,
};

export default objExported;
