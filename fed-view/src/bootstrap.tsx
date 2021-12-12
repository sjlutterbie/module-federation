import React from 'react';
import ReactDOM from 'react-dom';
import { LocalApp } from './LocalApp';

function init() {
  const appMount = document.createElement('div');
  document.body.appendChild(appMount);
  ReactDOM.render(<LocalApp />, appMount);
}

init();
