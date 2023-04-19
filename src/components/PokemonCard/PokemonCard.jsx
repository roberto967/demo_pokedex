import React, { useState } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import "../assets/style/style_icons.css";

import bug from "../assets/img/types_pkm/bug.svg";
import dark from "../assets/img/types_pkm/dark.svg";
import dragon from "../assets/img/types_pkm/dragon.svg";
import electric from "../assets/img/types_pkm/electric.svg";
import fairy from "../assets/img/types_pkm/fairy.svg";
import fighting from "../assets/img/types_pkm/fighting.svg";
import fire from "../assets/img/types_pkm/fire.svg";
import flying from "../assets/img/types_pkm/flying.svg";
import ghost from "../assets/img/types_pkm/ghost.svg";
import grass from "../assets/img/types_pkm/grass.svg";
import ground from "../assets/img/types_pkm/ground.svg";
import ice from "../assets/img/types_pkm/ice.svg";
import normal from "../assets/img/types_pkm/normal.svg";
import poison from "../assets/img/types_pkm/poison.svg";
import psychic from "../assets/img/types_pkm/psychic.svg";
import rock from "../assets/img/types_pkm/rock.svg";
import steel from "../assets/img/types_pkm/steel.svg";
import water from "../assets/img/types_pkm/water.svg";

import bgrd from "../assets/img/watermark-pokeball-large.svg";

function handleClick(nome) {
  console.log(nome);
}

const tipoPImagem = {
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water,
};

const tipoCor = {
  bug: "92bc2c",
  dark: "595761",
  dragon: "0c69c8",
  electric: "f2d94e",
  fairy: "ee90e6",
  fighting: "d3425f",
  fire: "fba54c",
  flying: "a1bbec",
  ghost: "5f6dbc",
  grass: "5fbd58",
  ground: "da7c4d",
  ice: "75d0c1",
  normal: "a0a29f",
  poison: "b763cf",
  psychic: "fa8581",
  rock: "c9bb8a",
  steel: "5695a3",
  water: "539ddf",
};

function PokemonCard({ nome, img, tipos }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      className="text-center"
      style={{
        borderRadius: "10px",
        backgroundImage: `linear-gradient(to bottom, #${
          tipoCor[tipos[0].type.name]
        } 0%, #ffffff 100%)`,
        height: "100%",
        backgroundSize: "cover",
        transition: "box-shadow 0.3s ease-in-out",
        boxShadow: hovered
          ? `0px 0px 20px 2px #${tipoCor[tipos[0].type.name]}`
          : "none",
        userSelect: "none",
      }}
      border="light"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img
        variant="top"
        src={img}
        alt={nome}
        draggable="false"
        style={{
          backgroundImage: `url(${bgrd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>infos</Card.Text>
        <Container className="text-center">
          <Row>
            {tipos.map((tipo, index) => {
              //console.log(tipo.type);
              return (
                <Col
                  style={{ padding: "0.1em" }}
                  xs="3" /*Extra small screen size (less than 576px) */
                  sm="4" /*mall screen size (between 576px and 768px)*/
                  md="5" /*Medium screen size (between 768px and 992px)*/
                  lg="4" /*Large screen size (between 992px and 1200px)*/
                  key={index}
                  className={`icon ${tipo.type.name}`}
                >
                  <div className="image-wrapper">
                    <Image
                      src={tipoPImagem[tipo.type.name]}
                      alt={tipo.type.name}
                      draggable="false"
                    />
                    <div className="text-wrapper">{tipo.type.name}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
