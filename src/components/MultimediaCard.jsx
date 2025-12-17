import React, { useState } from "react";
import "../styles/multimediaCard.scss";

const MultimediaCard = ({ fotos = [] }) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  if (!fotos.length) return null;

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % fotos.length);
      setAnimating(false);
    }, 400);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
      setAnimating(false);
    }, 400);
  };

  return (
    <div className="slider-wrapper">

      <button className="slide-btn left" onClick={prev}>❮</button>

      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 60}%)` }}
        >
          {fotos.map((foto, i) => (
            <div
              key={i}
              className={`slide ${i === index ? "active" : ""}`}
            >
              {/* 🔴 USAR LA RUTA TAL CUAL VIENE */}
              <img src={foto} alt={`foto-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <button className="slide-btn right" onClick={next}>❯</button>

    </div>
  );
};

export default MultimediaCard;
