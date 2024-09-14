import React from 'react'; // Solo importa React una vez
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import CitaPrevia from './components/CitaPrevia';
import Urgencias from './components/Urgencias';
import Peluqueria from './components/Peluqueria';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner'; // Asegúrate de que la ruta es correcta
import CookiePolicy from './components/CookiePolicy';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div style={{ backgroundColor: '#BCCCE1', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <CookieBanner /> {/* Asegúrate de que CookieBanner está importado y funciona */}
          <NavBar>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
            <NavLink to="/servicios" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Nuestros Servicios</NavLink>
            <NavLink to="/Peluqueria" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Peluquería</NavLink>
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
                      <Link to="/cita-previa" className="btn btn-primary custom-btn">Pide cita online</Link>
                      <Link to="/footer.js" className="btn btn-secondary custom-btn">Cita telefónica</Link>
                    </div>
                  </div>
                  <Services />
                  <OurTeam />
                </div>
              } />
              <Route path="/servicios" element={<Services />} />
              <Route path="/cita-previa" element={<CitaPrevia />} />
              <Route path="/urgencias" element={<Urgencias />} />
              <Route path="/Peluqueria" element={<Peluqueria />} />
              <Route path="/Cookie-Policy" element={<CookiePolicy />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;