import { Input } from '@/components';
import { useProfileCar } from './useProfileCar';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';

export const ProfileCar = () => {
  const { control, errors, handleSubmit, register, user } = useProfileCar();

  return (
    <div className='mx-6 '>
      <h3 className='text-stone-650 text-lg font-thin my-12'>
        Profile / Car Information
      </h3>
      <div className='max-w-[1275px] mx-auto'>
        <h1 className='text-4xl font-bold tracking-tight mb-6'>
          Car Information
        </h1>
        <div className='flex gap-40 '>
          <div className='flex basis-[600px] flex-col gap-10'>
            <Input
              control={control}
              errors={errors}
              name='registration_number'
              register={register('registration_number')}
              placeholder='Registration Number'
            />
            <div className='flex gap-6'>
              <Input
                control={control}
                errors={errors}
                name='brand'
                register={register('brand')}
                placeholder='Brand'
              />
              <Input
                control={control}
                errors={errors}
                name='model'
                register={register('model')}
                placeholder='Model'
              />
            </div>
            <Input
              control={control}
              errors={errors}
              name='year'
              register={register('year')}
              placeholder='year'
            />

            <Controller
              name='body_style'
              control={control}
              defaultValue={user?.car?.body_style || ''}
              render={({ field: { onChange, value } }) => (
                <FormControl>
                  <InputLabel className='-ml-2 z-10 bg-white !px-1 block !text-black'>
                    Body Style
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
                      <div className='relative pointer-events-none'>
                        <ArrowLeftIcon className='absolute -left-1 -bottom-1.5 rotate-90 -translate-x-full !w-5 !h-5' />
                        <ArrowLeftIcon className='absolute -left-1 -top-1.5 -rotate-90 -translate-x-full !w-5 !h-5' />
                      </div>
                    )}
                    value={value}
                  >
                    <MenuItem value='style1'>style1</MenuItem>
                    <MenuItem value='style2'>style2</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name='gas_type'
              control={control}
              defaultValue={user?.car?.gas_type || ''}
              render={({ field: { onChange, value } }) => (
                <FormControl>
                  <InputLabel className='-ml-2 z-10 bg-white !px-1 block !text-black'>
                    Gas type
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
                      <div className='relative pointer-events-none'>
                        <ArrowLeftIcon className='absolute -left-1 -bottom-1.5 rotate-90 -translate-x-full !w-5 !h-5' />
                        <ArrowLeftIcon className='absolute -left-1 -top-1.5 -rotate-90 -translate-x-full !w-5 !h-5' />
                      </div>
                    )}
                    value={value}
                  >
                    <MenuItem value='type1'>type1</MenuItem>
                    <MenuItem value='type2'>type2</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name='fuel_effieciency'
              control={control}
              defaultValue={user?.car?.fuel_efficiency}
              render={({ field: { onChange, value } }) => (
                <FormControl>
                  <InputLabel className='-ml-2 z-10 bg-white !px-1 block !text-black'>
                    Fuel Efficiency
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
                      <div className='relative pointer-events-none'>
                        <ArrowLeftIcon className='absolute -left-1 -bottom-1.5 rotate-90 -translate-x-full !w-5 !h-5' />
                        <ArrowLeftIcon className='absolute -left-1 -top-1.5 -rotate-90 -translate-x-full !w-5 !h-5' />
                      </div>
                    )}
                    value={value}
                  >
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='2'>2</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </div>
          <div className=' h-full'>
            <img
              src='/images/profile-car-page.png'
              alt='profile default car'
              className='w-full h-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
