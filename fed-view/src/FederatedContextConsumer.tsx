import React, { Suspense } from 'react';

// @ts-ignore
import { useMessageContext } from 'shared_lib/MessageContext';

// @ts-ignore
import { useAppConfig } from 'shared_lib/AppConfigContext';

export function FederatedContextConsumer() {
  const { message } = useMessageContext();
  const appConfig = useAppConfig();

  return (
    <Suspense fallback={'Loading...'}>
      <div>
        <span style={{ fontWeight: 'bold' }}>
          FederatedContextConsumer receives:
        </span>{' '}
        {message}
        <pre>config: {JSON.stringify(appConfig, null, 2)}</pre>
      </div>
    </Suspense>
  );
}
