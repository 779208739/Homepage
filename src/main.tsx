import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.tsx";
import "./css/ROOT.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
