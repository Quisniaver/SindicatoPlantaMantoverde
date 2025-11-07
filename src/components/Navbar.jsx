import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/navbar.scss";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom shadow-sm py-2" fixed="top">
      <Container>
        {/* 🔹 Logo y nombre */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo Sindicato" className="logo me-2" />
          <span className="brand-text fw-semibold">Sindicato Mantoverde</span>
        </Navbar.Brand>

        {/* 🔹 Botón de colapso para móviles */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* 🔹 Enlaces */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>

            <NavDropdown title="Convenios y Beneficios" id="convenios-dropdown">
              <NavDropdown.Item as={Link} to="/Clinica">
                Clínica Dental
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Optica">
                Óptica
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ConveniosCiudad">
                Convenios por Ciudad
              </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown title="Multimedia" id="multimedia-dropdown">
              <NavDropdown.Item as={Link} to="/GaleriaFotos">
                Galeria Fotos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/GaleriaVideos">
                Galeria Videos
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Noticias">Noticias</Nav.Link>
            <Nav.Link as={Link} to="/Documentos">Documentos</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
