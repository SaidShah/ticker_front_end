import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WholePage from './containers/WholePage'
import {withRouter, Redirect} from 'react-router-dom'

class App extends Component {
  state={
    user: null,
    isChanged: false
  }


    handleSignUp=(e, user)=>{
      e.preventDefault()
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
        user: user.user, isChanged: !this.state.isChanged
      })
    })
    this.props.history.push("/")
    }

    redirectUser=()=>{
      return <Redirect to="/" user={this.state.user}/>

    }

    componentDidMount() {
      let token = localStorage.getItem("token")
      if(token){
        fetch("http://localhost:3000/current_user",{method: "GET",
        headers: {
        "Content-Type":"application/json",
        Action: "application/json",
        Authorization:`${token}`
      }
    }).then(res => res.json())
    .then(user => {
      localStorage.setItem("token",user.jwt)
      this.setState({
        user: user.user,isChanged: !this.state.isChanged
      })
    })
    }
    this.props.history.push("/")
   }

   handleEdit=(user)=>{
     this.setState({user: user})
     this.props.history.push("/")
   }

   handleBuy=(user)=>{
    this.setState({user:user})
   }


    handleLoginSubmit = (e, user) =>{
        e.preventDefault()
      fetch("http://localhost:3000/login",{method: "POST",
      headers:{
        "Content-Type":"application/json",
        Accepts:"application/json"
      },body:JSON.stringify({user:{username: user.username, password: user.password}})
    }).then(resp => resp.json())
      .then(user =>{
        localStorage.setItem("token",user.jwt)
        this.setState({
          user: user.user,isChanged: !this.state.isChanged
        })
      })
      this.props.history.push("/")
    }

    handleLogout=(e)=>{
      e.preventDefault()
      localStorage.removeItem("token")
      this.setState({
        user: null
      })
      this.props.history.push("/")
    }

    handleSell=(user)=>{
      this.setState({user: user})
      this.props.history.push("/account")
    }


  render() {
    return (
      <div className="App">

        <WholePage givenUser={this.props} currentUser={this.state.user} handleLogout={this.handleLogout} handleSignUp={this.handleSignUp}  handleLoginSubmit={this.handleLoginSubmit} handleEdit={this.handleEdit} handleSell={this.handleSell} handleBuy={this.handleBuy}/>
      </div>
    );
  }
}

export default withRouter(App);
