import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFileDownload, FaCode } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.scss';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'experience', 'projects', 'about', 'technologies', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home, id: 'hero' },
    { href: '#experience', label: t.nav.experience, id: 'experience' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#technologies', label: t.nav.stack, id: 'technologies' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Carlos_Gomez_FullStack_Resume.pdf';
    link.download = 'Carlos_Gomez_FullStack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" aria-label="Go to top">
          <span className="navbar__logo-icon">
            <FaCode />
          </span>
          <span className="navbar__logo-text">
            Carlos<span className="navbar__logo-accent">.Gómez</span>
          </span>
          <span className="navbar__badge">Fullstack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__nav-desktop" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="navbar__lang-btn"
              title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              aria-label={t.nav.switchLangAria}
            >
              <span className="navbar__lang-flag">{lang === 'en' ? '🇺🇸' : '🇲🇽'}</span>
              <span className="navbar__lang-text">{lang === 'en' ? 'EN' : 'ES'}</span>
              <span className="navbar__lang-switch-arrow">⇄</span>
              <span className="navbar__lang-target">{lang === 'en' ? 'ES' : 'EN'}</span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="navbar__cv-btn"
              aria-label={t.nav.downloadCv}
            >
              <FaFileDownload className="navbar__cv-icon" />
              <span>{t.nav.cvShort}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile-drawer ${mobileMenuOpen ? 'navbar__mobile-drawer--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`navbar__mobile-link ${activeSection === link.id ? 'navbar__mobile-link--active' : ''}`}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__mobile-actions">
            <button
              onClick={toggleLanguage}
              className="navbar__mobile-lang-btn"
              aria-label={t.nav.switchLangAria}
            >
              <span>{lang === 'en' ? '🇺🇸 English' : '🇲🇽 Español'}</span>
              <span className="navbar__mobile-lang-switch">⇄ {lang === 'en' ? 'Español' : 'English'}</span>
            </button>
            <button onClick={handleDownloadCV} className="navbar__mobile-cv-btn">
              <FaFileDownload />
              <span>{t.nav.downloadCv}</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
