import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  ProgressBar,
  Collapse,
} from "react-bootstrap";
import "../assets/style/style_icons.css";

import { tipoPImagem, tipoCor } from "../assets/Tipos_pkm";

import bgrd from "../assets/img/watermark-pokeball-large.svg";
import { CardModal } from "./CardModal";

function PokemonCard({ nome, img, tipos, estatisticas }) {
  const [hovered, setHovered] = useState(false);
  const [mostrarStat, setMostrarStat] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
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
        onClick={handleCardClick}
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
          <Collapse in={mostrarStat}>
            <Container className="text-center">
              <Row>
                {estatisticas.map((estat) => {
                  return (
                    <div style={{ padding: "5px" }}>
                      <ProgressBar now={estat.base_stat} max={255} />
                    </div>
                  );
                })}
              </Row>
            </Container>
          </Collapse>
          <Container className="text-center">
            <Row>
              {tipos.map((tipo, index) => {
                return (
                  <Col
                    style={{ padding: "0.1em" }}
                    xs="3"
                    sm="4"
                    md="5"
                    lg="4"
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
      {showModal && (
        <CardModal
          handleCloseModal={handleCloseModal}
          nome={nome}
          img={img}
          tipos={tipos}
          estatisticas={estatisticas}
        />
      )}
    </>
  );
}

export default PokemonCard;
