import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../Stylesheets/detailStyles.css";

const SubjectDetails = () => {
    return(
        <>




        <Card className="heading-card-styling">
            <Card.Body className="heading-card-body-styling">
              <Card.Title className="heading-card-title-styling">
                Subject Name
              </Card.Title>
            </Card.Body>
          </Card>


        <div className="coursecontainer">
         <Card className="details-card-styling">
            <Card.Body className="details-card-body-styling">
                <Card.Title  className="details-card-title-styling">Day: Monday</Card.Title>
                   <Card.Subtitle className="card-text mb-2 text-muted">Time: 10:00 AM</Card.Subtitle>
                <Card.Link className="card-text"href="#">randomlink.com</Card.Link>
                <br />
                <Button className="button-styling" variant="primary">Join Class</Button>
                <br/>
                <Button className="edit-button-styling" variant="primary"><i class="fas fa-edit"></i></Button>
            </Card.Body>
        </Card>


       

        
        </div>




       



        

         
        
        </>
    )
}

export default SubjectDetails;