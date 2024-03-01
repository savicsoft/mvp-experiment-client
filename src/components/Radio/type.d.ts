import { ReactElement } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export type RadioButtonGroupType = {
  control: Control<FieldValues, any>;
  values: {
    value: string | number;
    name?: string | number;
  }[];
  name: string;
  title?: string;
  defaultValue?: string | number;
  RadioCheckedIcon?: ReactElement;
  RadioUncheckedIcon?: ReactElement;
};
