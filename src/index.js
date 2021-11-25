import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "../src/Contexts/AuthState";
import SubjectState from "./Contexts/SubjectState";

ReactDOM.render(
  <AuthState>
    <SubjectState>
      <App />
    </SubjectState>
  </AuthState>,
  document.getElementById("root")
);
