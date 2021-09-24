import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  React.createElement("h1", 
  { style: {color: "blue"}}, 
  "Hey Man!"),
  document.getElementById('root')
);

