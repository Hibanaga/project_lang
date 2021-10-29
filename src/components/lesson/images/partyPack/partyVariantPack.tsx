import iceIMG from "../partyPack/ice.png";
import juiceIMG from "../partyPack/juice.png";
import wineIMG from "../partyPack/wine.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  Ice: iceIMG,
  Juice: juiceIMG,
  Wine: wineIMG,
};

export default objExported;
