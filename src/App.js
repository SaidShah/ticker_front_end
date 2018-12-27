import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WholePage from './containers/WholePage'
import {withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WholePage/>
      </div>
    );
  }
}

export default withRouter(App);
