import DautherIMG from "./daughter.png";
import BabyIMG from "./baby.png";
import BoyIMG from "./boy.png";
import GirlIMG from "./girl.png";
import SonIMG from "./son.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  Dauther: DautherIMG,
  Baby: BabyIMG,
  Boy: BoyIMG,
  Girl: GirlIMG,
  Son: SonIMG,
};

export default objExported;
