import React from 'react';
import '../index.css';

const Juntacyl = () => (
    <section className="py-8 px-4 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">

            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <br></br>
                    <h2 className="text-2xl font-bold mb-4">Aquí invierte la junta de Castilla y León</h2>
                    <p>
                        Nuestra empresa ha iniciado su actividad gracias al apoyo financiero de la Junta de Castilla y León y del Instituto para la Competitividad Empresarial de Castilla y León (ICECYL).
                        Este proyecto ha permitido la apertura del negocio, facilitando la inversión inicial necesaria para su puesta en marcha y la creación de empleo en la región.
                    </p>
                    <p>
                        Proyecto: Clínica veterinaria por ellos<br></br>
                        Código de expediente: 07/23/VA/0011<br></br>
                        plazo de ejecución:28/06/2024
                    </p>

                </div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-5">

                    <div className="w-full h-96 overflow-hidden rounded-lg shadow-md">
                        <img
                            src="/jcyl-nos-impulsa.jpg"
                            alt="Inversiones de Castilla y León"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

    </section >
);

export default Juntacyl;
