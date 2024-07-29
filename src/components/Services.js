import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'; // No necesitas importar Urgencias directamente aquí

function Services() {
  return (
    <div className="services-container container mt-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 text-center">
          <img src="/consultas.png" alt="Servicio 1" className="img-fluid" />
          <div className="service-description">
            <p>Consultas generales y especializadas para el cuidado de tu mascota.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/prevencion.png" alt="Servicio 2" className="img-fluid" />
          <div className="service-description">
            <p>Programas de prevención y vacunas para mantener a tu mascota sana.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/cirugia.png" alt="Servicio 3" className="img-fluid" />
          <div className="service-description">
            <p>Cirugías con el mejor equipo médico para tu mascota.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 text-center">
          <img src="/urgencias.png" alt="Servicio 4" className="img-fluid" />
          <div className="service-description">
            <p>Nuestro servicio de urgencias 24h da cobertura a aquellos casos que requieran atención inmediata.</p>
            <Link to="/urgencias">
              <button className="btn btn-primary">Más información</button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/peluqueria.png" alt="Servicio 5" className="img-fluid" />
          <div className="service-description">
            <p>Peluquería para Mascotas Dales a tus mascotas el cuidado y estilo que merecen.</p>
            <Link to="/Peluqueria">
            <button className="btn btn-primary">Pide Cita</button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/explotaciones.png" alt="Servicio 6" className="img-fluid" />
          <div className="service-description">
            <p>Servicios Veterinarios para Explotaciones Ganaderas Atención especializada para el bienestar de tu ganado.</p>
            <button className="btn btn-primary">Más información</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;