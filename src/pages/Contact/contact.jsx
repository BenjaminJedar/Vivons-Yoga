import ContactForm from '../../components/ContactForm/contactForm';
import './contact.css';

function Contact() {
  return (
    <div className="contact_page">
      <h2 className="contact_title">N'hésite pas à me contacter ! </h2>
      <p className="contact_paragraphe">
        {' '}
        La vie est belle bla bla bla, le yoga c'est trop cool et tout le monde
        en a besoins. Alors si tu as des questions ou si tu as besoin
        d'informations complémentaires, envoie moi un message ! C'est avec
        plaisir que nous échangerons sur ce qui t'intéresse en fonction de tes
        objectifs et disponibilités.🌻🌻
      </p>
      <div className="contact_content">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
