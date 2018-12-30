import React, { Component } from 'react';
import Jumbotron from './Jumbotron'

class Home extends Component {
  state={
    isHere: false,
    user: ''
  }

  componentDidMount() {
    this.setState({
      isHere: !this.state.isHere,
      user: this.props
    })
  }

  render() {
    return (
      <div>
        <Jumbotron/>
      </div>
    );
  }

}
export default Home;
