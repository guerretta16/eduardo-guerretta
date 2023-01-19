import React from "react";
import "./style.css";

export const Footer = ({ isEnglish }) => {
  return (
    <footer className="footer">
      <p>
        {isEnglish
          ? "@ 2023 Copyright Eduardo Guerretta"
          : "@ 2023 Copyright Eduardo Guerretta"}
      </p>
    </footer>
  );
};
