import { InputType } from './type';

export const Input = ({
  name,
  title,
  placeholder,
  type,
  classNames,
  value,
}: InputType) => {
  return (
    <div>
      {title && <label htmlFor={name}>{title}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={classNames}
      />
    </div>
  );
};
