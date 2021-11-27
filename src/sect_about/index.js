import React from 'react'
import './about.css'
import BSALogo from './bsa_logo_cw_100.png'

const About = () => (
  <section className='about'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2 text-center'>
          <img src={BSALogo} alt='BSA Logo' />
        </div>
        <div className='col-md-10'>
          <h3 className='d-none d-sm-block'>About Scouting</h3>
          <h3 className='d-block d-sm-none' style={{ textAlign: 'center' }}>About Scouting</h3>
          <h4>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.</h4>
        </div>
      </div>
    </div>
  </section>
)

export default About
