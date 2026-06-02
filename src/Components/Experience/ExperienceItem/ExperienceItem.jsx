import { FaCalendarAlt } from 'react-icons/fa'; // O el icono que prefieras para el nodo
import "./ExperienceItem.scss";

function ExperienceItem({ role, company, period, description }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item__node">
                <div className="timeline-item__icon-wrapper">
                    <FaCalendarAlt />
                </div>
            </div>

            <div className="timeline-item__content">
                <h3 className="timeline-item__header">
                    <span className="role">{role}</span>
                    <span className="separator"> - </span>
                    <span className="company">{company}</span>
                </h3>
                <span className="timeline-item__date">{period}</span>
                <p className="timeline-item__description">{description}</p>
            </div>
        </div>
    );
}

export default ExperienceItem;