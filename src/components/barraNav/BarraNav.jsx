import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "./img/pokemon-logo.png";

function BarraNav() {
  let expand = "true";

  return (
    <Navbar
      key={expand}
      bg="light"
      expand="sm"
    >
      <Container fluid>
        <Navbar.Brand href="#" expand={expand}>
          <img
            src={logo}
            alt="pokemon-logo"
            style={{ width: "70%", height: "auto", maxWidth: "20vh" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/About">Sobre</Nav.Link>
              <NavDropdown
                title="Filtros?"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">tipo 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">tipo 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">tipo n..</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default BarraNav;
