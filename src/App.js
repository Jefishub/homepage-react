import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from './pages/homepage/'
import Education from './pages/educationpage/'
import Skills from './pages/skillspage/'
import Work from './pages/workpage/'
import NotFoundPage from './pages/notfoundpage/'

import MainBanner from './components/banner/mainBanner'
import SecondaryBanner from './components/banner/secondaryBanner'

import Navigation from './components/navigation'
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
      {/* Banner component */}
      <Switch>
        <Route exact path="/" component={MainBanner} />
        <Route component={SecondaryBanner} />
      </Switch>
      <Switch>
        {/* Page components */}
        <Route path="/work" component={Work} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route exact path="/" component={Homepage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* Footer component */}
      <Route component={Navigation} />
      <Route component={Footer} />
    </Router>
  );
}

export default App;
