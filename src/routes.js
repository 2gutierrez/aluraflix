import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Componentes/Home/Home';
import NuevoVideo from './Componentes/NuevoVideo/NuevoVideo';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="nuevo-video" element={<NuevoVideo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;


