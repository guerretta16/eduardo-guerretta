import React from "react";
import { Navbar } from "./Navbar";
import logo from "../../assets/img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <a href="#inicio" className="Navbar-logo">EG</a>
        <Navbar />
        <div className="Navbar-responsive">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
};

export { Header };
