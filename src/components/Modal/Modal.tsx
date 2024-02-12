import { useModal } from './useModal';

type ModalProps = {
  isOpen: boolean;
  children: JSX.Element;
  close: () => void;
  mainDivClassname: string;
  customCheckForOutsideClick: (classList: DOMTokenList) => boolean | undefined;
};

export const Modal = ({
  isOpen,
  children,
  close,
  mainDivClassname,
  customCheckForOutsideClick,
}: ModalProps) => {
  const { ref } = useModal(close, customCheckForOutsideClick);

  return (
    <dialog open={isOpen}>
      <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-20 z-50 flex justify-center items-center'></div>
      <div className='fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center'>
        <div
          className={'flex justify-center items-center ' + mainDivClassname}
          ref={ref}
        >
          {children}
        </div>
      </div>
    </dialog>
  );
};
