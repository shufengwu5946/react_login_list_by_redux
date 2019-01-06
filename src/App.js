import React, { Component } from 'react';
import './App.css';
import Login from './LogIn/index'
import Dashboard from './Dashboard/index';

class App extends Component {

  render() {
    return (
      <div>
        {
          this.props.login ? <Dashboard/> : <Login />
        }
      </div>
    );
  }
}

export default App;
