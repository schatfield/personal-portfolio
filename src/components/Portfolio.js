import React, { Component, useRef, createRef } from 'react';
import Intro from './Intro.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Outro from './Outro.js';
import NavBar from './NavBar.js';



class Portfolio extends React.Component {

    constructor(props) {
      super(props);
      this.intro = React.createRef();
      this.about = React.createRef();
      this.contact = React.createRef();
      this.projects = React.createRef();
      this.scrollToContent = this.scrollToContent.bind(this);
    }
    scrollToContent(content) {
      switch(content) {
        case 1:
          this.intro.current.scrollIntoView({behavior: 'smooth'});
          break;
        case 2:
          this.about.current.scrollIntoView({behavior: 'smooth'});
          break;
        case 3:
          this.projects.current.scrollIntoView({behavior: 'smooth'});
          break;
        case 4:
          this.contact.current.scrollIntoView({behavior: 'smooth'});
      }
    }
    render() {
      return (
        <main>
          <Menu goTo={this.scrollToContent} />
          <div className='main'>
            <Intro ref={this.intro} />
            <About ref={this.about} />
            <Projects ref={this.projects} />
            <Contact ref={this.contact} />
          </div>
        </main>
      );
    }
  }
  
    render() {
        return (
        <div className="Portfolio">
            <h2>FULL-STACK WEB DEVELOPMENT</h2>
            <Navbar />
        </div>
      );
    }
  }

  export default Portfolio;