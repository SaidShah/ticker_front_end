import React, { Component } from "react";
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import "../App.css";



class Marketplace extends Component{

  state={
    totalStocks: '',
    clicked: false,
    stocks: this.props.stock
  }

  sellStocks=(e,stock, quantity)=>{
    e.preventDefault()
    this.props.sellStocks(e,stock, quantity.totalStocks)
    this.setState({
      totalStocks: '', clicked: !this.state.clicked
    })
  }

  handleChange=(e)=>{
    this.setState({
      totalStocks: e.target.value
    })
  }


  render() {
    const {stock} = this.props
return(
      <>
        <div className="card cardBoarder current-portfolio">
          <div className="card-header card-title center-text same">
            Symbol:&nbsp;&nbsp; {this.state.stocks.symbol}
          </div>
          <div className="card-body">
            <h4 className="card-title">Total Value:&nbsp;&nbsp; $ {parseFloat(this.state.stocks.total_value).toFixed(2)}</h4>
            <p className="card-text bolden-text">
              <span> Current Shares:&nbsp;&nbsp; {this.state.stocks.total_quantity} </span>
              <br></br>&nbsp;&nbsp;&nbsp; <span> Purchase Price:&nbsp;&nbsp; $ {parseFloat(this.state.stocks.purchase_price).toFixed(2)} </span>
              </p>
              <form className="form-inline sell-form-padding center-card" onSubmit={(e)=>this.sellStocks(e,stock, this.state)}>
                <div className="form-group form-group-sm">
                    <label className="col-sm-3 control-label sell-form-text" htmlFor="sell">Quantity:</label>
                    <div className="col-sm-7">
                      <input className="form-control" type="number" id="sell" min="0" name="totalStocks" onChange={this.handleChange} value={this.state.totalStocks}/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 sell-btn">Sell</button>
                </div>
              </form>

          </div>
        </div>

      </>

  )
 }
}
export default withRouter(Marketplace);
