import React from "react";
import "../login.css";
import ReactDom from "react-dom";

export default function LoginPopup({ isOpen, close }) {
  const [isLogin, setLogin] = React.useState(false);
  if (!isOpen) return null;
  

  const loginStyle={
            transform: isLogin?"translateX(100%)":"translateX(0%)",
            opacity:"1",
            zIndex:"5",
            animation: "show 0.6s"
  }

  function toggleLogin(){
    setLogin(true);
  }
  
  return ReactDom.createPortal(
    <>
<div class="main"> 

    <input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="Enter Name" required="" />
					<input type="email" name="email" placeholder="Enter Email" required="" />
					<input type="password" name="pswd" placeholder="Enter Password" required="" />
          <input type="password" name="pswd" placeholder="Re-Enter Password" required="" />
					<button>Sign up</button>
          
			</div>

			<div className="login">
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
          <h1>OR</h1>
          <button>Login with Google</button>
			</div>

      </div>
   
    </>,
    document.getElementById("portal")
  );
}
