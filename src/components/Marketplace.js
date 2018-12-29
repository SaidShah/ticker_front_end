import React, { Component } from "react";
import "../App.css";

class Marketplace extends Component {
  render() {
    console.log(this.props.stock);
    return (
      <>
        <div className="card cardBoarder">
          <div className="card-header card-title center-text">
            Symbol: {this.props.stock.symbol}
          </div>
          <div className="card-body">
            <h4 className="card-title">Current Price: $ {parseFloat(this.props.stock.last_trade_price).toFixed(2)}</h4>
            <p className="card-text bolden-text">
              <span> Previous Close: $ {parseFloat(this.props.stock.adjusted_previous_close).toFixed(2)} </span>
              | <span> Asking Price: $ {parseFloat(this.props.stock.ask_price).toFixed(2)} </span>
            </p>
            <p className="card-text bolden-text">Last extended hours trade price: $ {parseFloat(this.props.stock.last_extended_hours_trade_price).toFixed(2)}</p>
            <a href="#" className="btn btn-primary cardBoarder cardBtn">
              view {this.props.stock.symbol}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Marketplace;
