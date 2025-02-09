import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import BannerTop from './Components/Banners/Banners.js';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className='App'>
      <ParallaxProvider>
      <BannerTop /> 
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default App;