import React, { Component } from 'react';
import Intro from './Intro.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Outro from './Outro.js';
//import NavBar from './NavBar.js';



class Portfolio extends Component {
    render() {
        return (
        <div className="Portfolio">
            <h2>Hi, I am a Portfolio!</h2>
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Outro />

        </div>
      );
    }
  }

  export default Portfolio;