import React, { useState,useEffect, useContext } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import "../Stylesheets/main.css";
import AddSubjectPopup from './AddSubjectPopup';
import { useHistory } from 'react-router-dom';
import SubjectContext from '../Contexts/SubjectContext';
import Subject from './Subject';

const MainPage = () => {
    const {subjects,getSubjects} = useContext(SubjectContext);
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            history.push("/");
        }else{
            getSubjects();
        }
        // eslint-disable-next-line
    },[])
    const [popup,setPopup] = useState(false);
    const history = useHistory();
    const openPopup = ()=>{
        setPopup(true);
    }
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        history.push("/");
    }
    const closePopup = ()=>{
        setPopup(false);
    }
    return (
        <>
        <div className="temp">
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
        <div className="subjects">
            {subjects.map((subject)=>{
                return <Subject name={subject.subName} key={subject._id} sid={subject._id} schedule={subject.routine}/>
            })}
        </div>
        <div className="addButton">
           <Fab onClick={openPopup} color="primary" aria-label="add" size="large" >
               <AddIcon ></AddIcon>
           </Fab> 
        </div>
        <AddSubjectPopup isOpen={popup} close={closePopup}/>
        </>
    )
}

export default MainPage;
