import React, { Component } from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom";

class EachStock extends Component {

  state = {
    currentStock: this.props.stockData,
    stockNews: "",
    stockData: ""
  };

  componentDidMount() {
    fetch(
      `https://api-v2.intrinio.com/companies/${
        this.state.currentStock
      }?api_key=`
    )
      .then(res => res.json())
      .then(stockNews =>
        this.setState({
          stockNews: stockNews
        })
      );

    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${
        this.state.currentStock
      }&apikey=`
    )
      .then(res => res.json())
      .then(stockData =>
        this.setState({ stockData: stockData["Global Quote"] })
      );
  }

  render() {
    return (
      <div className="center-text">
        <div className="card cardBoarder show-card-width">
          <div className="card-header card-title center-text same">
            Symbol :&nbsp;&nbsp; {this.state.stockData["01. symbol"]}{" "}
            &nbsp;&nbsp;&nbsp;
            <span> Company Name : {this.state.stockNews.name}</span>
          </div>

          <div className="card-body">
            <h4 className="card-title orange-text">
              |&nbsp;&nbsp; Current Price : ${" "}
              {parseFloat(this.state.stockData["05. price"]).toFixed(2)}
              &nbsp;&nbsp; |{" "}
              <span>
                |&nbsp;&nbsp; Opening Price : ${" "}
                {parseFloat(this.state.stockData["02. open"]).toFixed(2)}
                &nbsp;&nbsp; |
              </span>
            </h4>

            <h4 className="card-title orange-text">
              |&nbsp;&nbsp; Previous Close : ${" "}
              {parseFloat(this.state.stockData["08. previous close"]).toFixed(
                2
              )}{" "}
              &nbsp;&nbsp; |{" "}
              <span>
                |&nbsp;&nbsp; Volume : {this.state.stockData["06. volume"]}
                &nbsp;&nbsp; |
              </span>
            </h4>

            <h4 className="card-title orange-text">
              |&nbsp;&nbsp; High : ${" "}
              {parseFloat(this.state.stockData["03. high"]).toFixed(2)}
              &nbsp;&nbsp; |{" "}
              <span>
                |&nbsp;&nbsp; Low : ${" "}
                {parseFloat(this.state.stockData["04. low"]).toFixed(2)}
                &nbsp;&nbsp; |
              </span>
            </h4>

            <h4 className="card-title orange-text">
              |&nbsp;&nbsp; Percent Change :{" "}
              {this.state.stockData["10. change percent"]}
              &nbsp;&nbsp; |{" "}
              <span>
                |&nbsp;&nbsp; Opening Price : ${" "}
                {parseFloat(this.state.stockData["02. open"]).toFixed(2)}
                &nbsp;&nbsp; |
              </span>
            </h4>

            <h4 className="card-title orange-text">
              |&nbsp;&nbsp; Stock Exchange :{" "}
              {this.state.stockNews.stock_exchange}
              &nbsp;&nbsp; |{" "}
              <span>
                |&nbsp;&nbsp; Current CEO : {this.state.stockNews.ceo}
                &nbsp;&nbsp; |
              </span>
            </h4>

            <h4 className="card-title orange-text">
              Headquarters:&nbsp;&nbsp; {this.state.stockNews.business_address}
              &nbsp;&nbsp;&nbsp;
            </h4>

            <h4 className="orange-text">
              Total Employees: {this.state.stockNews.employees}
            </h4>

            <h4 className="card-title orange-text">
              Company Link:&nbsp;&nbsp;{" "}
              <a
                href={`https://${this.state.stockNews.company_url}`}
                target="_blank"
              >
                {this.state.stockNews.company_url}
                &nbsp;&nbsp;&nbsp;
              </a>
            </h4>

            <h2 className="card-text bolden-text orange-text">Company Info:</h2>
            <p className="card-text orange-text">
              {this.state.stockNews.long_description}
            </p>

            <Link
              to={`/marketplace`}
              className="btn btn-primary cardBoarder cardBtn"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EachStock;
