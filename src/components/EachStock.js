import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'


class EachStock extends Component {

  render() {
    console.log(this.props);
    return (
      <h1>The stock name is {this.props.stockData}</h1>
    );
  }

}

export default EachStock;
