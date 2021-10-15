import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Services
import "./services/firebase";

//Styles
import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
