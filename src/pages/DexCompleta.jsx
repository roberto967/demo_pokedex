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
import { getPkm, getPokemonsGen } from "./Assets/FechPkm/FechPkm";
import backgroundImg from "./Assets/imgs/pokemon_background.png";
import bgBackgroudImg from "./Assets/imgs/body_bg.png";

function DexCompleta() {
  const [gen, setGen] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [qtdVisiveis, setqtdVisiveis] = useState(10);
  const prevGeneration = useRef(null);

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
        imgUrl: pokemonArr[index].sprites.front_default,
      }));

      setPokemons(updatedPokemons);
    }

    fetchImg();
  }, [pokemons, gen, prevGeneration]);

  async function handleClick() {
    if (gen <= 9 && !loading && pokemons.length) {
      if (gen === prevGeneration.current) {
        return;
      }
      setLoading(true);
      const nextGen = gen + 1;
      const results = await getPokemonsGen(nextGen);
      setqtdVisiveis(10);
      setGen(nextGen);
      setPokemons(results);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rolar pra o topo
      console.log(nextGen);
      prevGeneration.current = gen; // atualiza a geração anterior
    }
  }

  async function handleGenAnt() {
    if (gen > 1 && !loading && pokemons.length) {
      if (gen === prevGeneration.current) {
        return;
      }
      setLoading(true);
      const nextGen = gen - 1;
      const results = await getPokemonsGen(nextGen);
      setqtdVisiveis(10);
      setGen(nextGen);
      setPokemons(results);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rolar pra o topo
      console.log(nextGen);
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
      <Container>
        <Container
          fluid="xxl"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundColor: "white",
            backgroundSize: "100%",
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <ButtonGroup>
              <Button onClick={() => handleGen(1)} disabled={loading}>
                Gen 1
              </Button>
              <Button onClick={() => handleGen(2)} disabled={loading}>
                Gen 2
              </Button>
              <Button onClick={() => handleGen(3)} disabled={loading}>
                Gen 3
              </Button>
              <Button onClick={() => handleGen(4)} disabled={loading}>
                Gen 4
              </Button>
              <Button onClick={() => handleGen(5)} disabled={loading}>
                Gen 5
              </Button>
              <Button onClick={() => handleGen(6)} disabled={loading}>
                Gen 6
              </Button>
              <Button onClick={() => handleGen(7)} disabled={loading}>
                Gen 7
              </Button>
              <Button onClick={() => handleGen(8)} disabled={loading}>
                Gen 8
              </Button>
              <Button onClick={() => handleGen(9)} disabled={loading}>
                Gen 9
              </Button>
            </ButtonGroup>
          </Row>
          <Row className="justify-content-center">
            {pkmVisiveis.map((pokemon, key) => {
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
                      <PokemonCard nome={enName.name} img={pokemon.imgUrl} />
                    </Col>
                  );
                }
              });
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
