import React from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  ButtonGroup,
} from "react-bootstrap";
import logo from "../assets/img/pokemon-logo.png";

import "../assets/style/style_icons.css";

import { tipoPImagem, tiposStr, tipoCor } from "../assets/Tipos_pkm";

function BarraNav({ onSearchInputChange, onGenChange, gen }) {
  let expand = "true";

  return (
    <Navbar key={expand} bg="light" expand="sm">
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
              Avemaria Doido
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/About">Sobre</Nav.Link>
              <NavDropdown
                title="Filtros?"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              ></NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={onSearchInputChange}
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <ButtonGroup className="ms-auto">
          {[...Array(9)].map((_, index) => (
            <Button
              onClick={() => onGenChange(index + 1)}
              key={index}
              disabled={gen === index + 1}
            >
              Gen {index + 1}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </Navbar>
  );
}

export default BarraNav;
