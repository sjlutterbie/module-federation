import React, { Suspense, useContext } from 'react';
import { MessageContextType } from './types';

type FederatedContextConsumerProps = {
  MessageContext: MessageContextType;
};

export function FederatedContextConsumer(props: FederatedContextConsumerProps) {
  const { MessageContext } = props;

  const { message } = useContext(MessageContext);

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
