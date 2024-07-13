import React from 'react';
import './Header.css';
import ButtonContainer from "Componentes/ButtonContainer/ButtonContainer"
import logo from "./LogoMain.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Aluraflix Logo" className="logo" />
      </div>
      <ButtonContainer />
    </header>
  );
};

export default Header;
