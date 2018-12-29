import React, { Component } from 'react';
import '../App.css'
import StockMarquee from './StockMarquee'
import {Link} from 'react-router-dom'

class NavBar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse nav-padding">
        <div className="container-fluid fluid-padding">
          <div className="navbar-header set-height-navBar">
            <img src={require(".././images/ticker_logo.png")} width="70px" height="50px" alt=""/>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
             <li><Link to="/marketplacecontainer">Marketplace</Link></li>
            {this.props.currentUser !== null ? <>
              <li><Link to="/stockdata">Buy / Sell</Link></li><li><Link to="/profile">Profile</Link></li><li><Link to="/account">Account</Link></li></>: null}
            <li>

            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
          {localStorage.length < 1 || localStorage.token === "undefined" || this.props.currentUser === null ?
            <>
             <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
             <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </>
             :
            <>
             <li><Link to="/" onClick={(e)=>this.props.handleLogout(e)}><span className="glyphicon glyphicon-log-out"></span> Log out </Link></li>
            </>
          }
            </ul>

        </div>
        </nav>
        <StockMarquee/>
      </div>
    );
  }

}

export default NavBar;
