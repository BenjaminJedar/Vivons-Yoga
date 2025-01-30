import ContactForm from '../../components/ContactForm/contactForm';
import './contact.css';
import img_couverture_prestations from '../../assets/couverture_prestations_redim.jpg';
import img_couverture_prestations_PC from '../../assets/couverture_prestations_redim_PC.jpg';
import fleur from '../../assets/fleur.svg';

function Contact() {
  return (
    <div className="contact_page">
      <div className="img_presta_container">
        <picture>
          <source
            srcset={img_couverture_prestations}
            media="(max-width: 767px)"
          />
          <img
            src={img_couverture_prestations_PC}
            alt="Un papillon sur une fleure"
            className="img_couverture"
          />
        </picture>
      </div>
      <h2 className="contact_title">N'hésite pas à me contacter ! </h2>
      <p className="contact_paragraphe">
        {' '}
        La vie est belle bla bla bla, le yoga c'est trop cool et tout le monde
        en a besoins. Alors si tu as des questions ou si tu as besoin
        d'informations complémentaires, envoie moi un message ! C'est avec
        plaisir que nous échangerons sur ce qui t'intéresse en fonction de tes
        objectifs et disponibilités.
      </p>
      <div className="contact_content">
        <ContactForm />
      </div>
      <img src={fleur} alt="Une fleur en dessin" className="fleur_dessin" />
    </div>
  );
}

export default Contact;
