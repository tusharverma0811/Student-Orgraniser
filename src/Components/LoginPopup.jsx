import React from "react";
import "../Stylesheets/login.css";
import ReactDom from "react-dom";

export default function LoginPopup({ isOpen, close }) {
  if (!isOpen) return null;
  
  return ReactDom.createPortal(
    <>
    <div className="overlayl">
    <div className="regl">
    
<div className="main"> 
<i className="fas fa-times fa-2x closeSign" onClick={close}></i>
    <input className="credInput" type="checkbox" id="chk" aria-hidden="true" />
    
			<div className="signup">
      
					<label className="loginLabel" htmlFor="chk" aria-hidden="true">Sign up</label>
          {/* <a href=""> <i class="fab fa-google fa-2x"></i></a> */}
         
					<input className="credInput" type="text" name="txt" placeholder="Enter Name" required="" />
					<input className="credInput" type="email" name="email" placeholder="Enter Email" required="" />
					<input className="credInput" type="password" name="pswd" placeholder="Enter Password" required="" />
          <input className="credInput" type="password" name="pswd" placeholder="Re-Enter Password" required="" />
					<button className="btnReg">Sign up</button>
          <h1 className="signUpOR">OR</h1>
          <button className="btnReg">Sign up with Google</button>
          
			</div>

			<div className="login">
					<label className="loginLabel" htmlFor="chk" aria-hidden="true">Login</label>
          
					<input className="credInput" type="email" name="email" placeholder="Email" required="" />
					<input className="credInput" type="password" name="pswd" placeholder="Password" required="" />
					<button className="btnReg">Login</button>
          <h1>OR</h1>
          <button className="btnReg">Login with Google</button>
			</div>

      </div>
      </div>
      </div>
   
    </>,
    document.getElementById("portal")
  );
}
