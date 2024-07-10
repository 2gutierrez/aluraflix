import React from 'react';
import './Portada.css';
import bannerImage from "BannerMain.png"

const Portada = () => {
  return (
    <div className="portada">
      <img src={bannerImage} alt="Banner Principal" className="banner-image" />
    </div>
  );
};

export default Portada;
