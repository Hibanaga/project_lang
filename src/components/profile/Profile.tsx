import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import instance from "../../service/AppService";
import ProfilePresentaiton from "./ProfilePresentaiton";


interface IProfileProps {
  t: (prop: any) => string;
  profile:any
}

function Profile({ t, profile }: IProfileProps) {
  const [profileData,setProfileData] = useState({});

  useEffect(() => {
     instance
       .getProfile(profile.clientID)
       .then((data) => setProfileData({ ...data }));
  }, [profile.clientID]);


  return (
    <ProfilePresentaiton t={t} profile={profile} profileData={profileData} />
  );
}

const mapStateToProps = (state:any) => ({
  profile: state.profile,
})

const mapDispatchToProps = {};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
); 
