import { SET_USERID, SET_FIRSTAUTH } from "./userActionsTypes";

interface stateProp {
  type: string;
  payload: object;
}

const initialState = {
  clientID: "",
  isFirstAuth: false,
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
    default:
      return state;
  }
}
