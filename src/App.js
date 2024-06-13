import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './index.css'; // Asegúrate de que el archivo CSS esté importado
import Services from './components/Services';
import OurTeam from './components/OurTeam'; // Importa el componente OurTeam

function App() {
  return (
    <div style={{ backgroundColor: '#fff4e1' }}> {/* Ajuste del color de fondo */}
      <NavBar />
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
  );
}

export default App;


