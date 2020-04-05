import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import LandingPage from './pages/LandingPage';

import KHomePage from './pages/Kamloops/HomePage';
import KInfoPage from './pages/Kamloops/InfoPage';
import KAboutPage from './pages/Kamloops/AboutPage';
import KVolunteerPage from './pages/Kamloops/VoluteerPage';

import CHomePage from './pages/Calgary/HomePage';
import CInfoPage from './pages/Calgary/InfoPage';
import CAboutPage from './pages/Calgary/AboutPage';
import CVolunteerPage from './pages/Calgary/VoluteerPage';
import CLoadingPage from './pages/Calgary/LoadingPage';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />

          <Route path="/kamloops/home" component={KHomePage} />
          <Route path="/kamloops/info" component={KInfoPage} />
          <Route path="/kamloops/about" component={KAboutPage} />
          <Route path="/kamloops/volunteer" component={KVolunteerPage} />

          <Route path="/calgary/home" component={CHomePage} />
          <Route path="/calgary/info" component={CInfoPage} />
          <Route path="/calgary/about" component={CAboutPage} />
          <Route path="/calgary/volunteer" component={CVolunteerPage} />
          <Route path="/calgary" component={CLoadingPage} />
        </div>
        
      </Router>
    )
  }
}

export default App;
