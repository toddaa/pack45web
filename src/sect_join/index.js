import React from 'react';
import './join.css';
import { Link } from 'react-router-dom';
import BSALogo from './join.png';

const Join = () => (
	<section className="join_sect">
		<div className="container">
		<div className="row">
			<div className="col-md-4 text-center">
				<img src={BSALogo} alt="BSA Logo" />
			</div>
			<div className="col-md-8">
				<h3 className="d-none d-sm-block">Join Cub Scouts!</h3>
				<h3 className="d-block d-sm-none" style={{textAlign:'center'}}>Join Cub Scouts!</h3>
				<h4>We'd love for your children to join in our fun, and we welcome them to join Pack 45 any time throughout the year.
				Feel free to attend our Pack meetings at First Congregational Church in Charlotte to learn more about us and what opportunities we can offer.
				They will not be disappointed!
				</h4>
				<h4>Click <Link to='/join'>here</Link> for more information about joining Pack 45.</h4>
			</div>
		</div>
	  </div>
	  </section>
);

export default Join;