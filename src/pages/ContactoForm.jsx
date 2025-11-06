// src/components/ContactForm.jsx
import { useState } from 'react';
import '../styles/ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simular envío del formulario
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        });
      } catch (error) {
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h2>Contáctanos</h2>
        <p>Estamos aquí para ayudarte. Completa el formulario y te responderemos a la brevedad.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={errors.nombre ? 'error' : ''}
              placeholder="Ingresa tu nombre completo"
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="tu.email@ejemplo.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+34 123 456 789"
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
            >
              <option value="">Selecciona un asunto</option>
              <option value="consulta">Consulta general</option>
              <option value="presupuesto">Solicitud de presupuesto</option>
              <option value="soporte">Soporte técnico</option>
              <option value="colaboracion">Propuesta de colaboración</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className={errors.mensaje ? 'error' : ''}
            placeholder="Describe tu consulta o mensaje..."
            rows="6"
          />
          {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
        </div>

        <button 
          type="submit" 
          className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Enviando...
            </>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;