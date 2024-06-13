import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand text-dark" to="/">Clínica veterinaria Por ellos</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/servicios">Nuestros Servicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cita-previa">Cita Previa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/urgencias">Urgencias</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-3">
          <li className="nav-item">
            <a className="nav-link" href="">
              <FaFacebookSquare style={{ fontSize: '24px' }} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <FaInstagramSquare style={{ fontSize: '24px' }} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;