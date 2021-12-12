import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

// @ts-ignore
import { useMessageContext } from 'shared_lib/MessageContext';

export function FederatedForm() {
  const { message, setMessage } = useMessageContext();
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
