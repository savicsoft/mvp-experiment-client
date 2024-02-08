import { useState } from 'react';

export const useRevealPass = () => {
  const [revPass, setRevPass] = useState(false);

  return { revPass, setRevPass };
};
