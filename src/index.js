import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { CookiesProvider } from "react-cookie";
Modal.setAppElement("#root");

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("root")
);
