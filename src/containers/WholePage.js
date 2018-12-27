import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../App.css'
import HomeContainer from '../containers/HomeContainer'
import MarketplaceContainer from '../containers/MarketplaceContainer'
import StockDataContainer from '../containers/StockDataContainer'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'


class WholePage extends Component {

  handleSignUp=(e, user)=>{


    
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
        <Route path="/stockdata" component={StockDataContainer}/>
          <Route path="/marketplace" component={MarketplaceContainer}/>
          <Route path="/signup" render={()=><SignupForm handleSignUp={this.handleSignUp}/>}/>
          <Route path="/login" render={()=><LoginForm/>}/>
          <Route path="/" component={HomeContainer}/>

        </Switch>
      </div>
    )
  }

}

export default WholePage;
