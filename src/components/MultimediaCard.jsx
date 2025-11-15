import React, { useState } from "react";
import "../styles/multimediaCard.scss";

const MultimediaCard = ({ descripcion, fotos = [] }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % fotos.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <div className="multimedia-row">

      {/* SLIDE DE IMÁGENES */}
      <div className="multimedia-slider">

        <button className="slide-btn left" onClick={prevSlide}>❮</button>

        <img
          src={`/${fotos[index]}.jpg`}
          alt={descripcion}
          className="multimedia-img"
        />

        <button className="slide-btn right" onClick={nextSlide}>❯</button>

      </div>

      {/* TEXTO A LA DERECHA */}
      <div className="multimedia-text">
        <h2>{descripcion}</h2>
      </div>

    </div>
  );
};

export default MultimediaCard;
