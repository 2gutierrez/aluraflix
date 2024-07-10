import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from "./Componentes/Home/Home"
import NuevoVideo from "Componentes/NuevoVideo/NuevoVideo"
import Contenidos from './Componentes/Contenidos/Contenidos';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="contenidos" element={<Contenidos />} />
          <Route path="nuevo-video" element={<NuevoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

