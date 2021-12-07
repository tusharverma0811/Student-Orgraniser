import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubjectContext from "../Contexts/SubjectContext";

const SubjectDetail = () => {
  const { subjectid } = useParams();
  const { getSubject,subject } = useContext(SubjectContext);

  useEffect(() => {
    getSubject(subjectid);
  },[]);

  return (
    <div>
      <strong>Subject Name:-</strong>{subject.subName}<br/>
            <strong>Routine:-</strong><br/>
            {subject.routine.map((sched)=>{
                return <div>
                    Day:-{sched.day}<br/>
                    Time:-{sched.time}<br/>
                    Link:-{sched.link}<br/><br/>
                </div>
            })}
    </div>
  );
};

export default SubjectDetail;
