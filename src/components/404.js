import React, { Component } from 'react';
import logo from './logo.svg';

export default class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>404</h2>
        </div>
        <p className="App-intro">
          Friendly 404 page.
        </p>
      </div>
    );
  }
}
