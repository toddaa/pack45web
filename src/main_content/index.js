import React from 'react';
import { Parallax } from 'react-parallax';
import Contact from '../sect_contact';
import Join from '../sect_join';
import About from '../sect_about';

const MainContent = () => (
    <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./9627.jpg')}
      bgImageAlt="Derby"
      strength={500}
    >
      <div style={{ height: '600px' }} />
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