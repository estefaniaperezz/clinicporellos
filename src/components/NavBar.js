import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'; // Importa los íconos de FontAwesome

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand text-dark" href="#">Clínica veterinaria Por ellos</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#servicios">Nuestros Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cita-previa">Cita Previa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#urgencias">Urgencias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-3">
          <li className="nav-item">
            <a className="nav-link" href="">
              <FaFacebookSquare style={{ fontSize: '24px' }} /> {/* Ajusta el tamaño del ícono */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <FaInstagramSquare style={{ fontSize: '24px' }} /> {/* Ajusta el tamaño del ícono */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
