import React, { Component } from 'react';
import '../App.css'
import StockMarquee from './StockMarquee'
import {Link, withRouter} from 'react-router-dom'

class NavBar extends Component {

  state={
    didRefresh: true,
  }

  componentDidMount() {
     this.setState({didRefresh: !this.state.didRefresh})
  }

  handleClick = ()=>{
    this.setState({didRefresh: !this.state.didRefresh})
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse nav-padding">
        <div className="container-fluid fluid-padding">
          <div className="navbar-header set-height-navBar">
            <img src={require(".././images/ticker_logo.png")} width="70px" height="50px" alt=""/>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/" onClick={this.handleClick}>Home</Link></li>
             <li><Link to="/marketplace" onClick={this.handleClick}>Marketplace</Link></li>
            {this.props.currentUser !== null && this.props.currentUser !== undefined ? <>

              <li><Link to="/profile" onClick={this.handleClick}>Profile</Link></li><li><Link to="/account" onClick={this.handleClick}>Buy / Sell</Link></li></> : ''

              }
            <li>

            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
          {localStorage.length < 1 || localStorage.token === "undefined" || this.props.currentUser === null || this.props.currentUser === undefined?
            <>
             <li><Link to="/signup" onClick={this.handleClick}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
             <li><Link to="/login" onClick={this.handleClick}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </>
             :
            <>
            <li className="user-funds">Current Balance: $ {parseFloat(this.props.currentUser.account.total_funds).toFixed(2)}</li>
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

export default withRouter(NavBar);
