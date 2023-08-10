import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./../assets/css/global.css";

export const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand className="colorLogo">SKIPPER NDT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Contacts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
