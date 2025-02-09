import React from "react";
import './Banners.css';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import foregroundimage from '../../Images/mountains1.png';
import backgroundimage from '../../Images/sky1.jpg';
import Navbar from '../Navigation/Navbar';

const BannerTop = () => {
  return (
    <div className = 'parallax-image-container'> 
    <ParallaxBanner style={{ aspectRatio: '2 / 1' }} className="parallax-container" >
        <ParallaxBannerLayer style={{zIndex:3}}>
            <Navbar/>
        </ParallaxBannerLayer>
      <ParallaxBannerLayer image= {foregroundimage} speed={-15} style={{zIndex:2}} className="foreground" />
      <ParallaxBannerLayer style={{zIndex:3}} scale={[0,1,'easeOutCubic']} children= {[<div className="overlay-content">
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text">Hi, I'm Cayn Williard</h1>
        </div>
        <div className="description">
        <p>Pursuing Full Stack Engineer</p>
        </div>
      </div>]}>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer image= {backgroundimage} speed={-30} style={{zIndex:1}} className="background"/>
  </ParallaxBanner>
  </div>
  );
};

export default BannerTop;