import React, { Component } from 'react';
import Marketplace from '../components/Marketplace'
import '../App.css'

class MarketplaceContainer extends Component {
  state={
    popularStocks: ["GOOG","TSLA","MSFT","AAPL","AMZN","EBAY","NKE","PFE","BAC","NOK","INTC","C","GE","FOX","T","WFC",
              "RAD","VZ","ORCL","MS","TWTR","BABA","XOM","KO","MRK","ABX","GM","INFY","HES","DIS","GG","MET","HAL","WMT",
              "CVX","BB","X","BX","DAL","MGM","AIG","JCI","HPE","ATUS","WPX","CVS"],
    stocksToShow: []
  }

  componentDidMount() {
    let symbols = this.getRandomStocks().join(",")
    fetch(`https://api.robinhood.com/quotes/?symbols=${symbols}`)
    .then(res => res.json())
    .then(stocks =>{
      this.setState({
        stocksToShow: stocks.results
      })
    })
  }

  getRandomStocks=()=>{
    let indexes = []
    let stocks = [...this.state.popularStocks]
    for(let i = 0; i < 15; i++){
      let randomNum = Math.floor(Math.random()*this.state.popularStocks.length)
      indexes.push(randomNum)
    }
     let uniqueIndexes = Array.from(new Set(indexes))
     let allStocks = []
     for(let index of uniqueIndexes){
       allStocks.push(stocks[index])
     }
     return allStocks
  }

  viewStock=(e,stock)=>{
    console.log(stock);
  }

  render() {
    let stockArr = this.state.stocksToShow.map(eachStock =>{
       return <Marketplace stock={eachStock} viewStock={this.viewStock} key={eachStock.symbol}/>
    })
    return (
      <div className="center-card">
      <h1 className="box-header-text"> Welcome to the Marketplace </h1>
      <h2 className="box-header-text">Trending Stocks</h2>
        {stockArr}
      </div>
    );
  }

}

export default MarketplaceContainer;
