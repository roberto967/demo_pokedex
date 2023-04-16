import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard";

import Button from "react-bootstrap/Button";

function fechEspecifico(url){
    console.log(url);
}

function DexCompleta() {
  const [gen, setGen] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (let i = 1; i <= gen; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/generation/${i}/`);
    }

    axios.all(
      endpoints.map((endpoint) => {
        axios
          .get(endpoint)
          .then((res) => setPokemons(res.data.pokemon_species));
      })
    );
  };

  function handleClick() {
    if (gen <= 9) {
      setGen(gen + 1);
      getPokemons();
    }
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {pokemons.map((pkm, key) => {
            fechEspecifico(pkm.url)
            console.log(pkm)
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
