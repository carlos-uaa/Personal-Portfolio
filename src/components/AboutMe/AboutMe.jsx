import photo from '../../assets/Profile.jpg';
import { 
  FaUserGraduate, FaMapMarkerAlt, FaFileDownload, FaBuilding, 
  FaCheck, FaShieldAlt, FaRocket, FaDatabase, FaLayerGroup, FaRobot
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import './AboutMe.scss';

function AboutMe() {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    const pdfUrl = "/Carlos_Gomez_FullStack_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Carlos_Gomez_FullStack_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pillarIcons = [<FaLayerGroup />, <FaRobot />, <FaDatabase />, <FaShieldAlt />];

  const corePillars = t.about.pillars.map((pillar, idx) => ({
    icon: pillarIcons[idx] || <FaRocket />,
    title: pillar.title,
    description: pillar.description
  }));

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-header__badge">
          <FaUserGraduate className="badge-icon" />
          {t.about.badge}
        </span>
        <h2 className="section-header__title">{t.about.title}</h2>
        <p className="section-header__subtitle">
          {t.about.subtitle}
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
            <span className="about-profile-card__title">{t.about.degree}</span>
          </div>

          <div className="about-profile-card__details">
            <div className="detail-row">
              <FaMapMarkerAlt className="detail-icon" />
              <span>{t.about.location}</span>
            </div>
            <div className="detail-row">
              <FaBuilding className="detail-icon" />
              <span>{t.about.domain}</span>
            </div>
            <div className="detail-row">
              <FaUserGraduate className="detail-icon" />
              <span>{t.about.university}</span>
            </div>
          </div>

          <button className="about-profile-card__cv-btn" onClick={handleDownloadCV}>
            <FaFileDownload className="btn-icon" />
            <span>{t.about.downloadCv}</span>
          </button>
        </div>

        {/* Right Column: Bio & Core Pillars */}
        <div className="about-content">
          <div className="about-bio-card">
            <p className="bio-lead">
              {t.about.bioLead}
            </p>
            <p className="bio-text">
              {t.about.bioText}
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
