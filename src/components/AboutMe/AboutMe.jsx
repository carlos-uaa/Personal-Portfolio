import photo from '../../assets/profile.jpg';
import './AboutMe.scss';

function AboutMe() {
    const handleDownloadCV = () => {
        const pdfUrl = "../../../public/Gómez Hernández, Carlos Antonio CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "GomezHernandezCarlosAntonio CV.pdf"; // Nombre con el que se guardará
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="about-container">
            <div className="header">
                <h1>About Me</h1>
                <div className="footer">
                    <button className="download-btn" onClick={handleDownloadCV}>
                        {/* Icono de Documento SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="btn-icon"
                        >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                            <path d="M10 9H8"/>
                            <path d="M16 13H8"/>
                            <path d="M16 17H8"/>
                        </svg>
                        Download CV
                    </button>
                </div>
            </div>

            <div className="content">
                <div className='presentation__img'>
                    <img src={photo} alt="Professional profile" />
                </div>
                <div className="text-content">
                    <p>
                        Driven Computer Systems Engineer and Full-Stack Developer with over 4 years of experience
                        delivering scalable, high-quality web and mobile solutions. Proficient across a robust tech
                        stack—including C#, .NET Core, Blazor, Angular, React, Node.js, TypeScript, MAUI, and Python—with
                        a proven track record of designing complex REST APIs and optimizing SQL databases. Experienced
                        in leveraging Docker and cloud platforms (Azure/AWS) through CI/CD pipelines to streamline
                        deployments and uphold rigorous software standards. A dedicated professional committed to
                        continuous improvement, long-term value, and providing exceptional client support.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;