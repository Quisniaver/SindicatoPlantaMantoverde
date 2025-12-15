import React from "react";
import { multimediaData } from "../data/multimediaData";
import MultimediaCard from "../components/MultimediaCard";
import "../styles/multimedia.scss";

const Multimedia = () => {
  return (
    <div className="multimedia-page">

      <h1 className="multimedia-title">Galería de Fotos</h1>

      {multimediaData.map((item, index) => (
        <div key={index} className="multimedia-section">
          <h2 className="multimedia-subtitle">{item.descripcion}</h2>

          <MultimediaCard fotos={item.fotos} />
        </div>
      ))}

    </div>
  );
};

export default Multimedia;
