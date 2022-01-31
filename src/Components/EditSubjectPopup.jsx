import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import "../Stylesheets/editSub.css";
import SubjectContext from "../Contexts/SubjectContext";
import EditTime from "./EditTime";

const EditSubjectPopup = (props) => {
  const { updateRoutine, getSubject, addRoutine } = useContext(SubjectContext);
  const [changesMade, setChangesMade] = useState(false);
  const { isOpen, close, sid, rid, toAdd } = props;
  let editedSched = { day: props.day, time: "", link: props.url };
  const [editedDay, setEditedDay] = useState("");
  if (!isOpen) return null;

  const storeEditedSched = (nameOfDay, timeOfDay, linkOfTheDay) => {
    const temp = {
      day: nameOfDay,
      time: timeOfDay,
      link: linkOfTheDay,
    };
    setChangesMade(true);
    editedSched = temp;
    setEditedDay(nameOfDay);
  };

  const editSched = async () => {
    try {
      if (!toAdd) {
        console.log(editedDay);
        const response = await updateRoutine(
          editedDay,
          editedSched.time,
          editedSched.link,
          sid,
          rid
        );

        if (!response.hasOwnProperty("error")) {
          await getSubject(sid);
          setChangesMade(false);
          close();
        } else {
          console.log(response.error);
        }
      } else {
        const response = await addRoutine(
          editedSched.day,
          editedSched.time,
          editedSched.link,
          sid
        );

        if (!response.hasOwnProperty("error")) {
          await getSubject(sid);
          setChangesMade(false);
          close();
        } else {
          console.log(response.error);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="reg">
          <i
            className="fas fa-times fa-2x close-edit-subject"
            onClick={() => {
              setChangesMade(false);
              close();
            }}
          ></i>
          <div>
            <EditTime
              day={props.day}
              url={props.url}
              makeChange={storeEditedSched}
            ></EditTime>

            <button
              className="edit-button"
              onClick={editSched}
              disabled={!changesMade}
            >
              {toAdd ? "Add" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditSubjectPopup;
