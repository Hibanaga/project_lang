import React from "react";
import * as StyledThisComp from "../styles/styled-profile";

interface IBuyedAvatarProps {
  url: any;
  name: string;
  selectedProfileImage:any;
  setProfileImageHandler: (prop: string) => void;
}

const BuyedAvatar = ({
  url,
  name,
  setProfileImageHandler,
  selectedProfileImage,
}: IBuyedAvatarProps) => {
  return (
    <StyledThisComp.AvatarContainer>
      <StyledThisComp.Avatar src={url} />
      <StyledThisComp.ButtonSelectAvatar
        onClick={() => setProfileImageHandler(name)}
        disabled={name === selectedProfileImage}
      >
        {name === selectedProfileImage ? "Выбрано" : "Выбрать"}
      </StyledThisComp.ButtonSelectAvatar>
    </StyledThisComp.AvatarContainer>
  );
};

export default BuyedAvatar;