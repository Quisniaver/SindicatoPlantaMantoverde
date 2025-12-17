import React, { useEffect, useState } from "react";
import MultimediaCard from "../components/MultimediaCard";
import "../styles/Multimedia.scss";

const Multimedia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/content/multimedia.json")
      .then((res) => res.json())
      .then((json) => setData(json.items))
      .catch((err) => console.error("Error cargando multimedia:", err));
  }, []);

  return (
    <div className="multimedia-page">
      <h1 className="multimedia-title">Galería de Fotos</h1>

      {data.map((item, index) => (
        <div key={index} className="multimedia-section">
          <h2 className="multimedia-subtitle">{item.descripcion}</h2>
          <MultimediaCard fotos={item.fotos} />
        </div>
      ))}
    </div>
  );
};

export default Multimedia;
