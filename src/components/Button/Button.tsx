import { IButton } from './type';

export const Button = ({
  className,
  children,
  isLoading,
  ...rest
}: IButton) => {
  return (
    <button type='button' className={className} {...rest} disabled={isLoading}>
      {children}
    </button>
  );
};
