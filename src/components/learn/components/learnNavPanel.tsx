import ProfileInfo from "../components/profileInfo";
import NavPanel from "../components/navPanel";
// import { Wrapper } from "../../../styles/styled-comp";

interface stateProp {
  pathname: string;
}

export default function learnNavPanel({ pathname }: stateProp) {
  return (
    <div className="wrapperContainer">
      <div className="containerNavLearn">
        <NavPanel pathname={pathname} />
        <ProfileInfo />
      </div>
    </div>
  );
}
