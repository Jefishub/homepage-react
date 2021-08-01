import React from 'react';
import './css/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './pages/homepage/'
import Education from './pages/educationpage/'
import Skills from './pages/skillspage/'
import Work from './pages/workpage/'
import NotFoundPage from './pages/notfoundpage/'

function App() {
  return (
    <Router>
      <Switch>
        {/* Page components */}
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/work" component={Work} />
        <Route exact path="/" component={Homepage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
