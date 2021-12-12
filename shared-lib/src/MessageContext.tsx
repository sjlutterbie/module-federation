import React, { Context, createContext, PropsWithChildren, useContext, useState } from 'react';

let _MessageContext: Context<{message: string, setMessage: React.Dispatch<React.SetStateAction<string>>}>

export function useMessageContext() {
  return useContext(_MessageContext);
}

export function MessageContextProvider(props: PropsWithChildren<{}>) {
  const {children} = props;
  const [message, setMessage] = useState('DEFAULT FED MESSAGE');
    
  const MessageContext = createContext({message, setMessage});

  _MessageContext = MessageContext;

  return <MessageContext.Provider value={{message, setMessage}}>{children}</MessageContext.Provider>
}