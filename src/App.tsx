import localforage from "localforage";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthClientID } from "./redux/userInfo/userActions";
import Router from "./router/Router";

interface stateProp {
  restoreClientID: (p: any) => void;
}

function App({ restoreClientID }: stateProp) {
  useEffect(() => {
    localforage
      .getItem("loginID")
      .then((data) => data !== null && restoreClientID(data));
  }, [restoreClientID]);

  return <Router />;
}

const mapDispatchToProps = {
  restoreClientID: setAuthClientID,
};

export default connect(null, mapDispatchToProps)(App);
