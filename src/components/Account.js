import React, { Component } from 'react';
import Marketplace from './Marketplace'
import StockSearchCard from './StockSearchCard'

class Account extends Component {

  state={
  isChanged: false,
  name: '',
  user:  null ,
  stocks: '',
  search: ' ',
  found: ''
  }

  componentDidMount() {
   this.forceUpdate()
   let token = localStorage.getItem("token")
   if(token){
     fetch("http://localhost:3000/current_user",{method: "GET",
     headers: {
     "Content-Type":"application/json",
     Action: "application/json",
     Authorization:`${token}`
   }
     }).then(res => res.json())
     .then(user => {
       localStorage.setItem("token",user.jwt)
       this.setState({
         user: user.user,isChanged: !this.state.isChanged, stocks: user.user.stocks
       })
     })
    }
  }


  sellStocks=(e,stock, quantitySelling, user, account, currentPrice)=>{
    e.preventDefault()
    let stockPrice = parseFloat(currentPrice)
    let totalValue = quantitySelling * stockPrice// the total price of sold stocks
    let newStockCount = stock.total_quantity - quantitySelling// num of shares left after selling some
    let newAccountBalance = totalValue + parseFloat(account.total_funds)
    let newValueForStock = totalValue
    let data = JSON.stringify({values:{total_value: totalValue, new_stock_count: newStockCount, new_account_balance: newAccountBalance, new_value_for_stock: newValueForStock,stock_id: stock.id, user_id: user.id}})
    fetch(`http://localhost:3000/users/${user.id}/stocks/${stock.id}`, {method: "PATCH",
    headers: {"Content-Type": "application/json", Accept: "application/json"},
    body: data
  }).then(res => res.json())
      .then(updatedInfo =>{
        this.setState({isChanged: !this.state.isChanged, user: updatedInfo, stocks: updatedInfo.stocks})
    })
  }

  handleChange=(e)=>{
    this.setState({search: e.target.value})
  }

  handleSubmit=(e,term)=>{
    e.preventDefault()
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${term}&apikey=`)
    .then(res => res.json())
    .then(stocks => this.setState({found: stocks}))

  }

  handleBuy=(e,stock, quantity, price)=>{
  let user = this.state.user
  let total_value = parseFloat(quantity*price).toFixed(2)
  let total_funds = parseFloat(user.account.total_funds - total_value)
  let symbol=stock["1. symbol"]
  let user_id = user.person.id
  let count = parseInt(quantity)
  fetch(`http://localhost:3000/users/${user_id}/stocks`,{method: "POST",
  headers: {"Content-Type": "application/json",
            Accept:"application/json"},
  body: JSON.stringify({values:{total_value: total_value, total_funds: total_funds, symbol: symbol, user_id: user_id, quantity:count, purchase_price: price}})
    }).then(res => res.json()).then(console.log)
    console.log(count);
  }


  getStocks=()=>{
    if(this.state.user.stocks.length === 0){
      return <h3>You currently do not own any stocks</h3>
    }else{
      let arr = this.state.stocks.map(a =>{
        return <Marketplace stock={a} key={a.symbol} sellStocks={this.sellStocks} user={this.state.user}/>
      })
      return arr
    }
  }


  render() {

    return (
    <>
      <div className="center-card">
      <div className="card cardBoarder account-card">
        <div className="card-header card-title center-text">
          Welcome&nbsp; {this.state.user == null ? null : this.state.user.person["first_name"]}
        </div>
        <div className="card-body">
          <h4 className="card-title">Your current account balance is :&nbsp;&nbsp; $&nbsp;
           {this.state.user == null ? null : parseFloat(this.state.user.account["total_funds"]).toFixed(2)}
          </h4>
          </div>
          <div className="row">
            <div className="col-sm-6">
            <h2>Find Stocks</h2>
            <form className="form-inline sell-form-padding center-card" onSubmit={(e)=>this.handleSubmit(e,this.state.search)}>
              <input className="form-control" type="text" id="search" min="0" name="search" placeholder="enter symbol...." onChange={this.handleChange} value={this.state.search}/>
              <button type="submit" className="btn btn-primary mb-2 sell-btn search-padding">Search</button>
            </form>
            {this.state && this.state.found && <>{this.state.found.bestMatches.map((stock,index) => <StockSearchCard stock={stock} key={index} handleBuy={this.handleBuy}/>)}</>}
            </div>
            <div className="col-sm-6" >
              <h2>Your Current Portfolio</h2>

              {this.props.user && this.props.user.stocks.map((a,i) =>{
                return <Marketplace stock={a} key={a.symbol} sellStocks={this.sellStocks} user={this.state.user}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </>

    );
  }

}

export default Account;
