import React, { Context, Suspense, useContext } from 'react';

type FederatedContextConsumerProps = {
  MessageContext: Context<string>;
};

export function FederatedContextConsumer(props: FederatedContextConsumerProps) {
  const { MessageContext } = props;

  const message = useContext(MessageContext);

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
