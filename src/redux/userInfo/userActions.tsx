import { setUserData } from "./userActionsTypes";

const setUser = (objUser: object) => ({ type: setUserData, payload: objUser });

export { setUser };
