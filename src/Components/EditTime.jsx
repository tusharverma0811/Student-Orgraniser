import React from "react";
import { FormControl, Grid, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import "../Stylesheets/editTime.css";

const EditTime = (props) => {
  const [value, setValue] = React.useState(new Date());
  const [url, setUrl] = React.useState(props.url);
  const [day, setDay] = React.useState(props.day);
  const handleChange = (newValue) => {
    setValue(newValue);

    const temp = newValue.getHours() + ":" + newValue.getMinutes();
    props.makeChange(day, temp, url);
  };

  const handleLinkChange = (event) => {
    setUrl(event.target.value);
    const temp = value.getHours() + ":" + value.getMinutes();
    props.makeChange(day, temp, event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
    const temp = value.getHours() + ":" + value.getMinutes();
    props.makeChange(event.target.value, temp, url);
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <Grid container spacing={1}>
          <Grid item xs="auto">
            <select
              className="form-select daySelect"
              aria-label="Default select example"
              value={day}
              onChange={handleDayChange}
            >
              <option>Day</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </Grid>
          <Grid item xs="auto">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              ></TimePicker>
            </LocalizationProvider>
          </Grid>
          <Grid item xs="auto">
            <TextField
              variant="filled"
              id="filled-required"
              placeholder="Class Link"
              autoComplete="off"
              value={url}
              onChange={handleLinkChange}
            ></TextField>
          </Grid>
        </Grid>
      </FormControl>
      <br />
    </>
  );
};

export default EditTime;
