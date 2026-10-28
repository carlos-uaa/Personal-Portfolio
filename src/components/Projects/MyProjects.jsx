import { useState } from 'react';
import Project from './Project/Project';
import './MyProjects.scss';
import { aureaDigitalImages } from '../../assets/Aurea Digital/aureaDigitalImages';
import { qualiTrackImages } from '../../assets/QualiTrack/qualiTrackImages';
import { proctixImages } from '../../assets/Proctix/ProctixImages';
import { servonImages } from '../../assets/Servon/ServonImages';
import { stepAppImages } from '../../assets/SetpApp/StepAppImages';
import { prizePopImages } from '../../assets/PrizePop/PrizePopImages';
import { FaLaptopCode } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

function MyProjects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { t } = useLanguage();

  const pItems = t.projects.items;

  const projectsData = [
    {
      id: 1,
      title: pItems.aurea.title,
      categoryType: 'saas',
      category: pItems.aurea.category,
      highlight: pItems.aurea.highlight,
      description: pItems.aurea.description,
      images: aureaDigitalImages,
      technologies: ['react', 'supabase', 'vercel', 'javascript', 'sass'],
      liveUrl: 'https://aureadigital.vercel.app/',
      github: []
    },
    {
      id: 2,
      title: pItems.qualitrack.title,
      categoryType: 'enterprise',
      category: pItems.qualitrack.category,
      highlight: pItems.qualitrack.highlight,
      description: pItems.qualitrack.description,
      images: qualiTrackImages,
      technologies: ['csharp', 'blazor', 'sql', 'nunit', 'xunit', 'javascript'],
      github: [
        { url: 'https://github.com/carlos-uaa/QualiTrack.Client', name: t.projects.clientRepo },
        { url: 'https://github.com/carlos-uaa/QualiTrack.API', name: t.projects.apiRepo }
      ]
    },
    {
      id: 3,
      title: pItems.proctix.title,
      categoryType: 'enterprise',
      category: pItems.proctix.category,
      highlight: pItems.proctix.highlight,
      description: pItems.proctix.description,
      images: proctixImages,
      technologies: ['csharp', 'blazor', 'sql', 'docker', 'xunit', 'nunit', 'javascript'],
      github: [
        { url: 'https://github.com/carlos-uaa/Proctix.Client', name: t.projects.clientRepo },
        { url: 'https://github.com/carlos-uaa/Proctix.API', name: t.projects.apiRepo }
      ]
    },
    {
      id: 4,
      title: pItems.servon.title,
      categoryType: 'management',
      category: pItems.servon.category,
      highlight: pItems.servon.highlight,
      description: pItems.servon.description,
      images: servonImages,
      technologies: ['blazor', 'csharp', 'sql', 'jwt'],
      github: [
        { url: 'https://github.com/carlos-uaa/Servon.Client', name: t.projects.clientRepo },
        { url: 'https://github.com/carlos-uaa/Servon.API', name: t.projects.apiRepo }
      ]
    },
    {
      id: 5,
      title: pItems.stepapp.title,
      categoryType: 'productivity',
      category: pItems.stepapp.category,
      highlight: pItems.stepapp.highlight,
      description: pItems.stepapp.description,
      images: stepAppImages,
      technologies: ['react', 'csharp', 'sass', 'javascript', 'sql'],
      github: [
        { url: 'https://github.com/carlos-uaa/StepApp.Client', name: 'React Client' },
        { url: 'https://github.com/carlos-uaa/StepApp.Api', name: t.projects.apiRepo }
      ]
    },
    {
      id: 6,
      title: pItems.prizepop.title,
      categoryType: 'management',
      category: pItems.prizepop.category,
      highlight: pItems.prizepop.highlight,
      description: pItems.prizepop.description,
      images: prizePopImages,
      technologies: ['blazor', 'csharp', 'sql'],
      github: [
        { url: 'https://github.com/carlos-uaa/PrizePop.Client', name: t.projects.clientRepo },
        { url: 'https://github.com/carlos-uaa/PrizePop.API', name: t.projects.apiRepo }
      ]
    }
  ];

  const filterTabs = [
    { id: 'all', label: t.projects.filters.all, count: projectsData.length },
    { id: 'enterprise', label: t.projects.filters.enterprise, count: projectsData.filter(p => p.categoryType === 'enterprise').length },
    { id: 'saas', label: t.projects.filters.saas, count: projectsData.filter(p => p.categoryType === 'saas').length },
    { id: 'management', label: t.projects.filters.management, count: projectsData.filter(p => p.categoryType === 'management').length },
    { id: 'productivity', label: t.projects.filters.productivity, count: projectsData.filter(p => p.categoryType === 'productivity').length },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.categoryType === selectedFilter);

  return (
    <section id="projects" className="my-projects">
      <div className="section-header">
        <span className="section-header__badge">
          <FaLaptopCode className="badge-icon" />
          {t.projects.badge}
        </span>
        <h2 className="section-header__title">{t.projects.title}</h2>
        <p className="section-header__subtitle">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="my-projects__filters">
        <div className="filter-pill-group">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`filter-pill ${selectedFilter === tab.id ? 'filter-pill--active' : ''}`}
            >
              <span>{tab.label}</span>
              <span className="filter-pill__count">{tab.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            category={project.category}
            highlight={project.highlight}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
            github={project.github}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
