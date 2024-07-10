import { useEffect, useState } from "react";
import "./EditarCard.css";
import BotonGuardar from "./BotonGuardar.png";
import BotonLimpiar from "./BotonLimpiar.png";

const EditarCard = ({ onSubmit, onClose }) => {
  const [formValues, setFormValues] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    video: '',
    descripcion: ''
  });

  useEffect(() => {
    // Si editarcard tiene valores, llenamos el formulario con ellos
    if (onSubmit) {
      setFormValues({
        titulo: onSubmit.titulo || '',
        categoria: onSubmit.categoria || '',
        imagen: onSubmit.imagen || '',
        video: onSubmit.video || '',
        descripcion: onSubmit.descripcion || ''
      });
    }
  }, [onSubmit]);

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
    <form onSubmit={handleSubmit} className="editarcard">
      <h1 className="tituloModal">EDITAR CARD:</h1>
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
        <button type="submit">
          <img src={BotonGuardar} alt="BotonGuardar" />
        </button>
        <button type="button" onClick={handleReset}>
          <img src={BotonLimpiar} alt="BotonLimpiar" />
        </button>
      </div>
    </form>
  );
};

export default EditarCard;
