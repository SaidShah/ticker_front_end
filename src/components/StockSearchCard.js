import React, { Component } from "react";

class StockSearchCard extends Component {
  state = {
    quantity: "",
    currentPrice: ""
  };

  handleBuy = (e, stock, quantity, price) => {
    e.preventDefault();
    if (price) {
      let totalQuantity = parseInt(quantity);
      this.props.handleBuy(e, stock, totalQuantity, price);
      this.setState({ quantity: "" });
    } else {
      alert("Sorry that stock is not available");
    }
  };

  handleChange = e => {
    this.setState({ quantity: e.target.value });
  };

  getQuote = symbol => {
    fetch(`https://api.robinhood.com/quotes/${symbol}/`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then(price => {
        if (price !== null)
          this.setState({ currentPrice: price.last_trade_price });
      })
      .catch(err => this.setState({ currentPrice: "1" }));
  };

  render() {
    return (
      <>
        <div className="card cardBoarder current-portfolio">
          <div className="card-header card-title center-text same">
            Symbol:&nbsp;&nbsp; {this.props.stock["1. symbol"]}
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Name:&nbsp;&nbsp; {this.props.stock["2. name"]}{" "}
            </h4>
            <p className="card-text bolden-text">
              <span> Type:&nbsp;&nbsp; {this.props.stock["3. type"]}</span>
              <br />&nbsp;&nbsp;&nbsp;{" "}
              <span> Region: &nbsp;&nbsp; {this.props.stock["4. region"]}</span>
            </p>
            <p className="card-text bolden-text">
              Current Price:&nbsp;&nbsp;
              {this.getQuote(this.props.stock["1. symbol"])}
              {parseFloat(this.state.currentPrice).toFixed(2)}
            </p>
            <p className="card-text bolden-text">
              Currency:&nbsp;&nbsp;{this.props.stock["8. currency"]}
            </p>
            <form
              className="form-inline sell-form-padding center-card"
              onSubmit={e => {
                this.handleBuy(
                  e,
                  this.props.stock,
                  this.state.quantity,
                  this.state.currentPrice
                );
              }}
            >
              <div className="form-group form-group-sm">
                <label
                  className="col-sm-3 control-label sell-form-text"
                  htmlFor="buy"
                >
                  Quantity:
                </label>
                <div className="col-sm-7">
                  <input
                    className="form-control"
                    type="number"
                    min="0"
                    name="buy"
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2 sell-btn">
                  Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default StockSearchCard;
