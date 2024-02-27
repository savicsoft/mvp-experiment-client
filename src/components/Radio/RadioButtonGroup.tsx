import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { RadioButtonGroupType } from './type';

export const RadioButtonGroup = ({
  control,
  name,
  title,
  values,
  defaultValue,
  RadioCheckedIcon,
  RadioUncheckedIcon,
}: RadioButtonGroupType) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <FormControl>
          {title && (
            <FormLabel
              id='demo-radio-buttons-group-label'
              className='!text-black !text-xl'
            >
              {title}
            </FormLabel>
          )}
          <RadioGroup value={value || ''} onChange={onChange} row>
            {values.map(({ name, value }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={
                  <Radio
                    icon={RadioCheckedIcon}
                    checkedIcon={RadioUncheckedIcon}
                    sx={{
                      color: 'black',
                      '&.Mui-checked': {
                        color: 'black',
                      },
                    }}
                  />
                }
                label={name || ''}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
