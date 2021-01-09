import React, { Component } from 'react';

class ProjectMenu extends Component {
    
   handleClick= (e)=> {
       this.props.updateProjectToDisplay(e.target.title);
   }
    
    render() {
      return (
      
        <div className="project-links">

          {/* ProjectMenu left side*/}

          <p title="brooms" onClick={(e) => this.handleClick(e)}>Three Broomsticks</p>
          <p title="blighty" onClick={(e) => this.handleClick(e)}>Blighty</p>
          <p title="personalSite" onClick={(e) => this.handleClick(e)}>Personal Portfolio</p>
        </div>
    
      );
    }
  }

  export default ProjectMenu;