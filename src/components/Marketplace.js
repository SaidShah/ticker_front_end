import React, { Component } from "react";
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import EachStock from './EachStock'
import "../App.css";

class Marketplace extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="card cardBoarder">
          <div className="card-header card-title center-text">
            Symbol:&nbsp;&nbsp; {this.props.stock.symbol}
          </div>
          <div className="card-body">
            <h4 className="card-title">Current Price:&nbsp;&nbsp; $ {parseFloat(this.props.stock.last_trade_price).toFixed(2)}</h4>
            <p className="card-text bolden-text">
              <span> Previous Close:&nbsp;&nbsp; $ {parseFloat(this.props.stock.adjusted_previous_close).toFixed(2)} </span>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <span> Asking Price:&nbsp;&nbsp; $ {parseFloat(this.props.stock.ask_price).toFixed(2)} </span>
            </p>
            <p className="card-text bolden-text">Last extended hours trade price:&nbsp;&nbsp; $ {parseFloat(this.props.stock.last_extended_hours_trade_price).toFixed(2)}</p>
            <Link to={`/marketplace/${this.props.stock.symbol}`} className="btn btn-primary cardBoarder cardBtn">
              view {this.props.stock.symbol}
            </Link>
          </div>
        </div>


    <Switch>
      <Route path="/marketplace/:symbol" render={(props)=><EachStock stock={this.props.stock}/>}/>
    </Switch>
      </>
    );
  }
}

export default withRouter(Marketplace);
