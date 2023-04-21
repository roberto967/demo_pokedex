import React, { useState } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import "../assets/style/style_icons.css";

import { tipoPImagem, tipoCor } from "../assets/Tipos_pkm";

import bgrd from "../assets/img/watermark-pokeball-large.svg";

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
