import React, { Component } from 'react';
import '../App.css'
import StockMarquee from './StockMarquee'

class NavBarLoggedIn extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid fluid-padding">
          <div className="navbar-header">
            <a href="http://www.google.com" className="navbar-left logo-size"><img src={require(".././images/ticker_logo.png")} width="70px" height="50px"/></a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Stocks</a></li>
            <li>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search symbol...."/>
                </div>
              </form>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="	glyphicon glyphicon-log-out"></span> Log out</a></li>
          </ul>
        </div>
        <StockMarquee/>
        </nav>
      </div>
    );
  }

}

export default NavBarLoggedIn;
