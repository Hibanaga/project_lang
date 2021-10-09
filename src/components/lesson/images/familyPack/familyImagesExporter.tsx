import fatherIMG from "./father.png";
import motherIMG from "./mother.png";
import grandfatherIMG from "./grandfather.png";
import DautherIMG from "./daughter.png";
import BabyIMG from "./baby.png";
import BoyIMG from "./boy.png";
import GirlIMG from "./girl.png";
import SonIMG from "./son.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  Father: fatherIMG,
  Mother: motherIMG,
  Grandfather: grandfatherIMG,
  Dauther: DautherIMG,
  Baby: BabyIMG,
  Boy: BoyIMG,
  Cousin: GirlIMG,
  Son: SonIMG,
};

//count: 8
// { father, mother, grandfather }
export default objExported;
