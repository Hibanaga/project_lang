import forkIMG from "./Fork.png";
import soupIMG from "./hot-soup.png";
import menuIMG from "./menu.png";
import restaurantIMG from "./restaurant.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  Fork: forkIMG,
  Soup: soupIMG,
  Menu: menuIMG,
  Restaurant: restaurantIMG,
};

export default objExported;
