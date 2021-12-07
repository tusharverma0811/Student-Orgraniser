import React, { useState } from "react";
import SubjectContext from "./SubjectContext";

const SubjectState = (props) => {
  const initialSubjects = [];
  const [subjects, setSubjects] = useState(initialSubjects);
  const [subject,setSubject] = useState({subName:"",time:"",link:"",routine:[]});

  const getSubjects = async () => {
    try {
      const response = await fetch("/subject/getsubjects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const data = await response.json();
      if (!data.hasOwnProperty("error")) {
        setSubjects(data.subjects);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSubject = async(sid)=>{
    try{
      const response = await fetch(`/subject/getsubject/${sid}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem("token")
        }
      });

      const data = await response.json();
      if (!data.hasOwnProperty("error")) {
        setSubject(data);
      }
    }catch(err){
      console.log(err);
    }
  };

  const addSubject = async (subName, routine) => {
    try {
      const response = await fetch("/subject/addsubject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ subName, routine }),
      });
      const data = await response.json();
      return data;

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SubjectContext.Provider value={{ subjects, subject,getSubjects, addSubject, getSubject }}>
      {props.children}
    </SubjectContext.Provider>
  );
};

export default SubjectState;
