// src/Componentes/ButtonContainer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonContainer.css';
import boton1 from './Button.png';
import boton2 from './ButtonNuevo.png';

const ButtonContainer = () => {
  const navigate = useNavigate();

  const ClickEnHome = () => {
    navigate('/');
  };

  const ClickNuevoVideo = () => {
    navigate('/nuevo-video');
  };

  return (
    <div className="container-botones">
      <button className="button" onClick={ClickEnHome}>
        <img src={boton1} alt="ButtonHome" />
      </button>
      <button className="button" onClick={ClickNuevoVideo}>
        <img src={boton2} alt="ButtonNuevo" />
      </button>
    </div>
  );
};

export default ButtonContainer;
