import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard";

import Button from "react-bootstrap/Button";
import { getPokemonsGen } from "../components/FechPkm";

function DexCompleta() {
  const [gen, setGen] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await getPokemonsGen(gen);
      setPokemons(results);
    }
    fetchData();
  }, []);

  async function handleClick() {
    if (gen < 9) {
      const nextGen = gen + 1;
      const results = await getPokemonsGen(nextGen);
      setGen(nextGen);
      setPokemons(results);
    }
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {pokemons.map((pkm, key) => {
            //console.log(pkm.names)
            return pkm.names.map((enName) => {
              if (enName.language.name == "en") {
                return (
                  <Col md={4} key={key}>
                    <PokemonCard nome={enName.name} />
                  </Col>
                );
              }
            });
          })}
        </Row>
      </Container>
      <Button variant="primary" onClick={handleClick}>
        Próxima Geração
      </Button>
    </div>
  );
}

export default DexCompleta;
