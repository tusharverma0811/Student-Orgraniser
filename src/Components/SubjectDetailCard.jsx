import React, { useContext, useState } from "react";
import EditSubjectPopup from "./EditSubjectPopup";
import { Card } from "react-bootstrap";
import "../Stylesheets/subjectDetailCardStyles.css";
import SubjectContext from "../Contexts/SubjectContext";

export default function SubjectDetailCard(props) {
  const [popup, setPopup] = useState(false);
  const { deleteRoutine, getSubject } = useContext(SubjectContext);
  const openLink = (classLink) => {
    window.open(classLink);
  };

  const openEdit = () => {
    setPopup(true);
  };

  const closeEdit = () => {
    setPopup(false);
  };

  const deleteSchedule = async () => {
    try {
      await deleteRoutine(props.sid, props.rid);
      await getSubject(props.sid);
    } catch (err) {
      console.log(err);
    }
  };
  const { sched } = props;

  const setTime = (timing) => {
    const hours = timing.slice(0, 2);
    let mins = timing.slice(3);
    let minutes = parseInt(mins);
    let classTime;
    if (minutes<10) {
      mins = "0"+mins;
    }
    let hrs = parseInt(hours);
    if (hrs > 12) {
      hrs = hrs - 12;
      classTime = hrs + ":" + mins + " P.M";
    } else {
      if (hrs === 12) {
        classTime = hours + ":" + mins + " P.M";
      } else {
        classTime = hours + ":" + mins + " A.M";
      }
    }

    return classTime;
  };

  return (
    <>
      <Card key={sched._id} className="details-card-styling">
        <Card.Body className="details-card-body-styling">
          <Card.Title className="details-card-title-styling">
            Day: {sched.day}
          </Card.Title>
          <Card.Subtitle className="card-text mb-2 text-muted">
            Time: {setTime(sched.time)}
          </Card.Subtitle>
          <br />
          <Card.Subtitle className="card-text mb-2 text-muted">
            Class Link:- <br />
            {sched.link}
          </Card.Subtitle>
          <br />
          <button
            className="button-styling"
            onClick={(event) => {
              event.preventDefault();
              openLink(sched.link);
            }}
          >
            Join Class
          </button>
          <br />
          <button
            className="delete-button-styling fa-2x"
            onClick={deleteSchedule}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button className="edit-button-styling" onClick={openEdit}>
            <i className="fas fa-edit fa-2x"></i>
          </button>
        </Card.Body>
      </Card>
      <EditSubjectPopup
        isOpen={popup}
        close={closeEdit}
        day={sched.day}
        url={sched.link}
        sid={props.sid}
        rid={sched._id}
        toAdd={false}
      />
    </>
  );
}
