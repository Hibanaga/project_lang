import bookingIMG from "./cardpack1/booking.png";
import touristIMG from "./cardpack1/tourist.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  booking: bookingIMG,
  tourist: touristIMG,
};

export default objExported;
