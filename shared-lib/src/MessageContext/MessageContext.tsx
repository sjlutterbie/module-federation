import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type MessageContextValue = {
  message: string;
  setMessage: (value: string) => void;
};

console.log('create messageContext');

export const messageContext = createContext<MessageContextValue>({
  message: 'initial',
  setMessage: () => undefined,
});

export function useMessageContext() {
  return useContext(messageContext);
}

type Props = {
  children: ReactNode;
  message: string;
};

export function MessageContextProvider(props: Props) {
  const { children, message: messageProp } = props;

  const [message, setMessage] = useState(messageProp);

  const value = useMemo(() => {
    const result: MessageContextValue = {
      message,
      setMessage,
    };
    return result;
  }, [message, setMessage]);

  const { Provider } = messageContext;
  return <Provider value={value}>{children}</Provider>;
}
