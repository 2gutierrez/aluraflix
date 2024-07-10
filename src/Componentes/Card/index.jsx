import React from 'react';
import styles from './Card.module.css';
import iconBorrar from './borrar.png';
import iconEditar from './editar.png';

function Card({ id, capa, titulo, clickEditarCard, handleDelete }) {
  console.log('Card props:', { id, capa, titulo, clickEditarCard, handleDelete });

  return (
    <div className={`${styles.container} card`}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <div className={styles.botonContainer}>
        <button className={styles.botoncard} onClick={handleDelete}>
          <img className="iconCard" src={iconBorrar} alt="Icono Borrar" />
        </button>
        <button className={styles.botoncard} onClick={clickEditarCard}>
          <img className="iconCard" src={iconEditar} alt="Icono Editar" />
        </button>
      </div>
    </div>
  );
}

export default Card;

