import React, { useContext, useRef } from "react";
import "../Stylesheets/login.css";
import ReactDom from "react-dom";
import AuthContext from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../Contexts/FirebaseContext";

export default function LoginPopup({
  isOpen,
  close,
  notify_success,
  notify_error,
}) {
  const { login, signup, googleLogin } = useContext(AuthContext);
  const { googleSignin, firebaseSignup, firebaseLogin } =
    useContext(FirebaseContext);

  const loginEid = useRef();
  const loginPwd = useRef();
  const eid = useRef();
  const pwd = useRef();
  const userName = useRef();

  const history = useHistory();
  if (!isOpen) return null;

  const handleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      const result = await googleSignin();
      const user = result.user;
      const name = await user.displayName;
      const emailId = await user.email;

      
      console.log(user.displayName,user.email);
      try {
        const response = await googleLogin(name, emailId);
        if (response.hasOwnProperty("error")) {
          notify_error(response.error);
        } else if (response.hasOwnProperty("errors")) {
          notify_error("Some issues with input format");
        } else {
          notify_success("Successfully Signed In");
          localStorage.setItem("token", response.authToken);
          history.push("/main");
        }
      } catch (err) {
        console.log(err);
        notify_error(err);
      }
    } catch (err) {
      console.log(err.message);
      notify_error(err.message);
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await firebaseSignup(eid.current.value, pwd.current.value);

      try {
        const response = await signup(
          userName.current.value,
          eid.current.value
        );
        if (response.hasOwnProperty("error")) {
          notify_error(response.error);
        } else if (response.hasOwnProperty("errors")) {
          notify_error("Some issues with input format");
        } else {
          notify_success("Successfully Signed In");
          localStorage.setItem("token", response.authToken);
          history.push("/main");
        }
      } catch (err) {
        console.log(err);
        notify_error(err);
      }
    } catch (err) {
      console.log(err.message);
      notify_error(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebaseLogin(loginEid.current.value, loginPwd.current.value);
      try {
        const response = await login(loginEid.current.value);

        if (response.hasOwnProperty("error")) {
          notify_error(response.error);
        } else if (response.hasOwnProperty("errors")) {
          notify_error("Some issues with input format");
        } else {
          notify_success("Successfully Signed In");
          localStorage.setItem("token", response.authToken);
          history.push("/main");
        }
      } catch (err) {
        console.log(err);
        notify_error(err);
      }
    } catch (err) {
      console.log(err.message);
      notify_error(err.message);
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
                <button className="btnReg" onClick={handleGoogleSignin}>
                  Login with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
