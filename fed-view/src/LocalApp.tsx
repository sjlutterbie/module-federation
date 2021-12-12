import React from 'react';
import FederatedPage from './FederatedPage';
// @ts-ignore
import MessageContextProvider from 'shared_lib/MessageContext';

export function LocalApp() {
  return (
    <MessageContextProvider defaultMessage="Using federated-set context">
      <FederatedPage />
    </MessageContextProvider>
  );
}
