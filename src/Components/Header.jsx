import React from "react";
import "../Stylesheets/headerStyles.css";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="brand-styling" href="#">
            Student Frame
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search for subejcts"
                className="me-2"
                aria-label="Search"
              />
              <i class="fas fa-search"></i>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
