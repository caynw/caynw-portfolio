import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fvkk8dh', 'template_1oiu86v', form.current, {
        publicKey: '_1T0xnoZ6hXt9FPMj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" className='name' />
      <label>Email</label>
      <input type="email" name="user_email" className='email' />
      <label>Message</label>
      <textarea name="message" className='message'/>
      <input type="submit" value="Send" className='submit' />
    </form>
  );
};

export default ContactForm;