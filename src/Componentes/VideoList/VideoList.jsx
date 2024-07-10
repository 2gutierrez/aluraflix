import React, { useEffect, useState } from 'react';
import { fetchVideos, updateVideo, deleteVideo } from 'api';
import ModalEditar from "Componentes/ModalEditar/index"
import Card from '../Card';
import './VideoList.css';
import LabelFrontEnd from "Componentes/VideoList/Frontend.png"
import LabelBackEnd from "Componentes/VideoList/backend.png"
import LabelInovacion from "Componentes/VideoList/inovacion.png"

const VideoList = () => {
  const [videos, setVideos] = useState({
    frontend: [],
    backend: [],
    innovacionGestion: [],
  });
  const [editarcard, setEditarCard] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      const allVideos = await fetchVideos();
      if (Array.isArray(allVideos)) {
        const frontend = allVideos.filter(video => video.formacion === 'Frontend');
        const backend = allVideos.filter(video => video.formacion === 'Backend');
        const innovacionGestion = allVideos.filter(video => video.formacion === 'IyG');
        setVideos({ frontend, backend, innovacionGestion });
      } else {
        console.error('Expected an array but received:', allVideos);
      }
    };

    getVideos();
  }, []);

  const handleEdit = async (updatedVideo) => {
    const result = await updateVideo(updatedVideo);
    if (result) {
      const updatedVideos = {
        frontend: videos.frontend.map(video => video.id === result.id ? result : video),
        backend: videos.backend.map(video => video.id === result.id ? result : video),
        innovacionGestion: videos.innovacionGestion.map(video => video.id === result.id ? result : video),
      };
      setVideos(updatedVideos);
      setEditarCard(null);
    } else {
      console.error('Failed to update video');
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteVideo(id);
    if (result !== null) {
      setVideos(prevVideos => ({
        frontend: prevVideos.frontend.filter(video => video.id !== id),
        backend: prevVideos.backend.filter(video => video.id !== id),
        innovacionGestion: prevVideos.innovacionGestion.filter(video => video.id !== id),
      }));
    } else {
      alert('Error al eliminar el video');
    }
  };

  const clickEditarCard = (id) => {
    const videoToEdit = [...videos.frontend, ...videos.backend, ...videos.innovacionGestion].find(video => video.id === id);
    setEditarCard(videoToEdit);
  };

  const closeModal = () => {
    setEditarCard(null);
  };

  return (
    <div className="videoList">
      <div className="section frontend">
        <img src={LabelFrontEnd} alt="Label Front End" />
        <ul>
          {videos.frontend.map(video => (
            <li key={video.id}>
              <Card {...video} clickEditarCard={clickEditarCard} handleDelete={handleDelete} />
            </li>
          ))}
        </ul>
      </div>
      <div className="section backend">
      <img src={LabelBackEnd} alt="Label Back End" />
        <ul>
          {videos.backend.map(video => (
            <li key={video.id}>
              <Card {...video} clickEditarCard={clickEditarCard} handleDelete={handleDelete} />
            </li>
          ))}
        </ul>
      </div>
      <div className="section innovacionGestion">
      <img src={LabelInovacion} alt="Label Inovacion" />
        <ul>
          {videos.innovacionGestion.map(video => (
            <li key={video.id}>
              <Card {...video} clickEditarCard={clickEditarCard} handleDelete={handleDelete} />
            </li>
          ))}
        </ul>
      </div>

      {editarcard && (
        <ModalEditar editarcard={editarcard} closeModal={closeModal} onSubmit={handleEdit} />
      )}
    </div>
  );
};

export default VideoList;
