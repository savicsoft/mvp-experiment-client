import { Control, FieldValues } from 'react-hook-form';

export type ProfileSelectType = {
  control: Control<FieldValues, any>;
  values: { value: string | number; key: string | number }[];
  name: string;
  title: string;
  defaultValue?: string | number;
};
