import React, { useEffect, useState } from 'react';
import { fetchVideos, updateVideo, deleteVideo } from 'api';
import ModalEditar from "Componentes/ModalEditar/index"
import Card from "Componentes/Card/index"

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
    console.log('Deleting video with id:', id);
    const result = await deleteVideo(id);
    console.log('Delete result:', result);
    if (result) {
      const updatedVideos = {
        frontend: videos.frontend.filter(video => video.id !== id),
        backend: videos.backend.filter(video => video.id !== id),
        innovacionGestion: videos.innovacionGestion.filter(video => video.id !== id),
      };
      setVideos(updatedVideos);
    } else {
      console.error('Failed to delete video');
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
    <div>
      <h2>Frontend</h2>
      <ul>
        {videos.frontend.map(video => (
          <li key={video.id}>
            <Card
              id={video.id}
              capa={video.capa}
              titulo={video.titulo}
              clickEditarCard={() => clickEditarCard(video.id)} // Verifica que la función se pase correctamente
              handleDelete={() => handleDelete(video.id)} // Verifica que la función se pase correctamente
            />
          </li>
        ))}
      </ul>

      <h2>Backend</h2>
      <ul>
        {videos.backend.map(video => (
          <li key={video.id}>
            <Card
              id={video.id}
              capa={video.capa}
              titulo={video.titulo}
              clickEditarCard={() => clickEditarCard(video.id)} // Verifica que la función se pase correctamente
              handleDelete={() => handleDelete(video.id)} // Verifica que la función se pase correctamente
            />
          </li>
        ))}
      </ul>

      <h2>Innovación y Gestión</h2>
      <ul>
        {videos.innovacionGestion.map(video => (
          <li key={video.id}>
            <Card
              id={video.id}
              capa={video.capa}
              titulo={video.titulo}
              clickEditarCard={() => clickEditarCard(video.id)} // Verifica que la función se pase correctamente
              handleDelete={() => handleDelete(video.id)} // Verifica que la función se pase correctamente
            />
          </li>
        ))}
      </ul>

      {editarcard && (
        <ModalEditar editarcard={editarcard} closeModal={closeModal} onSubmit={handleEdit} />
      )}
    </div>
  );
};

export default VideoList;
