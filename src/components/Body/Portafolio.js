import React from "react";
import movieTheater from "../../assets/img/pages/movie-theater.png";

const Portafolio = ({ isEnglish }) => {
  return (
    <section id="portafolio" className="portafolio">
      <div className="portafolio-container">
        <h2>Portafolio</h2>
        <div className="portafolio-list">
          <a href={"https://movie-theater-81btlvkyc-pjt.vercel.app/"} className="page-card" target="_blank">
            <img className="page-img" src={movieTheater} alt="movie" />
            <div className="page-info">
              <h4>Movie Theater</h4>
              <p className="page-description">
                {isEnglish
                  ? "You can search your favorite movies and add it as favorites."
                  : "Puedes buscar tus peliculas favoritas y agregarlas como favoritas."}
              </p>
              <br/>
              <p>
                {isEnglish
                  ? "Email: eve.holt@reqres.in || Password: cityslicka"
                  : "Email: eve.holt@reqres.in || Contraseña: cityslicka"}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Portafolio };
