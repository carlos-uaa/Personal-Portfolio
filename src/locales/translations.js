export const translations = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      about: "About Me",
      stack: "Tech Stack",
      contact: "Contact",
      downloadCv: "Download CV",
      cvShort: "CV",
      switchLangAria: "Switch language",
    },
    hero: {
      status: "Available for Full-time Roles & Technical Consulting",
      greeting: "Hi, I'm",
      name: "Carlos Gómez",
      rolePrefix: "Specialty:",
      titles: [
        "Fullstack Developer (.NET & React)",
        ".NET Core & C# Specialist",
        "React & Node.js Engineer",
        "Associate Engineer @ Teseract.io",
        "AI-Augmented Software Engineer",
        "Enterprise & Cloud Solutions"
      ],
      intro: "I architect and build robust digital ecosystems from the ground up. Specializing in Fullstack Engineering with .NET Core, C#, React, Blazor, and Node.js, while actively collaborating on bespoke software solutions with Teseract.io. I integrate AI & Autonomous Agents to accelerate delivery cycles and transform complex business requirements into scalable, secure, and production-ready systems.",
      exploreProjects: "Explore Projects",
      downloadCv: "Download CV",
      letsTalk: "Let's Talk",
      yearsExpBadge: "4+ Years",
      yearsExpSub: "Professional Experience",
      metricYears: "4+",
      metricYearsLabel: "Years Developing Software",
      metricSystems: "5+",
      metricSystemsLabel: "Enterprise Systems in Production",
      metricLifecycle: "100%",
      metricLifecycleLabel: "Full-Lifecycle (Design to Deploy)",
      metricAi: "AI & QA",
      metricAiLabel: "Productivity & Clean Code",
    },
    experience: {
      badge: "Career Track",
      title: "Work Experience",
      subtitle: "Proven track record in enterprise software development, custom solutions, and high-performance engineering.",
      jobs: [
        {
          id: 5,
          role: "Middle Fullstack Developer",
          company: "Corporativo RAINDE S.A. de C.V.",
          period: "July 2026 - Present",
          isCurrent: true,
          type: "Full-Time",
          technologies: ["React", ".NET Core", "Node.js", "AI-Augmented Dev", "AI Agents", "SQL Server", "REST APIs"],
          description: "* Architecture and modernization of enterprise platforms utilizing .NET Core, React, and Node.js.\n* Integration of AI-driven workflows and autonomous agents to accelerate feature delivery, testing, and code analysis.\n* Production deployment of scalable web solutions with high availability and optimized performance."
        },
        {
          id: 4,
          role: "Software Engineer & Technical Consultant",
          company: "Teseract (teseract.io)",
          period: "2024 - Present",
          isCurrent: true,
          type: "Associate / Projects",
          technologies: ["React", "Node.js", ".NET Core", "Cloud & Web Apps", "AI Integration", "Point of Sale (POS)"],
          description: "* Active participation in technical design, architecture, and development of bespoke web platforms and commercial systems for businesses.\n* Full-cycle end-to-end software delivery leadership, solving requirements both autonomously and collaboratively with cross-functional teams.\n* Implementation of scalable architectures, API integrations, and automation focused on measurable business outcomes."
        },
        {
          id: 3,
          role: "FullStack Web Developer",
          company: "Grupo SINCO",
          period: "December 2022 - May 2026",
          isCurrent: false,
          type: "Full-Time",
          technologies: [".NET Core", "C#", "Blazor", "Angular", "Node.js", "SQL Server", "AI Tooling", "xUnit"],
          description: "* Lead developer delivering scalable enterprise web applications across iterative Agile/Scrum sprints.\n* Design and implementation of full-stack web solutions utilizing .NET Entity Framework Core, Blazor, Angular, and Node.js.\n* Early adoption of LLM tooling and AI developer pipelines for commit analysis, refactoring, and rapid bug triage.\n* Automated testing suites for APIs and frontend with nUnit and xUnit; continuous deployment pipelines."
        },
        {
          id: 2,
          role: "QA Automation Tester - Support",
          company: "Lion Intel",
          period: "August 2022 - December 2022",
          isCurrent: false,
          type: "QA & Support",
          technologies: ["Python", "Selenium", "Automated Testing", "e-Commerce", "CI/CD"],
          description: "* Production support and incident triage for high-availability e-commerce platforms.\n* Test automation with Selenium in Python covering regression, functional, and acceptance cycles."
        },
        {
          id: 1,
          role: "Frontend Developer (Freelance)",
          company: "Freelance",
          period: "November 2021 - June 2022",
          isCurrent: false,
          type: "Freelance",
          technologies: ["JavaScript", "HTML5/CSS3", "Sass", "UI/UX", "Responsive Design"],
          description: "* Design and deployment of responsive web interfaces and landing pages for private businesses.\n* Performance optimization, cross-browser compatibility testing, and post-deployment client support."
        }
      ]
    },
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      subtitle: "Full-scale systems with real-world architectures, advanced business logic, and live production deployments.",
      filters: {
        all: "All Projects",
        enterprise: "Enterprise & ERP",
        saas: "SaaS & Live Apps",
        management: "Management & Services",
        productivity: "Web Productivity"
      },
      readMore: "Read full description...",
      readLess: "Show less",
      visitLive: "Visit Live Project",
      clientRepo: "Client Repo",
      apiRepo: "API (.NET Core)",
      items: {
        aurea: {
          title: "Áurea Digital",
          category: "SaaS & Digital Events",
          highlight: "Live on Vercel",
          description: "Modern, high-end web platform for creating, customizing, and distributing interactive digital invitations for luxury social and corporate events. Features a comprehensive admin dashboard, client management portal, guest pass generation, real-time RSVP tracking, dynamic template catalog, tiered subscription plans, and mobile-first experience."
        },
        qualitrack: {
          title: "QualiTrack",
          category: "Quality & Manufacturing",
          highlight: "Workflow State Machine",
          description: "Production-grade enterprise platform engineered to automate quality assurance in high-throughput manufacturing and supply chain environments. Centralizes defect reporting (NG - Not Good) through rigorous digital Inspection Reports. Features a deterministic linear state engine guiding flows from vendor alerts to scrap, return, or warranty claims."
        },
        proctix: {
          title: "Proctix",
          category: "ERP Processes & Admin",
          highlight: "Auditing & Compliance",
          description: "Enterprise administrative web application designed to orchestrate, standardize, and audit complex procedures across industrial manufacturing lines. Includes role-based access control, digital signature capture, automated email notifications, in-situ photographic logs, and Excel report generation for regulatory compliance."
        },
        servon: {
          title: "Servon",
          category: "Public Utilities Management",
          highlight: "Business Intelligence",
          description: "Engineering web platform built to centralize and coordinate the operational lifecycle of public utilities (water, power, telecom). Enables immediate suspension orders, charge verification, and service reactivations with interactive dashboards converting operational data into real-time performance indicators."
        },
        stepapp: {
          title: "StepApp",
          category: "Productivity & Agile Board",
          highlight: "React + .NET Core API",
          description: "Modern task management tool delivering a fluid, interactive user experience. Built with a decoupled architecture: dynamic frontend in React and Sass with Drag-and-Drop capability, synchronized with a RESTful API built on .NET Entity Framework Core and SQL Server."
        },
        prizepop: {
          title: "PrizePop",
          category: "Raffles & Fundraising",
          highlight: "Full-Stack Architecture",
          description: "Complete web platform for creating, administering, and hosting interactive raffles and contests for charitable causes and corporate events. Offers theme customization, automated prize distribution algorithms, secure checkout, and transparent ticket validation."
        }
      }
    },
    about: {
      badge: "Professional Profile",
      title: "About Me",
      subtitle: "Computer Systems Engineer committed to building dependable, maintainable, and business-focused software.",
      degree: "Computer Systems Engineer",
      location: "Aguascalientes, Mexico (Remote / Hybrid)",
      domain: "Experience in ERP, Manufacturing & SaaS",
      university: "Autonomous University of Aguascalientes (UAA)",
      downloadCv: "Download Curriculum Vitae",
      bioLead: "Computer Systems Engineer and Fullstack Developer with over 4 years of proven experience designing, engineering, and optimizing mission-critical web and enterprise solutions.",
      bioText: "My core expertise spans the Microsoft technology ecosystem (C#, .NET Core, Blazor, SQL Server) along with modern JavaScript/TypeScript environments (React, Angular, Node.js) and AI-Augmented Engineering with Autonomous Agents. I specialize in turning complex business rules into reactive user interfaces and high-availability APIs, adhering to Clean Code, automated testing, and Docker cloud deployments.",
      pillars: [
        {
          title: "Architecture & Scalable APIs",
          description: "Design of microservices and REST APIs in .NET Core with Clean Architecture, dependency injection, and decoupled design patterns."
        },
        {
          title: "AI-Augmented Engineering",
          description: "Software lifecycle acceleration using autonomous agents, LLMs (Gemini, Claude, GPT), and automated engineering pipelines."
        },
        {
          title: "Database Optimization",
          description: "Relational modeling in SQL Server, normalized schema design, query optimization, and high-concurrency transactional safety."
        },
        {
          title: "Testing & Continuous Quality",
          description: "Rigorous test coverage with unit and functional suites (xUnit, Selenium) guaranteeing stable, production-ready releases."
        }
      ]
    },
    tech: {
      badge: "Skills",
      title: "Tech Stack",
      subtitle: "Languages, frameworks, cloud tools, and Artificial Intelligence workflows applied to build high-impact enterprise solutions.",
      categories: {
        backend: "Backend & Architecture",
        frontend: "Frontend & UI/UX",
        ai: "AI & Agentic Engineering",
        devops: "DevOps, Cloud & Tooling"
      }
    },
    contact: {
      badge: "Direct Contact",
      title: "Ready to build something extraordinary?",
      subtitle: "Available for full-time engineering roles (remote or hybrid), technical consulting, and strategic software projects.",
      emailLabel: "Professional Email",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      whatsappTitle: "Direct WhatsApp",
      location: "Aguascalientes, Mexico",
      timezone: "Timezone: GMT-6 (CST)",
      availability: "Typical response: < 24 hours"
    },
    footer: {
      tagline: "Middle Fullstack Developer • Building high-value enterprise software solutions.",
      copyright: "Carlos Antonio Gómez Hernández. All rights reserved.",
      backToTop: "Top"
    },
    floatingCTA: {
      whatsappAria: "Send WhatsApp message",
      contactAria: "Go to Contact section",
      talk: "Let's Talk"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre Mí",
      stack: "Stack",
      contact: "Contacto",
      downloadCv: "Descargar CV",
      cvShort: "CV",
      switchLangAria: "Cambiar idioma",
    },
    hero: {
      status: "Disponible para roles Full-time & Consultoría Técnica",
      greeting: "Hola, soy",
      name: "Carlos Gómez",
      rolePrefix: "Especialidad:",
      titles: [
        "Fullstack Developer (.NET & React)",
        "Especialista en .NET Core & C#",
        "Ingeniero en React & Node.js",
        "Ingeniero Asociado @ Teseract.io",
        "Ingeniero Asistido por IA",
        "Soluciones Enterprise & Cloud"
      ],
      intro: "Arquitecto y desarrollo ecosistemas digitales robustos desde cero. Especialista en Ingeniería Fullstack con .NET Core, C#, React, Blazor y Node.js, colaborando también en proyectos a la medida con Teseract.io. Integro IA & Agentes Autónomos para acelerar entregas y convertir requerimientos de entornos empresariales en sistemas escalables, seguros y listos para producción.",
      exploreProjects: "Explorar Proyectos",
      downloadCv: "Descargar CV",
      letsTalk: "Hablemos Directo",
      yearsExpBadge: "4+ Años",
      yearsExpSub: "Experiencia Profesional",
      metricYears: "4+",
      metricYearsLabel: "Años Desarrollando Software",
      metricSystems: "5+",
      metricSystemsLabel: "Sistemas Enterprise en Producción",
      metricLifecycle: "100%",
      metricLifecycleLabel: "Full-Lifecycle (Diseño a Despliegue)",
      metricAi: "AI & QA",
      metricAiLabel: "Productividad & Código Limpio",
    },
    experience: {
      badge: "Trayectoria",
      title: "Experiencia Laboral",
      subtitle: "Historial comprobado en desarrollo de software empresarial, proyectos a la medida e ingeniería de alto rendimiento.",
      jobs: [
        {
          id: 5,
          role: "Middle Fullstack Developer",
          company: "Corporativo RAINDE S.A. de C.V.",
          period: "Julio 2026 - Presente",
          isCurrent: true,
          type: "Tiempo Completo",
          technologies: ["React", ".NET Core", "Node.js", "AI-Augmented Dev", "AI Agents", "SQL Server", "REST APIs"],
          description: "* Arquitectura y modernización de plataformas empresariales utilizando .NET Core, React y Node.js.\n* Integración de flujos de trabajo con IA y agentes autónomos para acelerar la entrega de software, pruebas y análisis de código.\n* Producción y despliegue de soluciones web escalables con alta disponibilidad y rendimiento optimizado."
        },
        {
          id: 4,
          role: "Software Engineer & Consultor Técnico",
          company: "Teseract (teseract.io)",
          period: "2024 - Presente",
          isCurrent: true,
          type: "Asociado / Proyectos",
          technologies: ["React", "Node.js", ".NET Core", "Cloud & Web Apps", "AI Integration", "Point of Sale (POS)"],
          description: "* Participación activa en el diseño técnico, arquitectura y desarrollo de plataformas web a la medida y sistemas comerciales para clientes y empresas.\n* Liderazgo en el ciclo completo de entrega de software de punta a punta, con capacidad para resolver proyectos tanto de forma autónoma como coordinando con equipos de desarrollo.\n* Implementación de soluciones escalables, integración de APIs y automatización orientada a resultados de negocio."
        },
        {
          id: 3,
          role: "FullStack Web Developer",
          company: "Grupo SINCO",
          period: "Diciembre 2022 - Mayo 2026",
          isCurrent: false,
          type: "Tiempo Completo",
          technologies: [".NET Core", "C#", "Blazor", "Angular", "Node.js", "SQL Server", "AI Tooling", "xUnit"],
          description: "* Desarrollador responsable de aplicaciones empresariales, liderando el ciclo completo desde arquitectura hasta producción.\n* Diseño e implementación de soluciones escalables con .NET Entity Framework Core, Blazor, Angular y Node.js.\n* Adopción pionera de herramientas de IA (LLMs) y pipelines de desarrollo para análisis de commits, refactorización y resolución ágil de bugs.\n* Creación de suites de pruebas unitarias y de integración para APIs y frontend con nUnit y xUnit; despliegues continuos."
        },
        {
          id: 2,
          role: "QA Automation Tester - Support",
          company: "Lion Intel",
          period: "Agosto 2022 - Diciembre 2022",
          isCurrent: false,
          type: "QA & Soporte",
          technologies: ["Python", "Selenium", "Automated Testing", "e-Commerce", "CI/CD"],
          description: "* Soporte y diagnóstico preventivo para plataformas e-Commerce de alto volumen en producción.\n* Automatización de pruebas de regresión, integración y aceptación funcional con Selenium en Python."
        },
        {
          id: 1,
          role: "Frontend Developer (Freelance)",
          company: "Freelance",
          period: "Noviembre 2021 - Junio 2022",
          isCurrent: false,
          type: "Freelance",
          technologies: ["JavaScript", "HTML5/CSS3", "Sass", "UI/UX", "Responsive Design"],
          description: "* Diseño e implementación de interfaces web ultra responsivas para clientes comerciales y PyMEs.\n* Pruebas funcionales de rendimiento y soporte antes y después de cada despliegue.\n* Creación de experiencias de usuario atractivas orientadas a conversión y usabilidad."
        }
      ]
    },
    projects: {
      badge: "Portafolio",
      title: "Proyectos Destacados",
      subtitle: "Sistemas completos con arquitecturas reales, lógica de negocio avanzada y aplicaciones en producción.",
      filters: {
        all: "Todos los Proyectos",
        enterprise: "Enterprise & ERP",
        saas: "SaaS & Apps en Vivo",
        management: "Gestión & Servicios",
        productivity: "Productividad Web"
      },
      readMore: "Leer descripción completa...",
      readLess: "Ver menos",
      visitLive: "Visitar Proyecto en Vivo",
      clientRepo: "Repo Cliente",
      apiRepo: "API (.NET Core)",
      items: {
        aurea: {
          title: "Áurea Digital",
          category: "SaaS & Eventos Digitales",
          highlight: "En Vivo en Vercel",
          description: "Plataforma web moderna y elegante para la creación, personalización y distribución de invitaciones digitales interactivas para eventos sociales y corporativos de alta gama. Cuenta con panel de administración general, panel para clientes, gestión de pases y confirmación de asistencia (RSVP) en tiempo real, catálogo de plantillas dinámicas, planes de precios y experiencia optimizada para dispositivos móviles."
        },
        qualitrack: {
          title: "QualiTrack",
          category: "Calidad & Manufactura",
          highlight: "Workflow State Machine",
          description: "Plataforma empresarial de grado de producción diseñada para automatizar el control de calidad en manufactura y cadena de suministro. Centraliza el ciclo completo de reporte de piezas defectuosas (NG - Not Good) mediante la digitalización estricta del Inspection Report. Incluye un motor de estados lineales deterministas que guía secuencialmente desde alertas automáticas a proveedores hasta la disposición final del material (scrap, retorno o reclamaciones)."
        },
        proctix: {
          title: "Proctix",
          category: "Administración & Procesos ERP",
          highlight: "Auditoría & Cumplimiento",
          description: "Robusta aplicación web administrativa concebida para orquestar, estandarizar y auditar procedimientos complejos en líneas de manufactura industrial de alto volumen. Cuenta con control de acceso dinámico por jerarquías, captura de firma digitalizada, notificaciones automatizadas por correo, registro fotográfico in-situ y generación avanzada de reportes en Excel para trazabilidad y auditorías oficiales."
        },
        servon: {
          title: "Servon",
          category: "Gestión de Servicios Públicos",
          highlight: "Business Intelligence",
          description: "Plataforma web de ingeniería diseñada para centralizar y coordinar el ciclo de vida operativo de servicios públicos (agua, electricidad, telecomunicaciones). Permite la gestión inmediata de órdenes de suspensión, registro y validación de cobros, y reactivación de suministros. Integra tableros analíticos interactivos que transforman datos operativos en métricas de rendimiento en tiempo real."
        },
        stepapp: {
          title: "StepApp",
          category: "Productividad & Tablero Ágil",
          highlight: "React + .NET Core API",
          description: "Herramienta moderna de gestión ágil de tareas con experiencia de usuario interactiva y fluida. Diseñada con arquitectura desacoplada: frontend dinámico en React y Sass con soporte para arrastrar y soltar (Drag and Drop), sincronizado con una API RESTful desarrollada con .NET Entity Framework Core y SQL Server."
        },
        prizepop: {
          title: "PrizePop",
          category: "Sorteos & Recaudación",
          highlight: "Full-Stack Architecture",
          description: "Plataforma web completa para creación, administración y dinamización de rifas y concursos interactivos para causas benéficas y eventos empresariales. Dispone de personalización de temas, cálculo y asignación automatizada de premios, pasarela de venta y control transparente de tickets emitidos."
        }
      }
    },
    about: {
      badge: "Perfil Profesional",
      title: "Sobre Mí",
      subtitle: "Ingeniero en Sistemas Computacionales enfocado en construir software fiable, mantenible y orientado a resultados de negocio.",
      degree: "Ingeniero en Sistemas Computacionales",
      location: "Aguascalientes, México (Remoto / Híbrido)",
      domain: "Experiencia en ERP, Manufactura & SaaS",
      university: "Universidad Autónoma de Aguascalientes (UAA)",
      downloadCv: "Descargar Curriculum Vitae",
      bioLead: "Ingeniero en Sistemas Computacionales y Desarrollador Fullstack con más de 4 años de experiencia comprobada diseñando, programando y optimizando soluciones web y empresariales de misión crítica.",
      bioText: "Mi dominio abarca el ecosistema tecnológico de Microsoft (C#, .NET Core, Blazor, SQL Server) junto con entornos modernos de JavaScript/TypeScript (React, Angular, Node.js) y el Desarrollo Asistido por Inteligencia Artificial y Agentes Autónomos. Me especializo en transformar reglas de negocio complejas en interfaces reactivas y APIs de alta disponibilidad, aplicando Clean Code, pruebas automatizadas y contenedores Docker para la nube.",
      pillars: [
        {
          title: "Arquitectura & APIs Escalables",
          description: "Diseño de microservicios y REST APIs en .NET Core con arquitectura limpia, inyección de dependencias y patrones de diseño desacoplados."
        },
        {
          title: "Ingeniería Asistida por IA",
          description: "Aceleración del ciclo de vida del software mediante agentes autónomos, modelos de lenguaje (LLMs) y pipelines automatizados de desarrollo."
        },
        {
          title: "Optimización de Bases de Datos",
          description: "Modelado relacional en SQL Server, diseño de esquemas normalizados, optimización de consultas y transacciones críticas de alta concurrencia."
        },
        {
          title: "Testing & Calidad Continua",
          description: "Cobertura rigurosa con suites de pruebas unitarias y funcionales (xUnit, Selenium) que aseguran despliegues estables en producción."
        }
      ]
    },
    tech: {
      badge: "Habilidades",
      title: "Stack Tecnológico",
      subtitle: "Herramientas, lenguajes, frameworks e Inteligencia Artificial que aplico para crear soluciones empresariales de alto impacto.",
      categories: {
        backend: "Backend & Arquitectura",
        frontend: "Frontend & UI/UX",
        ai: "IA & Desarrollo Agéntico",
        devops: "DevOps, Cloud & Herramientas"
      }
    },
    contact: {
      badge: "Contacto Directo",
      title: "¿Listo para construir algo extraordinario?",
      subtitle: "Disponible para posiciones de tiempo completo (remoto o híbrido), consultoría técnica y proyectos estratégicos.",
      emailLabel: "Correo Electrónico Profesional",
      copyBtn: "Copiar",
      copiedBtn: "¡Copiado!",
      whatsappTitle: "WhatsApp Directo",
      location: "Aguascalientes, México",
      timezone: "Zona Horaria: GMT-6 (CST)",
      availability: "Respuesta habitual: < 24 horas"
    },
    footer: {
      tagline: "Middle Fullstack Developer • Construyendo soluciones empresariales de alto valor.",
      copyright: "Carlos Antonio Gómez Hernández. Todos los derechos reservados.",
      backToTop: "Inicio"
    },
    floatingCTA: {
      whatsappAria: "Enviar mensaje de WhatsApp",
      contactAria: "Ir a sección de Contacto",
      talk: "Hablemos"
    }
  }
};
