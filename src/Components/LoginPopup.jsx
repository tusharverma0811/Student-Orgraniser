import React from "react";
import "../login.css";
import ReactDom from "react-dom";
import CloseIcon from '@material-ui/icons/Close';
import GoogleButton from 'react-google-button';

export default function LoginPopup({ isOpen, close }) {
  const [isLogin, setLogin] = React.useState(false);
  if (!isOpen) return null;

  function toggleLogin(){
    setLogin((prevValue)=>{
        return !prevValue;
    })
  }
  
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="reg">
         <CloseIcon onClick={close} className="exit"></CloseIcon>
          <div className={isLogin?"Register-container form":"Register-container form right-panel-active"}>
            <div className="form-container sign-up-container" >
                <h1>Create Account</h1>
                <input type="text" name="name" placeholder="Enter Name" required />
                <input type="email" name="email" placeholder="Enter Email" required />
                <input type="password" name="password" placeholder="Enter Password" required />
                <input type="password" name="password" placeholder="Re-enter Password" required />
                <button className="styled" >Sign Up</button>
                <h5>OR</h5>
                <div className="googleSignup">
                  <GoogleButton ></GoogleButton>
                </div>
          </div>
          <div className="form-container sign-in-container">
                <h1>Sign In</h1>
                <input type="email" name="email" placeholder="Enter Email" required />
                <input type="password" name="password" placeholder="Enter Password" required />
                <button className="styled">Login</button>
                <h5>OR</h5>
                <div className="googleLogin">
                  <GoogleButton></GoogleButton>
               </div>
          </div>
          <div className="overlay-container">
            <div className="overlay-form">
                {isLogin?
                <div className="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="styled styled-ghost" id="signIn"  onClick={toggleLogin}>Sign In</button>
                </div>:
                <div className="overlay-panel overlay-right">
                    <h1>Hello!</h1>
                    <p>Enter your details and start journey with us</p>
                    <button className="styled styled-ghost" id="signUp" onClick={toggleLogin}>Sign Up</button>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>,
    document.getElementById("portal")
  );
}
