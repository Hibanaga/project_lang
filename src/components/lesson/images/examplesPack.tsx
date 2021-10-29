import fatherIMG from "./familyPack/father.png";
import motherIMG from "./familyPack/mother.png";
import grandfatherIMG from "./familyPack/grandfather.png";
import DautherIMG from "./familyPack/daughter.png";
import BabyIMG from "./familyPack/baby.png";
import BoyIMG from "./familyPack/boy.png";
import GirlIMG from "./familyPack/girl.png";
import SonIMG from "./familyPack/son.png";

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

export default objExported;
