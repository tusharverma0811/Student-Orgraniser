import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Stylesheets/subjectStyles.css";
import Header from "./Header";

function Subject() {
  return (
    <>
    <div className="bg">
  
    <div className="subcard">
      <Card
        className="card-styling"
        
      >
        
        <Card.Body className="card-body-styling">
          <Card.Title className="card-title-styling">Subject Name</Card.Title>
          <Card.Text>
            On click, this card expands!
          </Card.Text>
          <Button className="join-class-button-styling" variant="primary">
            Join Class
          </Button>
        </Card.Body>
      </Card>

      <Card
        className="card-styling"
      >
        
        <Card.Body className="card-body-styling">
          <Card.Title className="card-title-styling">Subject Name</Card.Title>
          <Card.Text>
            On click, this card expands!
          </Card.Text>
          <Button className="join-class-button-styling" variant="primary">
            Join Class
          </Button>
        </Card.Body>
      </Card>

      <Card
        className="card-styling"
        
      >
        
        <Card.Body className="card-body-styling">
          <Card.Title className="card-title-styling">Subject Name</Card.Title>
          <Card.Text>
            On click, this card expands!
          </Card.Text>
          <Button className="join-class-button-styling" variant="primary">
            Join Class
          </Button>
        </Card.Body>
      </Card>

      <Card
        className="card-styling"
        
      >
        
        <Card.Body className="card-body-styling">
          <Card.Title className="card-title-styling">Subject Name</Card.Title>
          <Card.Text>
            On click, this card expands!
          </Card.Text>
          <Button className="join-class-button-styling" variant="primary">
            Join Class
          </Button>
        </Card.Body>
      </Card>



    </div>
    </div>
    </>
  );
}

export default Subject;
