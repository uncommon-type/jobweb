import { useState, useEffect } from 'react';

export const useCharacterCountdown = (maxLength, defaultValue) => {
  const [input, setInput] = useState(defaultValue);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`${maxLength - input?.length} characters left`);
  }, [input]);

  return {
    input,
    setInput,
    message,
  };
};
