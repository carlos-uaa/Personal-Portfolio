import './ContactChip.scss';

const ContactChip = ({ href, icon: Icon, label }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-chip"
        >
            <Icon className="contact-chip__icon" />
            <span className="contact-chip__label">{label}</span>
        </a>
    );
};

export default ContactChip;