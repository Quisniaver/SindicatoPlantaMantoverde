import React from "react";
import { Container } from "react-bootstrap";

function ConveniosCiudad() {
  return (
    <Container className="py-5 mt-5 text-center">
      <h1 className="mb-4">Convenios por Ciudad</h1>
      <p>Selecciona tu ciudad para ver los convenios locales disponibles.</p>
    </Container>
  );
}

export default ConveniosCiudad;
