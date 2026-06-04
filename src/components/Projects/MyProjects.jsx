import Project from './Project/Project';
import './MyProjects.scss';
import { prizePopImages } from '../../assets/PrizePop/PrizePopImages';
import { proctixImages } from '../../assets/Proctix/ProctixImages';
import { servonImages } from '../../assets/Servon/ServonImages';
import { stepAppImages } from '../../assets/SetpApp/StepAppImages'

function MyProjects() {
    const projectsData = [
        {
            id: 1,
            title: 'Enterprise Management Ecosystem',
            description: 'A scalable fullstack solution featuring high-performance APIs, robust data automation pipelines, and reactive enterprise dashboards built for optimal workplace efficiency.',
            images: [
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop'
            ],
            technologies: ['nodejs', 'sass', 'sql', 'angular'],
            github: [
                {url: 'https://github.com/tu-usuario/proyecto-ejemplo', name: 'Proyecto Ejemplo'}
            ]
        },
        {
            id: 2,
            title: 'Proctix',
            description: 'Proctix is a robust, enterprise-grade administrative web application designed to orchestrate, standardize, and audit complex manufacturing processes. Built for high-volume industrial environments, the platform ensures strict compliance through dynamic user-level access control, advanced document management, and real-time process tracking. It bridges the gap between shop floor operations and administrative oversight by integrating features such as digital signature capture, automated email notifications, on-site photo documentation, and advanced Excel reporting for seamless compliance and data portability.',
            images: proctixImages,
            technologies: ['csharp', 'nunit', 'blazor', 'xunit', 'sql', 'javascript', 'docker' ],
            github: [
                {url: 'https://github.com/carlos-uaa/Proctix.Client', name: 'Proctix.Client'},
                {url: 'https://github.com/carlos-uaa/Proctix.API', name: 'Proctix.API'}
            ]
        },
        {
            id: 3,
            title: 'PrizePop',
            description: 'PrizePop is a comprehensive, full-stack web platform designed to streamline the creation, management, and participation in custom raffles and sweepstakes. While optimized for charity campaigns and fundraising initiatives, its versatile architecture allows users to host tailored contests for any social or professional event. The application bridges the gap between fun and professional management, offering robust tools for theme customization, prize allocation, ticket sales tracking, and interactive participant engagement.',
            images: prizePopImages,
            technologies: ['blazor', 'csharp', 'sql'],
            github: [
                {url: 'https://github.com/carlos-uaa/PrizePop.Client', name: 'PrizePop.Client'},
                {url: 'https://github.com/carlos-uaa/PrizePop.API', name: 'PrizePop.API'},
            ]
        },
        {
            id: 4,
            title: 'Servon',
            description: 'Servon is a robust web platform engineered to streamline the tracking, management, and orchestration of utility service lifecycles, including water, electricity, and internet infrastructure. Designed for utility companies and field service contractors, the application centralizes critical operations such as service disconnections, payments, and reconnections. It transforms raw operational data into actionable business intelligence through an intuitive analytics dashboard, enabling organizations to monitor performance and optimize service delivery in real time.',
            images: servonImages,
            technologies: ['blazor', 'csharp', 'sql', 'jwt'],
            github: [
                {url: 'https://github.com/carlos-uaa/Servon.Client', name: 'Servon.Client'},
                {url: 'https://github.com/carlos-uaa/Servon.API', name: 'Servon.API'},
            ]
        },
        {
            id: 5,
            title: 'StepApp',
            description: 'StepApp is an intuitive, full-featured task management platform designed to optimize productivity across diverse workflows, extending far beyond software development. Engineered with a clean, user-centric interface, the application delivers a seamless experience for organizing, tracking, and prioritizing daily responsibilities. It was developed with a API in .Net EF Core & a client in React',
            images: stepAppImages,
            technologies: ['react', 'sass', 'javascript', 'csharp', 'sql'],
            github: [
                {url: 'https://github.com/carlos-uaa/StepApp.Client', name: 'StepApp.Client'},
                {url: 'https://github.com/carlos-uaa/StepApp.Api', name: 'StepApp.Api'}
            ]
        }
    ];

    return (
        <section className="my-projects">
            <h2 className="my-projects__title">Projects</h2>
            <div className="my-projects__grid">
                {projectsData.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}

export default MyProjects;