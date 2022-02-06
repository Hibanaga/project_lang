import React from "react";
import * as StyledThisComp from "../styles/styled-profile";
import BuyedAvatar from "./BuyedAvatar";


interface IBuyedAvatarsProps {
  filtredListImages: any;
  selectedProfileImage: any;
  t: (prop: any) => string;
  setProfileImageHandler: (prop: string) => void;
}

const BuyedAvatars = ({
  filtredListImages,
  t,
  selectedProfileImage,
  setProfileImageHandler,
}: IBuyedAvatarsProps) => {
  return (
    <StyledThisComp.BuyAvatarWrapper>
      <StyledThisComp.ProgressLessonsProgressTitle>
        {t("Profile.profileAvatars")}
      </StyledThisComp.ProgressLessonsProgressTitle>
      <StyledThisComp.AvatarsWrapper>
        {filtredListImages.map(({ id, url, name }: any) => (
          <BuyedAvatar
            key={id}
            url={url}
            name={name}
            selectedProfileImage={selectedProfileImage}
            setProfileImageHandler={setProfileImageHandler}
          />
        ))}
      </StyledThisComp.AvatarsWrapper>
    </StyledThisComp.BuyAvatarWrapper>
  );
};

export default BuyedAvatars;