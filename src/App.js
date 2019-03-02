import React, { useContext } from 'react';
import './App.css';
import Login from './LogIn/index';
import Dashboard from './Dashboard/index';
import { TodoContext } from './RootComponent';

function App() {
  const ctx = useContext(TodoContext);
  return (
    <div>
      {
        ctx.state.login ? <Dashboard /> : <Login />
      }
    </div>
  );
}

export default App;
