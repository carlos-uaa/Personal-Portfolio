import { FaCalendarAlt, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import './ExperienceItem.scss';

function ExperienceItem({ role, company, period, description, isCurrent, technologies = [], type = 'Full-time' }) {
  // Format description bullets
  const bullets = description
    .split('\n')
    .map(b => b.replace(/^\s*\*\s*/, '').trim())
    .filter(Boolean);

  return (
    <article className={`timeline-item ${isCurrent ? 'timeline-item--current' : ''}`}>
      <div className="timeline-item__indicator">
        <div className="timeline-item__pin">
          <FaBriefcase />
        </div>
      </div>

      <div className="timeline-item__card">
        <header className="timeline-item__header">
          <div className="timeline-item__main-info">
            <h3 className="timeline-item__role">{role}</h3>
            <span className="timeline-item__company">{company}</span>
          </div>

          <div className="timeline-item__badges">
            {isCurrent && <span className="badge badge--current">Puesto Actual</span>}
            <span className="badge badge--type">{type}</span>
            <span className="timeline-item__date">
              <FaCalendarAlt className="date-icon" />
              {period}
            </span>
          </div>
        </header>

        <ul className="timeline-item__bullets">
          {bullets.map((point, index) => (
            <li key={index} className="timeline-item__point">
              <FaCheckCircle className="point-icon" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {technologies.length > 0 && (
          <footer className="timeline-item__tech-stack">
            <span className="tech-label">Stack aplicado:</span>
            <div className="tech-tags">
              {technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </footer>
        )}
      </div>
    </article>
  );
}

export default ExperienceItem;