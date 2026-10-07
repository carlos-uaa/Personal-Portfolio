import { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaLinkedin, FaGithub, 
  FaCopy, FaCheck, FaPaperPlane, FaMapMarkerAlt, FaClock 
} from 'react-icons/fa';
import './Contact.scss';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ing.gomez.hernandez.carlos@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-header__badge">
          <FaPaperPlane className="badge-icon" />
          Contacto Directo
        </span>
        <h2 className="section-header__title">¿Listo para construir algo extraordinario?</h2>
        <p className="section-header__subtitle">
          Estoy disponible para posiciones de tiempo completo (remoto o híbrido), consultoría técnica y proyectos estratégicos.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-card__main">
          <div className="contact-method contact-method--primary">
            <div className="contact-method__icon">
              <FaEnvelope />
            </div>
            <div className="contact-method__info">
              <span className="contact-method__label">Correo Electrónico Profesional</span>
              <a href={`mailto:${email}`} className="contact-method__value">
                {email}
              </a>
            </div>
            <button 
              className={`copy-btn ${copied ? 'copy-btn--copied' : ''}`}
              onClick={handleCopyEmail}
              aria-label="Copiar correo"
              title="Copiar al portapapeles"
            >
              {copied ? (
                <>
                  <FaCheck />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          <div className="contact-methods-grid">
            <a 
              href="https://wa.me/4493483339" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="quick-contact-btn quick-contact-btn--whatsapp"
            >
              <FaPhone className="btn-icon" />
              <div className="btn-text">
                <span className="title">WhatsApp Directo</span>
                <span className="subtitle">+52 (449) 348-3339</span>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/carlosgomezdev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="quick-contact-btn quick-contact-btn--linkedin"
            >
              <FaLinkedin className="btn-icon" />
              <div className="btn-text">
                <span className="title">LinkedIn</span>
                <span className="subtitle">carlosgomezdev</span>
              </div>
            </a>

            <a 
              href="https://github.com/carlos-uaa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="quick-contact-btn quick-contact-btn--github"
            >
              <FaGithub className="btn-icon" />
              <div className="btn-text">
                <span className="title">GitHub</span>
                <span className="subtitle">carlos-uaa</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-card__footer">
          <div className="status-item">
            <FaMapMarkerAlt className="status-icon" />
            <span>Aguascalientes, México</span>
          </div>
          <div className="status-item">
            <FaClock className="status-icon" />
            <span>Zona Horaria: GMT-6 (CST)</span>
          </div>
          <div className="status-item status-item--availability">
            <span className="status-indicator"></span>
            <span>Respuesta habitual: &lt; 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
