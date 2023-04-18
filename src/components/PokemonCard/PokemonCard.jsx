import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import pokeball from "./pokeball_logo.jpg";

function handleClick(nome) {
  console.log(nome);
}

function PokemonCard({ nome, img, tipos }) {
  return (
    <Card
      className="text-center"
      style={{
        borderRadius: "10px",
        backgroundCollor: "white",
        //backgroundImage: `url(${pokeball})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      //bg="light"
    >
      <Card.Img
        variant="top"
        src={img}
        style={{ background: "lightGray", borderRadius: "10px" }}
      />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>infos</Card.Text>
        <Container className="text-center">
          <ButtonGroup className="justify-content-center">
            <Row>
              {tipos.map((tipo, index) => {
                return (
                  <Col
                    style={{ padding: "0.2em" }}
                    xs
                    sm
                    md
                    lg
                    key={index}
                    className="space-round"
                  >
                    <Button
                      variant="light"
                      size="sm"
                      key={index}
                      //style={{ backgroundColor: "blueviolet" }}
                      active
                    >
                      {tipo.type.name}
                    </Button>
                  </Col>
                );
              })}
            </Row>
          </ButtonGroup>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
