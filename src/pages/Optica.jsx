import PhotoCarousel from '../components/PhotoCarousel'
import '../styles/Optica.scss'

function Optica() {
  const contacto = {
    direccion: "Edificio Portal Amunategui 489 local 106, La Serena",
    telefono: "+56 9 8575 0988",
    horario: "Lunes a Viernes: 9:00 - 19:00 hrs, Sábados: 10:00 - 14:00 hrs"
  };

  return (
    <>
      {/* Carrusel de fotos */}
      <PhotoCarousel />

      {/* Contenido principal */}
      <main className="main-content">
        <div className="container">
          <div className="content-wrapper">

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Información del Convenio</h3>
                <div className="info-item">
                  <strong>Destinatarios:</strong>
                  <p>Socios y cargas familiares del sindicato</p>
                </div>
                <div className="info-item">
                  <strong>Contacto:</strong>
                  <p>David Zúñiga González</p>
                  <p>Tecnólogo Médico en Oftalmología</p>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Ubicación</h3>
                <p>{contacto.direccion}</p>
                <div className="map-container">
                  <iframe
                    title="Mapa Óptica Norte Visión"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.164239747751!2d-71.25358308480172!3d-29.90779958192126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691caf7d58b3aef%3A0xf2e71b7f3790d9b5!2sPortal%20Amun%C3%A1tegui%20489%2C%20La%20Serena%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1731009999999!5m2!1ses!2scl"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Contacto Rápido</h3>
                <div className="contact-sidebar">
                  <div className="contact-sidebar-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <strong>Teléfono</strong>
                      <p>{contacto.telefono}</p>
                    </div>
                  </div>
                  <div className="contact-sidebar-item">
                    <span className="contact-icon">⏰</span>
                    <div>
                      <strong>Horario</strong>
                      <p>{contacto.horario}</p>
                    </div>
                  </div>
                  <div className="contact-sidebar-item">
                    <span className="contact-icon">📸</span>
                    <div>
                      <strong>Instagram</strong>
                      <p>
                        <a 
                          href="https://www.instagram.com/opticanortevision"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          @opticanortevision
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Sección principal: Beneficios */}
            <div className="content-area">
              <h2>Beneficios del Convenio</h2>

              <div className="benefits-text">
                <p>
                  En <strong>Óptica Norte Visión</strong>, nuestros socios y sus familias pueden acceder 
                  a una <strong>atención gratuita</strong> con el Tecnólogo Médico en Oftalmología y 
                  Optometría <strong>David Zúñiga González</strong>, siempre que confeccionen sus lentes 
                  el mismo día en nuestra óptica.
                </p>

                <p>
                  Además, ofrecemos un <strong>20% de descuento</strong> en recetas completas, 
                  incluyendo <strong>armazón y cristales</strong>. Recibirás tu 
                  <strong> boleta inmediata</strong> para facilitar reembolsos sin demoras.
                </p>

                <p>
                  Si lo deseas, también puedes incluir <strong>lentes de sol</strong> dentro del total 
                  de tu compra. Y para tu comodidad, contamos con un 
                  <strong> estacionamiento exclusivo</strong> para nuestros clientes.
                </p>

                <p>
                  Finalmente, nuestros socios tienen la posibilidad de acceder a un 
                  <strong> descuento por planilla en tres cuotas</strong>, respaldado por el sindicato, 
                  brindando así una alternativa cómoda y segura para cuidar tu salud visual.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Optica;
