import React from 'react';
// @ts-ignore
import { FederatedContextConsumer } from './FederatedContextConsumer';
import { FederatedForm } from './FederatedForm';

export default function FederatedPage() {
  return (
    <>
      <p>Hello, I'm a Federated App!</p>
      <FederatedContextConsumer />
      <FederatedForm />
    </>
  );
}
