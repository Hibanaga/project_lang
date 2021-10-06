import fatherIMG from "./father.png";
import motherIMG from "./mother.png";
import grandfatherIMG from "./grandfather.png";
// fatherIMG
// motherIMG
// grandfatherIMG
type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  Father: fatherIMG,
  Mother: motherIMG,
  Grandfather: grandfatherIMG,
};
// { father, mother, grandfather }
export default objExported;
