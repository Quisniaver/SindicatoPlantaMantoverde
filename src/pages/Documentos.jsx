import React from "react";
import "../styles/documentos.scss";

function Estatutos() {
  return (
    <div className="doc-wrapper container">
      <h2 className="doc-title">Documentos</h2>

      <div className="doc-card">
        <img
          src="src/assets/logo.jpg"
          alt="Estatutos"
          className="doc-icon"
        />

        <h3 className="doc-name">Estatutos del Sindicato</h3>

        <a href="/docs/estatutos.pdf" download className="download-btn">
          Descargar
        </a>
      </div>
    </div>
  );
}

export default Estatutos;
