import React, { useState } from 'react';
import { createVideo } from 'api';
import './NuevoVideoForm.css';

const NuevoVideoForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createVideo(formValues);
    if (result) {
      alert('Video creado con éxito');
      setFormValues({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: ''
      });
    } else {
      alert('Error al crear el video');
    }
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
    <form onSubmit={handleSubmit} className="nuevoVideoForm">
      <h1>Crear Nuevo Video</h1>
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
      <div className="form-buttons">
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleReset}>Limpiar</button>
      </div>
    </form>
  );
};

export default NuevoVideoForm;
