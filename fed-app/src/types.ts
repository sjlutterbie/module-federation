import { Context, Dispatch, SetStateAction } from 'react';

export type MessageContextType = Context<{
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}>;
