import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import BarraNav from "../components/barraNav/BarraNav";
import About from "./About";

function Home() {
  return (
    <>
      <BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path="/" element={<h1>Welcome to the home page!</h1>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
