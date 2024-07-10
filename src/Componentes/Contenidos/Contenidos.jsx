import React, { useEffect, useState } from 'react';
import styles from "./Contenidos.css";
import Card from "../Card";
import { fetchVideos } from "api";

const Contenidos = ({ clickEditarCard }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const allVideos = await fetchVideos();
      console.log('allVideos in Contenidos:', allVideos); // Verifica que allVideos sea un array
      if (Array.isArray(allVideos)) {
        setVideos(allVideos);
      } else {
        console.error('Expected an array but received:', allVideos);
      }
    };

    getVideos();
  }, []);

  const frontendVideos = videos.filter(video => video.formacion === "Frontend");
  const backendVideos = videos.filter(video => video.formacion === "Backend");
  const innovacionVideos = videos.filter(video => video.formacion === "IyG");

  return (
    <div className="contenidosContainer">
      <div className="contenido">
        <img className="label" src="/img/Frontend.png" alt="label-frontend" />
        <section className="cardContainer">
          {frontendVideos.map(video => (
            <Card {...video} key={video.id} clickEditarCard={clickEditarCard} />
          ))}
        </section>
      </div>

      <div className="contenido">
        <img className="label" src="/img/backend.png" alt="label-backend" />
        <section className="cardContainer">
          {backendVideos.map(video => (
            <Card {...video} key={video.id} clickEditarCard={clickEditarCard} />
          ))}
        </section>
      </div>

      <div className="contenido">
        <img className="label" src="/img/inovacion.png" alt="label-inovacion" />
        <section className="cardContainer">
          {innovacionVideos.map(video => (
            <Card {...video} key={video.id} clickEditarCard={clickEditarCard} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Contenidos;
