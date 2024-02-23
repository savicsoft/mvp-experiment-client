import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import { ProfileSelectType } from './type';

export const ProfileSelect = ({
  control,
  values,
  name,
  title,
}: ProfileSelectType) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl>
          <InputLabel className='-ml-2 z-10 bg-white !px-1 block !text-black'>
            {title}
          </InputLabel>
          <Select
            onChange={onChange}
            MenuProps={{
              disableScrollLock: true,
            }}
            sx={{
              color: 'black',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
                borderWidth: '2px',
                borderRadius: '12px',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
                borderWidth: '2px',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
                borderWidth: '2px',
              },
              '.MuiSvgIcon-root ': {
                fill: 'black !important',
              },
            }}
            inputProps={{
              classes: {
                icon: 'fill-black',
              },
            }}
            IconComponent={() => (
              <div className='relative pointer-events-none pl-2'>
                <ArrowLeftIcon className='absolute -left-1 -bottom-1 rotate-90 -translate-x-full !w-5 !h-5' />
                <ArrowLeftIcon className='absolute -left-1 -top-1.5 -rotate-90 -translate-x-full !w-5 !h-5' />
              </div>
            )}
            value={value}
          >
            {values.map(({ value, key }) => (
              <MenuItem key={key} value={value}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
