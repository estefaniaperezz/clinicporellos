import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.css'; // Asegúrate de que el archivo CSS esté importado

function App() {
  return (
    <div>
      <NavBar />
      <div className="hero-container position-relative"> {/* Ajuste en la clase contenedora */}
        {/* Imagen */}
        <img src="/fondo.png" alt="Imagen de fondo" className="img-fluid w-100" /> {/* Ajuste en el tamaño de la imagen */}
        {/* Texto y botón */}
        <div className="overlay-content text-center">
          <h1>Clínica Veterinaria Por Ellos</h1>
          <p>Bienvenidos a Clínica Veterinaria Por Ellos, donde el bienestar de tu mascota es nuestra misión. Cada mascota que atendemos es tratada con la dedicación y el cariño que se merece. Reserva tu cita aquí y confía en nuestro equipo para mantener a tu mascota sana y feliz. Tu tranquilidad es nuestra prioridad.</p>
          <button className="btn btn-primary">Pide Cita</button>
        </div>
      </div>
    </div>
  );
}

export default App;



