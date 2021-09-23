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

// M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.715274834628325e-15,-42A42,42,0,1,0,7.715274834628325e-15,42A42,42,0,1,0,-7.715274834628325e-15,-42Z
// #ffd900
