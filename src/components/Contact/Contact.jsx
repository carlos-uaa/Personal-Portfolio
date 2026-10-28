import { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaLinkedin, FaGithub, 
  FaCopy, FaCheck, FaPaperPlane, FaMapMarkerAlt, FaClock 
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.scss';

function Contact() {
  const { t } = useLanguage();
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
          {t.contact.badge}
        </span>
        <h2 className="section-header__title">{t.contact.title}</h2>
        <p className="section-header__subtitle">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-card__main">
          <div className="contact-method contact-method--primary">
            <div className="contact-method__icon">
              <FaEnvelope />
            </div>
            <div className="contact-method__info">
              <span className="contact-method__label">{t.contact.emailLabel}</span>
              <a href={`mailto:${email}`} className="contact-method__value">
                {email}
              </a>
            </div>
            <button 
              className={`copy-btn ${copied ? 'copy-btn--copied' : ''}`}
              onClick={handleCopyEmail}
              aria-label={t.contact.copyBtn}
              title={t.contact.copyBtn}
            >
              {copied ? (
                <>
                  <FaCheck />
                  <span>{t.contact.copiedBtn}</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>{t.contact.copyBtn}</span>
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
                <span className="title">{t.contact.whatsappTitle}</span>
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
            <span>{t.contact.location}</span>
          </div>
          <div className="status-item">
            <FaClock className="status-icon" />
            <span>{t.contact.timezone}</span>
          </div>
          <div className="status-item status-item--availability">
            <span className="status-indicator"></span>
            <span>{t.contact.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
