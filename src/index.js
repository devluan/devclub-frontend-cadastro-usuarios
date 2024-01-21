import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router />
    <GlobalStyle />
  </>
);
