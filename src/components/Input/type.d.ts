import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

export type InputType = {
  name: string;
  title?: string;
  placeholder?: string;
  type?: string;
  classNames?: string;
  value?: string;
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors<FieldValues>;
};
