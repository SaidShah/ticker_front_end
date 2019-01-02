import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";

class Marketplace extends Component {
  state = {
    totalStocks: "",
    clicked: false,
    stocks: "",
    currentPrice: ""
  };

  componentDidMount() {
    fetch(`https://api.robinhood.com/quotes/${this.props.stock.symbol}/`)
      .then(res => res.json())
      .then(stock => {
        this.setState({
          currentPrice: stock.last_trade_price
        });
      });
  }

  sellStocks = (e, stock, quantity, currentPrice) => {
    e.preventDefault();
    let user = this.props.user.person;
    let account = this.props.user.account;
    let price = parseFloat(this.state.currentPrice).toFixed(2);
    if (parseInt(stock.total_quantity) < parseInt(this.state.totalStocks)) {
      alert("You Do not Have Enough Shares");
    } else if (!this.state.totalStocks || this.state.totalStocks === "") {
      alert("Please enter a valid number");
    } else {
      this.props.sellStocks(
        e,
        stock,
        this.state.totalStocks,
        user,
        account,
        price
      );
    }
    this.setState({
      totalStocks: "",
      clicked: !this.state.clicked
    });
  };

  handleChange = e => {
    this.setState({
      totalStocks: e.target.value
    });
  };

  render() {
    const { stock } = this.props;
    return (
      <>
        <div className="card cardBoarder current-portfolio">
          <div className="card-header card-title center-text same">
            Symbol:&nbsp;&nbsp; {stock.symbol}
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Total Value:&nbsp;&nbsp; ${" "}
              {parseFloat(stock.total_value).toFixed(2)}
            </h4>
            <p className="card-text bolden-text">
              <span> Current Shares:&nbsp;&nbsp; {stock.total_quantity} </span>
              <br />&nbsp;&nbsp;&nbsp;{" "}
              <span>
                {" "}
                Purchase Price (per share):&nbsp;&nbsp; ${" "}
                {parseFloat(stock.purchase_price).toFixed(2)}{" "}
              </span>
            </p>
            <p className="card-text bolden-text">
              Current Price (per share): ${" "}
              {parseFloat(this.state.currentPrice).toFixed(2)}
            </p>
            <form
              className="form-inline sell-form-padding center-card"
              onSubmit={e =>
                this.sellStocks(e, stock, this.state, this.state.currentPrice)
              }
            >
              <div className="form-group form-group-sm">
                <label
                  className="col-sm-3 control-label sell-form-text"
                  htmlFor="sell"
                >
                  Quantity:
                </label>
                <div className="col-sm-7">
                  <input
                    className="form-control"
                    type="number"
                    id="sell"
                    min="0"
                    name="totalStocks"
                    onChange={this.handleChange}
                    value={this.state.totalStocks}
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2 sell-btn">
                  Sell
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Marketplace);
