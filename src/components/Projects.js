import React, { Component } from 'react';
import { Link, Router, withRouter } from "react-router-dom";
import NavBar from './NavBar.js';
import '../stylesheets/Projects.css';
import ProjectMenu from './ProjectMenu'
import ProjectDisplay from "./ProjectDisplay";

class Projects extends Component {

  state = {
    currentProject: null
  }

  updateProjectToDisplay = async (project) => {
    await this.setState({currentProject: project});
  }

  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <NavBar />
        <div className="project-links">
          {/* ProjectMenu left side - this is where we are detecting which project was clicked on*/}
          {/* ProjectDisplay right side - this is where if statement logic will go and project component import statements*/}
          <ProjectMenu updateProjectToDisplay={this.updateProjectToDisplay}/>
          {/* currentProject={this.state.currentProject}- this is grabbing the value that we have contained in state from the click that happened on ProjectMenu*/}
          <ProjectDisplay currentProject={this.state.currentProject} testProp="Shawna"/>
        </div>
      </div>
    );
  }
}

  export default Projects;