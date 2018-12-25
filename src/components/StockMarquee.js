import React, { Component } from 'react';

class StockMarquee extends Component {

  state={
    symbols:["GOOG","TSLA","MSFT","AAPL","AMZN","EBAY"],
    marqueeData: [],
    firstRender: true
  }

  componentDidMount() {
    for(let symbol of this.state.symbols){
        fetch(`https://api.robinhood.com/quotes/${symbol.toUpperCase()}/`)
        .then(res => res.json())
        .then(eachStock =>{
          let newData = {[`${eachStock.symbol}`]:parseFloat(eachStock.last_trade_price)}
          let arr = [...this.state.marqueeData,newData]
          this.setState({
            marqueeData: arr
          })
        })
    }

  }

  updatePrices=()=>{
    setInterval(()=>{
    },10000)
  }


  render() {

    return (
      <div>

        <marquee></marquee>
      </div>
    );
  }

}

export default StockMarquee;
