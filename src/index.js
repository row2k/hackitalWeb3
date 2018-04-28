import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Web3Provider } from 'react-web3';
import Routes from './Routes';
import './index.css';
import { GridLoader } from 'react-spinners';

import registerServiceWorker from './registerServiceWorker';

import App from './modules/App/App';
import NotFound from './components/404';

class Hackital extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
  render() {
    const { loading } = this.state;
    if(loading) {
      return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw',backgroundColor:'#212121'}}>
          <GridLoader
            color={'#FFFFFF'}
            loading={this.state.loading}
          />
        </div>
      )
    }
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={App} />
            <Route component={NotFound} />
          </Switch>
          {/* <Routes/> */}
        </Router>
    )
  }
}

ReactDOM.render(
  <Web3Provider><Hackital/></Web3Provider>
  , document.getElementById('root'));
registerServiceWorker();
