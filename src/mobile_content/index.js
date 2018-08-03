import React from 'react';
import Contact from '../sect_contact';
import Join from '../sect_join';
import About from '../sect_about';
// import ImgDerby from './9627.jpg';
// import ImgFishing from './1187.jpg';
// import ImgCamping from './0230.jpg';
// import ImgRocket from './nl9986.jpg';

import DerbyPic1 from '../main_content/DerbyPic40.jpg';
import DerbyPic2 from '../main_content/DerbyPic44.jpg';
import DerbyPic3 from '../main_content/DerbyPic45.jpg';

import FishingPic1 from '../main_content/fish1.jpg';
import FishingPic2 from '../main_content/fish2.jpg';
import FishingPic3 from '../main_content/fish3.jpg';

import CampingPic1 from '../main_content/camp1.jpg';
import CampingPic2 from '../main_content/camp2.jpg';
import CampingPic3 from '../main_content/camp3.jpg';

import RocketPic1 from '../main_content/rocket1.jpg';
import RocketPic2 from '../main_content/rocket2.jpg';
import RocketPic3 from '../main_content/rocket3.jpg';

const MobileDerbyCarousel = () => (
	<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{width:'100%'}}>
		<div className="carousel-inner">
			<div className="carousel-item active animated pulse">
				<img src={DerbyPic1} className="img-thumbnail" alt="Super Hero Cubs" />
			</div>
			<div className="carousel-item animated pulse">
				<img src={DerbyPic2} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
			<div className="carousel-item animated pulse">
				<img src={DerbyPic3} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
		</div>
	</div>
);

const MobileFishingCarousel = () => (
	<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{width:'100%'}}>
		<div className="carousel-inner">
			<div className="carousel-item active animated slideInLeft">
				<img src={FishingPic1} className="img-thumbnail" alt="Super Hero Cubs" />
			</div>
			<div className="carousel-item animated slideInLeft">
				<img src={FishingPic2} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
			<div className="carousel-item animated slideInLeft">
				<img src={FishingPic3} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
		</div>
	</div>
);

const MobileCampingCarousel = () => (
	<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{width:'100%'}}>
		<div className="carousel-inner">
			<div className="carousel-item active animated slideInRight">
				<img src={CampingPic1} className="img-thumbnail" alt="Super Hero Cubs" />
			</div>
			<div className="carousel-item animated slideInRight">
				<img src={CampingPic2} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
			<div className="carousel-item animated slideInRight">
				<img src={CampingPic3} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
		</div>
	</div>
);

const MobileRocketCarousel = () => (
	<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" style={{width:'100%'}}>
		<div className="carousel-inner">
			<div className="carousel-item active animated slideInUp">
				<img src={RocketPic1} className="img-thumbnail" alt="Super Hero Cubs" />
			</div>
			<div className="carousel-item animated slideInUp">
				<img src={RocketPic2} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
			<div className="carousel-item animated slideInUp">
				<img src={RocketPic3} className="img-thumbnail" alt="Super Repelling Leader" />
			</div>
		</div>
	</div>
);

const MobileContent = () => (
		<div>
		<MobileDerbyCarousel />
		<About />
		<MobileFishingCarousel />
		<Join />
		<MobileCampingCarousel />
		<Contact />
		<MobileRocketCarousel />
	</div>
);

export default MobileContent;