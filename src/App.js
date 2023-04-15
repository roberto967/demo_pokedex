import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './pages/About';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navBar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function App() {
  return (
    <BrowserRouter>
      {navBar()}
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