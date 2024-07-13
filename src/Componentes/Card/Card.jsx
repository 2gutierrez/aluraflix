import React from 'react';
import styles from './Card.module.css';
import iconBorrar from './borrar.png';
import iconEditar from './editar.png';

function Card({ id, capa, titulo, handleDelete, clickEditarCard }) {
  return (
    <div className={styles['card-container']}>
      <img src={capa} alt={titulo} className={styles['card-capa']} />
      <div className={styles['card-buttons']}>
        <button className={styles['card-button']} onClick={() => handleDelete(id)}>
          <img className={styles['iconCard']} src={iconBorrar} alt="Icono Borrar" />
        </button>
        <button className={styles['card-button']} onClick={clickEditarCard}>
          <img className={styles['iconCard']} src={iconEditar} alt="Icono Editar" />
        </button>
      </div>
    </div>
  );
}

export default Card;

