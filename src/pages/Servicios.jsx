function Servicios() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-light rounded shadow-sm">
            <h4>Consultoría</h4>
            <p>Brindamos asesoría en innovación y transformación digital.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-light rounded shadow-sm">
            <h4>Automatización</h4>
            <p>Desarrollamos sistemas inteligentes para optimizar procesos.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 bg-light rounded shadow-sm">
            <h4>Soporte Técnico</h4>
            <p>Ofrecemos asistencia integral y mantenimiento tecnológico.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
