import React from 'react';
import './ButtonContainer.css';
import botonHome from './Button.png';
import botonNuevo from './ButtonNuevo.png';
import { useNavigate } from 'react-router-dom';

const ButtonContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="container-botones">
      <button className="button" onClick={() => navigate('/')}>
        <img src={botonHome} alt="Button Home" /></button>
      <button className="button" onClick={() => navigate('/nuevo-video')}>
        <img src={botonNuevo} alt="Button Nuevo Video" /></button>
    </div>
  );
};

export default ButtonContainer;


