import React from "react";
import { multimediaData } from "../data/multimediaData";
import MultimediaCard from "../components/MultimediaCard";
import "../styles/multimedia.scss";

const Multimedia = () => {
  return (
    <div className="multimedia-page">
      <div className="multimedia-container">

        <h1 className="multimedia-title">Galería Multimedia</h1>

        {multimediaData.map((item, index) => (
          <MultimediaCard
            key={index}
            descripcion={item.descripcion}
            fotos={item.fotos}
          />
        ))}

      </div>
    </div>
  );
};

export default Multimedia;
