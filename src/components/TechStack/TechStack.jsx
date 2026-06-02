import {
    SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiSass, SiPython, SiNodedotjs, SiGit, SiGithub,
    SiNpm, SiOpenai, SiAstro, SiDocker, SiTypescript, SiDotnet, SiBlazor, SiAngular, SiPostman
} from 'react-icons/si';
import { TbBrandCSharp, TbSql  } from 'react-icons/tb';
import { FaAws, FaCss3Alt  } from "react-icons/fa";
import { VscAzure, VscVscode  } from "react-icons/vsc";
import './TechStack.scss';

function TechStack() {
    const skillsData = [
        {
            category: "Frontend",
            technologies: [
                { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
                { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
                { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
                { name: "ReactJS", icon: <SiReact />, color: "#61DAFB" },
                { name: "Blazor", icon: <SiBlazor />, color: "#512BD4" },
                { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
                { name: "SASS", icon: <SiSass />, color: "#CC6699" },
            ]
        },
        {
        category: "Backend",
        technologies: [
            { name: "C#", icon: <TbBrandCSharp />, color: "#239120" },
            { name: "NodeJS", icon: <SiNodedotjs />, color: "#339933" },
            { name: ".NET Core", icon: <SiDotnet />, color: "#512BD4" },
            { name: "Python", icon: <SiPython />, color: "#3776AB" },
            { name: "SQL", icon: <TbSql />, color: "#e6e63d" },
        ]
        },
        {
        category: "Tools & Cloud",
        technologies: [
            { name: "Git", icon: <SiGit />, color: "#F05032" },
            { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
            { name: "VSCode", icon: <VscVscode />, color: "#007ACC" },
            { name: "npm", icon: <SiNpm />, color: "#CB3837" },
            { name: "OpenAI", icon: <SiOpenai />, color: "#412991" },
            { name: "AWS", icon: <FaAws />, color: "#FF9900" },
            { name: "Azure", icon: <VscAzure />, color: "#0089D6" },
            { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        ]
        },
        {
        category: "Learning / Focus",
        technologies: [
            { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
            { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
            { name: "Astro", icon: <SiAstro />, color: "#FF5D01" },
            { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        ]
        }
    ];

    return (
        <div className="tech-stack-section">
            <h2 className="technologies__title">Technologies</h2>
            <div className="tech-stack-grid">
                {skillsData.map((section, index) => (
                <div key={index} className="tech-card">
                    <h2 className={`title-${section.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                    {section.category}
                    </h2>

                    <div className="technologies-list">
                    {section.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-item">
                            <span className="tech-icon" style={{ color: tech.color }}>
                                {tech.icon}
                            </span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;