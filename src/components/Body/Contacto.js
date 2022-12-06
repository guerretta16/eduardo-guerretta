import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contacto = () => {

  const frmContact = { nombre:"", telefono:"", direccion:"", tema:"", mensaje:"", email:"" };
  const [contact,setContact] = useState(frmContact);

  const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("default_service","template_6zcl7al", contact, "RrfC3RbVr9Gwjf0sw")
		.then((response) => {
           document.getElementById("formContact").reset();
				   setContact(frmContact);
		});
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <h2>Contacto</h2>
        <form id="formContact">
          <div className="grid">
            <div className="grid-group">
              <input
                type="text"
                className="form-input"
                placeholder="Nombre"
                name="nombre"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                placeholder="Email"
                name="email"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                placeholder="Dirección"
                name="direccion"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                placeholder="Teléfono"
                name="telefono"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                placeholder="Tema"
                name="tema"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-area"
                name="mensaje"
                placeholder="Escribe un mensaje"
                required
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="button" className="btnSubmit" onClick={handleSubmit}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export { Contacto };
