import ExperienceItem from "./ExperienceItem/ExperienceItem";
import "./Experience.scss";

function Experience() {
    const jobsData = [
        {
            id: 1,
            role: "FullStack Web Developer",
            company: "Grupo SINCO",
            period: "December 2022 - May 2026",
            description: "* Sole developer for enterprise applications, managing the full lifecycle from product requirements to deployment. \n * Designed and built scalable solutions using .NET Entity Framework Core, Blazor, Angular and Node.js. \n * Conducted API and client unit testing to ensure high-quality production deployments. \n * Provided production support and resolved critical bugs under tight deadlines.\n * Collaborated with cross-functional teams on system design and software architecture."
        },
        {
            id: 2,
            role: "QA Automation Tester - Support",
            company: "Lion Intel",
            period: "August 2022 - December 2022",
            description: "* Provide support for e-Commerce applications in production. \n * Training automation with selenium in python, unit testing, acceptation testing and functionality testing for several projects simultaneously"
        },
        {
            id: 3,
            role: "Freelance Contributions",
            company: "Freelance",
            period: "November 2021 - June 2022",
            description: "* Designing responsive pages for different projects \n * Testing & Supporting pages before and after deployment \n * Producing web pages for private enterprises, promoting the customer's aviable products"
        }
    ];

    return (
        <section className="experience">
            <h2 className="experience__title">Experience</h2>
            <div className="experience__timeline">
                {jobsData.map((job) => (
                    <ExperienceItem
                        key={job.id}
                        role={job.role}
                        company={job.company}
                        period={job.period}
                        description={job.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Experience;