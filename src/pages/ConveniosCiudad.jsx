import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ConvenioData } from "../data/ConvenioData";
import ConvenioCard from "../components/ConveniosCard";
import "../styles/conveniosCiudad.scss";

function ConveniosCiudad() {
  const categorias = ["Serena", "Copiapó", "Chañaral"];

  return (
    <Container className="py-5 mt-5">
      <h1 className="text-center mb-4">Convenios por Ciudad</h1>
      <p className="text-center mb-5">
        Selecciona tu ciudad para ver los convenios locales disponibles.
      </p>

      {categorias.map((cat) => (
        <div key={cat} className="mb-5">
          <h2 className="mb-4 city-title">{cat}</h2>
          <Row>
            {ConvenioData.filter((item) => item.Category === cat).map(
              (convenio, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                  <ConvenioCard
                    nombre={convenio.nombre}
                    direccion={convenio.direccion}
                    foto={convenio.foto}
                    Category={convenio.Category}
                  />
                </Col>
              )
            )}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default ConveniosCiudad;
