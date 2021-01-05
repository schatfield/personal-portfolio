import React, { Component } from 'react';
import { Link, Router, withRouter } from "react-router-dom";
import NavBar from './NavBar.js';
import '../stylesheets/Projects.css';
import Broomsticks from './components/Broomsticks'; 
import Blighty from './components/Blighty'; 
import PersonalSite from './components/PersonalSite'; 
class Projects extends Component {
    render() {
      return (
        <div className="projects">
         <h2>Projects</h2>
        <NavBar />
        <div className="project-links">
          <p>Three Broomsticks</p>
          <p>Blighty</p>
          <p>Personal Portfolio</p>
        </div>
        </div>
      );
    }
  }

  export default Projects;