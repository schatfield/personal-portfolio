import React, { Component } from 'react';
import NavBar from './NavBar.js';
import "../stylesheets/Intro.css"

class Intro extends Component {
    render() {
      return (
        <div className="intro">
          <h2>Intro Image</h2>
          <NavBar />
          </div>
      );
    }
  }

  export default Intro;