import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2vr43bt',
        'template_3evzkud',
        form.current,
        'PxA2vZOqQe8hlhbxE',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message envoyé');
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
    alert('Votre message a été envoyé avec succés ! ✉️');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input
        type="text"
        id="first_name"
        name="first_name"
        placeholder="Prenom"
      />
      <input type="text" id="last_name" name="last_name" placeholder="Nom" />
      <input type="email" id="mail" name="email" placeholder="Email" />
      <textarea id="msg" name="message" placeholder="Message"></textarea>
      <button type="submit" value="Send" className="button button_envoyer">
        Envoyer
      </button>
    </form>
  );
}
export default ContactForm;
