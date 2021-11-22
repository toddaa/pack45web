import React from 'react'
import './header.css'
import Pack45Logo from './2487.png'
import Heros from './heros4.png'
import Heros1 from './heros1.png'
import Heros2 from './heros2.png'
import Heros3 from './heros3.png'

const Header = () => (
  <header>
    <div className='container-fluid'>
      <div id='carouselExampleSlidesOnly' className='d-none d-sm-block carousel carousel-fade slide float-right' data-ride='carousel' data-interval='5000' style={{ marginRight: '-15px' }}>
        <div className='carousel-inner'>
          <div className='carousel-item active animated slideInUp'>
            <img src={Heros} alt='Super Hero Cubs' />
          </div>
          <div className='carousel-item animated pulse'>
            <img src={Heros2} alt='Archery Leader' />
          </div>
          <div className='carousel-item animated swing'>
            <img src={Heros1} alt='Super Repelling Leader' />
          </div>
          <div className='carousel-item animated slideInRight'>
            <img src={Heros3} alt='Bicycle' />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='d-none d-sm-block'>
          <img className='packLogo' src={Pack45Logo} alt='Cub Scout Pack 45 Logo' />
        </div>
        <img className='d-block d-sm-none' src={Pack45Logo} alt='Cub Scout Pack 45 Logo' style={{ width: '80%', height: '100%', margin: '0 auto' }} />
        <h5>Pack 45 serves boys and girls in kindergarten through fifth grades in the Charlotte, Michigan area.  We are proudly chartered with the Water and Woods Field Service Council of the Boy Scouts of America by First Congregational Church.</h5>
      </div>
    </div>
  </header>
)

export default Header
