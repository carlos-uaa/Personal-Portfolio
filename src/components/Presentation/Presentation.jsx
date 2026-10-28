/* Data import */
import { useState, useEffect } from 'react';
import photo from '../../assets/Profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight, FaDownload, FaGlobe } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useLanguage } from '../../context/LanguageContext';
import './Presentation.scss';

/* Components import */
import ContactChip from './ContactChip/ContactChip';

function Presentation() {
  const { lang, t } = useLanguage();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = t.hero.titles;

  useEffect(() => {
    // Reset index if out of bounds on language change
    if (currentTitleIndex >= titles.length) {
      setCurrentTitleIndex(0);
    }
    const fullText = titles[currentTitleIndex] || titles[0];
    let timer;

    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 400);
    } else {
      const speed = isDeleting ? 35 : 70;
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

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
      id: 'teseract',
      href: 'https://teseract.io/',
      icon: FaGlobe,
      label: 'Teseract.io'
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
    link.href = '/Carlos_Gomez_FullStack_Resume.pdf';
    link.download = 'Carlos_Gomez_FullStack_Resume.pdf';
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
            <span>{t.hero.status}</span>
          </div>

          <div className="me">
            <h1 className="me__title">
              {t.hero.greeting} <span className="me__name">{t.hero.name}</span>
            </h1>
            <h2 className="me__role">
              <span className="me__role-prefix">{t.hero.rolePrefix}</span>
              <span className="me__role-typed">{displayText}</span>
              <span className="me__cursor" aria-hidden="true">|</span>
            </h2>
          </div>

          <div className="introduction">
            <p>
              {lang === 'en' ? (
                <>
                  I architect and build robust digital ecosystems from the ground up. Specializing in{' '}
                  <span className="highlight">Fullstack Engineering</span> with{' '}
                  <span className="highlight">.NET Core, C#, React, Blazor, and Node.js</span>, while actively collaborating on bespoke software solutions with{' '}
                  <a href="https://teseract.io/" target="_blank" rel="noopener noreferrer" className="highlight--alt">Teseract.io</a>.{' '}
                  I integrate <span className="highlight">AI & Autonomous Agents</span> to accelerate delivery cycles and transform complex business requirements into{' '}
                  <span className="highlight">scalable, secure, and production-ready systems</span>.
                </>
              ) : (
                <>
                  Arquitecto y desarrollo ecosistemas digitales robustos desde cero. Especialista en{' '}
                  <span className="highlight">Ingeniería Fullstack</span> con{' '}
                  <span className="highlight">.NET Core, C#, React, Blazor y Node.js</span>, colaborando también en proyectos a la medida con{' '}
                  <a href="https://teseract.io/" target="_blank" rel="noopener noreferrer" className="highlight--alt">Teseract.io</a>.{' '}
                  Integro <span className="highlight">IA & Agentes Autónomos</span> para acelerar entregas y convertir requerimientos de{' '}
                  <span className="highlight--alt">entornos empresariales</span> en{' '}
                  <span className="highlight">sistemas escalables, seguros y listos para producción</span>.
                </>
              )}
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="presentation__actions">
            <a href="#projects" className="btn-primary">
              <span>{t.hero.exploreProjects}</span>
              <FaArrowRight className="btn-icon" />
            </a>
            <button onClick={handleDownloadCV} className="btn-secondary">
              <FaDownload className="btn-icon" />
              <span>{t.hero.downloadCv}</span>
            </button>
            <a href="#contact" className="btn-ghost">
              <span>{t.hero.letsTalk}</span>
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
            <img src={photo} alt="Carlos Gómez - Fullstack Developer" />
            <div className="floating-badge floating-badge--experience">
              <span className="floating-badge__icon"><HiSparkles /></span>
              <div className="floating-badge__info">
                <strong>{t.hero.yearsExpBadge}</strong>
                <span>{t.hero.yearsExpSub}</span>
              </div>
            </div>
            <div className="floating-badge floating-badge--tech">
              <span className="tech-tag">.NET Core</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">AI-Augmented</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Metrics Bar for Recruiters */}
      <div className="presentation__metrics">
        <div className="metric-card">
          <span className="metric-number">{t.hero.metricYears}</span>
          <span className="metric-label">{t.hero.metricYearsLabel}</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">{t.hero.metricSystems}</span>
          <span className="metric-label">{t.hero.metricSystemsLabel}</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">{t.hero.metricLifecycle}</span>
          <span className="metric-label">{t.hero.metricLifecycleLabel}</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">{t.hero.metricAi}</span>
          <span className="metric-label">{t.hero.metricAiLabel}</span>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
