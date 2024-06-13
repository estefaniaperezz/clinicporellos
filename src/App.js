import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import CitaPrevia from './components/CitaPrevia';
import Urgencias from './components/Urgencias';
import Contacto from './components/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#B5D0CC' }}>
        <NavBar>
          {/* Enlaces de navegación */}
          <NavLink to="/" className="nav-link" activeClassName="active" exact>Inicio</NavLink>
          <NavLink to="/servicios" className="nav-link" activeClassName="active">Nuestros Servicios</NavLink>
          <NavLink to="/contacto" className="nav-link" activeClassName="active">Contacto</NavLink>
        </NavBar>

        <Routes>
          <Route path="/" element={
            <div>
              <div className="hero-container position-relative">
                <img src="/fondo.png" alt="Imagen de fondo" className="img-fluid w-100" />
                <div className="overlay-content text-center">
                  <h1>Clínica Veterinaria Por Ellos</h1>
                  <p>Bienvenidos a Clínica Veterinaria Por Ellos, donde el bienestar de tu mascota es nuestra misión. Cada mascota que atendemos es tratada con la dedicación y el cariño que se merece. Reserva tu cita aquí y confía en nuestro equipo para mantener a tu mascota sana y feliz. Tu tranquilidad es nuestra prioridad.</p>
                  <button className="btn btn-primary">Pide Cita</button>
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
    </BrowserRouter>
  );
}

export default App;