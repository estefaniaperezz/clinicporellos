import React, { useState } from 'react';

function CitaPrevia() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    nombreMascota: '',
    email: '',
    numero: '',
    asuntoCita: ''
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
      nombreMascota: '',
      email: '',
      numero: '',
      asuntoCita: ''
    });
  };

  return (
    <div className="container" style={{ backgroundColor: '#FFF4E1', padding: '20px', borderRadius: '5px', marginTop: '100px', marginBottom: '20px' }}>
      <h2>Cita Previa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">Apellidos:</label>
          <input type="text" className="form-control" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreMascota" className="form-label">Nombre de la mascota:</label>
          <input type="text" className="form-control" id="nombreMascota" name="nombreMascota" value={formData.nombreMascota} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="numero" className="form-label">Número de teléfono:</label>
          <input type="text" className="form-control" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="asuntoCita" className="form-label">Asunto de la cita:</label>
          <textarea className="form-control" id="asuntoCita" name="asuntoCita" value={formData.asuntoCita} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Cita</button>
      </form>
    </div>
  );
}

export default CitaPrevia;