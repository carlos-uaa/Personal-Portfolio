import { useState, useEffect } from 'react';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import './FloatingCTA.scss';

function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={`floating-cta ${visible ? 'floating-cta--visible' : ''}`} aria-label="Contacto Rápido">
      <a 
        href="https://wa.me/4493483339" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-cta__btn floating-cta__btn--whatsapp"
        title="Enviar mensaje de WhatsApp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a 
        href="#contact" 
        onClick={scrollToContact}
        className="floating-cta__btn floating-cta__btn--primary"
        title="Ir a sección de Contacto"
        aria-label="Ir a Contacto"
      >
        <span className="floating-cta__status-dot"></span>
        <FaPaperPlane className="floating-cta__icon" />
        <span className="floating-cta__text">Hablemos</span>
      </a>
    </aside>
  );
}

export default FloatingCTA;
