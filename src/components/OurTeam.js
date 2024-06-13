import React from 'react';

function OurTeam() {
  return (
    <div className="team-container container mt-5" style={{ backgroundColor: '#B5D0CC', padding: '50px 0' }}>
      <h2 className="text-center mb-4">Nuestro Equipo</h2>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4 text-center">
          <img src="/veterinario1.jpg" alt="Persona 1" className="img-fluid rounded-circle mb-3 team-member-img" style={{ width: '400px', height: '250px' }} />
          <p className="fw-bold">Nombre 1</p>
          <p className="text-muted">Cargo</p>
        </div>
        <div className="col-md-3 mb-4 text-center">
          <img src="/veterinario2.jpg" alt="Persona 2" className="img-fluid rounded-circle mb-3 team-member-img" style={{ width: '400px', height: '250px' }} />
          <p className="fw-bold">Nombre 2</p>
          <p className="text-muted">Cargo</p>
        </div>
        <div className="col-md-3 mb-4 text-center">
          <img src="/veterinario3.jpg" alt="Persona 3" className="img-fluid rounded-circle mb-3 team-member-img" style={{ width: '400px', height: '250px' }} />
          <p className="fw-bold">Nombre 3</p>
          <p className="text-muted">Cargo</p>
        </div>
        <div className="col-md-3 mb-4 text-center">
          <img src="/veterinario4.jpg" alt="Persona 4" className="img-fluid rounded-circle mb-3 team-member-img" style={{ width: '400px', height: '250px' }} />
          <p className="fw-bold">Nombre 4</p>
          <p className="text-muted">Cargo</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;