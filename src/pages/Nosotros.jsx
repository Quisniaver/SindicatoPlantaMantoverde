import React from "react";
import { Carousel } from "react-bootstrap";
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
            Desde el <strong>10 de julio de 2009</strong>, nuestro sindicato ha
            representado con orgullo a los trabajadores de{" "}
            <strong>Planta Óxido</strong>, <strong>Planta de Sulfuros</strong> y{" "}
            <strong>Mina</strong> de la faena <strong>Mantoverde</strong>, perteneciente
            a <strong>Capstone Copper</strong>.
            <br />
            <br />
            Con sede en{" "}
            <strong>
              Quebrada de Guamanga, km 25, Ruta C-225 s/n, comuna de Chañaral
            </strong>
            , somos una comunidad unida por la fuerza del trabajo, el compromiso y la
            búsqueda constante de un <strong>futuro mejor para todos</strong>.
            <br />
            <br />  

            Como sindicato, aspiramos a seguir siendo un referente de participación, diálogo y progreso, 
            fortaleciendo los lazos con la comunidad y contribuyendo al desarrollo sostenible de nuestra región.
          </p>
        </div>

        {/* 🎠 Carrusel debajo del texto */}
        <Carousel fade interval={3000} className="nosotros-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/historia1.png"
              alt="Foto grupal sindicato"
            />
            <Carousel.Caption>
              <h5>Nuestros primeros pasos en Mantoverde</h5>
              <p>Esta fotografía tiene una historia especial: fue tomada durante los
      primeros días de ingreso a Mantoverde, en el año 1995. 
      <br />
       Marca el inicio de una trayectoria de esfuerzo, compromiso y crecimiento. </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/luisvega.jpg"
              alt="Actividad sindical"
            />
            <Carousel.Caption>
              <h5>Compromiso y Liderazgo</h5>
              <p>Defendiendo los derechos de nuestros trabajadores.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/grupal.jpg"
              alt="Evento sindical"
            />
            <Carousel.Caption>
              <h5>Fiesta de Fin de año</h5>
              <p>Porque unidos somos más fuertes.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* 👥 Sección Directiva */}
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
