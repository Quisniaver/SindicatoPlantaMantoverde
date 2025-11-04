import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content align-items-start">
          {/* Columna 1: Logo e información */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h5 className="brand-name">Sindicato Planta Mantoverde</h5>
              <p className="brand-slogan">Trabajando unidos por un futuro mejor</p>
            </div>
            <div className="contact-info">
              <p>
                <i className="bi bi-geo-alt"></i>
                Dirección: Calle Yumbel 520, Copiapó. 
              </p>
              <p>
                <i className="bi bi-telephone"></i>
                Teléfono: +56 9 1234 5678
              </p>
              <p>
                <i className="bi bi-envelope"></i>
                Email: sindicatoplantan3@gmail.com
              </p>
              <div className="contact-link">
                <Link to="/contacto">Contacto</Link>
              </div>
            </div>
          </Col>

          {/* Columna 2: Enlaces rápidos */}
          <Col lg={2} md={6} className="mb-4">
            <h6>Nuestros Servicios</h6>
            <ul className="footer-links">
              <li><Link to="/servicios">Asesoría Legal</Link></li>
              <li><Link to="/servicios">Capacitaciones</Link></li>
              <li><Link to="/servicios">Bienestar Laboral</Link></li>
              <li><Link to="/servicios">Clínica</Link></li>
              <li><Link to="/servicios">Óptica</Link></li>
            </ul>
          </Col>

          {/* Columna 3: Servicios */}
          <Col lg={2} md={6} className="mb-4">
           
          </Col>

          {/* Columna 4: Mapa de ubicación */}
          <Col lg={4} md={6} className="footer-map mb-4">
            <h6>Ubicación</h6>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.416276532477!2d-70.34085775508643!3d-27.3627120514242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969804757d75921f%3A0x601ef2a83e7213f7!2sYumbel%20520%2C%201530561%20Copiap%C3%B3%2C%20Atacama!5e0!3m2!1ses!2scl!4v1762198339404!5m2!1ses!2scl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Sindicato Mantoverde"
                className="map-iframe"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Línea separadora */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <Row className="footer-bottom align-items-center">
          <Col md={6}>
            <p className="copyright mb-0">
              &copy; 2025 Sindicato Planta Mantoverde. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="legal-links">
              <Link to="/privacidad">Política de Privacidad</Link>
              <span className="mx-2">|</span>
              <Link to="/terminos">Términos de Uso</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;