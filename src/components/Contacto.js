import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Asegúrate de tener este archivo CSS

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    numero: '',
    asunto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Formulario enviado:', formData);
    // Puedes resetear el formulario después de enviarlo si es necesario
    setFormData({
      nombre: '',
      apellidos: '',
      email: '',
      numero: '',
      asunto: ''
    });
  };

  return (
    <div className="container contacto-container">
      <h2 className="text-center my-4">Contacto</h2>
      <p className="text-center">
        Si necesita ayuda o más información, por favor, no dude en ponerse en contacto con nosotros. Estaremos encantados de poder ayudarle en lo que necesite.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">Apellidos:</label>
          <input type="text" className="form-control" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="numero" className="form-label">Número de teléfono:</label>
          <input type="tel" className="form-control" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">Asunto del mensaje:</label>
          <textarea className="form-control" id="asunto" name="asunto" rows="4" value={formData.asunto} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary submit-btn">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;