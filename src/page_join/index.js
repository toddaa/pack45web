import React, { Component } from 'react'
import './join.css'
import Header from '../sect_header'
import Footer from '../sect_footer'

const JoinInfo = () => (
  <section className='join'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='d-none d-sm-block'>Joining Cub Scouts</h3>
          <h3 className='d-block d-sm-none' style={{ textAlign: 'center' }}>Joining Cub Scouts</h3>
          <h5>We welcome new members any time of the year.
            Please get in touch with us via email at <a href='mailto:info@pack45.org'>info@pack45.org</a> for more information or to schedule a visit.
            We want you, your children, and your family to be completely comfortable with joining our Pack before we collect any fees or file your registration.
          </h5>
          <h5>Elegible children should be going into kindergarden through 5th grade in the Fall of the current year.</h5>
          <h5>We would love to meet you in order to provide a rundown of our yearly events and activities as well as answer any questions or concerns that you may have.</h5>
          <h4>We look forward to visiting with you!</h4>
        </div>
      </div>
    </div>
  </section>
)

class JoinPage extends Component {
  render () {
    window.scrollTo(0, 0)
    return (
      <div>
        <Header />
        <JoinInfo />
        <Footer />
      </div>
    )
  }
}

export default JoinPage
