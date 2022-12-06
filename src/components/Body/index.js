import React from "react";
import { AboutMe } from "./AboutMe";
import { Inicio } from "./Inicio";
import { Portafolio } from "./Portafolio";
import { Skills } from "./Skills";
import { Contacto } from "./Contacto";
import './style.css';

const Body = () => {
    return(
        <div className="container">
            <Inicio />
            <AboutMe />
            <Skills />
            <Portafolio />
            <Contacto />
        </div>
    )
}

export { Body }