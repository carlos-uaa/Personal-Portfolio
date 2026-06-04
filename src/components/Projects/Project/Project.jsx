import { useState, useEffect } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight, FaCode, FaDocker, FaSass } from 'react-icons/fa';
import { SiBlazor, SiReact, SiAngular, SiNodedotjs, SiJsonwebtokens } from 'react-icons/si';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io5";
import { LuTestTubeDiagonal } from "react-icons/lu";
import './Project.scss';


const getTechDetails = (tech) => {
    switch (tech.toLowerCase()) {
        case 'blazor': return { icon: SiBlazor, name: 'Blazor', color: '#9549f7' };
        case 'csharp': return { icon: TbBrandCSharp, name: 'C#', color: '#985098' };
        case 'sql': return { icon: TbSql, name: 'SQL Server', color: '#1798dd' };
        case 'react': return { icon: SiReact, name: 'React', color: '#5ac9e8' };
        case 'angular': return { icon: SiAngular, name: 'Angular', color: '#dc2e34' };
        case 'nodejs': return { icon: SiNodedotjs, name: 'Node.js', color: '#86b800' };
        case 'javascript': return { icon: IoLogoJavascript, name: 'JavaScript', color: '#f0db4f' };
        case 'docker': return { icon: FaDocker, name: 'Docker', color: '#2092ed' };
        case 'nunit': return { icon: LuTestTubeDiagonal, name: 'nUnit', color: '#1d9d2c' };
        case 'xunit': return { icon: LuTestTubeDiagonal, name: 'xUnit', color: '#8351bc' };
        case 'jwt': return { icon: SiJsonwebtokens, name: 'JWT', color: '#cb1616' };
        case 'sass': return {icon: FaSass, name: 'Sass', color: '#b93c6a'}
        default: return { icon: FaCode, name: tech, color: 'var(--text-muted)' };
    }
};

function Project({ title, description, images, technologies, github }) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <article className="project-card">
            <div className="project-card__gallery">
                <img
                    src={images[currentImgIndex]}
                    alt={`${title} snapshot ${currentImgIndex + 1}`}
                    className="project-card__image"
                />

                {images.length > 1 && (
                    <>
                        <button onClick={prevImage} className="project-card__nav-btn project-card__nav-btn--left" aria-label="Previous image">
                            <FaChevronLeft />
                        </button>
                        <button onClick={nextImage} className="project-card__nav-btn project-card__nav-btn--right" aria-label="Next image">
                            <FaChevronRight />
                        </button>

                        <div className="project-card__indicators">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`project-card__dot ${index === currentImgIndex ? 'project-card__dot--active' : ''}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="project-card__content">
                <div className="project-card__meta">
                    <h3 className="project-card__title">{title}</h3>
                    <p className="project-card__description">{description}</p>
                </div>

                <div className="project-card__footer">
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

                    {github && github.length > 0 && (
                        <div className="project-card__github-list">
                            {github.map((repo, index) => (
                                <a
                                    key={index}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-card__github-btn"
                                >
                                    <FaGithub />
                                    <span>{repo.name}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

export default Project;