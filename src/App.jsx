import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componentes/Header/Header';
import Footer from "Componentes/Footer/Fotter"
import VideoList from './Componentes/VideoList/VideoList';
import NuevoVideoForm from './Componentes/NuevoVideoForm/NuevoVideoForm';
import Portada from 'Componentes/Portada/Portada';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Portada/>
        <main>
          <Routes>
            <Route path="/" element={<VideoList />} />
            <Route path="/nuevo" element={<NuevoVideoForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
