import React from "react";
import "../styles/conveniosCiudad.scss";

const ConvenioCard = ({ nombre, direccion, foto }) => {
  return (
    <div className="convenio-card shadow-sm">
      <div className="img-container">
        <img
          src={`/${foto}.jpg`}
          alt={nombre}
          className="convenio-img"
        />
        <div className="overlay">
          <p className="direccion">{direccion}</p>
        </div>
      </div>
      <div className="card-body text-center mt-2">
        <h5 className="card-title">{nombre}</h5>
      </div>
    </div>
  );
};

export default ConvenioCard;
