import saladIMG from "./salad.png";
import jamIMG from "./strawberry-jam.png";
import pieIMG from "./apple-pie.png";
import shrimpIMG from "./shrimp.png";
import lobsterIMG from "./lobster.png";
import fishIMG from "./fish.png";
import chikenIMG from "./fried-chicken.png";
import gooseIMG from "./drumstick.png";
import steakIMG from "./meat.png";


type Dict = {
  [key: string]: string;
};

export const objExported: Dict = {
  Salad: saladIMG,
  Jam: jamIMG,
  Pie: pieIMG,
  Shrimp: shrimpIMG,
  Lobster: lobsterIMG,
  Fish: fishIMG,
  Chicken: chikenIMG,
  Goose: gooseIMG,
  Steak: steakIMG,
};

export default objExported;
