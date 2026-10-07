import photo from '../../assets/Profile.jpg';
import { 
  FaUserGraduate, FaMapMarkerAlt, FaFileDownload, FaBuilding, 
  FaCheck, FaShieldAlt, FaRocket, FaDatabase, FaLayerGroup 
} from 'react-icons/fa';
import './AboutMe.scss';

function AboutMe() {
  const handleDownloadCV = () => {
    const pdfUrl = "/Gomez_Hernandez_Carlos_Antonio_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "GomezHernandezCarlosAntonioCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const corePillars = [
    {
      icon: <FaLayerGroup />,
      title: "Arquitectura & APIs Escalables",
      description: "Diseño de microservicios y REST APIs en .NET Core con arquitectura limpia, inyección de dependencias y patrones de diseño desacoplados."
    },
    {
      icon: <FaDatabase />,
      title: "Optimización de Bases de Datos",
      description: "Modelado relacional en SQL Server, diseño de esquemas normalizados, optimización de consultas y transacciones críticas de alta concurrencia."
    },
    {
      icon: <FaShieldAlt />,
      title: "Testing & Calidad Continua",
      description: "Cobertura rigurosa con suites de pruebas unitarias y funcionales (xUnit, nUnit, Selenium) que aseguran despliegues estables en producción."
    },
    {
      icon: <FaRocket />,
      title: "Full-Cycle Delivery",
      description: "Liderazgo técnico de proyectos de punta a punta: desde el análisis de negocio industrial hasta su contenedorización y puesta en marcha."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-header__badge">
          <FaUserGraduate className="badge-icon" />
          Perfil Profesional
        </span>
        <h2 className="section-header__title">Sobre Mí</h2>
        <p className="section-header__subtitle">
          Ingeniero en Sistemas Computacionales enfocado en construir software fiable, mantenible y orientado a resultados de negocio.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Profile Card */}
        <div className="about-profile-card">
          <div className="about-profile-card__avatar-wrap">
            <img src={photo} alt="Carlos Antonio Gómez Hernández" className="about-profile-card__avatar" />
            <span className="about-profile-card__verified-badge">
              <FaCheck />
            </span>
          </div>

          <div className="about-profile-card__info">
            <h3 className="about-profile-card__name">Carlos Antonio Gómez</h3>
            <span className="about-profile-card__title">Ingeniero en Sistemas Computacionales</span>
          </div>

          <div className="about-profile-card__details">
            <div className="detail-row">
              <FaMapMarkerAlt className="detail-icon" />
              <span>Aguascalientes, México (Remoto / Híbrido)</span>
            </div>
            <div className="detail-row">
              <FaBuilding className="detail-icon" />
              <span>Experiencia en ERP, Manufactura & SaaS</span>
            </div>
            <div className="detail-row">
              <FaUserGraduate className="detail-icon" />
              <span>Universidad Autónoma de Aguascalientes</span>
            </div>
          </div>

          <button className="about-profile-card__cv-btn" onClick={handleDownloadCV}>
            <FaFileDownload className="btn-icon" />
            <span>Descargar Curriculum Vitae</span>
          </button>
        </div>

        {/* Right Column: Bio & Core Pillars */}
        <div className="about-content">
          <div className="about-bio-card">
            <p className="bio-lead">
              Ingeniero en Sistemas Computacionales y Desarrollador Fullstack con más de{' '}
              <strong>4 años de experiencia comprobada</strong> diseñando, programando y optimizando soluciones web
              y empresariales de misión crítica.
            </p>
            <p className="bio-text">
              Mi dominio abarca el ecosistema tecnológico de Microsoft (<strong>C#, .NET Core, Blazor, SQL Server</strong>)
              junto con entornos modernos de JavaScript/TypeScript (<strong>React, Angular, Node.js</strong>). Me especializo
              en transformar reglas de negocio e industriales complejas en interfaces reactivas y APIs de alta disponibilidad.
              Apasionado por las mejores prácticas, Clean Code, automatización con Docker y arquitecturas preparadas para crecer en la nube.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="pillars-grid">
            {corePillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-card__icon">{pillar.icon}</div>
                <div className="pillar-card__content">
                  <h4 className="pillar-card__title">{pillar.title}</h4>
                  <p className="pillar-card__desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;