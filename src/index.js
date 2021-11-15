import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthState from "../src/Contexts/AuthState";

ReactDOM.render(
    <AuthState>
    <App />
    </AuthState>
  ,document.getElementById("root")
);
