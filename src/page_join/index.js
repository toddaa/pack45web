import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import "./join.css";
import Header from '../sect_header';
import Footer from '../sect_footer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt';

const iconCalendar = (
    <FontAwesomeIcon icon={faCalendarAlt} size={"4x"} />
);

const JoinInfo = () => (
    <section className="join">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-1 text-center">
                        {iconCalendar}
                        </div>
                        <div className="col-md-11">
                            <h2>Spring 2018 Joining Night</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-1 col-md-11">
                            <h5>We invite you and your children to join us on Friday, June 1, 2018 at the First Congregational Church in Charlotte for an informational meeting about joining Cub Scouts with Pack 45.
                                We want you, your children, and your family to be completely comfortable with joining our Pack before we collect any fees or file your registration.</h5>
                            <h5>Elegible children should be going into kindergarden through 5th grade in the Fall of 2018.</h5>
                            <h5>We would love to meet you in order to provide a rundown of our yearly events and activities as well as answer any questions or concerns that you may have.</h5>
                            <h5>We look forward to visit with you!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const JoinComponent = () => (
    <div>
      <JoinInfo />
    <Parallax
      //blur={10}
      bgImage={require('./nl9986.jpg')}
      bgImageAlt="Rocket Launch"
      strength={500}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
    </div>
  );

class JoinPage extends Component {
    render() { 
        window.scrollTo(0, 0);
        return (  
            <div>
                <Header /> 
                <JoinComponent />
                <Footer />
            </div>
        )
    }
}
 
export default JoinPage;