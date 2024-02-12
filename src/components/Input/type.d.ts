import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetFieldState,
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
  control: Control<FieldValues, any>;
};

export type useInputType = {
  shouldHide: boolean;
  type: string;
  getFieldState: UseFormGetFieldState<FieldValues>;
  name: string;
  control: Control<FieldValues, any>;
};
