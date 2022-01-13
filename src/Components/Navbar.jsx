import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="full">
        <div className="header">
          <div classNameName="navbar">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand">Logo</Link>
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
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      About{" "}
                    </Link>
                  </li>
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
                      <Link className="dropdown-item" >
                        <i className="fas fa-book"></i> &nbsp;My Subjects
                      </Link>
                      <Link className="dropdown-item">
                        <i className="fas fa-cog"></i> &nbsp;Edit Password
                      </Link>

                      <Link className="dropdown-item">
                        <i className="fas fa-sign-in-alt"></i> &nbsp;Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
