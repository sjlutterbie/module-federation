import React from 'react';
import { FederatedContextConsumer } from './FederatedContextConsumer';
import { FederatedForm } from './FederatedForm';
import { MessageContextType } from './types';

type FederatedPageProps = {
  MessageContext: MessageContextType;
};

export default function FederatedPage(props: FederatedPageProps) {
  const { MessageContext } = props;

  return (
    <div>
      <p>Hello, I'm a Federated App!</p>
      <FederatedContextConsumer MessageContext={MessageContext} />
      <FederatedForm MessageContext={MessageContext} />
    </div>
  );
}
