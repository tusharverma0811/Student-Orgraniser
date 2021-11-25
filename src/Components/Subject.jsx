import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../Stylesheets/subjectStyles.css";
// import Header from "./Header";

function Subject(props) {
  const [isClass,setIsClass] = useState("");
  const allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] 
  const {schedule} = props;
  useEffect(()=>{
    checkDay();
  },[])

  const checkDay = ()=>{
    let date = new Date();
    let dayNum = date.getDay();
    let day = allDays[dayNum];

    let check = schedule.find((obj)=>{
      return obj.day === day
    })

    if(check){
      const timing = check.time;
      console.log(timing);
      console.log(date);
      setIsClass(`You have a class at `);
    }else{
      setIsClass("Wooho! You Don't have a class today");
    }
  }
  return (
    <>
          <Card className="card-styling">
            <Card.Body className="card-body-styling">
              <Card.Title className="card-title-styling">
                {props.name}
              </Card.Title>
              <Card.Text>{isClass}</Card.Text>
              <Button className="join-class-button-styling" variant="primary">
                Join Class
              </Button>
            </Card.Body>
          </Card>

         
    </>
  );
}

export default Subject;
