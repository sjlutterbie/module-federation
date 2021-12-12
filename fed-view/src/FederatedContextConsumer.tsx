import React, { Suspense } from 'react';

// @ts-ignore
import { useMessageContext } from 'shared_lib/MessageContext';

export function FederatedContextConsumer() {
  const { message } = useMessageContext();

  return (
    <Suspense fallback={'Loading...'}>
      <p>
        <span style={{ fontWeight: 'bold' }}>
          FederatedContextConsumer receives:
        </span>{' '}
        {message}
      </p>
    </Suspense>
  );
}
