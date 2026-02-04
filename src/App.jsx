import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';

import { getTypes } from "./services/pokeApiSerive"

import Home from "./pages/homePage/home";
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import { Navbar, Container, Nav, Form, Button, Row, Col } from 'react-bootstrap';

import './App.css'

function App() {

  const [selectedType, setSelectedType] = useState(null);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes().then((data) => {
      setTypes(data);
    });
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-navbar-orange">
        <Container fluid={true}>
          <Navbar.Brand as={Link} to="/">
            <img src="/img/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto full-width pr-15">

              <Form>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Buscar por nombre, tipo, etc"
                    />
                  </Col>
                </Row>
              </Form>

              <Nav.Link className='ml-auto' as={Link} to="/">Inicio</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid={true} className='body-content'>
        <Row>
          <Col lg={2} md={12} className='filter-bar'>
            <Row>
              <Col >
                <div className='left-input-container'>
                  <h3 className='input-title'>Generación</h3>
                  <Form.Select size="lg">
                    <option defaultChecked value={""} disabled={true}>Generación</option>
                    <option value={1}>Generación 1</option>
                    <option value={1}>Generación 2</option>
                    <option value={1}>Generación 3</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className='left-input-container'>
                  <h3 className='input-title'>Tipo principal</h3>

                  {types.slice(0, -2).map((type) => (
                    <Button
                      key={type.name}
                      className={`input-type ${type.name}`}
                      onClick={() => setSelectedType(type.name)}
                    >
                      {type.name}
                    </Button>
                  ))}

                  <Button
                    className='input-type'
                    variant="secondary"
                    onClick={() => setSelectedType(null)}
                  >
                    Todos
                  </Button>

                </div>
              </Col>
            </Row>
          </Col>

          <Col className='main-content' lg={10} md={12}>
            <Routes>
              <Route path="/" element={<Home selectedType={selectedType} />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
