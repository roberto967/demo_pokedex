import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function handleClick() {
  console.log("alo");
}

function PokemonCard({ nome, gen}) {
  return (
    <Card style={{ width: "100%", marginBottom: "1em" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          infos
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>tipos</Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
