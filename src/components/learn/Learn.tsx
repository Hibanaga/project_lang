import { connect } from "react-redux";
import LearnPresentation from "./LearnPresentation";

interface stateProp {
  clientID: string;
  coin: number;
}

function Learn({ clientID, coin }: stateProp) {
  return <LearnPresentation />;
}

const mapStateToProps = (state: any) => ({
  clientID: state.profile.clientID,
  coin: state.profile.count,
});

export default connect(mapStateToProps, null)(Learn);
