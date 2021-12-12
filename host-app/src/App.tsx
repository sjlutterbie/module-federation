import React, { Suspense } from 'react';
import { LocalContextConsumer } from './LocalContextConsumer';

// @ts-ignore
import { MessageContextProvider } from 'shared_lib/MessageContext';
// @ts-ignore
import { FederatedPage } from 'page_app/FederatedPage';

export function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <MessageContextProvider>
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
