import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import "../Stylesheets/navbar.css";
import LoginPopup from "./LoginPopup";
import FirebaseContext from "../Contexts/FirebaseContext";
import ResetPasswordPopup from "./ResetPasswordPopup";
import ForgotPasswordPopup from "./ForgotPasswordPopup";

export const Navbar = (props) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [resetPwdPopup, setResetPwdPopup] = useState(false);
  const [forgotPwdPopup, setForgotPwdPopup] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { firebaseLogout } = React.useContext(FirebaseContext);

  function openLoginPopup() {
    setLoginPopup(true);
  }

  function closeLoginPopup() {
    setLoginPopup(false);
  }

  const openResetPopup = () => {
    setResetPwdPopup(true);
  };

  const closeResetPopup = () => {
    setResetPwdPopup(false);
  };

  const openForgotPwdPopup = () => {
    setForgotPwdPopup(true);
  };

  const closeForgotPwdPopup = () => {
    setForgotPwdPopup(false);
  };

  const handleLogout = async () => {
    try {
      await firebaseLogout();
      localStorage.removeItem("token");
      if (location.pathname === "/") {
        history.push("/main");
      } else {
        history.push("/");
      }
    } catch (err) {
      console.log(err.message);
      props.notify_error(err.message);
    }
  };
  return (
    <>
      <div className="full">
        <div className="header">
          {/* <div classNameName="navbar"> */}
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <i className="fas fa-cube"></i> STUDENT FRAME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fas fa-bars fa-2x"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#about-Section" className="nav-link">
                    About
                  </a>
                </li>
                {localStorage.getItem("token") != null ? (
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="far fa-user-circle icon-2x"></i>
                    </span>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link className="dropdown-item" to="/main">
                        <i className="fas fa-book"></i> &nbsp;My Subjects
                      </Link>
                      <span className="dropdown-item" onClick={openResetPopup}>
                        <i className="fas fa-cog"></i> &nbsp;Edit Password
                      </span>

                      <span className="dropdown-item" onClick={handleLogout}>
                        <i className="fas fa-sign-in-alt"></i> &nbsp;Logout
                      </span>
                    </div>
                  </li>
                ) : (
                  <button className="getstarted" onClick={openLoginPopup}>
                    <li className="nav-link-get-started">
                      Get Started <i className="fas fa-arrow-right"></i>
                    </li>
                  </button>
                )}
              </ul>
            </div>
          </nav>
          {/* </div> */}
        </div>
      </div>

      <LoginPopup
        isOpen={loginPopup}
        close={closeLoginPopup}
        notify_success={props.notify_success}
        notify_error={props.notify_error}
        openForgotPwdPopup={openForgotPwdPopup}
      ></LoginPopup>
      <ResetPasswordPopup
        isOpen={resetPwdPopup}
        close={closeResetPopup}
        notify_success={props.notify_success}
        notify_error={props.notify_error}
      ></ResetPasswordPopup>
      <ForgotPasswordPopup
        isOpen={forgotPwdPopup}
        close={closeForgotPwdPopup}
        notify_success={props.notify_success}
        notify_error={props.notify_error}
      ></ForgotPasswordPopup>
    </>
  );
};

export default Navbar;
