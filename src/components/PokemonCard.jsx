import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function handleClick() {
  console.log("alo");
}

function PokemonCard({ nome, img }) {
  return (
    <Card
      className="text-center"
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>infos</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          tipos
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
