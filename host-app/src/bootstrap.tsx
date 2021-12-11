import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

function init() {
  const appMount = document.createElement('div');
  document.body.appendChild(appMount);
  ReactDOM.render(<App />, appMount);
}

init();
