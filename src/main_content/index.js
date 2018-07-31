import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Contact from '../sect_contact';
import Join from '../sect_join';
import About from '../sect_about';

import DerbyPic1 from './DerbyPic40.jpg';
import DerbyPic2 from './DerbyPic44.jpg';
import DerbyPic3 from './DerbyPic45.jpg';

const MainContent = () => (
    <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={500}
    >
      <div style={{ height: '600px' }} />
      <Background className="custom-bg">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{width:'100%'}}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={DerbyPic1} alt="Super Hero Cubs" />
            </div>
            <div className="carousel-item">
              <img src={DerbyPic2} alt="Super Repelling Leader" />
            </div>
            <div className="carousel-item">
              <img src={DerbyPic3} alt="Super Repelling Leader" />
            </div>
          </div>
        </div>
      </Background>
    </Parallax>
    <About />
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./1187.jpg')}
      bgImageAlt="Fishing"
      strength={500}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
    <Join />
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./0230.jpg')}
      bgImageAlt="Camping"
      strength={500}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
    <Contact />
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./nl9986.jpg')}
      bgImageAlt="Rocket Launch"
      strength={500}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
  </div>
);

export default MainContent;