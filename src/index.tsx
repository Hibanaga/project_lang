import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./translation/i18n";
import "./styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
