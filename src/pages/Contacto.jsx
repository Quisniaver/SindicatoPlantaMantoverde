function Contacto() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" placeholder="nombre@correo.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
