import React, { Component } from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../App.css'
import HomeContainer from '../containers/HomeContainer'
import MarketplaceContainer from '../containers/MarketplaceContainer'
import StockDataContainer from '../containers/StockDataContainer'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'
import Account from '../components/Account'


class WholePage extends Component {
  state={
    user: ' ',
    isChanged: false
  }

 //
 //  handleSignUp=(e, user)=>{
 //
 //   let newUser = JSON.stringify({user:{first_name:user.first_name,last_name:user.last_name,house_number:user.house_number,street_name: user.street_name, city: user.city,state:user.state,zipcode:user.zipcode,date_of_birth:user.dob,username: user.username,password: user.password,email:user.email}})
 //   fetch('http://localhost:3000/users',{method: "POST",
 //    headers:{
 //      "Content-Type":"application/json",
 //      Accepts: "application/json"
 //    },
 //    body: newUser
 //  }).then(resp=>resp.json())
 //  .then(user => {
 //    localStorage.setItem("token",user.jwt)
 //
 //    this.setState({
 //      user: user.user, isChanged: !this.state.isChanged
 //    })
 //  })
 //  this.props.history.push("/")
 //  }
 //
 //  redirectUser=()=>{
 //    return <Redirect to="/" user={this.state.user}/>
 //  }
 //
 //  componentDidMount() {
 //    let token = localStorage.getItem("token")
 //    if(token){
 //      fetch("http://localhost:3000/current_user",{method: "GET",
 //      headers: {
 //      "Content-Type":"application/json",
 //      Action: "application/json",
 //      Authorization:`${token}`
 //    }
 //  }).then(res => res.json())
 //  .then(user => {
 //    localStorage.setItem("token",user.jwt)
 //    this.setState({
 //      user: user.user,isChanged: !this.state.isChanged
 //    })
 //  })
 //  }
 //  this.props.history.push("/")
 // }
 //
 //
 //  handleLoginSubmit = (e, user) =>{
 //      e.preventDefault()
 //    fetch("http://localhost:3000/login",{method: "POST",
 //    headers:{
 //      "Content-Type":"application/json",
 //      Accepts:"application/json"
 //    },body:JSON.stringify({user:{username: user.username, password: user.password}})
 //  }).then(resp => resp.json())
 //    .then(user =>{
 //      localStorage.setItem("token",user.jwt)
 //      this.setState({
 //        user: user.user,isChanged: !this.state.isChanged
 //      })
 //    })
 //    this.props.history.push("/")
 //  }
 //
 //  handleLogout=(e)=>{
 //    e.preventDefault()
 //    localStorage.removeItem("token")
 //    this.setState({
 //      user: null
 //    })
 //    this.props.history.push("/")
 //  }


  render() {

    return (
      <div>
        <NavBar givenUser={this.props.givenUser} currentUser={this.props.currentUser} handleLogout={this.props.handleLogout}/>
        <Switch >
        <Route path="/stockdata" component={StockDataContainer}/>
          <Route path="/marketplace" render={()=><MarketplaceContainer/>}/>
          <Route path="/signup" render={()=><SignupForm handleSignUp={this.props.handleSignUp}/>}/>
          <Route path="/login" render={()=><LoginForm handleLoginSubmit={this.props.handleLoginSubmit}/>}/>
          <Route path="/account" render={()=><Account user={this.props.currentUser}/>}/>
          <Route exact path="/" render={()=><HomeContainer user={this.state.user}/>} handleChange={this.handleChange}/>
        </Switch>
        <Footer/>
      </div>
    )
  }

}

export default withRouter(WholePage);
