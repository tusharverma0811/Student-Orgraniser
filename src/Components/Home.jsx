import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../Stylesheets/home.css";
import LoginPopup from "./LoginPopup";

export default function Home() {
  useEffect(()=>{
    if(localStorage.getItem("token")){
      history.push("/main");
    }
  })
  const [popup, setPopup] = useState(false);
  const history = useHistory();
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
