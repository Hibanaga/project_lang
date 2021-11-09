import bookingIMG from "./cardpack1/booking.png";
import touristIMG from "./cardpack1/tourist.png";
import playIMG from "./play.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  booking: bookingIMG,
  tourist: touristIMG,
  play: playIMG,
};

export default objExported;
