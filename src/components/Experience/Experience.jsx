import ExperienceItem from "./ExperienceItem/ExperienceItem";
import "./Experience.scss";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const jobsData = [
    {
      id: 4,
      role: "Middle Fullstack Developer",
      company: "Corporativo RAINDE S.A. de C.V.",
      period: "Julio 2026 - Presente",
      isCurrent: true,
      type: "Tiempo Completo",
      technologies: ["React", ".NET Core", "SQL Server", "REST APIs", "ERP Solutions"],
      description: "* Desarrollo y modernización de interfaces responsivas y modulares para sistemas ERP empresariales. \n * Análisis, pruebas y soporte continuo alineado a requerimientos críticos de negocio. \n * Producción y despliegue de soluciones web escalables para empresas privadas con alta disponibilidad."
    },
    {
      id: 3,
      role: "FullStack Web Developer",
      company: "Grupo SINCO",
      period: "Diciembre 2022 - Mayo 2026",
      isCurrent: false,
      type: "Tiempo Completo",
      technologies: [".NET Core", "C#", "Blazor", "Angular", "Node.js", "SQL Server", "xUnit", "nUnit"],
      description: "* Desarrollador responsable de aplicaciones empresariales, liderando el ciclo completo desde arquitectura hasta producción. \n * Diseño e implementación de soluciones escalables con .NET Entity Framework Core, Blazor, Angular y Node.js. \n * Creación de suites de pruebas unitarias y de integración para APIs y frontend con nUnit y xUnit. \n * Soporte en producción, optimización de consultas SQL y resolución de incidencias críticas bajo tiempos estrictos. \n * Arquitectura modular y diseño de sistemas orientado a microservicios y APIs RESTful."
    },
    {
      id: 2,
      role: "QA Automation Tester - Support",
      company: "Lion Intel",
      period: "Agosto 2022 - Diciembre 2022",
      isCurrent: false,
      type: "QA & Soporte",
      technologies: ["Python", "Selenium", "Automated Testing", "e-Commerce", "CI/CD"],
      description: "* Soporte y diagnóstico preventivo para plataformas e-Commerce de alto volumen en producción. \n * Automatización de pruebas de regresión, integración y aceptación funcional con Selenium en Python."
    },
    {
      id: 1,
      role: "Freelance Web Developer",
      company: "Freelance",
      period: "Noviembre 2021 - Junio 2022",
      isCurrent: false,
      type: "Freelance",
      technologies: ["JavaScript", "HTML5/CSS3", "Sass", "UI/UX", "Responsive Design"],
      description: "* Diseño e implementación de interfaces web ultra responsivas para clientes comerciales y PyMEs. \n * Pruebas funcionales de rendimiento y soporte antes y después de cada despliegue. \n * Creación de experiencias de usuario atractivas orientadas a conversión y usabilidad."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <span className="section-header__badge">
          <FaBriefcase className="badge-icon" />
          Trayectoria
        </span>
        <h2 className="section-header__title">Experiencia Laboral</h2>
        <p className="section-header__subtitle">
          Historial probado en desarrollo de software empresarial, calidad de código y entrega de valor.
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