import React, { createContext, useState } from 'react';
import FederatedPage from './FederatedPage';

export function LocalApp() {
  const [message, setMessage] = useState('Default Local Message');

  const LocalMessageContext = createContext({
    message,
    setMessage,
  });

  return (
    <LocalMessageContext.Provider value={{ message, setMessage }}>
      <FederatedPage MessageContext={LocalMessageContext} />
    </LocalMessageContext.Provider>
  );
}
