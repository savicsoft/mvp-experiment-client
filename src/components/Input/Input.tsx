import { InputType } from '@/components/Input';
import { ErrorMessage } from '@hookform/error-message';

export const Input = ({
  name,
  title,
  placeholder,
  type = 'text',
  classNames,
  value,
  register,
  errors,
}: InputType) => {
  return (
    <div>
      {title && <label htmlFor={name}>{title}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={classNames}
        {...register}
      />
      <span>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </div>
  );
};
