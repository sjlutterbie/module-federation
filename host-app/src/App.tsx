import React, { Suspense, useState } from 'react';

import { MessageContext } from './Contexts';
import { LocalContextConsumer } from './LocalContextConsumer';

//@ts-ignore
const FederatedPage = React.lazy(() => import('page_app/FederatedPage'));

export function App() {
  const [message, setMessage] = useState('Host App Default Message');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
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
