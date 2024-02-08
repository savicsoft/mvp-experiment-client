import { useState } from 'react';

export const useSignUp = () => {
  const [checkbox, setCheckbox] = useState(false);
  return { checkbox, setCheckbox };
};
