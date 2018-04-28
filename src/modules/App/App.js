import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';


// console.log(web3Context);
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const web3Context = this.context.web3;
    console.log(web3Context);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.contextTypes = {
  web3: PropTypes.object
};

export default App;
