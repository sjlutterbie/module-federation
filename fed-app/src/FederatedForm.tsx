import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from 'react';
import { MessageContextType } from './types';

type FederatedFormProps = {
  MessageContext: MessageContextType;
};

export function FederatedForm(props: FederatedFormProps) {
  const { MessageContext } = props;
  const { message, setMessage } = useContext(MessageContext);
  const [localMessage, setLocalMessage] = useState(message);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLocalMessage(e.currentTarget.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setMessage(localMessage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:&nbsp;
        <input onChange={handleChange} type="text" value={localMessage} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}
