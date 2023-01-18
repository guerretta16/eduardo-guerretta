import React, {useState} from "react";
import { Navbar } from "./Navbar";
import logo from "../../assets/img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Header = ({isEnglish}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="Header">
      <header>
        <a href="#inicio" className="Navbar-logo">EG</a>
        <Navbar isEnglish={isEnglish} isOpen={isOpen}/>
        <div className="Navbar-responsive" onClick={()=>setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
};

export { Header };
