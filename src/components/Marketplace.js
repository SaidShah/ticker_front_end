import React, { Component } from "react";
import "../App.css";

class Marketplace extends Component {
  render() {
    return (
      <>
        <div className="card cardBoarder">
          <div className="card-header card-title  center-text">
            Symbol: {this.props.stock.symbol}
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              It's a broader card with text below as a natural lead-in to extra
              content. This content is a little longer.
            </p>
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
