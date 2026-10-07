import { FaArrowUp, FaCode } from 'react-icons/fa';
import './Footer.scss';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__brand">
            <span className="footer__logo-icon"><FaCode /></span>
            <span className="footer__brand-text">Ing. Carlos Gómez</span>
          </div>
          <p className="footer__tagline">
            Middle Fullstack Developer • Construyendo soluciones empresariales de alto valor.
          </p>
        </div>

        <div className="footer__actions">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Carlos Antonio Gómez Hernández.
          </p>

          <button onClick={scrollToTop} className="footer__top-btn" aria-label="Volver arriba">
            <span>Inicio</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
