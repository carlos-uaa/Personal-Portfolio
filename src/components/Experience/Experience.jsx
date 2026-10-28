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
      technologies: ["React", ".NET Core", "Node.js", "AI-Augmented Dev", "AI Agents", "SQL Server", "REST APIs"],
      description: "* Arquitectura y modernización de plataformas empresariales utilizando .NET Core, React y Node.js. \n * Integración de flujos de trabajo con IA y agentes autónomos para acelerar la entrega de software, pruebas y análisis de código. \n * Producción y despliegue de soluciones web escalables con alta disponibilidad y rendimiento optimizado."
    },
    {
      id: 3,
      role: "FullStack Web Developer",
      company: "Grupo SINCO",
      period: "Diciembre 2022 - Mayo 2026",
      isCurrent: false,
      type: "Tiempo Completo",
      technologies: [".NET Core", "C#", "Blazor", "Angular", "Node.js", "SQL Server", "AI Tooling", "xUnit"],
      description: "* Desarrollador responsable de aplicaciones empresariales, liderando el ciclo completo desde arquitectura hasta producción. \n * Diseño e implementación de soluciones escalables con .NET Entity Framework Core, Blazor, Angular y Node.js. \n * Adopción pionera de herramientas de IA (LLMs) y pipelines de desarrollo para análisis de commits, refactorización y resolución ágil de bugs. \n * Creación de suites de pruebas unitarias y de integración para APIs y frontend con nUnit y xUnit. \n * Soporte en producción, optimización de consultas SQL y resolución de incidencias críticas bajo tiempos estrictos."
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
      role: "Frontend Developer (Freelance)",
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
          Historial comprobado en desarrollo de software empresarial, ingeniería asistida por IA y entrega de valor.
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
