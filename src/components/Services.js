import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="services-container container mt-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 text-center">
          <img src="/consultas.png" alt="Servicio 1" className="img-fluid" />
          <div className="service-description">
            <p>Consultas generales y especializadas para el cuidado de tu mascota.</p>
            <Link to="/cita-previa">
            <button className="btn btn-primary">Pide Cita</button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/prevencion.png" alt="Servicio 2" className="img-fluid" />
          <div className="service-description">
            <p>Programas de prevención y vacunas para mantener a tu mascota sana.</p>
            <Link to="/cita-previa">
            <button className="btn btn-primary">Pide Cita</button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src="/cirugia.png" alt="Servicio 3" className="img-fluid" />
          <div className="service-description">
            <p>Realizamos cirugías con el mejor equipo médico brindando a tu mascota el mejor cuidado durante todo el proceso.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4 text-center">
          <img src="/urgencias.png" alt="Servicio 4" className="img-fluid" />
          <div className="service-description">
            <p>Nuestro laboratorio clínico ofrece análisis completos para un diagnóstico preciso, asegurando el mejor cuidado para tu mascota.</p>
          </div>
        </div>
        
        <div className="col-md-4 mb-4 text-center">
          <img src="/explotaciones.png" alt="Servicio 6" className="img-fluid" />
          <div className="service-description">
            <p>Tienda de alimentacion y accesorios para tu mascota.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;