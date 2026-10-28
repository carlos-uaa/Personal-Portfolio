import ExperienceItem from "./ExperienceItem/ExperienceItem";
import "./Experience.scss";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Experience() {
  const { t } = useLanguage();
  const jobsData = t.experience.jobs;

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <span className="section-header__badge">
          <FaBriefcase className="badge-icon" />
          {t.experience.badge}
        </span>
        <h2 className="section-header__title">{t.experience.title}</h2>
        <p className="section-header__subtitle">
          {t.experience.subtitle}
        </p>
      </div>

      <div className="experience__timeline">
        {jobsData.map((job) => (
          <ExperienceItem
            key={job.id}
            role={job.role}
            company={job.company}
            period={job.period}
            isCurrent={job.isCurrent}
            type={job.type}
            technologies={job.technologies}
            description={job.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
