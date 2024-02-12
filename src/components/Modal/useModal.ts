import { useEffect, useRef } from 'react';

export const useModal = (
  close: () => void,
  customCheck: (classList: DOMTokenList) => boolean | undefined = () =>
    undefined,
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeModal(event: MouseEvent) {
      const { classList } = event.target as Element;
      let additionalCheck = customCheck(classList) !== false ? true : false;

      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        additionalCheck
      ) {
        close();
      }
    }

    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [ref, close, customCheck]);

  return {
    ref,
  };
};
