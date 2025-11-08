// src/App.jsx
import { useState } from 'react'
import PhotoCarousel from '../components/PhotoCarousel'
import '../styles/Optica.scss'

function Optica() {
  const [activeTab, setActiveTab] = useState('beneficios')

const beneficios = [
  'Recibe una <strong>atención gratuita</strong> con nuestro Tecnólogo Médico en Oftalmología y Optometría, <strong>David Zúñiga González</strong>, al confeccionar tus lentes el mismo día en nuestra óptica.',
  'Obtén un <strong>20% de descuento</strong> en tu receta completa: armazón + cristales.',
  '<strong>Boleta inmediata</strong> para que puedas realizar tus reembolsos sin demoras.',
  'Incluye también <strong>lentes de sol</strong> dentro del total de tu compra si lo deseas.',
  'Disfruta de un <strong>estacionamiento exclusivo</strong> para nuestros clientes.',
  'Accede a la opción de <strong>descuento por planilla en tres cuotas</strong>, con el respaldo del sindicato para mayor comodidad.'
];



  const contacto = {
    direccion: "Edificio Portal Amunategui 489 local 106, La Serena",
    telefono: "+56 9 8575 0988",
    horario: "Lunes a Viernes: 9:00 - 19:00 hrs, Sábados: 10:00 - 14:00 hrs"
  }


  return (
    <>
      {/* Photo Carousel Section */}
      <PhotoCarousel />

      {/* Main Content */}
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
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>

              {/* Información de Contacto en Sidebar */}
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

            {/* Main Content Area */}
            <div className="content-area">
              {/* Tabs - Solo Beneficios y Condiciones */}
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'beneficios' ? 'active' : ''}`}
                  onClick={() => setActiveTab('beneficios')}
                >
                  Beneficios
                </button>
                <button 
                  className={`tab ${activeTab === 'condiciones' ? 'active' : ''}`}
                  onClick={() => setActiveTab('condiciones')}
                >
                  Condiciones
                </button>
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === 'beneficios' && (
                  <div className="benefits-grid">
                    {beneficios.map((beneficio, index) => (
                      <div key={index} className="benefit-card">
                        <div className="benefit-icon">
                          {index === 0 && '🆓'}
                          {index === 1 && '💰'}
                          {index === 2 && '🧾'}
                          {index === 3 && '🕶️'}
                          {index === 4 && '🅿️'}
                          {index === 5 && '📋'}
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: beneficio }}></p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'condiciones' && (
                  <div className="conditions">
                    <h3>Condiciones del Convenio</h3>
                    <div className="condition-list">
                      <div className="condition-item">
                        <h4>📋 Documentación Requerida</h4>
                        <ul>
                          <li>Carnet de identidad</li>
                          <li>Certificado de socio activo del sindicato</li>
                          <li>Receta médica actualizada (si aplica)</li>
                        </ul>
                      </div>
                      <div className="condition-item">
                        <h4>⏰ Horarios de Atención</h4>
                        <p>{contacto.horario}</p>
                      </div>
                      <div className="condition-item">
                        <h4>💳 Formas de Pago</h4>
                        <ul>
                          <li>Efectivo</li>
                          <li>Tarjetas de débito y crédito</li>
                          <li>Descuento por planilla (solo para convenios)</li>
                        </ul>
                      </div>
                      <div className="condition-item">
                        <h4>📍 Ubicación y Estacionamiento</h4>
                        <ul>
                          <li>{contacto.direccion}</li>
                          <li>Estacionamiento exclusivo para clientes</li>
                          <li>Fácil acceso y ubicación céntrica</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Optica
