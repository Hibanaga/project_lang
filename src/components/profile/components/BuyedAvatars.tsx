import React from "react";
import * as StyledThisComp from "../styles/styled-profile";
import BuyedAvatar from "./BuyedAvatar";


interface IBuyedAvatarsProps {
  filtredListImages: any;
  selectedProfileImage:any;
  setProfileImageHandler: (prop: string) => void;
}

const BuyedAvatars = ({
  filtredListImages,
  selectedProfileImage,
  setProfileImageHandler,
}: IBuyedAvatarsProps) => {
  return (
    <StyledThisComp.BuyAvatarWrapper>
      <StyledThisComp.ProgressLessonsProgressTitle>
        Купленные аватары
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