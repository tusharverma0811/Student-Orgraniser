import React, { useState } from "react";
import "../Stylesheets/home.css";
import LoginPopup from "./LoginPopup";

export default function Home() {
  const [popup, setPopup] = useState(false);

  function openPopup() {
    setPopup(true);
  }

  function closePopup() {
    setPopup(false);
  }

  return (
    <>
      <div className="temp">
        <button className="btn btn-primary" onClick={openPopup}>
          Login/Signup
        </button>
      </div>
      <LoginPopup isOpen={popup} close={closePopup}></LoginPopup>
    </>
  );
}
