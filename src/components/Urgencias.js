import React from 'react';
import { FaPhoneAlt, FaClock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; 

function Urgencias() {
  return (
    <div className="container urgencias-container">
      <h2 className="text-center my-4">Urgencias 24h</h2>
      <p>
        Nuestro servicio de urgencias 24h da cobertura a aquellos casos que requieran atención inmediata y se encuentren fuera del horario habitual. Servicio indicado cuando una mascota presenta un cuadro clínico que por su complejidad, ubicación o cronicidad pone en riesgo la vida del paciente. Disponemos de servicio de clínica ambulante móvil (según el tipo de urgencia).
      </p>
      <div className="horario-container mt-4 p-3">
        <h4><FaClock className="mr-2" />Horario Habitual</h4>
        <ul>
          <li>Lunes a Viernes: Mañanas 10:00-13:30   Tardes 17:00-19:30</li>
          <li>Sábado: 10:00 - 13:30 </li>
          <li>Domingo: Cerrado</li>
        </ul>
      </div>
      <div className="telefono-urgencias mt-4 p-3">
        <h4><FaPhoneAlt className="mr-2" />Teléfono de Urgencias</h4>
        <p>+34 623 572 928</p>
      </div>
    </div>
  );
}

export default Urgencias;