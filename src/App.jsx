import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Componentes/Footer/Fotter';
import Header from './Componentes/Header/Header';
import Portada from './Componentes/Portada/Portada';
import ModalEditar from './Componentes/ModalEditar/ModalEditar';
import NuevoVideoModal from './Componentes/NuevoVideoModal/NuevoVideoModal';

const App = () => {
  const [editarcard, setEditarCard] = useState(false);
  const [nuevoVideo, setNuevoVideo] = useState(false);

  const clickEditarCard = () => {
    setEditarCard(true);
  };

  const clickNuevoVideo = () => {
    setNuevoVideo(true);
  };

  const closeModalEditar = () => {
    setEditarCard(false);
  };

  const closeModalNuevoVideo = () => {
    setNuevoVideo(false);
  };

  const handleSubmitEditar = (formValues) => {
    console.log('Form submitted:', formValues);
    closeModalEditar();
  };

  const handleSubmitNuevoVideo = (formValues) => {
    console.log('Nuevo video submitted:', formValues);
    closeModalNuevoVideo();
  };

  return (
    <div className='div-container'>
      <Header />
      <Portada />
      <main>
        <Outlet context={{ clickEditarCard, clickNuevoVideo }} />
      </main>
      <Footer />
      <ModalEditar editarcard={editarcard} closeModal={closeModalEditar} onSubmit={handleSubmitEditar} />
      <NuevoVideoModal nuevoVideo={nuevoVideo} closeModal={closeModalNuevoVideo} onSubmit={handleSubmitNuevoVideo} />
    </div>
  );
};

export default App;
