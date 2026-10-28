import { useState, useEffect } from 'react';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './FloatingCTA.scss';

function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

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
    <aside className={`floating-cta ${visible ? 'floating-cta--visible' : ''}`} aria-label={t.floatingCTA.contactAria}>
      <a 
        href="https://wa.me/4493483339" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-cta__btn floating-cta__btn--whatsapp"
        title={t.floatingCTA.whatsappAria}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a 
        href="#contact" 
        onClick={scrollToContact}
        className="floating-cta__btn floating-cta__btn--primary"
        title={t.floatingCTA.contactAria}
        aria-label={t.floatingCTA.contactAria}
      >
        <span className="floating-cta__status-dot"></span>
        <FaPaperPlane className="floating-cta__icon" />
        <span className="floating-cta__text">{t.floatingCTA.talk}</span>
      </a>
    </aside>
  );
}

export default FloatingCTA;
