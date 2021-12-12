import React, { createContext, useState } from 'react';
import { FederatedPage } from './FederatedPage';
// @ts-ignore
import { MessageContextProvider } from 'shared_lib/MessageContext';

export function LocalApp() {
  return (
    <MessageContextProvider>
      <FederatedPage />
    </MessageContextProvider>
  );
}
