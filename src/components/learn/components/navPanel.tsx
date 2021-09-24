import { NavLink } from "react-router-dom";
import { learn, store, story, profile_user } from "../../../router/routes";
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
}

export default function navPanel({ pathname }: stateProp) {
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

          <NavLink to={profile_user}>
            <img
              src={pathname === profile_user ? profileOn : profileOff}
              alt=""
            />
          </NavLink>
        </div>
      </Wrapper>
    </nav>
  );
}
