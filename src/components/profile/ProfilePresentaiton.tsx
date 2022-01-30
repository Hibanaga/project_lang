import "./styles/profile.scss";
import { Wrapper } from "../../styles/styled-comp";
import * as StyledThisComp from "./styles/styled-profile";
import ProfileStat from "./components/ProfileStat";
import imageExporter from "../store/images/imageExporter";
import ProgressLessons from "./components/ProgressLessons";
import BuyedAvatars from "./components/BuyedAvatars";




interface IProfilePresentationProps {
  t: (prop: any) => string;
  selectedProfileImage: any;
  setProfileImageHandler: (prop: string) => void;
  exitProfileHandler: ()=> void;
  profile: any;
  profileData: any;
}

export default function ProfilePresentaiton({
  t,
  selectedProfileImage,
  setProfileImageHandler,
  exitProfileHandler,
  profile,
  profileData,
}: IProfilePresentationProps) {
  const filtredListImages = imageExporter.filter(({name}) => profile.images.indexOf(name) > -1);
  return (
    <article className="containerProfile">
      <Wrapper>
        <StyledThisComp.RowProfile>
          {profileData && (
            <ProfileStat
              profileData={profileData}
              image={selectedProfileImage}
            />
          )}
          <ProgressLessons progress={profile.progress} />
        </StyledThisComp.RowProfile>
        <BuyedAvatars
          selectedProfileImage={selectedProfileImage}
          filtredListImages={filtredListImages}
          setProfileImageHandler={setProfileImageHandler}
        />

        <StyledThisComp.ExitButtonWrapper onClick={exitProfileHandler}>
          <StyledThisComp.ExitButton>Выйти</StyledThisComp.ExitButton>
        </StyledThisComp.ExitButtonWrapper>
      </Wrapper>
    </article>
  );
}
