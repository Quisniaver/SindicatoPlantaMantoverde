import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import DirectivaCard from "../components/DirectivaCard";
import { directivaData } from "../data/directivaData";
import "../styles/Nosotros.scss";

const Nosotros = () => {
  const [activeSection, setActiveSection] = useState("nosotros");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["nosotros", "carrusel", "vision-mision", "directiva"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="nosotros">
      <div className="nosotros-content">

        {/* 🟣 Sección "Quiénes Somos" */}
        <div 
          id="nosotros" 
          className={`quienes-somos ${activeSection === "nosotros" ? "active" : ""}`}
        >
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
        <div 
          id="carrusel" 
          className={`carousel-section ${activeSection === "carrusel" ? "active" : ""}`}
        >
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
        Marca el inicio de una trayectoria de esfuerzo, compromiso y crecimiento.</p>
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
        </div>

        {/* 🎯 Sección Visión y Misión */}
        <div 
          id="vision-mision" 
          className={`vision-mision-section ${activeSection === "vision-mision" ? "active" : ""}`}
        >
          <div className="vision-section">
            <h2>Visión</h2>
            <p>
              Nuestra visión general es ser una organización altamente comprometida
              con el bienestar de sus socios o socias, además de ser proactiva,
              eficiente e independiente.
            </p>
            <ul>
              <li>Representar a los afiliados en las diversas instancias de la negociación colectiva, suscribir los instrumentos colectivos y velar por su cumplimiento</li>
              <li>Representar a los asociados en el ejercicio de sus derechos derivados de los contratos individuales de trabajo, cuando sean requeridos por los asociados</li>
              <li>Velar por el cumplimiento de las leyes del trabajo o de la seguridad social, denunciar sus infracciones ante las autoridades administrativas o judiciales</li>
              <li>Actuar como parte en los juicios o reclamaciones, de carácter judicial o administrativo que tengan por objeto denunciar prácticas desleales y/o antisindicales</li>
              <li>Prestar ayuda a sus asociados y promover la cooperación mutua entre los mismos, estimular su convivencia humana e integral y proporcionarles recreación</li>
              <li>Promover la educación gremial técnica y general de sus asociados</li>
              <li>Canalizar inquietudes y necesidades de integración</li>
              <li>Propender al mejoramiento de sistemas de prevención de riesgos de accidentes del trabajo y enfermedades profesionales</li>
              <li>Constituir, concurrir a la constitución o asociarse a mutualidades, fondos u otros servicios y participar en ellos</li>
              <li>Constituir, concurrir a la constitución o asociarse a instituciones de carácter previsional o de salud, cualquiera sea su naturaleza jurídica y participar en ellas</li>
              <li>Propender al mejoramiento de la calidad del empleo</li>
              <li>En general, realizar todas aquellas actividades contempladas en los estatutos y que no estuvieren prohibidas por ley</li>
              <li>En resumen, nuestra visión es ser un sindicato con autoridad y poder</li>
            </ul>
          </div>

          <div className="mision-section">
            <h2>Misión</h2>
            <p>
              La misión de nuestra organización tiene como objetivo principal y
              primordial el bienestar de todos nuestros afiliados defendiendo sus
              derechos y procurar ampliarlos.
            </p>
            <p>
              Esta misión se cumplirá en la medida que seamos una organización
              fortalecida en el tiempo y lo lograremos con equidad, justicia e
              imparcialidad laboral y esto se llevará a cabo fomentando, creando y
              mediando con un diálogo constructivo y participativo entre empleador y
              trabajadores.
            </p>
          </div>
        </div>

        {/* 👥 Sección Directiva */}
        <div 
          id="directiva" 
          className={`directiva-section ${activeSection === "directiva" ? "active" : ""}`}
        >
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