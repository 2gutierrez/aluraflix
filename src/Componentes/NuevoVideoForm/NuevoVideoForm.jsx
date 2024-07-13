import React, { useState } from 'react';
import './NuevoVideoForm.css';
import BotonGuardar from './BotonGuardar.png';
import BotonLimpiar from './BotonLimpiar.png';

const NuevoVideoForm = ({ onSubmit, onClose }) => {
  const [formValues, setFormValues] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    video: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    onClose();
  };

  const handleReset = () => {
    setFormValues({
      titulo: '',
      categoria: '',
      imagen: '',
      video: '',
      descripcion: ''
    });
  };

  return (
    <div className="nuevo-video-form">
      <h1 className="titulo-modal">Nuevo Video</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formValues.titulo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              name="categoria"
              value={formValues.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="innovacion">Innovación y Gestión</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="imagen">Imagen</label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              value={formValues.imagen}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video</label>
            <input
              type="text"
              id="video"
              name="video"
              value={formValues.video}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row descripcion-container">
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formValues.descripcion}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit">
            <img src={BotonGuardar} alt="Guardar" />
          </button>
          <button type="button" className="limpiar" onClick={handleReset}>
            <img src={BotonLimpiar} alt="Limpiar" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NuevoVideoForm;
