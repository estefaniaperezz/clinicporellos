import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import '../index.css';

const Peluqueria = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [razaSeleccionada, setRazaSeleccionada] = useState('Raza sin especificar');
  const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(razaSeleccionada === 'Raza sin especificar');
  const [mostrarExtras, setMostrarExtras] = useState(false);

  useEffect(() => {
    if (razaSeleccionada === 'Raza sin especificar') {
      setMostrarCamposAdicionales(true);
    } else {
      setMostrarCamposAdicionales(false);
    }
  }, [razaSeleccionada]);

  useEffect(() => {
    if (razaSeleccionada === 'Raza sin especificar') {
      setMostrarCamposAdicionales(true);
    } else {
      setMostrarCamposAdicionales(false);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "400cb5a6-a45b-485a-81c0-ffa9baaee32f");
    console.log("Form Data:", formData);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("JSON Payload:", json);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const resJson = await res.json();
      console.log("Response:", resJson);

      if (resJson.success) {
        console.log("Success", resJson);
        setFormSubmitted(true);
        event.target.reset();
      } else {
        console.log("Error", resJson);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleRazaChange = (event) => {
    const raza = event.target.value;
    setRazaSeleccionada(raza);
    if (raza === 'Raza sin especificar') {
      setMostrarCamposAdicionales(true);
    } else {
      setMostrarCamposAdicionales(false);
    }
  };

  const handleExtrasChange = (event) => {
    setMostrarExtras(event.target.checked);
  };

  const dogBreeds = [
    "Raza sin especificar", "Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akita", "Alaskan Malamute", "American Bulldog",
    "American Pit Bull Terrier", "American Staffordshire Terrier", "Australian Cattle Dog", "Australian Shepherd", "Australian Terrier",
    "Basenji", "Basset Hound", "Beagle", "Bearded Collie", "Belgian Malinois", "Belgian Sheepdog", "Belgian Tervuren", "Bernese Mountain Dog",
    "Bichon Frise", "Black and Tan Coonhound", "Bloodhound", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flandres",
    "Boxer", "Boykin Spaniel", "Briard", "Brittany", "Brussels Griffon", "Bull Terrier", "Bulldog", "Bullmastiff", "Cairn Terrier",
    "Canaan Dog", "Cane Corso", "Cardigan Welsh Corgi", "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua",
    "Chinese Crested", "Chinese Shar-Pei", "Chow Chow", "Clumber Spaniel", "Cocker Spaniel", "Collie", "Coton de Tulear",
    "Dachshund", "Dalmatian", "Dandie Dinmont Terrier", "Doberman Pinscher", "Dogue de Bordeaux", "English Cocker Spaniel",
    "English Setter", "English Springer Spaniel", "English Toy Spaniel", "Entlebucher Mountain Dog", "Field Spaniel", "Finnish Spitz",
    "Flat-Coated Retriever", "French Bulldog", "German Pinscher", "German Shepherd", "German Shorthaired Pointer",
    "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter",
    "Great Dane", "Great Pyrenees", "Greater Swiss Mountain Dog", "Greyhound", "Harrier", "Havanese", "Ibizan Hound", "Icelandic Sheepdog",
    "Irish Red and White Setter", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound",
    "Japanese Chin", "Keeshond", "Kerry Blue Terrier", "Komondor", "Kuvasz", "Labrador Retriever", "Lagotto Romagnolo", "Lakeland Terrier",
    "Leonberger", "Lhasa Apso", "Lowchen", "Maltese", "Manchester Terrier", "Mastiff", "Miniature Bull Terrier", "Miniature Pinscher",
    "Miniature Schnauzer", "Neapolitan Mastiff", "Newfoundland", "Norfolk Terrier", "Norwegian Buhund", "Norwegian Elkhound",
    "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old English Sheepdog", "Otterhound",
    "Papillon", "Pekingese", "Pembroke Welsh Corgi", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Plott", "Pointer",
    "Polish Lowland Sheepdog", "Pomeranian", "Poodle", "Portuguese Water Dog", "Pug", "Puli", "Pyrenean Shepherd",
    "Rat Terrier", "Redbone Coonhound", "Rhodesian Ridgeback", "Rottweiler", "Saint Bernard", "Saluki", "Samoyed",
    "Schipperke", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Shetland Sheepdog", "Shiba Inu",
    "Shih Tzu", "Siberian Husky", "Silky Terrier", "Skye Terrier", "Sloughi", "Soft Coated Wheaten Terrier", "Spanish Water Dog",
    "Spinone Italiano", "Staffordshire Bull Terrier", "Standard Schnauzer", "Sussex Spaniel", "Swedish Vallhund", "Tibetan Mastiff",
    "Tibetan Spaniel", "Tibetan Terrier", "Toy Fox Terrier", "Treeing Walker Coonhound", "Vizsla", "Weimaraner", "Welsh Springer Spaniel",
    "Welsh Terrier", "West Highland White Terrier", "Whippet", "Wirehaired Pointing Griffon", "Xoloitzcuintli", "Yorkshire Terrier"
  ];

  const services = [
    "Baño", "Baño + corte a tijeras", "Baño + corte a máquina", "Baño + corte combinado a máquina y tijeras"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const socialIcons = document.querySelector('.social-icons');
      const footerRect = footer.getBoundingClientRect();
      const socialIconsRect = socialIcons.getBoundingClientRect();
  
      if (window.innerWidth > 768) {
        socialIcons.style.position = 'fixed';
        socialIcons.style.top = '50%';
        socialIcons.style.transform = 'translateY(-50%)';
        socialIcons.style.bottom = 'auto';
      } else {
        socialIcons.style.position = 'absolute';
        socialIcons.style.top = 'calc(60px + 10px)'; // Ajusta según la altura de tu barra de navegación
        socialIcons.style.right = '10px';
        socialIcons.style.transform = 'none';
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Para manejar cambios de tamaño de ventana
    handleScroll(); // Para establecer la posición inicial
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="peluqueria-container">
      <div className="social-icons">
        <h4>¡Síguenos en nuestras redes!</h4>
        <a href="https://www.instagram.com/pelucan_porellos/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@pelucan_porellos" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTiktok />
        </a>
      </div>

      {!formSubmitted ? (
        <>
        <div className="intro">
          <h1>Bienvenido a nuestra Peluquería Canina</h1>
            <p>En nuestra peluquería canina, nos especializamos en brindar el mejor cuidado y atención a su mascota. Desde un simple lavado y secado hasta cortes de pelo especializados, estamos aquí para ayudar a que su mascota luzca y se sienta lo mejor posible.</p>
          </div>
          <form className="peluqueria-form" onSubmit={onSubmit}>
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Nombre</label>
              <input type="text" className="form-control-peluqueria field-peluqueria" placeholder="Introduce tu nombre" name='name' required />
            </div>
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Email</label>
              <input type="email" className="form-control-peluqueria field-peluqueria" placeholder="Introduce tu email" name='email' required />
            </div>
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Número de teléfono</label>
              <input type="tel" className="form-control-peluqueria field-peluqueria" placeholder="Introduce tu número de teléfono" name='telefono' required />
            </div>
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Nombre de la mascota</label>
              <input type="text" className="form-control-peluqueria field-peluqueria" placeholder="Introduce el nombre de tu mascota" name='nombreMascota' required />
            </div>
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Raza del perro</label>
              <select name="raza" className="form-control-peluqueria field-peluqueria" onChange={handleRazaChange} value={razaSeleccionada} required>
                {dogBreeds.map((breed, index) => (
                  <option key={index} value={breed}>{breed}</option>
                ))}
              </select>
            </div>
            {mostrarCamposAdicionales && (
              <>
                <div className="input-box-peluqueria">
                  <label className="form-label-peluqueria">Peso del perro</label>
                  <input type="text" className="form-control-peluqueria field-peluqueria" placeholder="Introduce el peso del perro" name='pesoPerro' required />
                </div>
                <div className="input-box-peluqueria">
                  <label className="form-label-peluqueria">Tipo de pelaje</label>
                  <select name="tipoPelaje" className="form-control-peluqueria field-peluqueria" required>
                    <option value="" disabled selected>Selecciona el tipo de pelaje</option>
                    <option value="Corto">Corto</option>
                    <option value="Medio">Medio</option>
                    <option value="Largo">Largo</option>
                  </select>
                </div>
              </>
            )}
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Tipo de servicio</label>
              <select name="servicio" className="form-control-peluqueria field-peluqueria" required>
                <option value="" disabled selected>Selecciona el servicio</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Extras</label>
              <input type="checkbox" name="extras" className="form-control-peluqueria field-peluqueria" onChange={handleExtrasChange} />
            </div>
            {mostrarExtras && (
              <>
                <div className="input-box-peluqueria">
                  <label className="form-label-peluqueria">Seleccione extra</label>
                  <select name="extra" className="form-control-peluqueria field-peluqueria" required>
                    <option value="" disabled selected>Selecciona un extra</option>
                    <option value="Cepillado">Cepillado</option>
                    <option value="Deslanado">Deslanado</option>
                  </select>
                </div>
              </>
            )}
            <div className="input-box-peluqueria">
              <label className="form-label-peluqueria">Mensaje</label>
              <textarea name="mensaje" className="form-control-peluqueria field-peluqueria mess-peluqueria" placeholder="Cuéntanos cómo podemos ayudarte" required></textarea>
            </div>
            <button type="submit" className="submit-btn-peluqueria">Solicitar cita</button>
          </form>
        </>
      ) : (
        <div className="message-container">
          <h3 className="text-center my-4">Su solicitud se ha realizado correctamente. Nos pondremos en contacto lo antes posible, ¡gracias!</h3>
        </div>
      )}
    </section>
  );
};

export default Peluqueria;