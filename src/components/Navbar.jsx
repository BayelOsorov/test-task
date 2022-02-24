import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav onClick={() => navigate("/")}>Главная</Nav>
          <Nav onClick={() => navigate("/events")}>События</Nav>
          <Nav onClick={() => navigate("/store")}>Магазин</Nav>
        </Navbar.Collapse>
        <Nav onClick={() => navigate("/login")}>Вход</Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
