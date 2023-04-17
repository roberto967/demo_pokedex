import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import BarraNav from "../components/barraNav/BarraNav";
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
  return (
    <>
      <BrowserRouter>
        <BarraNavContainer>
          <BarraNav />
        </BarraNavContainer>
        <MainContainer>
          <Routes>
            <Route path="/" element={<DexCompleta />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default Home;
