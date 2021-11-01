import russianIMG from "./russianFlag.png";
import polishIMG from "./polishFlag.png";
import chestIMG from "./chest.svg";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  ru: russianIMG,
  pl: polishIMG,
  chest: chestIMG,
};

export default objExported;
