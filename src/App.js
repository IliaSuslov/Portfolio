import React from 'react';
import Navigation from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/SkillsContainer'
import Works from './components/Works/WorksContainer'
import Contact from './components/Contact/Contact'
import Header from './components/Image/Image'
import SProjects from './small_projects/Sprojects'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sprojects">
          <SProjects />
        </Route>
        <div className="app-wrapper">
          <Navigation />
          <Header />
          <div className="content">
            <About />
            <Skills />
            <Works />
            <Contact />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
