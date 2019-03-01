import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Login from './LogIn/index';
import Dashboard from './Dashboard/index';

const App = (props) => {
  const { login } = props;
  return (
    <div>
      {
        login ? <Dashboard /> : <Login />
      }
    </div>
  );
};

App.propTypes = {
  login: PropTypes.bool.isRequired,
};

export default App;
