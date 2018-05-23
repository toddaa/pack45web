import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './sect_header';
import Footer from './sect_footer';
import JoinPage from './page_join';
import MainContent from './main_content';
import MobileContent from './mobile_content';

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
    };
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

    if (isMobile) {
      return (
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={MobilePage} />
            <Route path='/join' component={JoinPage} />
          </Switch>
        </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={RootPage} />
            <Route path='/join' component={JoinPage} />
          </Switch>
        </div>
        </BrowserRouter>
      );
    }
  }
}
 
export default App;
