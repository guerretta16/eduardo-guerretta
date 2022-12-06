import React from "react";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul className="Navbar_ul">
                <li className="Navbar_li"><a href="#inicio">INICIO</a></li>
                <li className="Navbar_li"><a href="#aboutMe">SOBRE MI</a></li>
                <li className="Navbar_li"><a href="#skills">SKILLS</a></li>
                <li className="Navbar_li"><a href="#portafolio">PORTAFOLIO</a></li>
                <li className="Navbar_li"><a href="#contacto">CONTACTO</a></li>
            </ul>
        </nav>
    )
}

export { Navbar }