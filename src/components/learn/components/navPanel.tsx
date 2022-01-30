import { NavLink } from "react-router-dom";
import { learn, store, story, user } from "../../../router/routes";
import { Wrapper } from "../../../styles/styled-comp";
import {
  learnOff,
  learnOn,
  profileOn,
  profileOff,
  storeOff,
  storeOn,
  storyOff,
  storyOn,
} from "../images/imageExport";

interface stateProp {
  pathname: string;
  clientID: string;
}

export default function navPanel({ pathname, clientID }: stateProp) {
  return (
    <nav className="container_navPanel">
      <Wrapper>
        <div className="row_navPanel">
          <NavLink to={learn}>
            <img src={pathname === learn ? learnOn : learnOff} alt="" />
          </NavLink>

          <NavLink to={story}>
            <img src={pathname === story ? storyOn : storyOff} alt="" />
          </NavLink>

          <NavLink to={store}>
            <img src={pathname === store ? storeOn : storeOff} alt="" />
          </NavLink>

          <NavLink to={`${user}/${clientID}`}>
            <img
              src={pathname === `${user}/${clientID}` ? profileOn : profileOff}
              alt=""
            />
          </NavLink>
        </div>
      </Wrapper>
    </nav>
  );
}
