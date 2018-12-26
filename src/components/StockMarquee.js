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

  updatePrices=()=>{
        let symbols = this.state.symbols.join(",")
        fetch(`https://api.robinhood.com/quotes/?symbols=${symbols}`)
        .then(res =>res.json())
        .then(stocks => this.setState({
          marqueeData: stocks.results
        }))

  }

  displayData=()=>{
    this.updatePrices()
    if(this.state.marqueeData.length > 0){
    let newData= this.state.marqueeData.map(eachStock=>{
      console.log(eachStock.symbol);
        return `|   ${eachStock.symbol} $${parseFloat(eachStock.last_trade_price)}    |`
      })
      return newData
    }

  }


  render() {
    return (
      <div>
        <marquee className="up"> {this.displayData()} </marquee>
      </div>
    );
  }

}

export default StockMarquee;
