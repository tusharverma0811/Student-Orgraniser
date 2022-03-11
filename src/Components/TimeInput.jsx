import React from "react";
import { FormControl, Grid, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

const TimeInput = (props) => {
  const [value, setValue] = React.useState(new Date());
  const [url, setUrl] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);

    const temp = newValue.getHours() + ":" + newValue.getMinutes();
    props.storeTime(props.name, temp, url);
  };

  const handleLinkChange = (event) => {
    setUrl(event.target.value);
    const temp = value.getHours() + ":" + value.getMinutes();
    props.storeTime(props.name, temp, event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <Grid container spacing={1}>
          <Grid item xs="auto">
            <TextField
              variant="filled"
              id="filled-required"
              value={props.name}
              disabled
            ></TextField>
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
              label="Class Link"
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

export default TimeInput;
