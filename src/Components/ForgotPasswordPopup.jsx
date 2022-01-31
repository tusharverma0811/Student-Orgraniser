import React, { useRef, useContext } from "react";
import ReactDom from "react-dom";
import { Form, Button } from "react-bootstrap";
import FirebaseContext from "../Contexts/FirebaseContext";

export default function ForgotPasswordPopup({ isOpen, close }) {
  const email = useRef();
  const { resetPwd } = useContext(FirebaseContext);
  if (!isOpen) return null;

  const sendLink = async(e) => {
    e.preventDefault();
    try {
      await resetPwd(email.current.value);
      close();
    } catch (err) {
      console.log(err);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="reg">
          <i className="fas fa-times fa-2x close" onClick={close}></i>
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

            <Button variant="outline-warning" type="submit" onClick={sendLink}>
              Submit
            </Button>
            <Button variant="outline-secondary" onClick={close}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
