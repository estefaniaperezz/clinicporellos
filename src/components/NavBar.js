import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import '../index.css'; // Archivo para tus estilos personalizados

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => {
    setExpanded(false); // Cierra la barra de navegación al hacer clic en un enlace
  };

  return (
    <Navbar expand="lg" className="custom-navbar navbar-light" expanded={expanded}>
      <Navbar.Brand as={Link} to="/" className="custom-navbar-brand text-dark mb-2 mb-lg-0">Clínica veterinaria Por ellos</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/servicios" className="custom-nav-link btn mb-2 mb-lg-0" onClick={handleNavCollapse}>Nuestros Servicios</Nav.Link>
          <Nav.Link as={Link} to="/cita-previa" className="custom-nav-link btn mb-2 mb-lg-0" onClick={handleNavCollapse}>Cita Previa</Nav.Link>
          <Nav.Link as={Link} to="/urgencias" className="custom-nav-link btn mb-2 mb-lg-0" onClick={handleNavCollapse}>Urgencias</Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="custom-nav-link btn mb-2 mb-lg-0" onClick={handleNavCollapse}>Contacto</Nav.Link>
        </Nav>
        <Nav className="ml-3 align-items-center">
          <Nav.Link href="#" className="custom-nav-link btn p-2">
            <FaFacebookSquare style={{ fontSize: '24px' }} />
          </Nav.Link>
          <Nav.Link href="#" className="custom-nav-link btn p-2">
            <FaInstagramSquare style={{ fontSize: '24px' }} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;