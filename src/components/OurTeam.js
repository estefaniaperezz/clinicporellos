import React from 'react';

function OurTeam() {
  return (
    <div className="team-container container " style={{ backgroundColor: ' #BCCCE1', padding: '50px 0' }}>
      <h2 className="text-center team-container-text">Nuestro Equipo</h2>
      <div className="row justify-content-center team-container-images">
        <div className="col-md-3 mt-4 mb-4 text-center">
          <img src="/veterinario1.jpg" alt="Persona 1" className="img-fluid rounded-circle mb-3 team-member-img"  />
          <p className="fw-bold">Irene Muñoz</p>
          <p className="text-muted">Gerente/Veterinaria</p>
        </div>
        <div className="col-md-3 mt-4 mb-4 text-center">
          <img src="/veterinario1.jpg" alt="Persona 2" className="img-fluid rounded-circle mb-3 team-member-img" />
          <p className="fw-bold">Josete García</p>
          <p className="text-muted">Cirujano</p>
        </div>
        <div className="col-md-3 mt-4 mb-4 text-center">
          <img src="/veterinario3.jpg" alt="Persona 3" className="img-fluid rounded-circle mb-3 team-member-img"  />
          <p className="fw-bold">Trinidad Plaza</p>
          <p className="text-muted">Recepcionista</p>
        </div>
        <div className="col-md-3 mt-4 mb-4 text-center">
          <img src="/veterinario4.jpg" alt="Persona 4" className="img-fluid rounded-circle mb-3 team-member-img"  />
          <p className="fw-bold">Eva Martínez</p>
          <p className="text-muted">Peluquera</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;