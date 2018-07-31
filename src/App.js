import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen'
import './App.css';
import Header from './sect_header';
import Footer from './sect_footer';
import JoinPage from './page_join';
import MainContent from './main_content';
import MobileContent from './mobile_content';

import JoinHeros from './sect_join/join.png';

const RootPage = () => (
  <div>
  <Header /> 
  <div className="container-fluid" style={{padding:0}}>
	  <MainContent />
	  <Footer />
	  <Route path="/join" component={JoinPage}/>      
	  </div>
  </div>
)

const MobilePage = () => (
  <div>
  <Header /> 
  <div className="container-fluid" style={{padding:0}}>
	  <MobileContent />
	  <Footer />
	  <Route path="/join" component={JoinPage}/>   
	  </div>
  </div>
)

class App extends Component {
  constructor() {
	super();
	this.state = {
	  width: window.innerWidth,
	  loading: true
	};
  }

  componentDidMount () {
	// fake promise
	setTimeout(() =>
	  this.setState({ loading: false })
	, 1500)
  }

  componentWillMount() {
	window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
	window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
	this.setState({ width: window.innerWidth });
  };

  render() {
	const { width } = this.state;
	const isMobile = width <= 768;
	const { loading } = this.state

	if (isMobile) {
		return (
			<LoadingScreen
				loading={loading}
				bgColor='#FED406'
				spinnerColor='#1E427F'
				textColor='#676767'
				logoSrc={JoinHeros}
				text='Loading Adventure...Please Stand By'
			>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path='/' component={MobilePage} />
							<Route path='/join' component={JoinPage} />
						</Switch>
					</div>
				</BrowserRouter>
			</LoadingScreen>
		);
	} else {
		return (
			<LoadingScreen
				loading={loading}
				bgColor='#FED406'
				spinnerColor='#1E427F'
				textColor='#676767'
				logoSrc={JoinHeros}
				text='Loading Adventure...Please Stand By'
			>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path='/' component={RootPage} />
							<Route path='/join' component={JoinPage} />
						</Switch>
					</div>
				</BrowserRouter>
			</LoadingScreen>
			);
		}
	}
}
 
export default App;
