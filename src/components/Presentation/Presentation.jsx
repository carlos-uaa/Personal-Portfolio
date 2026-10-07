/* Data import */
import { useState, useEffect } from 'react';
import photo from '../../assets/Profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight, FaDownload } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import './Presentation.scss';

/* Components import */
import ContactChip from './ContactChip/ContactChip';

const TITLES = [
  "Middle Fullstack Developer",
  ".NET Core & C# Specialist",
  "React & Frontend Architect",
  "Enterprise ERP & Cloud Solutions"
];

function Presentation() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TITLES[currentTitleIndex];
    let timer;

    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
      }, 400);
    } else {
      const speed = isDeleting ? 35 : 70;
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  const contactData = [
    {
      id: 'linkedin',
      href: 'https://linkedin.com/in/carlosgomezdev',
      icon: FaLinkedin,
      label: 'LinkedIn'
    },
    {
      id: 'github',
      href: 'https://github.com/carlos-uaa',
      icon: FaGithub,
      label: 'GitHub'
    },
    {
      id: 'email',
      href: 'mailto:ing.gomez.hernandez.carlos@gmail.com',
      icon: FaEnvelope,
      label: 'Email'
    },
    {
      id: 'phone',
      href: 'https://wa.me/4493483339',
      icon: FaPhone,
      label: 'WhatsApp'
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Gomez_Hernandez_Carlos_Antonio_CV.pdf';
    link.download = 'GomezHernandezCarlosAntonioCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="presentation">
      <div className="presentation__content">
        <div className="presentation__text">
          {/* Status Badge */}
          <div className="presentation__status-pill">
            <span className="status-dot">
              <span className="status-dot__ping"></span>
              <span className="status-dot__core"></span>
            </span>
            <span>Disponible para nuevos desafíos & roles Full-time</span>
          </div>

          <div className="me">
            <h1 className="me__title">
              Hola, soy <span className="me__name">Carlos Gómez</span>
            </h1>
            <h2 className="me__role">
              <span className="me__role-prefix">Especialidad:</span>
              <span className="me__role-typed">{displayText}</span>
              <span className="me__cursor" aria-hidden="true">|</span>
            </h2>
          </div>

          <div className="introduction">
            <p>
              Arquitecto y desarrollo ecosistemas digitales robustos desde cero. Especialista en{' '}
              <span className="highlight">Ingeniería Fullstack</span> con{' '}
              <span className="highlight">.NET Core, C#, React, Blazor y SQL</span>. Convierto requerimientos
              complejos de <span className="highlight--alt">entornos industriales y empresariales</span> en{' '}
              <span className="highlight">sistemas escalables, seguros y listos para producción</span>.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="presentation__actions">
            <a href="#projects" className="btn-primary">
              <span>Explorar Proyectos</span>
              <FaArrowRight className="btn-icon" />
            </a>
            <button onClick={handleDownloadCV} className="btn-secondary">
              <FaDownload className="btn-icon" />
              <span>Descargar CV</span>
            </button>
            <a href="#contact" className="btn-ghost">
              <span>Hablemos Directo</span>
            </a>
          </div>

          {/* Contact Chips */}
          <div className="contact">
            {contactData.map((contact) => (
              <ContactChip
                key={contact.id}
                href={contact.href}
                icon={contact.icon}
                label={contact.label}
              />
            ))}
          </div>
        </div>

        {/* Hero Visual / Avatar */}
        <div className="presentation__img-wrapper">
          <div className="presentation__img-glow"></div>
          <div className="presentation__img-card">
            <img src={photo} alt="Carlos Gómez - Middle Fullstack Developer" />
            <div className="floating-badge floating-badge--experience">
              <span className="floating-badge__icon"><HiSparkles /></span>
              <div className="floating-badge__info">
                <strong>4+ Años</strong>
                <span>Experiencia Profesional</span>
              </div>
            </div>
            <div className="floating-badge floating-badge--tech">
              <span className="tech-tag">.NET Core</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">SQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Metrics Bar for Recruiters */}
      <div className="presentation__metrics">
        <div className="metric-card">
          <span className="metric-number">4+</span>
          <span className="metric-label">Años Desarrollando Software</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">5+</span>
          <span className="metric-label">Sistemas Enterprise en Producción</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">100%</span>
          <span className="metric-label">Full-Lifecycle (Diseño a Despliegue)</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">ERP / QA</span>
          <span className="metric-label">Enfoque Industrial & Calidad</span>
        </div>
      </div>
    </section>
  );
}

export default Presentation;