import React, { useState, useEffect, useContext } from "react";
import "../Stylesheets/main.css";
import AddSubjectPopup from "./AddSubjectPopup";
import { useHistory } from "react-router-dom";
import SubjectContext from "../Contexts/SubjectContext";
import Subject from "./Subject";
import Navbar from "./Navbar";
import img2 from "./img/main-page-vector.jpg";

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
      <Navbar />
      <div className="main-page-vector">
        <img src={img2} alt="" width="820" height="450" />
      </div>
      <div className="subjects">
        {subjects.map((subject) => {
          return (
            <Subject
              name={subject.subName}
              key={subject._id}
              sid={subject._id}
              schedule={subject.routine}
            />
          );
        })}
      </div>
      <div>
        <button className="addButton" onClick={openPopup}>
          Create <i class="fas fa-plus"></i>
        </button>
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
