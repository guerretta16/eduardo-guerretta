import React from "react";
import { AboutMe } from "./AboutMe";
import { Inicio } from "./Inicio";
import { Portafolio } from "./Portafolio";
import { Skills } from "./Skills";
import { Contacto } from "./Contacto";
import './style.css';

const Body = ({isEnglish, setIsEnglish}) => {

    

    return(
        <div className="container">
            <Inicio isEnglish={isEnglish}/>
            <AboutMe isEnglish={isEnglish}/>
            <Skills isEnglish={isEnglish}/>
            <Portafolio isEnglish={isEnglish}/>
            <Contacto isEnglish={isEnglish}/>
            <div className="switch-idiom">
                <span onClick={() => setIsEnglish(true)} className={`switch-btn ${isEnglish&&"active"}`}>EN</span>
                <span onClick={() => setIsEnglish(false)} className={`switch-btn ${!isEnglish&&"active"}`}>ES</span>
            </div>
        </div>
    )
}

export { Body }