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
import { getPkm, getPokemonsGen } from "./Assets/FechPkm/FechPkm";
import backgroundImg from "./Assets/imgs/pokemon_background.png";
import bgBackgroudImg from "./Assets/imgs/body_bg.png";

function DexCompleta({ searchValue, dexGen }) {
  const [gen, setGen] = useState(dexGen);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [qtdVisiveis, setqtdVisiveis] = useState(10);
  const prevGeneration = useRef(null);
  console.log(gen);

  useEffect(() => {
    async function fetchData() {
      if (!pokemons.length && gen > 0) {
        setLoading(true);
        const results = await getPokemonsGen(gen);
        setPokemons(results);
        setLoading(false);
      }
    }
    fetchData();
  }, [gen, pokemons]);

  useEffect(() => {
    async function fetchImg() {
      if (pokemons.length === 0) {
        return;
      }

      if (pokemons.every((pokemon) => pokemon.imgUrl)) {
        return;
      }

      if (gen === prevGeneration.current) {
        return;
      }

      prevGeneration.current = gen; // atualiza a geração anterior

      const pokemonArr = await getPkm(pokemons);

      const updatedPokemons = pokemons.map((pokemon, index) => ({
        ...pokemon,
        data: pokemonArr[index],
      }));

      setPokemons(updatedPokemons);
    }

    fetchImg();
  }, [pokemons, gen, prevGeneration]);

  async function handleClick() {
    if (gen < 9 && !loading && pokemons.length) {
      setLoading(true);
      const nextGen = gen + 1;
      const results = await getPokemonsGen(nextGen);
      setqtdVisiveis(10);
      setGen(nextGen);
      setPokemons(results);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rolar pra o topo
      prevGeneration.current = gen; // atualiza a geração anterior
    }
  }

  async function handleGenAnt() {
    if (gen > 1 && !loading && pokemons.length) {
      setLoading(true);
      const nextGen = gen - 1;
      const results = await getPokemonsGen(nextGen);
      setqtdVisiveis(10);
      setGen(nextGen);
      setPokemons(results);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rolar pra o topo
      prevGeneration.current = gen; // atualiza a geração anterior
    }
  }

  async function handleGen(generation) {
    if (!loading && pokemons.length) {
      if (generation === prevGeneration.current) {
        return;
      }
      setLoading(true);
      const nextGen = generation;
      const results = await getPokemonsGen(nextGen);
      setqtdVisiveis(10);
      setGen(nextGen);
      setPokemons(results);
      setLoading(false);
      prevGeneration.current = gen; // atualiza a geração anterior
    }
  }

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
          <Container className="text-center">
            <ButtonGroup className="justify-content-center">
              <Row>
                {[...Array(9)].map((_, index) => (
                  <Col
                    style={{ padding: "0.35em" }}
                    xs="3"
                    sm="3"
                    md
                    lg
                    key={index}
                  >
                    <Button
                      onClick={() => handleGen(index + 1)}
                      disabled={(loading, gen == index + 1)}
                      key={index}
                    >
                      Gen {index + 1}
                    </Button>
                  </Col>
                ))}
              </Row>
            </ButtonGroup>
          </Container>
          <Row
            className="justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            {pkmVisiveis.map((pokemon, key) => {
              if (pokemon.data) {
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
                            pokemon.data.sprites.other["official-artwork"]
                              .front_default
                          }
                          tipos={pokemon.data.types}
                        />
                      </Col>
                    );
                  }
                });
              } else {
                return (
                  <Col
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    style={{ padding: "4%" }}
                    key={key}
                  >
                    <div className="animate__animated animate__glow">
                      <PokemonCardPlaceholder />
                    </div>
                  </Col>
                );
              }
            })}
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

            {!loading && gen > 1 && (
              <Button variant="danger" onClick={handleGenAnt}>
                Geração Anterior
              </Button>
            )}

            {!loading && gen < 9 && (
              <Button variant="success" onClick={handleClick}>
                Próxima Geração
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
