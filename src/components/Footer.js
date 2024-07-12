import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import '../index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info contact-box">
          <h4>Contacto</h4>
          <p>Teléfono: +34 123 456 789</p>
          <p>Email: cvporellos@gmail.com</p>
          <p>Dirección: <a href="https://maps.app.goo.gl/NaTMS1sSqUXC5k9t6" target="_blank" rel="noopener noreferrer">C. José Zorrilla, nº2, 05400 Arenas de San Pedro, Ávila</a></p>
          <div className="social-container">
            <a href="https://www.facebook.com/tu_facebook"><FaFacebookSquare style={{ fontSize: '40px' }} /></a>
            <a href="https://www.instagram.com/tu_instagram"><FaInstagramSquare style={{ fontSize: '40px' }} /></a>
          </div>
        </div>
        <div className="map-container map-box">
          <iframe
            title="Ubicación de la Clínica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.9464418209236!2d-5.0884979!3d40.210254299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f8b907a6558a3%3A0xd68ea6df777ef520!2sClinica%20veterinaria%20Por%20ellos!5e0!3m2!1ses!2ses!4v1720617937545!5m2!1ses!2ses"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; Por Ellos. Todos los derechos reservados.</p>
        <p>Diseñado por Estefanía Pérez</p>
      </div>
    </footer>
  );
}

export default Footer;
