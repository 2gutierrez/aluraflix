// src/Componentes/NuevoVideo.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NuevoVideoForm from "Componentes/NuevoVideoForm/NuevoVideoForm"
import './NuevoVideo.css';

const NuevoVideo = () => {
  const navigate = useNavigate();

  const handleSubmit = (newVideo) => {
    console.log('New video created:', newVideo);
    navigate('/');
  };

  return (
    <div className="nuevo-video-page">
      <main className="nuevo-video-form-container">
        <header className="nuevo-video-header">
          <h1>NUEVO VIDEO</h1>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </header>
        <NuevoVideoForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default NuevoVideo;
