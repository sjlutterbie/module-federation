import React, { Suspense } from 'react';
import { LocalContextConsumer } from './LocalContextConsumer';
// @ts-ignore
import AppConfigContext from 'shared_lib/AppConfigContext';
// @ts-ignore
import MessageContextProvider from 'shared_lib/MessageContext';

// @ts-ignore
const FederatedPage = React.lazy(() => import('fed_view/FederatedPage'));

const params = {
  appValue: 123,
};

export function App() {
  return (
    <AppConfigContext params={params}>
      <MessageContextProvider message="Set by host-app">
        <p>Hello from HostApp!</p>
        <LocalContextConsumer />
        <hr />
        <Suspense fallback={'Loading...'}>
          <FederatedPage />
        </Suspense>
      </MessageContextProvider>
    </AppConfigContext>
  );
}
