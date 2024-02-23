import { Control, FieldValues } from 'react-hook-form';

export type ProfileSelectType = {
  control: Control<FieldValues, any>;
  defaultVal?: string;
  values: { value: string; key: string }[];
  name: string;
  title: string;
};
