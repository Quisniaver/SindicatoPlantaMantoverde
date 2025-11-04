import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/navbar.scss";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom shadow-sm py-2" fixed="top">
      <Container>
        {/* 🔹 Logo y nombre */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo Sindicato"
            className="logo me-2"
          />
          <span className="brand-text fw-semibold">
            Sindicato Mantoverde
          </span>
        </Navbar.Brand>

        {/* 🔹 Botón de colapso para móviles */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* 🔹 Enlaces */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/noticias">Noticias</Nav.Link>
            <Nav.Link as={Link} to="/documentos">Documentos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
