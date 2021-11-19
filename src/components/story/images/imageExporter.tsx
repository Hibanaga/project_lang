import bookingIMG from "./cardpack1/booking.png";
import touristIMG from "./cardpack1/tourist.png";
import playIMG from "./play.png";
import maleIMG from "./cardpack1/male.png";
import femaleIMG from "./cardpack1/female.png";
import AllieIMG from "./cardpack1/allie.png";
import colleagueIMG from "./cardpack1/colleague.png";
import conversationInRestaurantIMG from "./cardpack1/conversationInRestaurant.png";
import restaurantIMG from "./cardpack1/restaurant.png";
import routeQuestionIMG from "./cardpack1/routeQuestion.png";
import blackPersonIMG from "./cardpack1/blackPerson.png";

type Dict = {
  [key: string]: string;
};

const objExported: Dict = {
  booking: bookingIMG,
  tourist: touristIMG,
  play: playIMG,
  male: maleIMG,
  female: femaleIMG,
  Allie: AllieIMG,
  colleague: colleagueIMG,
  conversationInRestaurant: conversationInRestaurantIMG,
  restaurant: restaurantIMG,
  routeQuestion: routeQuestionIMG,
  blackPerson: blackPersonIMG,
};

export default objExported;
