import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const CitaPrevia = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1df640a6-7992-4931-a2ed-dfcdff22c4ad");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormSubmitted(true); // Cambiamos el estado para mostrar el mensaje de agradecimiento
      event.target.reset(); // Reseteamos el formulario para limpiar los campos
    }
  };

  return (
    <section className="contacto-container">
      {!formSubmitted ? (
        <form className="contact-form" onSubmit={onSubmit}>
          <h2 className="text-center my-4">Solicitud de cita previa</h2>
          <div className="input-box">
          <label className="form-label">
      Para citas de peluquería{" "}
      <Link to="/peluqueria">pulse aquí</Link>
    </label>
          <br></br>  
          <br></br>  
             <label className="form-label">Nombre</label>
            <input type="text" className="form-control field" placeholder="Introduce tu nombre" name='name' required />
          </div>
          <div className="input-box">
            <label className="form-label">Nombre de la mascota</label>
            <input type="text" className="form-control field" placeholder="Introduce el nombre de la mascota" name='nombreMascota' required />
          </div>
          <div className="input-box">
            <label className="form-label">Número de teléfono</label>
            <input type="number" className="form-control field" placeholder="Introduce el número de teléfono" name='telefono' required />
          </div>
          <div className="input-box">
            <label className="form-label">Email</label>
            <input type="email" className="form-control field" placeholder="Introduce el email" name='email'  required />
          </div>
          <div className="input-box">
            <label className="form-label">Tipo de cita que solicita</label>
            <textarea name="Servicio que solicita" id="" className="form-control field mess" placeholder="Cuentanos en que podemos ayudarte" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Solicitar cita</button>
        </form>
      ) : (
        <div className="message-container">
          <h3 className="text-center my-4">Su solicitud se ha realizado correctamente.<br></br> Nos pondremos en contacto lo antes posible, ¡gracias!</h3>
          
        </div>
      )}
    </section>
  );
};

export default CitaPrevia;