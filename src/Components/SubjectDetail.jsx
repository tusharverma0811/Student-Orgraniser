import React, { useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import SubjectContext from "../Contexts/SubjectContext";
import { Card,Button } from "react-bootstrap";
import "../Stylesheets/detailStyles.css";
import SubjectDetailCard from "./SubjectDetailCard";
import EditSubjectPopup from "./EditSubjectPopup";
import Navbar from "./Navbar";

const SubjectDetail = () => {
  const { subjectid } = useParams();
  const { getSubject, subject } = useContext(SubjectContext);
  const [addSched,setaddSched] = useState(false);

  useEffect(() => {
    getSubject(subjectid);
    // eslint-disable-next-line
  }, []);

  const openAddDay = (event)=>{
    event.preventDefault();
    setaddSched(true);
  }

  const closeAddDay = ()=>{
    setaddSched(false);
  }
  return (
    <>
    <Navbar/>
      <Card className="heading-card-styling">
        <Card.Body className="heading-card-body-styling">
          <Card.Title className="heading-card-title-styling">
            {subject.subName}
          </Card.Title>
        </Card.Body>
      </Card>

      <div className="coursecontainer">
        {subject.routine.map((schedule) => {
          return <SubjectDetailCard key={schedule._id} sched={schedule} sid={subjectid} rid={schedule._id}/>;
        })}
      </div>
      <div className="routineAdd">
        <Button className="add-day-button" variant="primary" onClick={openAddDay}>Add Day</Button>
      </div>
      <EditSubjectPopup isOpen={addSched} close={closeAddDay} sid={subjectid} toAdd={true}></EditSubjectPopup>
    </>
  );
};

export default SubjectDetail;
