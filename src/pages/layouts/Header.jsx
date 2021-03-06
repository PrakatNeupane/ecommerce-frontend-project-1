import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>My Store Admin</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
