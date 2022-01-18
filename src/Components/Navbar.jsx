import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../Stylesheets/navbar.css";
import LoginPopup from "./LoginPopup";



const Navbar = (props) => {
  const [popup, setPopup] = useState(false);
  const history = useHistory();
  
  function openPopup() {
    setPopup(true);
  }
  
  function closePopup() {
    setPopup(false);
  }
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    
    history.push("/");
}
  return (
    <>
      <div className="full">
        <div className="header">
          {/* <div classNameName="navbar"> */}
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">Logo</Link>
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
                    <Link className="nav-link" to="/">
                      About
                    </Link>
                  </li>
                  {localStorage.getItem("token")!=null?
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user-circle"></i>
                    </span>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link className="dropdown-item" to="/main">
                        <i className="fas fa-book"></i> &nbsp;My Subjects
                      </Link>
                      <Link className="dropdown-item">
                        <i className="fas fa-cog"></i> &nbsp;Edit Password
                      </Link>

                      <span className="dropdown-item" onClick={handleLogout}>
                        <i className="fas fa-sign-in-alt"></i> &nbsp;Logout
                      </span>
                    </div>
                  </li>:
                  <li className="nav-item" onClick={openPopup}>Get Started</li>
                  }
                </ul>
              </div>
            </nav>
          {/* </div> */}
        </div>
      </div>
      <LoginPopup isOpen={popup} close={closePopup} notify_success={props.notify_success} notify_error={props.notify_error}></LoginPopup>
    </>
  );
};

export default Navbar;
