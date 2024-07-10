import React from 'react';
import styles from './Card.module.css';
import iconBorrar from './borrar.png';
import iconEditar from './editar.png';

function Card({ id, capa, titulo, clickEditarCard, handleDelete }) {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <div className={styles.botonContainer}>
        <button className={styles.botoncard} onClick={() => handleDelete(id)}>
          <img className={styles.iconCard} src={iconBorrar} alt="Icono Borrar" />
        </button>
        <button className={styles.botoncard} onClick={() => clickEditarCard(id)}>
          <img className={styles.iconCard} src={iconEditar} alt="Icono Editar" />
        </button>
      </div>
    </div>
  );
}

export default Card;

