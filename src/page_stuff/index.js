import React, { Component } from 'react'

import Header from '../sect_header'
import Footer from '../sect_footer'
import IMG_1819 from './IMG_1819.jpeg'
import IMG_1821 from './IMG_1821.jpeg'
import IMG_1823 from './IMG_1823.jpeg'
import IMG_1824 from './IMG_1824.jpeg'
import IMG_1825 from './IMG_1825.jpeg'
import IMG_1826 from './IMG_1826.jpeg'
import IMG_1840 from './IMG_1840.jpeg'
import IMG_2099 from './IMG_2099.jpeg'
import IMG_2114 from './IMG_2114.jpeg'
import IMG_2112 from './IMG_2112.jpeg'
import './stuff.css'

const StuffObject = (props) => {
  const { title, image } = props

  return (
    <div className='card stuffCard'>
      <img className='card-img-top image' src={image} alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
}

const StuffContent = () => (
  <section className='join'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='d-none d-sm-block'>Pack 45 Stuff</h3>
          <h3 className='d-block d-sm-none' style={{ textAlign: 'center' }}>Pack 45 Stuff</h3>
          <h5>The following things can be made on-demand.  Email Aaron Todd at toddaa@gmail.com for more information.</h5>
        </div>
      </div>
      <div className='row'>
        <StuffObject title='Pack 45 Logo Christmas Ornament' image={IMG_1821} />
        <StuffObject title='Cub Scout Logo Christmas Ornament' image={IMG_1824} />
      </div>
      <div className='row'>
        <StuffObject title='Best Anything Dangle' image={IMG_1825} />
        <StuffObject title='Thank You Dangle' image={IMG_1819} />
      </div>
      <div className='row'>
        <StuffObject title='Eat. Sleep. Scout. Repeat. Bracelet' image={IMG_2114} />
        <StuffObject title='Position Name Tag' image={IMG_1826} />
      </div>
      <div className='row'>
        <StuffObject title='11x14 Photo Matte' image={IMG_2099} />
        <StuffObject title='Pack 45 Tumbler' image={IMG_1840} />
      </div>
      <div className='row'>
        <StuffObject title='Summer Camp Dangle' image={IMG_1823} />
        <StuffObject title='Arrow of Light Plaque' image={IMG_2112} />
      </div>

    </div>
  </section>
)

class StuffPage extends Component {
  render () {
    window.scrollTo(0, 0)
    return (
      <div>
        <Header />
        <StuffContent />
        <Footer />
      </div>
    )
  }
}

export default StuffPage
