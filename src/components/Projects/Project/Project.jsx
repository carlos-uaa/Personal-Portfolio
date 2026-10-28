import { useState, useEffect, useCallback } from 'react';
import { 
  FaGithub, FaChevronLeft, FaChevronRight, FaCode, FaDocker, FaSass, 
  FaExternalLinkAlt, FaExpand, FaTimes 
} from 'react-icons/fa';
import { SiBlazor, SiReact, SiAngular, SiNodedotjs, SiJsonwebtokens, SiTypescript, SiSupabase, SiVercel } from 'react-icons/si';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io5";
import { LuTestTubeDiagonal } from "react-icons/lu";
import { useLanguage } from '../../../context/LanguageContext';
import './Project.scss';

const getTechDetails = (tech) => {
  switch (tech.toLowerCase()) {
    case 'blazor': return { icon: SiBlazor, name: 'Blazor', color: '#9549f7' };
    case 'csharp': return { icon: TbBrandCSharp, name: 'C# / .NET', color: '#239120' };
    case 'sql': return { icon: TbSql, name: 'SQL Server', color: '#1798dd' };
    case 'react': return { icon: SiReact, name: 'React', color: '#5ac9e8' };
    case 'angular': return { icon: SiAngular, name: 'Angular', color: '#dc2e34' };
    case 'nodejs': return { icon: SiNodedotjs, name: 'Node.js', color: '#86b800' };
    case 'javascript': return { icon: IoLogoJavascript, name: 'JavaScript', color: '#f0db4f' };
    case 'typescript': return { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' };
    case 'supabase': return { icon: SiSupabase, name: 'Supabase', color: '#3ecf8e' };
    case 'vercel': return { icon: SiVercel, name: 'Vercel', color: '#f8fafc' };
    case 'docker': return { icon: FaDocker, name: 'Docker', color: '#2092ed' };
    case 'nunit': return { icon: LuTestTubeDiagonal, name: 'nUnit', color: '#10b981' };
    case 'xunit': return { icon: LuTestTubeDiagonal, name: 'xUnit', color: '#a855f7' };
    case 'jwt': return { icon: SiJsonwebtokens, name: 'JWT Auth', color: '#ef4444' };
    case 'sass': return { icon: FaSass, name: 'Sass', color: '#ec4899' };
    default: return { icon: FaCode, name: tech, color: 'var(--text-muted)' };
  }
};

function Project({ title, category, highlight, description, images, technologies, github, liveUrl }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    if (!images || images.length === 0) return;
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    if (!images || images.length === 0) return;
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images]);

  useEffect(() => {
    if (!images || images.length <= 1 || isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images, isModalOpen]);

  // Modal keyboard handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextImage, prevImage]);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <article className="project-card">
        {/* Gallery Container */}
        <div className="project-card__gallery" onClick={openModal}>
          <img
            src={images[currentImgIndex]}
            alt={`${title} captura ${currentImgIndex + 1}`}
            className="project-card__image"
            loading="lazy"
          />

          <div className="project-card__badge-overlay">
            {category && <span className="project-badge">{category}</span>}
          </div>

          <button 
            className="project-card__expand-btn" 
            onClick={openModal} 
            aria-label="Ampliar imagen"
            title="Ver pantalla completa"
          >
            <FaExpand />
          </button>

          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="project-card__nav-btn project-card__nav-btn--left" 
                aria-label="Imagen anterior"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextImage} 
                className="project-card__nav-btn project-card__nav-btn--right" 
                aria-label="Siguiente imagen"
              >
                <FaChevronRight />
              </button>

              <div className="project-card__counter">
                {currentImgIndex + 1} / {images.length}
              </div>

              <div className="project-card__indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImgIndex(index);
                    }}
                    className={`project-card__dot ${index === currentImgIndex ? 'project-card__dot--active' : ''}`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Card Content */}
        <div className="project-card__content">
          <div className="project-card__meta">
            <div className="project-card__header">
              <h3 className="project-card__title">{title}</h3>
              {highlight && <span className="project-card__highlight-tag">{highlight}</span>}
            </div>

            <p className={`project-card__description ${isExpanded ? 'project-card__description--expanded' : ''}`}>
              {description}
            </p>

            {description.length > 200 && (
              <button 
                className="project-card__read-more"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? t.projects.readLess : t.projects.readMore}
              </button>
            )}
          </div>

          <div className="project-card__footer">
            {/* Tech Tags */}
            <div className="project-card__tech-list">
              {technologies.map((tech, index) => {
                const { icon: Icon, name, color } = getTechDetails(tech);
                return (
                  <span key={index} className="tech-chip" style={{ '--tech-color': color }}>
                    <Icon className="tech-chip__icon" />
                    <span className="tech-chip__name">{name}</span>
                  </span>
                );
              })}
            </div>

            {/* Actions: Live Demo / GitHub */}
            <div className="project-card__actions-row">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__live-btn"
                  title={`${t.projects.visitLive}: ${title}`}
                >
                  <FaExternalLinkAlt className="btn-icon" />
                  <span>{t.projects.visitLive}</span>
                </a>
              )}

              {github && github.length > 0 && (
                <div className="project-card__github-list">
                  {github.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__github-btn"
                      title={`GitHub: ${repo.name}`}
                    >
                      <FaGithub className="btn-icon" />
                      <span>{repo.name}</span>
                      <FaExternalLinkAlt className="btn-ext" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Image Lightbox Modal */}
      {isModalOpen && (
        <div className="project-lightbox" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="project-lightbox__dialog" onClick={(e) => e.stopPropagation()}>
            <button className="project-lightbox__close" onClick={closeModal} aria-label="Cerrar vista completa">
              <FaTimes />
            </button>

            <div className="project-lightbox__image-container">
              <img
                src={images[currentImgIndex]}
                alt={`${title} vista detallada ${currentImgIndex + 1}`}
                className="project-lightbox__image"
              />

              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="lightbox-nav lightbox-nav--prev" aria-label="Anterior">
                    <FaChevronLeft />
                  </button>
                  <button onClick={nextImage} className="lightbox-nav lightbox-nav--next" aria-label="Siguiente">
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            <div className="project-lightbox__footer">
              <span className="project-lightbox__title">{title}</span>
              <span className="project-lightbox__info">
                Captura {currentImgIndex + 1} de {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
