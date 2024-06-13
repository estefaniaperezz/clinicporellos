import React from 'react';
import '../index.css'; // Importa el archivo CSS para estilos del footer
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer footer-container">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="info-container">
        <p>&copy; Por Ellos. Todos los derechos reservados.</p>
        <p>Diseñado por Estefanía Pérez</p>
      </div>
      <div className="social-container">
        <a href="https://www.facebook.com/tu_facebook"><FaFacebookSquare style={{ fontSize: '40px' }} /></a>
        <a href="https://www.instagram.com/tu_instagram"><FaInstagramSquare style={{ fontSize: '40px' }} /></a>
      </div>
    </footer>
  );
}

export default Footer;







