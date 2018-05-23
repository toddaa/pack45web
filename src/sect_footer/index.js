import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCopyright from '@fortawesome/fontawesome-free-regular/faCopyright';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import './footer.css';
import CubLogoBw from './cubscout_logo_bw_150.png'; 

const iconCopyright = (
  <FontAwesomeIcon icon={faCopyright} />
);
const iconEnvelope = (
  <FontAwesomeIcon icon={faEnvelope} />
);
const iconFacebook = (
  <FontAwesomeIcon icon={faFacebookSquare} />
);
const Footer = () => (
    <footer>
      <div className="container">
        <img src={CubLogoBw} alt="Cub Scout Logo" />
        <h2 className="d-none d-sm-block">Cub Scout Pack 45 | Charlotte, Michigan</h2>
        <p className="d-none d-sm-block">First Congregational Church | 106 Bostwick Street, Charlotte, MI</p>
        <h2 className="d-block d-sm-none">Cub Scout Pack 45<br  />Charlotte, Michigan</h2>
        <p className="d-block d-sm-none">First Congregational Church<br />106 Bostwick Street, Charlotte, MI</p>
        <p className="d-none d-sm-block">{iconCopyright} Copyright 2016 | Cub Scout Pack 45 | All Rights Reserved</p>
        <p className="d-block d-sm-none">{iconCopyright} Copyright 2016 | Cub Scout Pack 45<br  />All Rights Reserved</p>
        <p className="d-none d-sm-block"><a href="mailto:info@pack45.org">{iconEnvelope} info@pack45.org</a> | <a href="http://facebook.com/pack45bsa">{iconFacebook} @pack45bsa</a></p>
        <p className="d-block d-sm-none"><a href="mailto:info@pack45.org">{iconEnvelope} info@pack45.org</a><br /><a href="http://facebook.com/pack45bsa">{iconFacebook} @pack45bsa</a></p>
      </div>
    </footer> 
);

export default Footer;