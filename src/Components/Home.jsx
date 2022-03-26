import React, { useState } from "react";
import "../Stylesheets/home.css";
import Navbar from "./Navbar";
import LoginPopup from "./LoginPopup";
import ForgotPasswordPopup from "./ForgotPasswordPopup";
import tushar from "./img/tushar-photo.png";
import debarghya from "./img/debarghya-photo.png";
import shubham from "./img/shubham-photo.png";
//import homepic from "./img/hometop.png";
import landingpage from "./img/landing-page.png";
import ScrollButton from "./ScrollButton";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const aboutRef = React.useRef(null);

  const executeScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [loginPopup, setLoginPopup] = useState(false);
  const [forgotPwdPopup, setForgotPwdPopup] = useState(false);
  const history = useHistory();

  function openLoginPopup() {
    setLoginPopup(true);
  }

  function closeLoginPopup() {
    setLoginPopup(false);
  }

  const openForgotPwdPopup = () => {
    setForgotPwdPopup(true);
  };

  const closeForgotPwdPopup = () => {
    setForgotPwdPopup(false);
  };

  const redirectToMain = () => {
    history.push("/main");
  };
  return (
    <>
      <Navbar
        execScroll={executeScroll}
        notify_success={props.notify_success}
        notify_error={props.notify_error}
      />

      <section className="main-header">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-auto maintext">
            <div className="heading-text">
              <div className="summary-container">
                <p className="brief-summary">
                  Do you also wake up at 7 am and struggle to find where is
                  which subject's meeting link?
                  <br />
                  We got you covered!
                  <br />
                  <br />
                  Your <strong className="strong">
                    One-stop destination
                  </strong>{" "}
                  to store all classroom essentials systematically.
                  <br />
                  <br />
                </p>

                {localStorage.getItem("token") == null ? (
                  <button
                    type="button"
                    className="btn btn-success main-button"
                    onClick={openLoginPopup}
                  >
                    Click to explore!
                  </button>
                ) : (
                  <button
                    className="btn btn-success main-button"
                    onClick={redirectToMain}
                  >
                    Check Your Schedule
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center photomain">
            <div id="homephoto">
              <img className="photo" src={landingpage} alt="" />
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1646078770">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section ref={aboutRef}>
        <div className="freemat">
          <h1>About us</h1>

          <div className="about-container">
            <p>
              Student Frame is an Organizer Application whose sole purpose is to
              cater to students' everyday needs. For example, joining links for
              different subjects on different days. All the essentials are
              stored under respective subjects thus searching time tends to
              NULL. The application has a Responsive and clean UI as well as it
              is progressive (i.e. it can be installed on the mobile phone as a
              regular app). All the features of the application are carefully
              thought upon and aimed at making it as accessible for the user as
              possible and a better user experience (UX).
              <br />
              <br />
              This application is based on the MERN tech stack along with
              Firebase (for authentication), MUI and React-Bootstrap( for UI
              components) and FontAwesome ( for Icons).
              <br />
              <br />
            </p>
          </div>

          <div className="row">
            <div className="feature col-lg-4">
              <h3>
                <i className="fa-solid fa-calendar-check fa-2x"></i>
                <br />
                <br />
                Maintains Timetable
              </h3>
              {/* <p>So that you don't have to face the hastle of keeping a track of your day to day timetable</p> */}
            </div>

            <div className="feature col-lg-4">
              <h3>
                <i className="fa-solid fa-link fa-2x"></i>
                <br />
                <br />
                Maintains Meeting Links
              </h3>
              {/* <p>So that you don't have to search your mailbox or WhatsApp Group Descriptions just for the sake of finding the link to join class</p> */}
            </div>

            <div className="feature col-lg-4">
              <h3>
                <i className="fa-solid fa-pen-to-square fa-2x"></i>
                <br />
                <br />
                Editable
              </h3>
              {/* <p>Just in case your teacher changes the class timings or the class link!</p> */}
            </div>
          </div>
        </div>
      </section>

      <section id="developers">
        <div className="devs">
          <h1>Designed & Developed by</h1>

          <div className="developers-container">
            <div className="row">
              <div className="col-lg-4">
                <Card style={{ width: "14rem" }}>
                  <div className="developer-cards">
                    <Card.Img variant="top" src={debarghya} />

                    <Card.Body>
                      <br />
                      <Card.Title>Debarghya Mukherjee</Card.Title>

                      <Card.Text>
                        (Frontend Development)
                        <br></br>
                        (UI/UX Designing)
                      </Card.Text>

                      <div className="flex-container">
                        <div className="icons">
                          <a
                            href="https://www.linkedin.com/in/debarghya-mukherjee"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin fa-2x"></i>
                          </a>
                        </div>

                        <div className="icons">
                          <a
                            href="https://github.com/Debarghya-20"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-github fa-2x"></i>
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>

              <div className="col-lg-4">
                <Card style={{ width: "14rem" }}>
                  <div className="developer-cards">
                    <Card.Img variant="top" src={tushar} />
                    <Card.Body>
                      <br />
                      <Card.Title>Tushar Verma</Card.Title>
                      <Card.Text>
                        (Backend Development)
                        <br></br>
                        (React Development)
                      </Card.Text>

                      <div className="flex-container">
                        <div className="icons">
                          <a
                            href="https://www.linkedin.com/in/tushar-verma-0811/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin fa-2x"></i>
                          </a>
                        </div>

                        <div className="icons">
                          <a
                            href="https://github.com/tusharverma0811"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-github fa-2x"></i>
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>

              <div className="col-lg-4">
                <Card style={{ width: "14rem" }}>
                  <div className="developer-cards">
                    <Card.Img variant="top" src={shubham} />
                    <Card.Body>
                      <br />
                      <Card.Title>Shubham Sabat</Card.Title>
                      <Card.Text>
                        (UI/UX Designing)
                        <br></br>
                        (Frontend Development)
                      </Card.Text>

                      <div className="flex-container">
                        <div className="icons">
                          <a
                            href="https://www.linkedin.com/in/shubham-sabat-2781931ab/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin fa-2x"></i>
                          </a>
                        </div>

                        <div className="icons">
                          <a
                            href="https://github.com/Shubham1928196"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fab fa-github fa-2x"></i>
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollButton />
      <div className="footer">
        &#169; STUDENT FRAME 2022. &nbsp; All Rights Reserved.
      </div>

      <LoginPopup
        isOpen={loginPopup}
        close={closeLoginPopup}
        notify_success={props.notify_success}
        notify_error={props.notify_error}
        openForgotPwdPopup={openForgotPwdPopup}
      ></LoginPopup>
      <ForgotPasswordPopup
        isOpen={forgotPwdPopup}
        close={closeForgotPwdPopup}
        notify_success={props.notify_success}
        notify_error={props.notify_error}
      ></ForgotPasswordPopup>
    </>
  );
}
