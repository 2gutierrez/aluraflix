import React, { useEffect, useState } from 'react';
import { fetchVideos } from "Componentes/api/api"
import Card from "Componentes/Card/Card"
import './VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState({
    frontend: [],
    backend: [],
    innovacionGestion: [],
  });

  useEffect(() => {
    const getVideos = async () => {
      const allVideos = await fetchVideos();
      console.log('All Videos:', allVideos); // Agrega este console.log para verificar los datos obtenidos
      const frontend = allVideos.filter(video => video.formacion === 'Frontend');
      const backend = allVideos.filter(video => video.formacion === 'Backend');
      const innovacionGestion = allVideos.filter(video => video.formacion === 'IyG');
      setVideos({ frontend, backend, innovacionGestion });
    };

    getVideos();
  }, []);

  return (
    <div className="videoList">
      <div className="section">
        <h2>Frontend</h2>
        <div className="cardContainer">
          {videos.frontend.map(video => (
            <Card key={video.id} {...video} />
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Backend</h2>
        <div className="cardContainer">
          {videos.backend.map(video => (
            <Card key={video.id} {...video} />
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Innovación y Gestión</h2>
        <div className="cardContainer">
          {videos.innovacionGestion.map(video => (
            <Card key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
