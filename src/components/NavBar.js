
import React, { Component } from 'react';
import { Link, Router, withRouter } from "react-router-dom";
import '../stylesheets/NavBar.css'
class NavBar extends Component {
    render() {
      return (
      
        <header>
          <nav> 
            <div className="nav-bar">
              <ul className="container">
                <li ><Link className="nav-link" to="/about">/ ABOUT /</Link></li>
                <li><Link className="nav-link" to="/projects">/ PROJECTS /</Link></li>
                <li><Link className="nav-link" to="/contact">/ CONTACT /</Link></li>
              </ul>
            </div>
          </nav>
        </header>
     
      );
    }
  }

  export default withRouter(NavBar)