import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../Stylesheets/navbar.css";

const Navbar = () => {
    return(
        <>
		<div className="full">
        <div className= "header">

<div classNameName="navbar">


        	<nav className="navbar navbar-expand-lg">
			<a className="navbar-brand">Logo</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="fas fa-bars fa-2x"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="home1.html">Home </a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">About </a>
					</li>
					<li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className = "fas fa-user-circle"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        
              <a className="dropdown-item" href="#"><i className = "fas fa-book"></i> &nbsp;My Subjects</a>
              <a className="dropdown-item" href="#"><i className = "fas fa-cog"></i> &nbsp;Edit Password</a>
          
              <a className="dropdown-item" href="#"><i className = "fas fa-sign-in-alt"></i> &nbsp;Logout</a>
            
            </div>
          </li>
				</ul>
			</div>
		</nav>

       
</div>


</div>
</div>


        

         
        
        </>
    )
}

export default Navbar;