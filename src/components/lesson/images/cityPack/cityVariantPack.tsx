import streetIMG from "./neighborhood.png";
import cityIMG from "./buildings.png";
import villageIMG from "./buildings.png";
import flatIMG from "./flat.png";
import bicycleIMG from "./bicycle.png";
import followIMG from "./follow.png";


type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  Street: streetIMG,
  City: cityIMG,
  Village: villageIMG,
  Flat: flatIMG,
  Bicycle: bicycleIMG,
  Follow: followIMG,
};

export default objExported;
