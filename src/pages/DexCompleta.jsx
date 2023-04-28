import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  ButtonGroup,
} from "react-bootstrap";

import PokemonCard from "../components/PokemonCard/PokemonCard";
import PokemonCardPlaceholder from "../components/PokemonCard/PokemonCardPlaceholder";
import { getPokemonsGen } from "./Assets/FechPkm/FechPkm";
import backgroundImg from "./Assets/imgs/pokemon_background.png";
import bgBackgroudImg from "./Assets/imgs/body_bg.png";

function DexCompleta({ searchValue, dexGen }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [qtdVisiveis, setqtdVisiveis] = useState(10);

  const genAnt = useRef(null);

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      const results = await getPokemonsGen(dexGen);
      setPokemons(results);
      setLoading(false);
      setqtdVisiveis(10);
    }

    if (dexGen !== genAnt.current) {
      setPokemons([]);
      genAnt.current = dexGen;
    }

    fetchPokemons();
  }, [dexGen]);

  function handleMostrarMais() {
    setqtdVisiveis(qtdVisiveis + 10);
  }

  function handleMostrarMenos() {
    if (qtdVisiveis > 10) {
      setqtdVisiveis(qtdVisiveis - 10);
    }
  }

  const pkmVisiveis = pokemons.slice(0, qtdVisiveis);

  return (
    <div
      style={{
        backgroundImage: `url(${bgBackgroudImg})`,
      }}
    >
      <Container style={{ minHeight: "100vh" }}>
        <Container
          fluid="xxl"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundColor: "white",
            backgroundSize: "100%",
          }}
        >
          <Row
            className="justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            {pkmVisiveis.length ? (
              pkmVisiveis.map((pokemon, key) => {
                return pokemon.names.map((enName) => {
                  if (enName.language.name === "en") {
                    return (
                      <Col
                        xs="12"
                        sm="6"
                        md="4"
                        lg="3"
                        style={{ padding: "4%" }}
                        key={key}
                      >
                        <PokemonCard
                          nome={enName.name}
                          img={
                            pokemon.sprites.other["official-artwork"]
                              .front_default
                          }
                          tipos={pokemon.types}
                        />
                      </Col>
                    );
                  }
                });
              })
            ) : (
              <>
                {[...Array(10)].map((_, index) => (
                  <Col
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    style={{ padding: "4%" }}
                    key={index}
                  >
                    <PokemonCardPlaceholder />
                  </Col>
                ))}
              </>
            )}
          </Row>
          <div className="text-center mt-3">
            {pokemons.length > qtdVisiveis && (
              <Button variant="primary" onClick={handleMostrarMais}>
                Mostrar Mais
              </Button>
            )}

            {qtdVisiveis > 10 && (
              <Button variant="danger" onClick={handleMostrarMenos}>
                Mostrar Menos
              </Button>
            )}
            {loading && <Spinner animation="border" variant="primary" />}
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default DexCompleta;
