import React from "react";
import "../Stylesheets/home.css";
import Navbar from "./Navbar";



export default function Home(props) {
  
  return (
    <>
    <Navbar notify_success={props.notify_success} notify_error={props.notify_error}/>
      <div className="temp" >
        </div>
        
    </>
  );
}
