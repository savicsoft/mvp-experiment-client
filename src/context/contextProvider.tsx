import { useState } from 'react';

export const contextProvider = () => {
  const [token, setToken] = useState(null);

  return token;
};
