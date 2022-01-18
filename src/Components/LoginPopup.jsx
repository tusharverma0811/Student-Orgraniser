import React, { useContext, useRef } from "react";
import "../Stylesheets/login.css";
import ReactDom from "react-dom";
import AuthContext from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function LoginPopup({ isOpen, close,notify_success,notify_error }) {
  const { login, signup } = useContext(AuthContext);
  const loginEid = useRef();
  const loginPwd = useRef();
  const eid = useRef();
  const pwd = useRef();
  const userName = useRef();

  const history = useHistory();
  if (!isOpen) return null;

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await signup(
      userName.current.value,
      eid.current.value,
      pwd.current.value
    );

    if (response.hasOwnProperty("error")) {
      notify_error(response.error)
    } else if (response.hasOwnProperty("errors")) {
      notify_error("Some issues with input format")
    } else {
      notify_success("Successfully Signed In")
      localStorage.setItem("token", response.authToken);
      history.push("/main");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await login(
      loginEid.current.value,
      loginPwd.current.value
    );

    if (response.hasOwnProperty("error")) {
      notify_error(response.error)
    } else if (response.hasOwnProperty("errors")) {
      notify_error("Some issues with input format")
    } else {
      notify_success("Successfully Signed In");
      localStorage.setItem("token", response.authToken);
      history.push("/main");
    }
  };
  return ReactDom.createPortal(
    <>
      <div className="overlayl">
        <div className="regl">
          <div className="main">
            <i className="fas fa-times fa-2x closeSign" onClick={close}></i>
            <input
              className="credInput"
              type="checkbox"
              id="chk"
              aria-hidden="true"
            />

            <div className="signup">
              <form>
                <label className="loginLabel" htmlFor="chk" aria-hidden="true">
                  Sign up
                </label>
                {/* <a href=""> <i class="fab fa-google fa-2x"></i></a> */}

                <input
                  className="credInput"
                  ref={userName}
                  type="text"
                  name="txt"
                  placeholder="Enter Name"
                  required=""
                />
                <input
                  className="credInput"
                  type="email"
                  ref={eid}
                  name="email"
                  placeholder="Enter Email"
                  required=""
                />
                <input
                  className="credInput"
                  type="password"
                  ref={pwd}
                  name="pswd"
                  placeholder="Enter Password"
                  required=""
                />
                <input
                  className="credInput"
                  type="password"
                  name="pswd"
                  placeholder="Re-Enter Password"
                  required=""
                />
                <button type="submit" className="btnReg" onClick={handleSignup}>
                  Sign up
                </button>
                <h1 className="signUpOR">OR</h1>
                <button className="btnReg">Sign up with Google</button>
              </form>
            </div>

            <div className="login">
              <form>
                <label className="loginLabel" htmlFor="chk" aria-hidden="true">
                  Login
                </label>

                <input
                  className="credInput"
                  ref={loginEid}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <input
                  className="credInput"
                  ref={loginPwd}
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                />
                <button type="submit" className="btnReg" onClick={handleLogin}>
                  Login
                </button>
                <h1>OR</h1>
                <button className="btnReg">Login with Google</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>,
    document.getElementById("portal")
  );
}
