import React from "react";

const Navbar = ({isEnglish, isOpen}) => {
    return (
        <nav className={`Navbar ${isOpen&&"NavBarOpen"}`}>
            <ul className={`Navbar_ul ${isOpen&&"Navbar_ulOpen"}`}>
                <li className="Navbar_li"><a href="#inicio">{isEnglish?"HOME":"INICIO"}</a></li>
                <li className="Navbar_li"><a href="#aboutMe">{isEnglish?"ABOUT ME":"SOBRE MI"}</a></li>
                <li className="Navbar_li"><a href="#skills">SKILLS</a></li>
                <li className="Navbar_li"><a href="#portafolio">PORTAFOLIO</a></li>
                <li className="Navbar_li"><a href="#contacto">{isEnglish?"CONTACT":"CONTACTO"}</a></li>
            </ul>
        </nav>
    )
}

export { Navbar }