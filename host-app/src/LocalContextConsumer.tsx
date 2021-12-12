import React from 'react';
// @ts-ignore
import { useMessageContext } from 'shared_lib/MessageContext';

export function LocalContextConsumer() {
  const { message } = useMessageContext();
  return <p>LocalContextConsumer receives: {message}</p>;
}
