import familyPack from "./familyPack/familyVariantPack";
import partyPack from "./partyPack/partyVariantPack";
import productsPack from "./productsPack/productsVariantPack";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  ...familyPack,
  ...partyPack,
  ...productsPack,
};

export default objExported;
