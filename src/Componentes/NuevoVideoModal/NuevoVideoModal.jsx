import React from 'react';
import NuevoVideoForm from 'Componentes/NuevoVideoForm/NuevoVideoForm';
import botonx from './botonx.png';
import './NuevoVideoModal.css';

const NuevoVideoModal = ({ nuevoVideo, closeModal, onSubmit }) => {
  return (
    <>
      {nuevoVideo && (
        <>
          <div className="overlay" onClick={closeModal} />
          <div className="dialog-estilizado">
            <button className="close-button" onClick={closeModal}>
              <img src={botonx} alt="Cerrar" />
            </button>
            <NuevoVideoForm onSubmit={onSubmit} onClose={closeModal} />
          </div>
        </>
      )}
    </>
  );
};

export default NuevoVideoModal;
