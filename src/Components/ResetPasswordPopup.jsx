import React, { useContext } from "react";
import ReactDom from "react-dom";
import "../Stylesheets/resetPwd and forgotPwd.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import FirebaseContext from "../Contexts/FirebaseContext";

export default function ResetPasswordPopup({
  isOpen,
  close,
  notify_success,
  notify_error,
}) {
  const history = useHistory();
  const { resetPwd, firebaseLogout } = useContext(FirebaseContext);

  if (!isOpen) {
    return null;
  }

  const sendLink = async (e) => {
    e.preventDefault();
    try {
      await resetPwd(auth.currentUser.email);
      await firebaseLogout();
      localStorage.removeItem("token");
      history.push("/");
      close();
      notify_success("Email Sent Successfully!");
    } catch (err) {
      console.log(err);
      notify_error("Something Went Wrong Try Again");
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay-reset">
        <div className="reg-reset">
          <i className="fas fa-times fa-2x closesign" onClick={close}></i>
          <div>
            <b>
              Note: A link will be sent to your registered email to reset your
              password
            </b>
            <Button
              variant="outline-secondary"
              className="cancel-button"
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              variant="outline-warning"
              className="confirm-button"
              onClick={sendLink}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
