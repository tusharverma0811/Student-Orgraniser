import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import SubjectDetail from "./Components/SubjectDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const notify_success = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notify_error = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home notify_success={notify_success} notify_error={notify_error} />
          </Route>
          <Route exact path="/main">
            <MainPage
              notify_success={notify_success}
              notify_error={notify_error}
            />
          </Route>
          <Route
            exact
            path="/subject/:subjectid"
            component={SubjectDetail}
          ></Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
