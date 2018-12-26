import React, { Component } from 'react';
import '../App.css'

class StockMarquee extends Component {

  state={
    symbols:["GOOG","TSLA","MSFT","AAPL","AMZN","EBAY","NKE","PFE","BAC","NOK","INTC","C","GE","FOX","T","WFC",
              "RAD","VZ","ORCL","MS","TWTR","BABA","XOM","KO","MRK","ABX","GM","INFY","HES","DIS","GG","MET","HAL","WMT",
              "CVX","BB","X","BX","DAL","MGM","AIG","JCI","HPE","ATUS","WPX","CVS"],
    marqueeData: [],
    isReloaded: true
  }

  fetchDone=(arr)=>{
    this.setState({
      marqueeData: arr
    })
  }

componentDidMount(prevProps, prevState) {
  let symbols = this.state.symbols.join(",")
  fetch(`https://api.robinhood.com/quotes/?symbols=${symbols}`)
  .then(res =>res.json())
  .then(stocks => this.setState({
    marqueeData: stocks.results
  }))
}

  render() {
        let data = this.state.marqueeData.map(eachStock =>{
          let color = Math.floor(Math.random()*10)>=5 ? "up" : "down"
          let price = parseFloat(eachStock.last_trade_price).toFixed(2)
          return <span className={color} key={eachStock.symbol}> | {eachStock.symbol} {price} | </span>
        })
    return (
      <div>
        <marquee className="up"> {data} </marquee>
      </div>
    );
  }

}

export default StockMarquee;
