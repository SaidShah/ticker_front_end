import React, { Component } from "react";
import EachStock from "../components/EachStock";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import "../App.css";

class MarketplaceContainer extends Component {
  state = {
    popularStocks: [
      "GOOG",
      "TSLA",
      "MSFT",
      "AAPL",
      "AMZN",
      "EBAY",
      "NKE",
      "PFE",
      "BAC",
      "NOK",
      "INTC",
      "C",
      "GE",
      "FOX",
      "T",
      "WFC",
      "RAD",
      "VZ",
      "ORCL",
      "MS",
      "TWTR",
      "BABA",
      "XOM",
      "KO",
      "MRK",
      "ABX",
      "GM",
      "INFY",
      "HES",
      "DIS",
      "GG",
      "MET",
      "HAL",
      "WMT",
      "CVX",
      "BB",
      "X",
      "BX",
      "DAL",
      "MGM",
      "AIG",
      "JCI",
      "HPE",
      "ATUS",
      "WPX",
      "CVS"
    ],
    stocksToShow: []
  };

  componentDidMount() {
    let symbols = this.getRandomStocks().join(",");
    fetch(`https://api.robinhood.com/quotes/?symbols=${symbols}`)
      .then(res => res.json())
      .then(stocks => {
        this.setState({
          stocksToShow: stocks.results
        });
      });
  }

  getRandomStocks = () => {
    let indexes = [];
    let stocks = [...this.state.popularStocks];
    for (let i = 0; i < 15; i++) {
      let randomNum = Math.floor(
        Math.random() * this.state.popularStocks.length
      );
      indexes.push(randomNum);
    }
    let uniqueIndexes = Array.from(new Set(indexes));
    let allStocks = [];
    for (let index of uniqueIndexes) {
      allStocks.push(stocks[index]);
    }
    return allStocks;
  };

  render() {
    let stockArr = this.state.stocksToShow.map(eachStock => {
      return (
        <div className="center-text" key={eachStock.symbol}>
          <div className="card cardBoarder">
            <div className="card-header card-title center-text">
              Symbol:&nbsp;&nbsp; {eachStock.symbol}
            </div>
            <div className="card-body">
              <h4 className="card-title">
                Current Price:&nbsp;&nbsp; ${" "}
                {parseFloat(eachStock.last_trade_price).toFixed(2)}
              </h4>
              <p className="card-text bolden-text">
                <span>
                  {" "}
                  Previous Close:&nbsp;&nbsp; ${" "}
                  {parseFloat(eachStock.adjusted_previous_close).toFixed(
                    2
                  )}{" "}
                </span>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{" "}
                <span>
                  {" "}
                  Asking Price:&nbsp;&nbsp; ${" "}
                  {parseFloat(eachStock.ask_price).toFixed(2)}{" "}
                </span>
              </p>
              <p className="card-text bolden-text">
                Last extended hours trade price:&nbsp;&nbsp; ${" "}
                {parseFloat(eachStock.last_extended_hours_trade_price).toFixed(
                  2
                )}
              </p>
              <Link
                to={`/marketplace/${eachStock.symbol}`}
                className="btn btn-primary cardBoarder cardBtn"
              >
                view {eachStock.symbol}
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <Switch>
          <Route
            exact
            path="/marketplace/:symbol"
            render={props => (
              <EachStock stockData={props.match.params.symbol} />
            )}
          />
          <Route
            exact
            path="/marketplace"
            render={() => <div>{stockArr}</div>}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(MarketplaceContainer);
