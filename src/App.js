import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoadingScreen from 'react-loading-screen'
import './App.css'
import Header from './sect_header'
import Footer from './sect_footer'
import StuffPage from './page_stuff'
import JoinPage from './page_join'
import MainContent from './main_content'
import MobileContent from './mobile_content'

import JoinHeros from './sect_join/join.png'

const RootPage = () => (
  <div>
    <Header />
    <div className='container-fluid' style={{ padding: 0 }}>
      <MainContent />
      <Footer />
      <Route path='/join' component={JoinPage} />
    </div>
  </div>
)

const MobilePage = () => (
  <div>
    <Header />
    <div className='container-fluid' style={{ padding: 0 }}>
      <MobileContent />
      <Footer />
      <Route path='/join' component={JoinPage} />
    </div>
  </div>
)

class App extends Component {
  constructor () {
    super()
    const action = ['Adventure', 'Fun', 'Excitement', 'the Future', 'Bravery', 'Loyalty', 'Honor']
    const wait = ['wait', 'hold on tight', 'check your bags', 'dont change that channel', 'stand by', 'bear with me', 'rise', 'silence all cell phones and pagers']
    this.state = {
      width: window.innerWidth,
      loading: true,
      loadMsg: 'Loading ' + action[Math.floor(Math.random() * action.length)] + '...Please ' + wait[Math.floor(Math.random() * wait.length)]
    }
  }

  componentDidMount () {
    // fake promise
    setTimeout(() => this.setState({ loading: false }), 1500)
  }

  componentWillMount () {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange () {
    this.setState({ width: window.innerWidth })
  }

  render () {
    const { width } = this.state
    const isMobile = width <= 768
    const { loading } = this.state
    const { loadMsg } = this.state

    if (isMobile) {
      return (
        <LoadingScreen
          loading={loading}
          bgColor='#FED406'
          spinnerColor='#1E427F'
          textColor='#676767'
          logoSrc={JoinHeros}
          text={loadMsg}
        >
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path='/' component={MobilePage} />
                <Route path='/join' component={JoinPage} />
                <Route path='/stuff' component={StuffPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </LoadingScreen>
      )
    } else {
      return (
        <LoadingScreen
          loading={loading}
          bgColor='#FED406'
          spinnerColor='#1E427F'
          textColor='#676767'
          logoSrc={JoinHeros}
          text={loadMsg}
        >
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path='/' component={RootPage} />
                <Route path='/join' component={JoinPage} />
                <Route path='/stuff' component={StuffPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </LoadingScreen>
      )
    }
  }
}

export default App
