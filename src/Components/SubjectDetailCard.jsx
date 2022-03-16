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
      const response = await deleteRoutine(props.sid, props.rid);
      if (!response.hasOwnProperty("error")) {
        await getSubject(props.sid);
        props.notify_success("Successfully Deleted Schedule")
      } else {
        props.notify_error(response.error);
        console.log(response.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const { sched } = props;

  const setTime = (timing) => {
    const time = timing.split(":");
    const hours = time[0];
    let mins = time[1];
    let minutes = parseInt(mins);
    let classTime;
    if (minutes < 10) {
      mins = "0" + mins;
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
          <div className="dropdown-container" tabIndex="-1">
            <div className="three-dots"></div>
            <div className="dropdown dropdown1">
              <span className="options" onClick={openEdit}>
                <div>Edit</div>
              </span>
              <span className="options" onClick={deleteSchedule}>
                <div>Delete</div>
              </span>
            </div>
          </div>

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
        notify_success={props.notify_success} 
        notify_error={props.notify_error}
      />
    </>
  );
}
