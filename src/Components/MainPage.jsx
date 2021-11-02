import React, { useState } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import "../Stylesheets/main.css";
import AddSubjectPopup from './AddSubjectPopup';

const MainPage = () => {
    const [popup,setPopup] = useState(false);

    const openPopup = ()=>{
        setPopup(true);
    }

    const closePopup = ()=>{
        setPopup(false);
    }
    return (
        <>
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
