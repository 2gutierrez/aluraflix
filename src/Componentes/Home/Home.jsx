import React, { useState } from 'react';
import ModalEditar from 'Componentes/ModalEditar';
import Contenidos from "Componentes/Contenidos/Contenidos"
import Portada from "Componentes/Portada/Portada"

const Home = () => {
  const [editarcard, setEditarCard] = useState(false);

  const clickEditarCard = () => {
    setEditarCard(true);
  };

  const closeModal = () => {
    setEditarCard(false);
  };

  const handleSubmit = (formValues) => {
    console.log('Form submitted:', formValues);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a un servidor
    closeModal();
  };

  return (
    <div>
      <Portada />
      <Contenidos clickEditarCard={clickEditarCard} />
      {editarcard && <ModalEditar editarcard={editarcard} closeModal={closeModal} onSubmit={handleSubmit} />}
    </div>
  );
};

export default Home;
