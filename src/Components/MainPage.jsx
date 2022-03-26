import React, { useState, useEffect, useContext } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../Stylesheets/main.css";
import AddSubjectPopup from "./AddSubjectPopup";
import { useHistory } from "react-router-dom";
import SubjectContext from "../Contexts/SubjectContext";
import Subject from "./Subject";
import Navbar from "./Navbar";

const MainPage = (props) => {
  const { subjects, getSubjects } = useContext(SubjectContext);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    } else {
      getSubjects();
    }
    // eslint-disable-next-line
  }, []);
  const [popup, setPopup] = useState(false);
  const history = useHistory();
  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };
  return (
    <>
      <Navbar notify_error={props.notify_error} notify_success={props.notify_success}/>

      <div className="subjects">
        {subjects.map((subject) => {
          return (
            <Subject
              name={subject.subName}
              key={subject._id}
              sid={subject._id}
              schedule={subject.routine}
              notify_success={props.notify_success}
              notify_error={props.notify_error}
            />
          );
        })}
      </div>
      <div className="addButton">
        <Fab onClick={openPopup} color="primary" aria-label="add" size="large">
          <AddIcon></AddIcon>
        </Fab>
      </div>
      <AddSubjectPopup
        isOpen={popup}
        close={closePopup}
        notify_success={props.notify_success}
        notify_error={props.notify_error}
      />
    </>
  );
};

export default MainPage;
