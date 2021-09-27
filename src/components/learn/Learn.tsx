import { useReducer } from "react";
import { connect } from "react-redux";
import LearnPresentation from "./LearnPresentation";
import { initialState, actions } from "./services/optionsReducer";

interface stateProp {
  clientID: string;
  coin: number;
}

function Learn({ clientID, coin }: stateProp) {
  const [state, dispatch] = useReducer(actions, initialState);

  console.log(state);
  console.log(dispatch);

  return <LearnPresentation introduction={state.introduction} />;
}

const mapStateToProps = (state: any) => ({
  clientID: state.profile.clientID,
  coin: state.profile.count,
});

export default connect(mapStateToProps, null)(Learn);

// [
//   {
//     "id": "7a76e325-761b-4955-8431-27fc55ad27b0",
//     "title": "Семья"
//   },
//   {
//     "id": "f28f9370-5c87-4f5a-94a4-c232e17f6eba",
//     "title": "Знакомство"
//   },
//   {
//     "id": "3f125c08-8f6c-420c-a19e-57d3222cb8b6",
//     "title": "Вечеринка"
//   },
//   {
//     "id": "e5cf4a2a-c4b4-49fb-a31c-5d92b45f1c3f",
//     "title": "Ресторан"
//   }
// ]
