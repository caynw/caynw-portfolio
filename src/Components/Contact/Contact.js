import React from 'react';
import './Contact.css';
import ContactForm from './Contactform.js';

function Contact () {
    return(
        <section id="contact">
            <div className="text">
            <h2>Contact</h2>
            <ContactForm/>
            </div>
        </section>
    );
};

export default Contact;