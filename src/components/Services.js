import React from 'react';
import '../index.css';

function Services() {
  return (
    <div className="services-container container mt-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 text-center">
          <img src="/consultas.png" alt="Servicio 1" className="img-fluid" />
          <div className="service-description">
            <p>Consultas generales y especializadas para el cuidado de tu mascota.</p>
            <button className="btn btn-primary">Ver Más</button>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/prevencion.png" alt="Servicio 2" className="img-fluid" />
          <div className="service-description">
            <p>Programas de prevención y vacunas para mantener a tu mascota sana.</p>
            <button className="btn btn-primary">Ver Más</button>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/cirugia.png" alt="Servicio 3" className="img-fluid" />
          <div className="service-description">
            <p>Cirugías avanzadas con el mejor equipo médico para tu mascota.</p>
            <button className="btn btn-primary">Ver Más</button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 text-center">
          <img src="/urgencias.png" alt="Servicio 4" className="img-fluid" />
          <div className="service-description">
            <p>Atención de urgencias veterinarias las 24 horas del día.</p>
            <button className="btn btn-primary">Más información</button>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/peluqueria.png" alt="Servicio 5" className="img-fluid" />
          <div className="service-description">
            <p>Servicios de peluquería y estética para todas las razas de mascotas.</p>
            <button className="btn btn-primary">Pide Cita</button>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/explotaciones.png" alt="Servicio 6" className="img-fluid" />
          <div className="service-description">
            <p>Servicios veterinarios para explotaciones ganaderas y animales de granja.</p>
            <button className="btn btn-primary">Más información</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;