import React from 'react'
import { Parallax, Background } from 'react-parallax'
import Contact from '../sect_contact'
import Join from '../sect_join'
import About from '../sect_about'

import DerbyPic1 from './DerbyPic40.jpg'
import DerbyPic2 from './DerbyPic44.jpg'
import DerbyPic3 from './DerbyPic45.jpg'

import FishingPic1 from './fish1.jpg'
import FishingPic2 from './fish2.jpg'
import FishingPic3 from './fish3.jpg'

import CampingPic1 from './camp1.jpg'
import CampingPic2 from './camp2.jpg'
import CampingPic3 from './camp3.jpg'

import RocketPic1 from './rocket1.jpg'
import RocketPic2 from './rocket2.jpg'
import RocketPic3 from './rocket3.jpg'

const MainContent = () => (
  <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={500}
    >
      <div style={{ height: '600px' }} />
      <Background className='custom-bg'>
        {/* <div id='carouselExampleSlidesOnly' className='carousel carousel-fade slide float-right' data-ride='carousel' data-interval='5000' style={{marginRight:'-15px'}}> */}
        <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel' style={{ width: '100%' }}>
          <div className='carousel-inner'>
            <div className='carousel-item active animated pulse'>
              <img src={DerbyPic1} alt='Super Hero Cubs' />
            </div>
            <div className='carousel-item animated pulse'>
              <img src={DerbyPic2} alt='Super Repelling Leader' />
            </div>
            <div className='carousel-item animated pulse'>
              <img src={DerbyPic3} alt='Super Repelling Leader' />
            </div>
          </div>
        </div>
      </Background>
    </Parallax>
    <About />
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={500}
    >
      <div style={{ height: '600px' }} />
      <Background className='custom-bg'>
        <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel' style={{ width: '100%' }}>
          <div className='carousel-inner'>
            <div className='carousel-item active animated slideInLeft'>
              <img src={FishingPic1} alt='Super Hero Cubs' />
            </div>
            <div className='carousel-item animated slideInLeft'>
              <img src={FishingPic2} alt='Super Repelling Leader' />
            </div>
            <div className='carousel-item animated slideInLeft'>
              <img src={FishingPic3} alt='Super Repelling Leader' />
            </div>
          </div>
        </div>
      </Background>
    </Parallax>
    <Join />
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={500}
    >
      <div style={{ height: '600px' }} />
      <Background className='custom-bg'>
        <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel' style={{ width: '100%' }}>
          <div className='carousel-inner'>
            <div className='carousel-item active animated slideInRight'>
              <img src={CampingPic1} alt='Super Hero Cubs' />
            </div>
            <div className='carousel-item animated slideInRight'>
              <img src={CampingPic2} alt='Super Repelling Leader' />
            </div>
            <div className='carousel-item animated slideInRight'>
              <img src={CampingPic3} alt='Super Repelling Leader' />
            </div>
          </div>
        </div>
      </Background>
    </Parallax>
    <Contact />
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={500}
    >
      <div style={{ height: '600px' }} />
      <Background className='custom-bg'>
        <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel' style={{ width: '100%' }}>
          <div className='carousel-inner'>
            <div className='carousel-item active animated slideInUp'>
              <img src={RocketPic1} alt='Super Hero Cubs' />
            </div>
            <div className='carousel-item animated slideInUp'>
              <img src={RocketPic2} alt='Super Repelling Leader' />
            </div>
            <div className='carousel-item animated slideInUp'>
              <img src={RocketPic3} alt='Super Repelling Leader' />
            </div>
          </div>
        </div>
      </Background>
    </Parallax>
  </div>
)

export default MainContent
