import React, { Suspense } from 'react';

import { MessageContext } from './Contexts';
import { LocalContextConsumer } from './LocalContextConsumer';

//@ts-ignore
const FederatedPage = React.lazy(() => import('page_app/FederatedPage'));

export function App() {
  return (
    <MessageContext.Provider value="Hello from HostApp!">
      <div>
        <p>Hello from HostApp!</p>
        <LocalContextConsumer />
        <hr />
        <Suspense fallback={'Loading...'}>
          <FederatedPage MessageContext={MessageContext} />
        </Suspense>
      </div>
    </MessageContext.Provider>
  );
}
