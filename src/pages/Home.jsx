import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import BarraNav from "../components/barraNav/BarraNav";
import About from "./About";
import DexCompleta from "./DexCompleta";

function Home() {
  return (
    <>
      <BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path="/" element={<DexCompleta />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
