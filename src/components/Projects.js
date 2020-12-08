import React, { Component } from 'react';
import NavBar from './NavBar.js';
import '../stylesheets/Projects.css';
class Projects extends Component {
    render() {
      return (
        <div className="projects">
         <h2>Projects</h2>
        <NavBar />
        <div className="project-links">
          <p>Project Link 1</p>
          <p>Project Link 2</p>
          <p>Project Link 3</p>
        </div>
        </div>
      );
    }
  }

  export default Projects;