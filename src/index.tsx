import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./translation/i18n";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./redux/rootReducer";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="">
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
