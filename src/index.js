import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index.js";
import "./index.css";

ReactDOM.render(
  <App saludo="buenas" nombre="math" />,
  document.getElementById("root")
);
