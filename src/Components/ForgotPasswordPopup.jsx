import React, { useRef, useContext } from "react";
import ReactDom from "react-dom";
import { Form, Button } from "react-bootstrap";
import FirebaseContext from "../Contexts/FirebaseContext";

export default function ForgotPasswordPopup({
  isOpen,
  close,
  notify_success,
  notify_error,
}) {
  const email = useRef();
  const { resetPwd } = useContext(FirebaseContext);
  if (!isOpen) return null;

  const sendLink = async (e) => {
    e.preventDefault();
    try {
      await resetPwd(email.current.value);
      notify_success(
        "Email Sent Scuccessfully with further steps kindly check your inbox"
      );
      close();
    } catch (err) {
      console.log(err);
      notify_error(err.message);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay-forgot">
        <div className="reg-forgot">
          <i className="fas fa-times fa-2x close-sign" onClick={close}></i>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button
              variant="outline-warning"
              className="submit-button"
              type="submit"
              onClick={sendLink}
            >
              Submit
            </Button>
            <Button
              variant="outline-secondary"
              className="cancel-button-forgot"
              onClick={close}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
