import React, { useState, useEffect } from 'react';
import '../index.css'; 
const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      // Verifica si el usuario ya ha aceptado o rechazado las cookies
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      const cookiesRejected = localStorage.getItem('cookiesRejected');
  
      if (cookiesAccepted === 'true' || cookiesRejected === 'true') {
        setIsVisible(false);
      }
    }, []);
  
    const acceptCookies = () => {
      setIsVisible(false);
      localStorage.setItem('cookiesAccepted', 'true');
      localStorage.removeItem('cookiesRejected'); // Asegúrate de eliminar cualquier rechazo previo
    };
  
    const declineCookies = () => {
      setIsVisible(false);
      localStorage.setItem('cookiesRejected', 'true');
      localStorage.removeItem('cookiesAccepted'); // Asegúrate de eliminar cualquier aceptación previa
    };
  
    if (!isVisible) return null; // No renderiza el banner si ya ha sido aceptado o rechazado
  
    return (
      <div className="cookie-banner">
        <div className="cookiesContent" id="cookiesPopup">
          <button className="close" onClick={declineCookies}>✖</button>
          <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
          <p>
      Utilizamos cookies para mejorar su experiencia en nuestro sitio web, análisis y marketing. 
      Al continuar navegando, acepta nuestra<a href="/Cookie-Policy" >  Política de Cookies  </a>.
    </p>
          <button className="accept" onClick={acceptCookies}>¡De acuerdo!</button>
          <button className="decline" onClick={declineCookies}>No, gracias</button>
        </div>
      </div>
    );
  };
  
  export default CookieBanner;