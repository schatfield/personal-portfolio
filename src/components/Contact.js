import React, { Component } from 'react';
import NavBar from './NavBar';
import "../stylesheets/Contact.css";

class Contact extends Component {
    render() {
      return (
        <div className= "contact">
          <h2>Contact</h2>
          <NavBar />
          <p>If you want to collaborate on crafting amazing experience for people – you are very welcome to contact me.

I am available for freelance projects and full-time employment.

Shawna Chatfield
Fullstack Web Development
chatfield.shc@gmail.com
</p>
        </div>
      );
    }
  }

  export default Contact;