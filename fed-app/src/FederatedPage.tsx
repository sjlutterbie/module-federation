import React, { Context } from 'react';
import { FederatedContextConsumer } from './FederatedContextConsumer';

type FederatedPageProps = {
  MessageContext: Context<string>;
};

export default function FederatedPage(props: FederatedPageProps) {
  const { MessageContext } = props;

  return (
    <div>
      <p>Hello, I'm a Federated App!</p>
      <FederatedContextConsumer MessageContext={MessageContext} />
    </div>
  );
}
