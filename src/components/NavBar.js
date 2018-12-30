import React, { Component } from 'react';
import '../App.css'
import StockMarquee from './StockMarquee'
import Account from './Account'
import {Link, Route, Switch, withRouter, Redirect} from 'react-router-dom'

class NavBar extends Component {

  state={
    didRefresh: true
  }

  sellStocks=(e,stock)=>{
    console.log(stock);
  }

  componentDidMount() {
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
            <li><Link to="/">Home</Link></li>
             <li><Link to="/marketplace">Marketplace</Link></li>
            {this.props.currentUser !== null && this.props.currentUser !== undefined ? <>

              <li><Link to="/stockdata">Buy / Sell</Link></li><li><Link to="/profile">Profile</Link></li><li><Link to="/account">Account</Link></li></> : null

              }
            <li>

            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
          {localStorage.length < 1 || localStorage.token === "undefined" || this.props.currentUser === null || this.props.currentUser === undefined?
            <>
             <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
             <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </>
             :
            <>
            <li className="user-funds">Current Balance: $ {this.props.currentUser.account.total_funds}</li>
             <li><Link to="/" onClick={(e)=>this.props.handleLogout(e)}><span className="glyphicon glyphicon-log-out"></span> Log out </Link></li>
            </>
          }
            </ul>

        </div>
        </nav>
        <StockMarquee/>

      <Route path="/account" render={(props)=><Account user={this.props.currentUser} user_history={this.props.givenUser}/>}/>
      </div>
    );
  }

}

export default withRouter(NavBar);
