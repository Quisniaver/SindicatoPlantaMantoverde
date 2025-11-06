import React from "react";

const DirectivaCard = ({ nombre, cargo , foto }) => {
  return (
    <div className="directiva-card">
      <div className="directiva-info">
  <h3>{nombre}</h3>
<p>{cargo}</p>
<img
  src={`/${foto}.jpg`}   // ✅ usa la carpeta /public/images/
  alt={nombre}
  className="foto-directiva"
/>

      </div>
    </div>
  );
};

export default DirectivaCard;
