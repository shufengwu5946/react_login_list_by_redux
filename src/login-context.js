import React from 'react';

const LoginContext = React.createContext(
  {
    login: false, userId: 0, userName: '', handleLoginChange: () => { },
  },
);

export default LoginContext;
