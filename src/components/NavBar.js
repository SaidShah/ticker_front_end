import React, { Component } from 'react';
import '../App.css'

class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid fluid-padding">
          <div className="navbar-header">
            <a href="http://www.google.com" className="navbar-left logo-size"><img src={require("./ticker_logo.png")} width="70px" height="50px"/></a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
        </nav>
      </div>
    );
  }

}

export default NavBar;
