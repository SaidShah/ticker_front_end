import React, { Component } from 'react';
import NavBar from './NavBar'
import Jumbotron from './Jumbotron'

class Home extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Jumbotron/>
      </div>
    );
  }

}
export default Home;
