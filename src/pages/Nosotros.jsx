import React from "react";
import DirectivaCard from "../components/DirectivaCard";
import { directivaData } from "../data/directivaData";
import "../styles/nosotros.scss";

const Nosotros = () => {
  return (
    <section className="nosotros">
      <div className="nosotros-content">
        {/* 🟣 Sección "Quiénes Somos" */}
        <div className="quienes-somos">
          <h1>Quiénes Somos</h1>
          <p>
            Somos una organización fundada el <strong>10 de julio de 2009</strong>,
            la cual representa a trabajadores de las áreas de Planta Óxido,
            Planta de Sulfuros y Mina de faena Mantoverde de la empresa
            <strong> Capstone Copper</strong>, ubicada en Quebrada de Guamanga km 25
            Ruta C-225 s/n, comuna de <strong>Chañaral</strong>.
          </p>
        </div>

        {/* 🟣 Sección Directiva */}
        <div className="directiva-section">
          <h2>Directiva</h2>
          <div className="directiva-grid">
            {directivaData.map((persona, index) => (
              <DirectivaCard
                key={index}
                nombre={persona.nombre}
                cargo={persona.cargo}
                foto={persona.foto}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
