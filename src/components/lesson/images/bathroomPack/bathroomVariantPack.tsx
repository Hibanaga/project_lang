import brushIMG from "./brush-teeth.png";
import soupIMG from "./soup.png";
import soapIMG from "./soap.png";
import toiletIMG from "./toilet.png";
import showerIMG from "./bath.png";
import bathroomIMG from "./bathroom.png";


type Dict = {
  [key: string]: string;
};

export const objExported: Dict = {
  Brush: brushIMG,
  Soup: soupIMG,
  Soap: soapIMG,
  Toilet: toiletIMG,
  Shower: showerIMG,
  Bathroom:bathroomIMG
};

export default objExported;