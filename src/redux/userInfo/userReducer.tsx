import {
  SET_USERID,
  SET_FIRSTAUTH,
  SET_COINCOUNT,
  SET_CROWNCOUNT,
  SET_PROGRESSINFO,
} from "./userActionsTypes";

interface stateProp {
  type: string;
  payload: object;
}

const initialState = {
  clientID: "",
  isFirstAuth: false,
  progress: {},
  coin: 0,
  crown: 0,
};

export default function userReducer(
  state = initialState,
  { type, payload }: stateProp
) {
  switch (type) {
    case SET_USERID:
      return { ...state, clientID: payload };
    case SET_FIRSTAUTH:
      return { ...state, isFirstAuth: payload };
    case SET_COINCOUNT:
      return { ...state, coin: payload };
    case SET_CROWNCOUNT:
      return { ...state, crown: payload };
    case SET_PROGRESSINFO:
      return { ...state, progress: payload };
    default:
      return state;
  }
}
