import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFileDownload, FaCode } from 'react-icons/fa';
import './Navbar.scss';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
    { href: '#hero', label: 'Inicio', id: 'hero' },
    { href: '#experience', label: 'Experiencia', id: 'experience' },
    { href: '#projects', label: 'Proyectos', id: 'projects' },
    { href: '#about', label: 'Sobre Mí', id: 'about' },
    { href: '#technologies', label: 'Stack', id: 'technologies' },
    { href: '#contact', label: 'Contacto', id: 'contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Gomez_Hernandez_Carlos_Antonio_CV.pdf';
    link.download = 'GomezHernandezCarlosAntonioCV.pdf';
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

          <button
            onClick={handleDownloadCV}
            className="navbar__cv-btn"
            aria-label="Download Curriculum Vitae"
          >
            <FaFileDownload className="navbar__cv-icon" />
            <span>CV</span>
          </button>
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
            <button onClick={handleDownloadCV} className="navbar__mobile-cv-btn">
              <FaFileDownload />
              <span>Descargar CV</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
