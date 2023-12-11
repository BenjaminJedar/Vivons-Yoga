import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {
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
    alert('Message envoyé !');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input type="text" id="name" name="first_name" placeholder="Prenom" />
      <input type="text" id="name" name="last_name" placeholder="Nom" />
      <input type="email" id="mail" name="email" placeholder="Email" />
      <textarea id="msg" name="message" placeholder="Message"></textarea>
      <button type="submit" value="Send" className="button button_envoyer">
        Envoyer
      </button>
    </form>
  );
}
export default Contact;
