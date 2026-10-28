import {
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiSass, SiPython, SiNodedotjs, SiGit, SiGithub,
  SiNpm, SiOpenai, SiAstro, SiDocker, SiTypescript, SiDotnet, SiBlazor, SiAngular, SiPostman,
  SiSupabase, SiVercel
} from 'react-icons/si';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';
import { FaAws, FaLayerGroup, FaRobot, FaBrain } from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { HiSparkles } from "react-icons/hi";
import { useLanguage } from '../../context/LanguageContext';
import './TechStack.scss';

function TechStack() {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: t.tech.categories.backend,
      badgeClass: "badge-backend",
      technologies: [
        { name: "C#", icon: <TbBrandCSharp />, color: "#239120" },
        { name: ".NET Core", icon: <SiDotnet />, color: "#512BD4" },
        { name: "SQL Server", icon: <TbSql />, color: "#38bdf8" },
        { name: "Supabase", icon: <SiSupabase />, color: "#3ecf8e" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#22c55e" },
        { name: "Python", icon: <SiPython />, color: "#38bdf8" },
      ]
    },
    {
      category: t.tech.categories.frontend,
      badgeClass: "badge-frontend",
      technologies: [
        { name: "React", icon: <SiReact />, color: "#38bdf8" },
        { name: "Blazor", icon: <SiBlazor />, color: "#818cf8" },
        { name: "Angular", icon: <SiAngular />, color: "#f87171" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#60a5fa" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#facc15" },
        { name: "SASS / SCSS", icon: <SiSass />, color: "#f472b6" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#22d3ee" },
        { name: "HTML5 / CSS3", icon: <SiHtml5 />, color: "#fb923c" },
      ]
    },
    {
      category: t.tech.categories.ai,
      badgeClass: "badge-focus",
      technologies: [
        { name: "Agentes & Workflows", icon: <FaRobot />, color: "#38bdf8" },
        { name: "Gemini / Claude / GPT", icon: <HiSparkles />, color: "#a855f7" },
        { name: "OpenAI API", icon: <SiOpenai />, color: "#10a37f" },
        { name: "Copilot & Qodo", icon: <FaBrain />, color: "#f59e0b" },
        { name: "Clean Architecture", icon: <FaLayerGroup />, color: "#34d399" },
      ]
    },
    {
      category: t.tech.categories.devops,
      badgeClass: "badge-tools",
      technologies: [
        { name: "Docker", icon: <SiDocker />, color: "#38bdf8" },
        { name: "Vercel", icon: <SiVercel />, color: "#f8fafc" },
        { name: "Azure", icon: <VscAzure />, color: "#60a5fa" },
        { name: "AWS", icon: <FaAws />, color: "#fb923c" },
        { name: "Git", icon: <SiGit />, color: "#f87171" },
        { name: "GitHub", icon: <SiGithub />, color: "#f8fafc" },
        { name: "Postman", icon: <SiPostman />, color: "#fb923c" },
        { name: "VS Code", icon: <VscVscode />, color: "#60a5fa" },
        { name: "npm", icon: <SiNpm />, color: "#ef4444" },
      ]
    }
  ];

  return (
    <section id="technologies" className="tech-stack-section">
      <div className="section-header">
        <span className="section-header__badge">
          <FaLayerGroup className="badge-icon" />
          {t.tech.badge}
        </span>
        <h2 className="section-header__title">{t.tech.title}</h2>
        <p className="section-header__subtitle">
          {t.tech.subtitle}
        </p>
      </div>

      <div className="tech-stack-grid">
        {skillsData.map((section, index) => (
          <div key={index} className="tech-card">
            <div className="tech-card__header">
              <span className={`tech-card__category-badge ${section.badgeClass}`}>
                {section.category}
              </span>
            </div>

            <div className="technologies-list">
              {section.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="tech-item" title={tech.name}>
                  <div className="tech-icon-wrapper" style={{ '--icon-color': tech.color }}>
                    <span className="tech-icon" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
