/* Data import */
import photo from '../../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Presentation.scss';

/* Components import */
import ContactChip from './ContactChip/ContactChip';

function Presentation(){
    const contactData = [
        {
            id: 'linkedin',
            href: 'https://linkedin.com/in/carlosgomezdev',
            icon: FaLinkedin,
            label: 'LinkedIn'
        },
        {
            id: 'github',
            href: 'https://github.com/carlos-uaa',
            icon: FaGithub,
            label: 'GitHub'
        },
        {
            id: 'email',
            href: 'mailto:ing.gomez.hernandez.carlos@gmail.com',
            icon: FaEnvelope,
            label: 'Email'
        },
        {
            id: 'phone',
            href: 'https://wa.me/4493483339',
            icon: FaPhone,
            label: 'WhatsApp'
        }
    ];

    return <>
        <section className='presentation'>
            <div className='presentation__text'>
                <div className="me">
                    <h1>Hi, <div className="name">I'm Carlos Gómez</div></h1>
                    <p>Fullstack Developer</p>
                </div>
                <div className="introduction">
                    <p>
                        I architect robust digital ecosystems from the ground up using modern{" "}
                        <span className="highlight">Fullstack Engineering</span>. Expert in building{" "}
                        <span className="highlight">high-performance APIs</span>, reliable{" "}
                        <span className="highlight">backends</span>, and seamless{" "}
                        <span className="highlight">user interfaces</span> that turn complex{" "}
                        <span className="highlight--alt">industrial and business data</span> into actionable tools. 
                        I don't just write code; I deliver <span className="highlight">scalable, production-ready solutions</span>.
                    </p>
                </div>
                <div className="contact">
                    {contactData.map((contact) => (
                        <ContactChip key={contact.id} href={contact.href}
                            icon={contact.icon} label={contact.label} />
                    ))}
                </div>
            </div>
            <div className='presentation__img'>
                <img src={photo} alt="Hero Image" />
            </div>
        </section>
    </>
}

export default Presentation;