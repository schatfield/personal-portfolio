import React, { Component } from 'react';
import Broomsticks from './Broomsticks'; 
import Blighty from './Blighty'; 
import PersonalSite from './PersonalSite'; 

class ProjectDisplay extends Component {
  
  render() {
    const projectToDisplay = () => {
      const currentProject = this.props.currentProject;
      console.log(this.props.testProp);
      if (currentProject === "blighty") {
        return <Blighty />;
      } else if (currentProject === "personalSite") {
        return <PersonalSite />;
      } else {
        return <Broomsticks />;
      }
    }

    return (
      projectToDisplay()
    )
  }
}

  export default ProjectDisplay; 