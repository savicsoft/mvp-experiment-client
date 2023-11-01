import { InputType } from './type';

export const Input = ({
  name,
  title,
  placeholder,
  type,
  classNames,
  value,
  register,
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
    </div>
  );
};
