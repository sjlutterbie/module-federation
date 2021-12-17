import React from 'react';
// @ts-ignore
import { useMessageContext } from 'shared_lib/MessageContext';
// @ts-ignore
import { useAppConfig } from 'shared_lib/AppConfigContext';

export function LocalContextConsumer() {
  const { message } = useMessageContext();
  const appConfig = useAppConfig();
  return (
    <div>
      <p>LocalContextConsumer receives: {message}</p>
      <pre>{JSON.stringify(appConfig, null, 2)}</pre>
    </div>
  );
}
