import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../App.css'
import HomeContainer from '../containers/HomeContainer'
import MarketplaceContainer from '../containers/MarketplaceContainer'
import StockDataContainer from '../containers/StockDataContainer'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'


class WholePage extends Component {
  state={
    user: ""
  }

  handleSignUp=(e, user)=>{
   let newUser = JSON.stringify({user:{first_name:user.first_name,last_name:user.last_name,house_number:user.house_number,street_name: user.street_name, city: user.city,state:user.state,zipcode:user.zipcode,date_of_birth:user.dob,username: user.username,password: user.password,email:user.email}})
   fetch('http://localhost:3000/users',{method: "POST",
    headers:{
      "Content-Type":"application/json",
      Accepts: "application/json"
    },
    body: newUser
  }).then(resp=>resp.json())
  .then(user => {
    localStorage.setItem("token",user.jwt)
    this.setState({
      user: user.user
    })
  })
  this.props.history.push("/")
  }

  handleLoginSubmit = (e, user) =>{

  this.props.history.push("/")
  }

  handleLogout=()=>{
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <NavBar givenUser={this.props}/>
        <Switch>
        <Route path="/stockdata" component={StockDataContainer}/>
          <Route path="/marketplace" component={MarketplaceContainer}/>
          <Route path="/signup" render={()=><SignupForm handleSignUp={this.handleSignUp}/>}/>
          <Route path="/login" render={()=><LoginForm handleLoginSubmit={this.handleLoginSubmit}/>}/>
          <Route path="/" render={()=><HomeContainer/>}/>
        </Switch>
      </div>
    )
  }

}

export default withRouter(WholePage);
