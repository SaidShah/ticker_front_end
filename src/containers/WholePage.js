import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../App.css'
import HomeContainer from '../containers/HomeContainer'
import MarketplaceContainer from '../containers/MarketplaceContainer'
import StockDataContainer from '../containers/StockDataContainer'
import SignupForm from '../components/SignupForm'


class WholePage extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
        <Route path="/stockdata" component={StockDataContainer}/>
          <Route path="/marketplace" component={MarketplaceContainer}/>
          <Route path="/signup" components={SignupForm}/>
          <Route path="/" component={HomeContainer}/>

        </Switch>
      </div>
    )
  }

}

export default WholePage;
