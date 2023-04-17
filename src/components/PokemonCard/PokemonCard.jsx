import React from "react";
import { Button, Card } from "react-bootstrap";

function handleClick(nome) {
  console.log(nome);
}

function PokemonCard({ nome, img }) {
  return (
    <Card
      className="text-center"
      border="light"
      bg="light"
      style={{ borderRadius: "100px" }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>infos</Card.Text>
        <Button variant="primary" onClick={() => handleClick(nome)}>
          tipos
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
