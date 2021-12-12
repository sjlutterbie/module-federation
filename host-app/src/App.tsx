import React, { Suspense } from 'react';
import { LocalContextConsumer } from './LocalContextConsumer';
// @ts-ignore
import MessageContextProvider from 'shared_lib/MessageContext';

// @ts-ignore
const FederatedPage = React.lazy(() => import('fed_view/FederatedPage'));

export function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <MessageContextProvider defaultMessage="Host App Message">
        <p>Hello from HostApp!</p>
        <LocalContextConsumer />
        <hr />
        <Suspense fallback={'Loading...'}>
          <FederatedPage />
        </Suspense>
      </MessageContextProvider>
    </Suspense>
  );
}
