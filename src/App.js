import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Bem vindo ao beta!...</Link>
          </li>
          <li>
            <Link to="/about">Saiba mais</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to the home page!</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;