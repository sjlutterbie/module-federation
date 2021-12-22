import React from 'react';
import FederatedPage from './FederatedPage';
// @ts-ignore
import AppConfigProvider from 'shared_lib/AppConfigContext';
// @ts-ignore
import MessageContextProvider from 'shared_lib/MessageContext';

const params = { local: 12 };

export function LocalApp() {
  return (
    <AppConfigProvider params={params}>
      <MessageContextProvider defaultMessage="Set by fed-view">
        <FederatedPage />
      </MessageContextProvider>
    </AppConfigProvider>
  );
}
