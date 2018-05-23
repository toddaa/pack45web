import React from 'react';
import Contact from '../sect_contact';
import Join from '../sect_join';
import About from '../sect_about';
import ImgDerby from './9627.jpg';
import ImgFishing from './1187.jpg';
import ImgCamping from './0230.jpg';
import ImgRocket from './nl9986.jpg';



const MobileContent = () => (
    <div>
    <img src={ImgDerby} alt="Derby" className="img-thumbnail" />
    <About />
    <img src={ImgFishing} alt="Fishing" className="img-thumbnail" />
    <Join />
    <img src={ImgCamping} alt="Camping" className="img-thumbnail" />
    <Contact />
    <img src={ImgRocket} alt="Rocket" className="img-thumbnail" />
  </div>
);

export default MobileContent;