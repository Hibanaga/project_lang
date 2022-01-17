
import chickIMG from "./chick.png";
import foxIMG from "./fox.png";
import hamsterIMG from "./hamster.png"
import turtleIMG from "./turtle.png"

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  chick: chickIMG,
  fox: foxIMG,
  hamster: hamsterIMG,
  turtle: turtleIMG
}

export default objExported;