import React, { Component } from 'react';

class StockSearchCard extends Component {

  state={
    quantity: ''
  }

  handleBuy=(e, stock, quantity)=>{
    e.preventDefault()
    let totalQuantity = parseInt(quantity)
    this.props.handleBuy(e,stock,totalQuantity)
    this.setState({quantity: ''})
  }

  handleChange=(e)=>{
    this.setState({quantity: e.target.value})
  }

  render() {
    return (
      <>
        <div className="card cardBoarder current-portfolio">
          <div className="card-header card-title center-text same">
            Symbol:&nbsp;&nbsp; {this.props.stock["1. symbol"]}
          </div>
          <div className="card-body">
            <h4 className="card-title">Name:&nbsp;&nbsp; {this.props.stock["2. name"]} </h4>
            <p className="card-text bolden-text">
              <span> Type:&nbsp;&nbsp; {this.props.stock["3. type"]}</span>
              <br></br>&nbsp;&nbsp;&nbsp; <span> Region: &nbsp;&nbsp;  {this.props.stock["4. region"]}</span>
              </p>
            <p className="card-text bolden-text">Currency:  {this.props.stock["8. currency"]}</p>
              <form className="form-inline sell-form-padding center-card" onSubmit={(e=>{this.handleBuy(e,this.props.stock, this.state.quantity)})}>
                <div className="form-group form-group-sm">
                    <label className="col-sm-3 control-label sell-form-text" htmlFor="buy">Quantity:</label>
                    <div className="col-sm-7">
                      <input className="form-control" type="number" min="0" name="buy" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 sell-btn">Buy</button>
                </div>
              </form>
          </div>
        </div>

      </>

    );
  }

}

export default StockSearchCard;
