import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  ButtonGroup,
  Collapse,
} from "react-bootstrap";
import logo from "../assets/img/pokemon-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function BarraNav({ onSearchInputChange, onGenChange, gen }) {
  const [expand, setExpand] = useState(false);

  return (
    <Container fluid style={{ padding: "0" }}>
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
        </Container>
      </Navbar>

      <Container style={{ transition: "height 0.10s ease" }}>
        <Collapse in={expand}>
          <ButtonGroup
            className={`ms-auto ${expand ? "d-flex d-flex" : "d-none"}`}
          >
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
        </Collapse>
        <div className="text-center">
          <Button
            variant="outline-secondary"
            onClick={() => setExpand(!expand)}
          >
            {expand ? "Mostrar menos" : "Mostrar mais"}
            <FontAwesomeIcon
              icon={expand ? faChevronUp : faChevronDown}
              className="ms-2"
            />
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default BarraNav;
