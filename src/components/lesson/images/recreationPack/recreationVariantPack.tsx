import vacationIMG from "./baggage.png";
import weekendIMG from "./weekend.png";
import medicalIMG from "./medical-history.png";
import biologyIMG from "./biology.png";
import physicsIMG from "./physics.png";
import mathIMG from "./mathematics.png";
import literatureIMG from "./books.png";
import chemistryIMG from "./chemistry.png";


type Dict = {
  [key: string]: string;
};

export const objExported: Dict = {
  Vacation: vacationIMG,
  Weekend: weekendIMG,
  Medical: medicalIMG,
  Biology: biologyIMG,
  Physics: physicsIMG,
  Mathematics: mathIMG,
  Literature: literatureIMG,
  Chemistry: chemistryIMG,
};

export default objExported;
