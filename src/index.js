import React from "react";
import * as ReactDom from "react-dom/client";

import App from "./components/app";
const container = document.getElementById("app");
const root = ReactDom.createRoot(container);

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
