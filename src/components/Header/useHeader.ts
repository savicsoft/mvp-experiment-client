import { useState } from 'react';

export const useHeader = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => setIsActive(!isActive);

  const handlePublishARide = () => {
    console.log('publish a ride');
  };

  return { isActive, handleActive, handlePublishARide };
};
