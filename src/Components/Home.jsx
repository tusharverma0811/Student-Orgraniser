import React from "react";
import "../Stylesheets/home.css";
import Navbar from "./Navbar";

export default function Home(props) {
  return (
    <>
      <Navbar
        notify_success={props.notify_success}
        notify_error={props.notify_error}
      />
      <div className="temp"></div>
      <div className="summary-section">
        <h1 className="sumamry-heading">STUDENT FRAME </h1>
        <p className="brief-summary">
          Different subjects, different professors, different class meeting
          links, grades, notes blah blah blah... YEAH! We know! We got you
          covered! It's the one-stop destination for all the essentials that you
          can store systematically.
        </p>
      </div>
      <div className="footer">
        &#169; STUDENT FRAME 2022. &nbsp; All Rights Reserved.
      </div>
    </>
  );
}
