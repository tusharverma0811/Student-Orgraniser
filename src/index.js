import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "../src/Contexts/AuthState";
import SubjectState from "./Contexts/SubjectState";
import FirebaseState from "./Contexts/FirebaseState";

ReactDOM.render(
  <AuthState>
    <FirebaseState>
      <SubjectState>
        <App />
      </SubjectState>
    </FirebaseState>
  </AuthState>,
  document.getElementById("root")
);
