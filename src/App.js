import React, { Component } from 'react';
import './App.css';
import Login from "./LogIn/index";
import Dashboard from "./Dashboard/index";
import {LoginContext} from './login-context';
class App extends Component {

  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.state = { userName:"",handleLoginChange:this.handleLoginChange,login: false, userId: 0 }
  }

  handleLoginChange(state){
    this.setState(state);
  }

  render() {
    return (
      <div>
        <LoginContext.Provider value = {this.state}>
          {
            this.state.login ? 
            <Dashboard userId = {this.state.userId} /> : 
            <Login handleLoginChange = {this.handleLoginChange}/>
          }
        </LoginContext.Provider>
        
      </div>
    );
  }
}

export default App;
