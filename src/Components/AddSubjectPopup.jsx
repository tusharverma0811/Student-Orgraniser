import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
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

const AddSubjectPopup = ({ isOpen, close, notify_success, notify_error }) => {
  const [days, setDays] = React.useState([]);
  const [subject, setSubject] = useState("");
  const [subjectEmpty,setSubjectEmpty] = useState(true);
  const [btnActive,setBtnActive] = useState(false);
  const theme = useTheme();
  const { addSubject, getSubjects } = useContext(SubjectContext);

  let times = [];
  if (!isOpen) return null;

  const storeTime = (nameOfDay, timeOfDay, linkOfTheDay) => {
    const temp = {
      day: nameOfDay,
      time: timeOfDay,
      link: linkOfTheDay,
    };

    let ifExists = times.find((ele) => {
      return ele.day === nameOfDay;
    });

    if (ifExists) {
      const updatedList = times.map((ele) => {
        return ele.day === nameOfDay ? temp : ele;
      });

      times = updatedList;
    } else {
      times.push(temp);
    }
  };
  const trackChange = (event) => {
    setSubject(event.target.value);
    if(event.target.value.length>=1){
      setSubjectEmpty(false)
    }else{
      setSubjectEmpty(true)
    }
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setDays(typeof value === "string" ? value.split(",") : value);

    if(event.target.value.length>=1)
    {
      setBtnActive(true);
    }else{
      setBtnActive(false);
    }
  };

  const addNewSubject = async (event) => {
    event.preventDefault();
    try {
      await addSubject(subject, times);
      setDays([]);
      setSubject("");
      notify_success("Subject Added Successfully");
      close();
      getSubjects();
    } catch (err) {
      notify_error(err);
    }
  };
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="reg">
          <i
            className="fas fa-times fa-2x close"
            onClick={() => {
              setDays([]);
              setSubject("");
              close();
            }}
          ></i>
          <div>
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                className="Subject"
                required
                variant="filled"
                id="filled-required"
                placeholder="Subject"
                onChange={trackChange}
                value={subject}
                autoComplete="off"
              />
            </FormControl>
            <br />
            <div>
              <FormControl sx={{ m: 1, width: 500 }}>
                {/* <p>Days</p> */}
                {/* <InputLabel id="demo-multiple-name-label">Days</InputLabel> */}
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  variant="filled"
                  value={days}
                  disabled={subjectEmpty}
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
              </FormControl>
              <br />
              {days.map((dayName, index) => {
                return (
                  <TimeInput
                    name={dayName}
                    key={dayName}
                    storeTime={storeTime}
                  />
                );
              })}
            </div>
            <button className="Add-subject-button" onClick={addNewSubject} disabled={!btnActive}>
              Add Subject
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default AddSubjectPopup;
