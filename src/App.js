import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WholePage from './containers/WholePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WholePage/>
      </div>
    );
  }
}

export default App;
