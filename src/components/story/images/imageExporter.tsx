import bookingIMG from "./cardpack1/booking.png";
import touristIMG from "./cardpack1/tourist.png";
import playIMG from "./play.png";
import maleIMG from "./cardpack1/male.png";
import femaleIMG from "./cardpack1/female.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  booking: bookingIMG,
  tourist: touristIMG,
  play: playIMG,
  male: maleIMG,
  female: femaleIMG,
};

export default objExported;
