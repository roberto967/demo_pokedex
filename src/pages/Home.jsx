import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import BarraNav from "../components/BarraNav/BarraNav";
import DexCompleta from "./DexCompleta";
import About from "./About";

const MainContainer = styled.div`
  padding-top: 0;
`;

const BarraNavContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

function Home() {
  const [valorPesquisa, setValorPesquisa] = useState("");
  const [gen, setGen] = useState(1);

  function handleSearchInputChange(event) {
    setValorPesquisa(event.target.value);
  }

  function handleAltGen(geracao) {
    setGen(geracao);
  }

  return (
    <>
      <BrowserRouter>
        <BarraNavContainer>
          <BarraNav
            onSearchInputChange={handleSearchInputChange}
            onGenChange={handleAltGen} // adiciona a prop "onGenChange"
            gen={gen}
          />
        </BarraNavContainer>
        <MainContainer>
          <Routes>
            <Route
              path="/"
              element={
                <DexCompleta pkmPesquisado={valorPesquisa} dexGen={gen} />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default Home;
