import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './modules/App/App';
import NotFound from './components/404';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={App} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
