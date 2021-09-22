import { SET_USERDATA } from "./userActionsTypes";

const setDefaultUserData = (objUser: object) => ({
  type: SET_USERDATA,
  payload: objUser,
});

export { setDefaultUserData };
