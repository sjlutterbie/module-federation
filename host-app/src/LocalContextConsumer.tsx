import React, { useContext } from 'react';
import { MessageContext } from './Contexts';

export function LocalContextConsumer() {
  const message = useContext(MessageContext);
  return <p>LocalContextConsumer receives: {message}</p>;
}
