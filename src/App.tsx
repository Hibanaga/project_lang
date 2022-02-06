import localforage from "localforage";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthClientID, setFirstAuth } from "./redux/userInfo/userActions";
import Router from "./router/Router";

interface stateProp { 
  restoreClientID: (p: any) => void;
  toggleAuthActivate: (p: boolean) => void;
}

function App({ restoreClientID, toggleAuthActivate }: stateProp) {

  useEffect(() => {
    localforage.getItem("loginID").then((data) => {
      return data !== null && restoreClientID(data);
    });
  }, [restoreClientID]);
  return <Router  />;
}

const mapDispatchToProps = {
  restoreClientID: setAuthClientID,
  toggleAuthActivate: setFirstAuth,
};

export default connect(null, mapDispatchToProps)(App);
