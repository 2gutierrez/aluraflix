import React, { useEffect, useState, useContext } from 'react';
import styles from "./Contenidos.css";
import Card from "../Card/Card";
import { fetchVideos } from "Componentes/api/api"
import { useOutletContext } from 'react-router-dom';

const Contenidos = () => {
    const { clickEditarCard, clickNuevoVideo } = useOutletContext();
    const [videos, setVideos] = useState({
        frontend: [],
        backend: [],
        innovacion: []
    });

    useEffect(() => {
        const getVideos = async () => {
            const allVideos = await fetchVideos();
            console.log('All Videos:', allVideos);
            const frontend = allVideos.filter(video => video.formacion === "Frontend");
            const backend = allVideos.filter(video => video.formacion === "Backend");
            const innovacion = allVideos.filter(video => video.formacion === "IyG");

            setVideos({ frontend, backend, innovacion });
        };

        getVideos();
    }, []);

    return (
        <div className="contenidosContainer">
            <div className="contenido">
                <img className="label" src="/img/Frontend.png" alt="label-frontend" />
                <section className="cardContainer">
                    {videos.frontend.map(video => (
                        <Card {...video} key={video.id} clickEditarCard={clickEditarCard} />
                    ))}
                </section>
            </div>

            <div className="contenido">
                <img className="label" src="/img/backend.png" alt="label-backend" />
                <section className="cardContainer">
                    {videos.backend.map(video => (
                        <Card {...video} key={video.id} clickEditarCard={clickEditarCard} />
                    ))}
                </section>
            </div>

            <div className="contenido">
                <img className="label" src="/img/inovacion.png" alt="label-inovacion" />
                <section className="cardContainer">
                    {videos.innovacion.map(video => (
                        <Card {...video} key={video.id} clickEditarCard={clickEditarCard} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Contenidos;
