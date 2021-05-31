import React from "react";
import {
  Form,
  FormControl,
  Navbar,
  NavDropdown,
  Button,
  Nav,
} from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

const Top = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Holiway</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <RouterLink to="/post">Post</RouterLink>
          </Nav.Link>
          <NavDropdown title="Type" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <RouterLink to="/">Action</RouterLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <RouterLink to="/">Another action</RouterLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Top;
