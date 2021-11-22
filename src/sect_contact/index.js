import React from 'react'
import './contact.css'

const Contact = () => (
  <section className='contact'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h3 className='d-none d-sm-block'>Contact Us</h3>
          <h3 className='d-block d-sm-none' style={{ textAlign: 'center' }}>Contact Us</h3>
          <h4>We'd love to hear from you and will be happy to answer any questions you have.  Please email <a href='mailto:info@pack45.org'>info@pack45.org</a> with questions.</h4>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
