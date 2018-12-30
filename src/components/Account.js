import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Account extends Component {



  componentDidMount() {
   this.forceUpdate()
  }

  checkNull=()=>{
    if(this.props.user === null || this.props.user.person === null){
      this.forceUpdate()
    }
  }

  getStocks=()=>{
    if(this.props.user.stocks.length === 0){
      return <h3>You currently do not own any stocks</h3>
    }
  }


  render() {

    return (
      <>
      {this.checkNull()}
      <div className="center-card">
      <div className="card cardBoarder account-card">
        <div className="card-header card-title center-text">
          Welcome&nbsp; {this.props.user !== null ? this.props.user.person.first_name : this.forceUpdate()}
        </div>
        <div className="card-body">
          <h4 className="card-title">Your current account balance is :&nbsp;&nbsp; $
          {this.props.user !== null ? this.props.user.account.total_funds: this.forceUpdate()}</h4>
          </div>
          <div class="row">
            <div class="col-sm-6">
            <h2>Find Stocks</h2>
            </div>
            <div class="col-sm-6" >
              <h2>Your Current Portfolio</h2>
              {this.props.user !== null ? this.getStocks(): this.forceUpdate()}
            </div>
          </div>
        </div>
      </div>

      </>

    );
  }

}

export default Account;
