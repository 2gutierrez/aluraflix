import React from 'react';
import EditarCard from "Componentes/EditarCard/EditarCard"
import botonx from './botonx.png';
import './ModalEditar.css';

const ModalEditar = ({ editarcard, closeModal, onSubmit }) => {
  return (
    <>
      {editarcard && (
        <>
          <div className="overlay" onClick={closeModal} />
          <div className="dialog-estilizado">
            <button className="close-button" onClick={closeModal}>
              <img src={botonx} alt="Cerrar" />
            </button>
            <EditarCard onSubmit={onSubmit} onClose={closeModal} />
          </div>
        </>
      )}
    </>
  );
};

export default ModalEditar;
