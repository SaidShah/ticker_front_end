import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Marketplace from './Marketplace'

class Account extends Component {

  state={
  isChanged: false,
  name: '',
  user: null
  }



  componentDidMount() {
   this.forceUpdate()
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

  }

  sellStocks=(e,stock, quantity)=>{
    e.preventDefault()
    this.setState({
      changed: !this.state.changed
    })
  }

  getStocks=()=>{
    if(this.state.user.stocks.length == 0){
      return <h3>You currently do not own any stocks</h3>
    }else{
      let arr = this.state.user.stocks.map(a =>{
        return <Marketplace stock={a} key={a.symbol} sellStocks={this.sellStocks}/>
      })
      return arr
    }

  }

  render() {
    return (
      <>
      <div className="center-card">
      <div className="card cardBoarder account-card">
        <div className="card-header card-title center-text">
          Welcome&nbsp; {this.state.user == null ? null : this.state.user.person["first_name"]}
        </div>
        <div className="card-body">
          <h4 className="card-title">Your current account balance is :&nbsp;&nbsp; $
           {this.state.user == null ? null : this.state.user.account["total_funds"]}
          </h4>
          </div>
          <div className="row">
            <div className="col-sm-6">
            <h2>Find Stocks</h2>
            </div>
            <div className="col-sm-6" >
              <h2>Your Current Portfolio</h2>
              {this.state.user == null ? null : this.getStocks()}
            </div>
          </div>
        </div>
      </div>

      </>

    );
  }

}

export default Account;
