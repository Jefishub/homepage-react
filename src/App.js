import React from 'react';
import CategoryBox from './components/CategoryBox';
import './css/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './pages/home'
import Education from './pages/education'
import Skills from './pages/skills'
import Work from './pages/work'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Switch>
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
