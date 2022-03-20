import React from "react";
import "../Stylesheets/home.css";
import Navbar from "./Navbar";
import img1 from "./img/landing-page-background(1).jpg";
import tushar from "./img/tushar-photo.png";
import debarghya from "./img/debarghya-photo.png";
import shubham from "./img/shubham-photo.png";
import ScrollButton from "./ScrollButton";

export default function Home(props) {
  return (
    <>
      <Navbar
        notify_success={props.notify_success}
        notify_error={props.notify_error}
      />

      <div className="landing-page-bg">
        <img src={img1} alt="" width="1350" height="718" />
      </div>
      <div className="temp"></div>
      <div>
        <p className="brief-summary">
          Do you also wake up at 7 am and struggle to find where is which
          subject's meeting link?
          <br />
          We got you covered!
          <br />
          <strong className="strong">One-stop destination</strong> to store all
          classroom essentials systematically.
          <br />
          <br />
          <strong className="strong">
            Try out the new Student Essentials Organizer now
          </strong>{" "}
          <i className="fas fa-arrow-right fa-arrow"></i>
        </p>
      </div>
      <div id="about-Section">
        <p className="about-section">
          Student Frame is an Organizer Application whose sole purpose is to
          cater to students' everyday online classes needs. Be it joining links
          for different subjects and days, tracking attendance, maintaining
          notes, etc. All the essentials are stored under respective subjects
          thus searching time tends to NULL. The application has a Responsive
          and clean UI as well as it is progressive (i.e. it can be installed on
          the mobile phone as a regular app). All the features of the
          application are carefully thought upon and aimed at making it as
          accessible for the user as possible and a better user experience (UX).
          <br />
          <br />
          <h1 className="strong">only for geeks :)</h1>
          This application is based on the MERN tech stack along with Firebase
          (for authentication), MUI and React-Bootstrap( for UI components) and
          FontAwesome ( for Icons).
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <strong className="Strong">
            Made with <i class="fas fa-heart"></i> by
          </strong>
        </p>
      </div>
      <div className="profile-cards">
        <img
          src={debarghya}
          alt=""
          width="250"
          height="250"
          className="profile-image"
        />
        <img
          src={shubham}
          alt=""
          width="250"
          height="250"
          className="profile-image"
        />
        <img
          src={tushar}
          alt=""
          width="250"
          height="250"
          className="profile-image"
        />
        <div className="profile-details">
          Debarghya Mukherjee &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shubham Sabat &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          Tushar Verma
        </div>
        <div className="contribution">
          Frontend Development &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UI/UX designing
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; Backend Development
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;UI/UX designing &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Frontend
          Development &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Frontend Development
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/debarghya-mukherjee">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Debarghya-20">
            <i class="fab fa-github fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/shubham-sabat-2781931ab/">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Shubham1928196">
            <i class="fab fa-github fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/tushar-verma-0811/">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/tusharverma0811">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
      <ScrollButton />
      <div className="footer">
        &#169; STUDENT FRAME 2022. &nbsp; All Rights Reserved.
      </div>
    </>
  );
}
