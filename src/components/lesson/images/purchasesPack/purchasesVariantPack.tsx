import calculatorIMG from "./budget.png";
import computerIMG from "./computer.png";
import laptopIMG from "./laptop.png";
import moneyIMG from "./money-bag.png";
import momIMG from "./mother.png";


type Dict = {
  [key: string]: string;
};

export const objExported: Dict = {
  Calculator: calculatorIMG,
  Computer: computerIMG,
  Laptop: laptopIMG,
  Money: moneyIMG,
  Mom: momIMG,
};

export default objExported;
