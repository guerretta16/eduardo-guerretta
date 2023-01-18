import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contacto = ({ isEnglish }) => {
  const frmContact = {
    nombre: "",
    telefono: "",
    direccion: "",
    tema: "",
    mensaje: "",
    email: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [message, setMessage] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    tema: "",
    mensaje: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if (contact.nombre === "") {
      setMessage(
        isEnglish
          ? { ...message, nombre: "Name is required" }
          : { ...message, nombre: "El nombre es requerido" }
      );
      return;
    }
    else if (contact.email === "") {
      setMessage(
        isEnglish
          ? { ...message, email: "Email is required", nombre:"" }
          : { ...message, email: "El email es requerido", nombre:"" }
      );
      return;
    }
    else if (contact.direccion === "") {
      setMessage(
        isEnglish
          ? { ...message, direccion: "Address is required", email:"" }
          : { ...message, direccion: "La dirección es requerida", email:"" }
      );
      return;
    }
    else if (contact.telefono === "") {
      setMessage(
        isEnglish
          ? { ...message, telefono: "Number is required", direccion:"" }
          : { ...message, telefono: "El número de teléfono es requerido", direccion:"" }
      );
      return;
    }
    else if (contact.tema === "") {
      setMessage(
        isEnglish
          ? { ...message, tema: "Topic is required", telefono:"" }
          : { ...message, tema: "El tema es requerido", telefono:"" }
      );
      return;
    }
    else if (contact.mensaje === "") {
      setMessage(
        isEnglish
          ? { ...message, mensaje: "Message is required", tema:"" }
          : { ...message, mensaje: "El mensaje es requerido", tema:"" }
      );
      return;
    }
    else{

      setMessage(
        isEnglish
          ? { ...message, mensaje: "" }
          : { ...message, mensaje: "" }
      );

      emailjs
      .send("default_service", "template_6zcl7al", contact, "RrfC3RbVr9Gwjf0sw")
      .then((response) => {
        document.getElementById("formContact").reset();
        setContact(frmContact);
        setMessage({nombre:"", email:"", telefono:"", tema:"", direccion:"", mensaje:""})
      });
    }
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <h2>{isEnglish ? "Contact" : "Contacto"}</h2>
        <form id="formContact">
          <div className="grid">
            <div className="grid-group">
              <>
                <input
                  type="text"
                  className="form-input"
                  placeholder={isEnglish ? "Name" : "Nombre"}
                  name="nombre"
                  onChange={handleChange}
                />
                <span className="form-error">{message.nombre}</span>
              </>
              <>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <span className="form-error">{message.email}</span>
              </>
              <>
                <input
                  type="text"
                  className="form-input"
                  placeholder={isEnglish ? "Address" : "Dirección"}
                  name="direccion"
                  onChange={handleChange}
                />
                <span className="form-error">{message.direccion}</span>
              </>
              <>
                <input
                  type="text"
                  className="form-input"
                  placeholder={isEnglish ? "Phone number" : "Teléfono"}
                  name="telefono"
                  onChange={handleChange}
                />
                <span className="form-error">{message.telefono}</span>
              </>
              <>
                <input
                  type="text"
                  className="form-input"
                  placeholder={isEnglish ? "Topic" : "Tema"}
                  name="tema"
                  onChange={handleChange}
                />
                <span className="form-error">{message.tema}</span>
              </>
            </div>
            <div className="form-group">
              <textarea
                className="form-area"
                name="mensaje"
                placeholder={
                  isEnglish ? "Write a message" : "Escribe un mensaje"
                }
                onChange={handleChange}
              ></textarea>
              <span className="form-error">{message.mensaje}</span>
            </div>
          </div>
          <button type="button" className="btnSubmit" onClick={handleSubmit}>
            {isEnglish ? "Send message" : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export { Contacto };
