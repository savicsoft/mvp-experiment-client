import { TextField } from '@mui/material';
import { InputType } from './type.d';
import { ErrorMessage } from '@hookform/error-message';
import { Controller } from 'react-hook-form';

export const Input = ({ name, placeholder, errors, control }: InputType) => {
  return (
    <div className='relative text-xl outline-black w-full'>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value || ''}
            id='outlined-basic'
            label={placeholder}
            variant='outlined'
            className='w-full'
            InputLabelProps={{
              className: errors[name] ? '!text-red-550' : '!text-black',
            }}
            InputProps={{
              className: ' !rounded-xl',
              classes: {
                focused: 'text-red-500 ',
                notchedOutline: `!border-2 ${
                  errors[name] ? '!border-red-550' : '!border-black'
                }`,
              },
            }}
          />
        )}
      />

      {errors[name] && (
        <img
          className='absolute right-2 top-1/2 -translate-y-1/2'
          alt='error in the input field'
          src='/images/field_error.png'
        />
      )}
      <span className='absolute left-0 bottom-0 translate-y-full text-sm text-red-550'>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </div>
  );
};
