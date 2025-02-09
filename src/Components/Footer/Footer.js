import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return(
        <footer id='footer'>
            <div className='footerline'/>
                <p> © Copyright 2024 by Cayn Williard</p>
            <div className='socialmedia'>
                <Link to='https://www.linkedin.com/in/cayn-williard-2b54a0200' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} className='fa fa-bounce' />
                </Link>
                <Link to='https://github.com/caynwsp' target='_blank'>
                <FontAwesomeIcon icon={faGithub} className='fa fa-bounce' />                
                </Link>
            </div>
                
        </footer>
    )
};

export default Footer;