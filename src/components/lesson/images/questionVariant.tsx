import familyPack from "./familyPack/familyVariantPack";
import partyPack from "./partyPack/partyVariantPack";
import productsPack from "./productsPack/productsVariantPack";
import restaurantPack from "./restaurantPack/restaurantVariantPack";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  ...familyPack,
  ...partyPack,
  ...productsPack,
  ...restaurantPack,
};

export default objExported;
