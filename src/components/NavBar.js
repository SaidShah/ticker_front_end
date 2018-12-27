import React, { Component } from 'react';
import '../App.css'
import StockMarquee from './StockMarquee'
import {Link} from 'react-router-dom'

class NavBar extends Component {

  handleClick=()=>{
    localStorage.removeItem("token")
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse nav-padding">
        <div className="container-fluid fluid-padding">
          <div className="navbar-header">
            <img src={require(".././images/ticker_logo.png")} width="70px" height="50px" alt=""/>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/stockdata">Stock Data</Link></li>
            <li>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search symbol...."/>
                </div>
              </form>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
          {localStorage.length < 1 ?
            <>
             <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
             <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </>
             :
            <>
             <li><Link to="/" onClick={this.handleClick}><span className="glyphicon glyphicon-log-out"></span> Log out </Link></li>
            </>
          }
            </ul>

        </div>
        <StockMarquee/>
        </nav>
      </div>
    );
  }

}

export default NavBar;
