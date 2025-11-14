import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/noticias.scss";
import "../styles/hero.scss";

// 🔹 Imágenes del carrusel
import slide1 from "../assets/logo.jpg";
import slide2 from "../assets/logo.jpg";
import slide3 from "../assets/logo.jpg";

function Hero() {
  return (
    <>
      {/*  Carrusel principal */}
      <div className="navbar-slideshow">
        <Carousel fade controls={false} indicators interval={5000}>
          <Carousel.Item>
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${slide1})`, height: "70vh" }}
            >
              <div className="slide-overlay">
                <Container>
                  <div className="slide-content">
                    <h2>Bienvenidos al Sindicato</h2>
                    <p>Trabajando unidos por tus derechos laborales</p>
                    <Link to="/nosotros" className="btn btn-slide">
                      Conócenos
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${slide2})`, height: "70vh" }}
            >
              <div className="slide-overlay">
                <Container>
                  <div className="slide-content">
                    <h2>Servicios para Asociados</h2>
                    <p>Asesoría legal, capacitación y beneficios exclusivos</p>
                    <Link to="/servicios" className="btn btn-slide">
                      Ver Servicios
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${slide3})`, height: "70vh" }}
            >
              <div className="slide-overlay">
                <Container>
                  <div className="slide-content">
                    <h2>Únete a Nuestra Comunidad</h2>
                    <p>Juntos logramos mejores condiciones laborales</p>
                    <Link to="/contacto" className="btn btn-slide">
                      Contáctanos
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

            {/* Sección informativa debajo del carrusel */}
      <section>
        <Container className="hero">
          <div className="hero-content">
            <h1>Sindicato Planta Mantoverde</h1>
            <p>
              Trabajando unidos por el bienestar de nuestros asociados.
              Representación, asesoría y apoyo para todos los trabajadores.
            </p>
            <div className="hero-buttons">
              <Link to="/servicios" className="btn-primary">
                Nuestros Servicios
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Contáctanos
              </Link>
            </div>
          </div>
        </Container>
      </section>


      {/* 🔹 Noticias debajo del Hero */}
      <section className="noticias-section">
        <Container>
          <h2 className="noticias-title">Últimas Noticias</h2>

          <div className="noticias-grid">
            {/* Card 1 */}
            <div className="card-noticia">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Noticia"
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">
                  Nuevo Convenio para los Trabajadores
                </h3>
                <p className="card-text">
                  Se firmó un acuerdo que mejora beneficios en salud y educación.
                </p>
                <Link to="/noticias" className="card-btn">
                  Leer más
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-noticia">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Noticia"
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">Capacitación 2025</h3>
                <p className="card-text">
                  Nuevos cursos técnicos gratuitos para asociados.
                </p>
                <Link to="/noticias" className="card-btn">
                  Leer más
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-noticia">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Noticia"
                className="card-img"
              />
              <div className="card-body">
                <h3 className="card-title">Reunión con Directiva</h3>
                <p className="card-text">
                  Se abordaron mejoras en transporte y seguridad laboral.
                </p>
                <Link to="/noticias" className="card-btn">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hero;
