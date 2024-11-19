import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';

function ContactForm() {
  const form = useRef();
  const [inputFirstNameValue, setInputFirstNameValue] = useState('');
  const [inputLastNameValue, setInputLastNameValue] = useState('');
  const [inputMailValue, setInputMailValue] = useState('');
  const [inputMessageValue, setInputMessageValue] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(null);
  const [isLastNameValid, setIsLastNameValid] = useState(null);
  const [isMailValid, setIsMailValid] = useState(null);
  const [isMessageValid, setIsMessageValid] = useState(null);

  //Fonction de reset des champs du formulaire
  function resetForm() {
    setInputFirstNameValue('');
    setInputLastNameValue('');
    setInputMailValue('');
    setInputMessageValue('');
  }

  //Fonction permettant d'envoyer le mail via emailJS
  function sendEmail(event) {
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

    alert('Votre message a été envoyé avec succés ! ✉️');
    resetForm();
  }

  //Fonction observant les changement dans les champs
  function handleInputFirstNameChange(event) {
    setInputFirstNameValue(event.target.value);
  }

  function handleInputLastNameChange(event) {
    setInputLastNameValue(event.target.value);
  }

  function handleInputMailChange(event) {
    setInputMailValue(event.target.value);
  }

  function handleInputMessageChange(event) {
    setInputMessageValue(event.target.value);
  }

  //Fonctions de validation de la saisi de l'utilisateur pour les champs
  function validFirstName() {
    const firstNameRegExp = new RegExp('^[a-zA-Z-_.]{2,50}$', 'g');

    // Tester la valeur de l'input avec la regex
    if (firstNameRegExp.test(inputFirstNameValue)) {
      setIsFirstNameValid(true);
      console.log(isFirstNameValid, 'La regex prénom est validée');
    } else {
      setIsFirstNameValid(false);
      console.log(isFirstNameValid, "La regex prénom n'est pas validée");
    }
  }

  function validLastName() {
    const lastNameRegExp = new RegExp('^[a-zA-Z-_.]{2,50}$', 'g');

    // Tester la valeur de l'input avec la regex
    if (lastNameRegExp.test(inputLastNameValue)) {
      setIsLastNameValid(true);
      console.log(isLastNameValid, 'La regex nom est validée');
    } else {
      setIsLastNameValid(false);
      console.log(isLastNameValid, "La regex nom n'est pas validée");
    }
  }

  function validMail() {
    const emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]{1,50}[@]{1}[a-zA-Z0-9.-_]{1,50}[.]{1}[a-z]{2,10}$',
      'g',
    );

    // Tester la valeur de l'input avec la regex
    if (emailRegExp.test(inputMailValue)) {
      setIsMailValid(true);
      console.log(isMailValid, 'La regex mail est validée');
    } else {
      setIsMailValid(false);
      console.log(isMailValid, "La regex mail n'est pas validée");
    }
  }

  function validMessage() {
    const messageRegExp = new RegExp('^[a-zA-Z-_.]{2,500}$', 'g');

    // Tester la valeur de l'input avec la regex
    if (messageRegExp.test(inputMessageValue)) {
      setIsMessageValid(true);
      console.log(isMessageValid, 'La regex message est validée');
    } else {
      setIsMessageValid(false);
      console.log(isMessageValid, "La regex message n'est pas validée");
    }
  }

  //Fonction permettant d'appeler la fonction "sendEmail" si tout les champs sont validés
  function validForm(event) {
    event.preventDefault();

    validFirstName();
    validLastName();
    validMail();
    validMessage();

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isMailValid &&
      isMessageValid === true
    ) {
      sendEmail();
    } else {
      console.log(
        isFirstNameValid,
        isLastNameValid,
        isMailValid,
        isMessageValid,
        "La fonction sendEmail n'est pas déclanché.",
      );
    }
  }

  return (
    <form ref={form} onSubmit={validForm} className="form">
      <input
        type="text"
        id="first_name"
        name="first_name"
        value={inputFirstNameValue}
        onChange={handleInputFirstNameChange}
        placeholder="Prenom"
      />
      <input
        type="text"
        id="last_name"
        name="last_name"
        value={inputLastNameValue}
        onChange={handleInputLastNameChange}
        placeholder="Nom"
      />
      <input
        type="email"
        id="mail"
        name="email"
        value={inputMailValue}
        onChange={handleInputMailChange}
        placeholder="email"
      />
      <textarea
        id="msg"
        name="message"
        value={inputMessageValue}
        onChange={handleInputMessageChange}
        placeholder="Message"
      ></textarea>
      <input type="submit" value="Envoyer" className="button button_envoyer" />

      {(isFirstNameValid ||
        isLastNameValid ||
        isMailValid ||
        isMessageValid === false) && (
        <p style={{ color: 'red' }}>
          ⚠️ Un des champs n'est pas correctement complété. Veuillez réessayer.
        </p>
      )}
    </form>
  );
}
export default ContactForm;
