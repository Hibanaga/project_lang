import { SET_USERID, SET_FIRSTAUTH } from "./userActionsTypes";

const setAuthClientID = (clientID: any) => ({
  type: SET_USERID,
  payload: clientID,
});

const setFirstAuth = (isFirstAuth: boolean) => ({
  type: SET_FIRSTAUTH,
  payload: isFirstAuth,
});

export { setAuthClientID, setFirstAuth };
