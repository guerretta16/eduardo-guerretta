import React from "react";
import profile from "../../assets/img/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="container-banner">
        <div className="container-img">
          <img className="profile-img" src={profile} alt="perfil" />
        </div>
        <div className="container-info">
          <h1>Eduardo Guerretta</h1>
          <h2>Estudiante Universitario - <span>Desarrollador Web Jr</span></h2>
          <div className="social-media">
            <a href="https://www.facebook.com/eduardo1515/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/guerre_16/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-guerretta"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Inicio };
