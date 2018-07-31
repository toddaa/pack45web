import React from 'react';
import Contact from '../sect_contact';
import Join from '../sect_join';
import About from '../sect_about';
//import ImgDerby from './9627.jpg';
import ImgFishing from './1187.jpg';
import ImgCamping from './0230.jpg';
import ImgRocket from './nl9986.jpg';

import DerbyPic1 from '../main_content/DerbyPic40.jpg';
import DerbyPic2 from '../main_content/DerbyPic44.jpg';
import DerbyPic3 from '../main_content/DerbyPic45.jpg';



const MobileContent = () => (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{width:'100%'}}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={DerbyPic1} className="img-thumbnail" alt="Super Hero Cubs" />
            </div>
            <div className="carousel-item">
              <img src={DerbyPic2} className="img-thumbnail" alt="Super Repelling Leader" />
            </div>
            <div className="carousel-item">
              <img src={DerbyPic3} className="img-thumbnail" alt="Super Repelling Leader" />
            </div>
          </div>
        </div>
    <About />
    <img src={ImgFishing} alt="Fishing" className="img-thumbnail" />
    <Join />
    <img src={ImgCamping} alt="Camping" className="img-thumbnail" />
    <Contact />
    <img src={ImgRocket} alt="Rocket" className="img-thumbnail" />
  </div>
);

export default MobileContent;