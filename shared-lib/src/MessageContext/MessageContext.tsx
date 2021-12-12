import React, {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

let _MessageContext: Context<{
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}>;

export function useMessageContext() {
  return useContext(_MessageContext);
}

type MessageContextProviderProps = {
  defaultMessage: string;
};

export function MessageContextProvider(
  props: PropsWithChildren<MessageContextProviderProps>
) {
  const { children, defaultMessage = 'Default Federated Message' } = props;
  const [message, setMessage] = useState(defaultMessage);

  const MessageContext = createContext({ message, setMessage });

  _MessageContext = MessageContext;

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
