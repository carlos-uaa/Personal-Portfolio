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

function MyProjects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Áurea Digital',
      categoryType: 'saas',
      category: 'SaaS & Eventos Digitales',
      highlight: '🚀 En Vivo en Vercel',
      description: 'Plataforma web moderna y elegante para la creación, personalización y distribución de invitaciones digitales interactivas para eventos sociales y corporativos de alta gama. Cuenta con panel de administración general, panel para clientes, gestión de pases y confirmación de asistencia (RSVP) en tiempo real, catálogo de plantillas dinámicas, planes de precios y experiencia optimizada para dispositivos móviles.',
      images: aureaDigitalImages,
      technologies: ['react', 'supabase', 'vercel', 'javascript', 'sass'],
      liveUrl: 'https://aureadigital.vercel.app/',
      github: []
    },
    {
      id: 2,
      title: 'QualiTrack',
      categoryType: 'enterprise',
      category: 'Calidad & Manufactura',
      highlight: 'Workflow State Machine',
      description: 'Plataforma empresarial de grado de producción diseñada para automatizar el control de calidad en manufactura y cadena de suministro. Centraliza el ciclo completo de reporte de piezas defectuosas (NG - Not Good) mediante la digitalización estricta del Inspection Report. Incluye un motor de estados lineales deterministas que guía secuencialmente desde alertas automáticas a proveedores hasta la disposición final del material (scrap, retorno o reclamaciones).',
      images: qualiTrackImages,
      technologies: ['csharp', 'blazor', 'sql', 'nunit', 'xunit', 'javascript'],
      github: [
        { url: 'https://github.com/carlos-uaa/QualiTrack.Client', name: 'Client Repo' },
        { url: 'https://github.com/carlos-uaa/QualiTrack.API', name: 'API (.NET Core)' }
      ]
    },
    {
      id: 3,
      title: 'Proctix',
      categoryType: 'enterprise',
      category: 'Administración & Procesos ERP',
      highlight: 'Auditoría & Cumplimiento',
      description: 'Robusta aplicación web administrativa concebida para orquestar, estandarizar y auditar procedimientos complejos en líneas de manufactura industrial de alto volumen. Cuenta con control de acceso dinámico por jerarquías, captura de firma digitalizada, notificaciones automatizadas por correo, registro fotográfico in-situ y generación avanzada de reportes en Excel para trazabilidad y auditorías oficiales.',
      images: proctixImages,
      technologies: ['csharp', 'blazor', 'sql', 'docker', 'xunit', 'nunit', 'javascript'],
      github: [
        { url: 'https://github.com/carlos-uaa/Proctix.Client', name: 'Client Repo' },
        { url: 'https://github.com/carlos-uaa/Proctix.API', name: 'API (.NET Core)' }
      ]
    },
    {
      id: 4,
      title: 'Servon',
      categoryType: 'management',
      category: 'Gestión de Servicios Públicos',
      highlight: 'Business Intelligence',
      description: 'Plataforma web de ingeniería diseñada para centralizar y coordinar el ciclo de vida operativo de servicios públicos (agua, electricidad, telecomunicaciones). Permite la gestión inmediata de órdenes de suspensión, registro y validación de cobros, y reactivación de suministros. Integra tableros analíticos interactivos que transforman datos operativos en métricas de rendimiento en tiempo real.',
      images: servonImages,
      technologies: ['blazor', 'csharp', 'sql', 'jwt'],
      github: [
        { url: 'https://github.com/carlos-uaa/Servon.Client', name: 'Client Repo' },
        { url: 'https://github.com/carlos-uaa/Servon.API', name: 'API (.NET Core)' }
      ]
    },
    {
      id: 5,
      title: 'StepApp',
      categoryType: 'productivity',
      category: 'Productividad & Tablero Ágil',
      highlight: 'React + .NET Core API',
      description: 'Herramienta moderna de gestión ágil de tareas con experiencia de usuario interactiva y fluida. Diseñada con arquitectura desacoplada: frontend dinámico en React y Sass con soporte para arrastrar y soltar (Drag and Drop), sincronizado con una API RESTful desarrollada con .NET Entity Framework Core y SQL Server.',
      images: stepAppImages,
      technologies: ['react', 'csharp', 'sass', 'javascript', 'sql'],
      github: [
        { url: 'https://github.com/carlos-uaa/StepApp.Client', name: 'React Client' },
        { url: 'https://github.com/carlos-uaa/StepApp.Api', name: 'API (.NET Core)' }
      ]
    },
    {
      id: 6,
      title: 'PrizePop',
      categoryType: 'management',
      category: 'Sorteos & Recaudación',
      highlight: 'Full-Stack Architecture',
      description: 'Plataforma web completa para creación, administración y dinamización de rifas y concursos interactivos para causas benéficas y eventos empresariales. Dispone de personalización de temas, cálculo y asignación automatizada de premios, pasarela de venta y control transparente de tickets emitidos.',
      images: prizePopImages,
      technologies: ['blazor', 'csharp', 'sql'],
      github: [
        { url: 'https://github.com/carlos-uaa/PrizePop.Client', name: 'Client Repo' },
        { url: 'https://github.com/carlos-uaa/PrizePop.API', name: 'API (.NET Core)' }
      ]
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'Todos los Proyectos', count: projectsData.length },
    { id: 'enterprise', label: 'Enterprise & ERP', count: projectsData.filter(p => p.categoryType === 'enterprise').length },
    { id: 'saas', label: 'SaaS & Apps en Vivo', count: projectsData.filter(p => p.categoryType === 'saas').length },
    { id: 'management', label: 'Gestión & Servicios', count: projectsData.filter(p => p.categoryType === 'management').length },
    { id: 'productivity', label: 'Productividad Web', count: projectsData.filter(p => p.categoryType === 'productivity').length },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.categoryType === selectedFilter);

  return (
    <section id="projects" className="my-projects">
      <div className="section-header">
        <span className="section-header__badge">
          <FaLaptopCode className="badge-icon" />
          Portafolio
        </span>
        <h2 className="section-header__title">Proyectos Destacados</h2>
        <p className="section-header__subtitle">
          Sistemas completos con arquitecturas reales, lógica de negocio avanzada y aplicaciones en producción.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="my-projects__filters">
        <div className="filter-pill-group">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`filter-btn ${selectedFilter === tab.id ? 'filter-btn--active' : ''}`}
            >
              <span>{tab.label}</span>
              <span className="filter-count">{tab.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="my-projects__grid">
        {filteredProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;