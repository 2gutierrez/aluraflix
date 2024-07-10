import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Componentes/Footer/Fotter';
import Header from './Componentes/Header/Header';
import Portada from './Componentes/Portada/Portada';
import VideoList from './Componentes/VideoList/VideoList';

const App = () => {
  return (
    <div className='div-container'>
      <Header />
      <Portada />
      <main>
        <Outlet /> {/* Aquí se renderizan las subrutas */}
        <VideoList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
