import { createContext } from 'react';

export const MessageContext = createContext({
  message: '',
  setMessage: (string: string) => {},
});
