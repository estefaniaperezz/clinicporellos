import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import CitaPrevia from './components/CitaPrevia';
import Urgencias from './components/Urgencias';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#B5D0CC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar>
          <NavLink to="/" className="nav-link" activeClassName="active" exact>Inicio</NavLink>
          <NavLink to="/servicios" className="nav-link" activeClassName="active">Nuestros Servicios</NavLink>
          <NavLink to="/contacto" className="nav-link" activeClassName="active">Contacto</NavLink>
        </NavBar>
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={
              <div>
                <div className="hero-container position-relative">
      <img src="/logo.png" alt="Logo de la Clínica" className="logo" />
      <div className="overlay-content text-center">
        <h1>Clínica Veterinaria Por Ellos</h1>
        <p>Bienvenidos a Clínica Veterinaria Por Ellos, donde el bienestar de tu mascota es nuestra misión. Cada mascota que atendemos es tratada con la dedicación y el cariño que se merece. Reserva tu cita aquí y confía en nuestro equipo para mantener a tu mascota sana y feliz. Tu tranquilidad es nuestra prioridad.</p>
        <Link to="/cita-previa" className="btn btn-primary custom-btn">Pide Cita</Link>

                  </div>
                </div>
                <Services />
                <OurTeam />
              </div>
            } />
            <Route path="/servicios" element={<Services />} />
            <Route path="/cita-previa" element={<CitaPrevia />} />
            <Route path="/urgencias" element={<Urgencias />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
