import React, { Component } from 'react';
//import { Link, withRouter } from "react-router-dom"
//import './NavBar.css'
class NavBar extends Component {
    render() {
      return (
        <header>
          <nav> 
            <div className="nav-bar">
              <ul className="container">
                <li><Link className="nav-link" to="/"></Link></li>
                <li><Link className="nav-link" to="/"></Link></li>
                <li><Link className="nav-link" to="/"></Link></li>
                <li><Link className="nav-link" to="/"></Link></li>
                <li><Link className="nav-link" to="/"></Link></li>

              </ul>
            </div>
          </nav>
        </header>
      );
    }
  }

  export default NavBar;