import React, { Component } from 'react';
import './App.css';
import TodoLogin from './containers/TodoLogin'
import TodoDashboard from './containers/TodoDashboard';

class App extends Component {

  render() {
    return (
      <div>
        {
          this.props.login ? <TodoDashboard/> : <TodoLogin />
        }
      </div>
    );
  }
}

export default App;
