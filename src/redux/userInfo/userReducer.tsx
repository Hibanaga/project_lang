import { SET_USERDATA } from "./userActionsTypes";

interface stateProp {
  type: string;
  payload: object;
}

const initialState = {
  clientID: "",
  userName: "",
  email: "",
};

export default function userReducer(
  state = initialState,
  { type, payload }: stateProp
) {
  switch (type) {
    case SET_USERDATA:
      return payload;
    default:
      return state;
  }
}
