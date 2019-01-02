import React from 'react';
export const LoginContext = React.createContext(
    { login: false, userId: 0,userName:"",handleLoginChange:()=>{} }
);