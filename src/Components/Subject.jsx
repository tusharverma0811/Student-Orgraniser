import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SubjectContext from "../Contexts/SubjectContext";
import "../Stylesheets/subjectStyles.css";
// import Header from "./Header";

function Subject(props) {
  const [classToday, setClassToday] = useState(false);
  const { deleteSubject, getSubjects } = useContext(SubjectContext);
  const [isClass, setIsClass] = useState("");
  const [hadClass, setHadClass] = useState(false);
  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const { schedule, sid, notify_success, notify_error } = props;
  const history = useHistory();
  let link;
  useEffect(() => {
    checkDay();
  });

  const checkDay = () => {
    let date = new Date();
    let dayNum = date.getDay();
    let day = allDays[dayNum];
    let currHour = date.getHours();
    let currMins = date.getMinutes();

    let check = schedule.find((obj) => {
      return obj.day === day;
    });

    if (check) {
      const timing = check.time;
      link = check.link;
      const time = timing.split(":");
      const hours = time[0];
      let minutes = time[1];
      let mins = parseInt(minutes);
      if (mins < 10) {
        minutes = "0" + minutes;
      }
      let hrs = parseInt(hours);

      if (hrs > currHour) {
        setClassToday(true);
      } else if (hrs === currHour && mins >= currMins) {
        setClassToday(true);
      } else {
        setHadClass(true);
      }

      let classTime;
      if (hrs > 12) {
        hrs = hrs - 12;
        classTime = hrs + ":" + minutes + " P.M";
      } else {
        if (hrs === 12) {
          classTime = hours + ":" + minutes + " P.M";
        } else {
          classTime = hours + ":" + minutes + " A.M";
        }
      }
      let classMsg;
      if (hadClass) {
        classMsg = `-> You had a class today at ${classTime}`;
      } else {
        classMsg = `-> You have a class today at ${classTime}`;
      }
      setIsClass(classMsg);
    } else {
      setIsClass("Wooho! You Don't have a class today");
    }
  };

  const deleteSub = async () => {
    try {
      const response = await deleteSubject(sid);
      if (response.hasOwnProperty("error")) {
        notify_error(response.error);
      } else {
        notify_success("Successfully Deleted");
        await getSubjects();
      }
    } catch (err) {
      console.log(err);
      notify_error("Sorry! Try Again");
    }
  };

  const joinClass = () => {
    window.open(link);
  };

  const editSubject = () => {
    history.push(`/subject/${sid}`);
  };
  return (
    <>
      <Card className="card-styling">
        <div className="main-card-top">
          <Card.Title className="card-title-styling">{props.name}</Card.Title>
          <Card.Text>{isClass}</Card.Text>
        </div>
        <Card.Body className="card-body-styling">
          {/* <div className="dropdown-container-main" tabindex="-1">

        <div className="main-dots"></div>
    
    <div className="dropdown-main">
      <a href="#"><div>Edit</div></a>
      <a href="#"><div>Delete</div></a>
    </div>
  </div> */}

          <div className="card-bottom">
            <button
              className={
                !classToday && !hadClass
                  ? "join-class-button-styling"
                  : "join-class-button-styling join-btn-hover"
              }
              disabled={!classToday && !hadClass}
              onClick={joinClass}
            >
              Join Class
            </button>

            <div className="edit-delete">
              <i className="fa-solid fa-pen" onClick={editSubject}></i>

              <i className="fa-solid fa-trash-can" onClick={deleteSub}></i>
            </div>
          </div>
          {/* <i className="fas fa-angle-double-down downShift" onClick={editSubject}></i> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default Subject;
