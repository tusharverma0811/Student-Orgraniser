import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import "../Stylesheets/editSub.css";
import {Button} from "react-bootstrap";
import SubjectContext from "../Contexts/SubjectContext";
import EditTime from "./EditTime";


const EditSubjectPopup = (props) => {

  const {updateRoutine,getSubject,addRoutine} = useContext(SubjectContext);
  const [changesMade,setChangesMade] = useState(false);
  const {isOpen,close,sid,rid,toAdd} = props;  
  let editedSched = {day:props.day,time:"",link:props.url};
  if (!isOpen) return null;

  const storeEditedSched = (nameOfDay,timeOfDay,linkOfTheDay)=>{
    const temp = {
      day: nameOfDay,
      time: timeOfDay,
      link: linkOfTheDay
    }
    setChangesMade(true);
    editedSched = temp;
  }

  const editSched = async()=>{
    try{
    if(!toAdd){
    const response = await updateRoutine(editedSched.day,editedSched.time,editedSched.link,sid,rid);

      if(!response.hasOwnProperty("error")){
        await getSubject(sid);
        setChangesMade(false);
        close();
      }else{
        console.log(response.error);
      }
    }else{
      const response = await addRoutine(editedSched.day,editedSched.time,editedSched.link,sid);

      if(!response.hasOwnProperty("error")){
        await getSubject(sid);
        setChangesMade(false);
        close();
      }else{
        console.log(response.error);
      }
    }
    }catch(err){
      console.log(err);
    }
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="reg">
          <CloseIcon onClick={()=>{
            setChangesMade(false);
            close();
          }} className="exit"></CloseIcon>
          <div>
           
              <EditTime day={props.day} url={props.url} makeChange={storeEditedSched}></EditTime>
    
            <Button variant="primary" onClick={editSched} disabled={!changesMade}>{toAdd?"Add":"Edit"}</Button>
          </div>
        </div>
      </div>
      
    </>,
     document.getElementById("portal")
  );
};

export default EditSubjectPopup;
