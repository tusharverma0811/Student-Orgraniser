import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../Stylesheets/subjectStyles.css";
// import Header from "./Header";

function Subject(props) {
  const [classToday, setClassToday] = useState(false);
  const [isClass, setIsClass] = useState("");
  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const { schedule, sid } = props;
  const history = useHistory();
  let link;
  useEffect(() => {
    checkDay();
  });

  const checkDay = () => {
    let date = new Date();
    let dayNum = date.getDay();
    let day = allDays[dayNum];

    let check = schedule.find((obj) => {
      return obj.day === day;
    });

    if (check) {
      const timing = check.time;
      link = check.link;
      setClassToday(true);
      const hours = timing.slice(0, 2);
      let minutes = timing.slice(3);
      let mins = parseInt(minutes);
      if (mins<10) {
        minutes = "0"+minutes;
      }
      let hrs = parseInt(hours);
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
      setIsClass(`-> You have a class today at ${classTime}`);
    } else {
      setIsClass("Wooho! You Don't have a class today");
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
      <Card className="card-styling" onClick={editSubject}>
        <Card.Body className="card-body-styling">
          <Card.Title className="card-title-styling">{props.name}</Card.Title>
          <Card.Text>{isClass}</Card.Text>
          <button
            className="join-class-button-styling"
            disabled={!classToday}
            onClick={joinClass}
          >
            Join Class
          </button>
          {/* <i className="fas fa-angle-double-down downShift" onClick={editSubject}></i> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default Subject;
