import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubjectContext from "../Contexts/SubjectContext";
import "../Stylesheets/detailStyles.css";
import SubjectDetailCard from "./SubjectDetailCard";
import EditSubjectPopup from "./EditSubjectPopup";
import Navbar from "./Navbar";

const SubjectDetail = () => {
  const { subjectid } = useParams();
  const { getSubject, subject } = useContext(SubjectContext);
  const [addSched, setaddSched] = useState(false);

  useEffect(() => {
    getSubject(subjectid);
    // eslint-disable-next-line
  }, []);

  const openAddDay = (event) => {
    event.preventDefault();
    setaddSched(true);
  };

  const closeAddDay = () => {
    setaddSched(false);
  };
  return (
    <>
      <Navbar />
      <h1 className="title-styling">{subject.subName}</h1>

      <div className="coursecontainer">
        {subject.routine.map((schedule) => {
          return (
            <SubjectDetailCard
              key={schedule._id}
              sched={schedule}
              sid={subjectid}
              rid={schedule._id}
            />
          );
        })}
      </div>
      <div className="routineAdd">
        <button className="add-day-button" onClick={openAddDay}>
          Add Day
        </button>
      </div>
      <EditSubjectPopup
        isOpen={addSched}
        close={closeAddDay}
        sid={subjectid}
        toAdd={true}
      ></EditSubjectPopup>
    </>
  );
};

export default SubjectDetail;
