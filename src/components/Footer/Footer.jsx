import { FaArrowUp, FaCode } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.scss';

function Footer() {
  const { t } = useLanguage();

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
            {t.footer.tagline}
          </p>
        </div>

        <div className="footer__actions">
          <p className="footer__copyright">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>

          <button onClick={scrollToTop} className="footer__top-btn" aria-label={t.footer.backToTop}>
            <span>{t.footer.backToTop}</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
