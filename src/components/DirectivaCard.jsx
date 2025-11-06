import React from "react";

const DirectivaCard = ({ nombre, cargo }) => {
  return (
    <div className="directiva-card">
      <div className="directiva-info">
        <h3>{nombre}</h3>
        <p>{cargo}</p>
      </div>
    </div>
  );
};

export default DirectivaCard;
