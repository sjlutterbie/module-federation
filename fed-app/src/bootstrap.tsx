import React from 'react';
import FederatedPage from './FederatedPage';
import ReactDOM from 'react-dom';

const DefaultMessageContext = React.createContext('Default context');

function init() {
  const appMount = document.createElement('div');
  document.body.appendChild(appMount);
  ReactDOM.render(
    <FederatedPage MessageContext={DefaultMessageContext} />,
    appMount
  );
}

init();
