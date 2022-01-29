import "./styles/profile.scss";
import { Wrapper } from "../../styles/styled-comp";
import * as StyledThisComp from "./styles/styled-profile";
import ProfileStat from "./components/ProfileStat";
import imageExporter from "../store/images/imageExporter";
import ProgressLessons from "./components/ProgressLessons";



interface IProfilePresentationProps {
  t: (prop: any) => string;
  profile: any;
  profileData:any;
}

export default function ProfilePresentaiton({
  t,
  profile,
  profileData,
}: IProfilePresentationProps) {
  // console.log(profile,"profile");
  // console.log(profileData,"profileData");


  return (
    <article className="containerProfile">
      <Wrapper>
        <StyledThisComp.RowProfile>
          {profileData && (
            <ProfileStat
              profileData={profileData}
              image={profile.images[profile.images.length - 1]}
            />
          )}
          <ProgressLessons progress={profile.progress} />
        </StyledThisComp.RowProfile>
      </Wrapper>
    </article>
  );
}
