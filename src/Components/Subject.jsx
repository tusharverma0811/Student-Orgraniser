import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Stylesheets/subjectStyles.css";
import Header from "./Header";

function Subject() {
  return (
    <>
    <Header></Header>
    <div className="subcard">
      <Card
        className="card-styling"
        content="width=device-width"
        style={{ width: "141rem" }}
      >
        <Card.Img
          variant="top"
          src="card-sample-image.jpg"
          alt="No image found"
          class="img-fluid"
        />
        <Card.Body className="card-body-styling">
          <Card.Title className="card-title-styling">Subject Name</Card.Title>
          <Card.Text className="card-body-styling">
            On click, this card expands!
          </Card.Text>
          <Button className="join-class-button-styling" variant="primary">
            Click to join class
          </Button>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default Subject;
