import familyPack from "./familyPack/familyVariantPack";
import partyPack from "./partyPack/partyVariantPack";
import productsPack from "./productsPack/productsVariantPack";
import restaurantPack from "./restaurantPack/restaurantVariantPack";
import bathroomPack from "./bathroomPack/bathroomVariantPack";
import purchasePack from "./purchasesPack/purchasesVariantPack";
import foodPack from "./foodPack/foodVariantPack";
import universityPack from "./universityPack/universityVariantPack";
import cityVarialPack from "./cityPack/cityVariantPack";
import lessonsVariantPack from "./lessonsPack/lessonsVarianPack";
import recreationVariantPack from "./recreationPack/recreationVariantPack";
import marketVariantPack from "./marketPack/marketVariantPack"

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  ...familyPack,
  ...partyPack,
  ...productsPack,
  ...restaurantPack,
  ...bathroomPack,
  ...purchasePack,
  ...foodPack,
  ...universityPack,
  ...cityVarialPack,
  ...lessonsVariantPack,
  ...recreationVariantPack,
  ...marketVariantPack,
};

export default objExported;
