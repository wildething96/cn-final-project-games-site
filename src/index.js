import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";
import * as serviceWorker from "./utils/serviceWorker";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
