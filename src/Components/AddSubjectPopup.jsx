import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  TextField,
  Select,
  OutlinedInput,
  MenuItem,
  Chip,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../Stylesheets/addSub.css";
import TimeInput from "./TimeInput";
import {Button} from "react-bootstrap";
import SubjectContext from "../Contexts/SubjectContext";

const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const AddSubjectPopup = ({ isOpen, close }) => {
  const [days, setDays] = React.useState([]);
  const [subject, setSubject] = useState("");
  const theme = useTheme();
  const {addSubject,getSubjects} = useContext(SubjectContext);

  let times = [];
  if (!isOpen) return null;

  const storeTime = (nameOfDay,timeOfDay,linkOfTheDay)=>{
    const temp = {
      day: nameOfDay,
      time: timeOfDay,
      link: linkOfTheDay
    }

    let ifExists = times.find((ele)=>{
      return ele.day === nameOfDay
    })
    
    if(ifExists){
      const updatedList = times.map((ele)=>{
        return ele.day===nameOfDay?temp:ele;
      })

      times = updatedList;
    }else{
      times.push(temp);
    }
  }
  const trackChange = (event) => {
    setSubject(event.target.value);
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setDays(typeof value === "string" ? value.split(",") : value);
    times.length = days.length;
  };

  const addNewSubject = async(event)=>{  
    event.preventDefault();
    console.log(times);
    try{
      await addSubject(subject,times);
      setDays([]);
      setSubject("");
      close();
      getSubjects();
    } catch(err){
      console.log(err);
    }
  }
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="reg">
          <CloseIcon onClick={()=>{
            setDays([]);
            setSubject("");
            close();
          }} className="exit"></CloseIcon>
          <div>
            <FormControl sx={{m:1, width: 300 }}>
                  <TextField
                    required
                    variant="filled"
                    id="filled-required"
                    label="Subject"
                    onChange={trackChange}
                    value={subject}
                    autoComplete="off"
                  />
            </FormControl>
            <br />
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                {/* <p>Days</p> */}
                {/* <InputLabel id="demo-multiple-name-label">Days</InputLabel> */}
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  variant="filled"
                  value={days}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {day.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, days, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl><br/>
              {days.map((dayName,index)=>{
                return <TimeInput name={dayName} key={dayName} storeTime={storeTime}/>
              })}
            </div>
            <Button variant="primary" onClick={addNewSubject}>Add Subject</Button>
          </div>
        </div>
      </div>
      
    </>,
    document.getElementById("portal")
  );
};

export default AddSubjectPopup;
