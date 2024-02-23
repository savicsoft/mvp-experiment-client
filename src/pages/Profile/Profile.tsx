import {
  RoundPlusIcon,
  PencilIcon,
  RatingStarIcon,
  CarIcon,
  GasIcon,
  ColorBucketIcon,
  GarbIcon,
} from '@/Icons';
import { useProfile } from './useProfile';
import { Fragment } from 'react';
import { Input, Modal, Button, Slider } from '@/components';
import {
  ArrowLeftIcon,
  DatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const {
    user,
    completionLevel,
    isEditProfileOpen,
    setIsEditProfileOpen,
    errors,
    register,
    handleSubmit,
    onSubmit,
    control,
  } = useProfile();

  return (
    <div className='mx-5 mb-40'>
      {isEditProfileOpen && (
        <Modal
          customCheckForOutsideClick={(classList: DOMTokenList) => {
            for (let i = 0; i < classList.length; i++) {
              if (classList[i].includes('Mui')) return false;
            }
            return true;
          }}
          isOpen={isEditProfileOpen}
          close={setIsEditProfileOpen.bind(null, false)}
          mainDivClassname='md:w-1/4 w-1/2 h-auto bg-white rounded-2xl overflow-hidden'
        >
          <div className='w-full h-full flex p-8 flex-col'>
            <h1 className='text-3xl font-bold capitalize mb-10'>
              Personal Information
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-7'
            >
              <Input
                errors={errors}
                register={register('firstname', { value: user?.name })}
                name='firstname'
                placeholder='First name'
                control={control}
              />
              <Input
                errors={errors}
                register={register('lastname', { value: user?.surname })}
                name='lastname'
                placeholder='Last name'
                control={control}
              />
              <div className='flex gap-4 w-full items-center'>
                <Controller
                  name='country'
                  control={control}
                  defaultValue={user?.country || 'usa'}
                  render={({ field: { onChange, value } }) => (
                    <FormControl className='basis-2/5'>
                      <InputLabel className='-ml-2 z-10 bg-white !px-1 block !text-black'>
                        Country
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
                          borderWidth: '2px',
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'black',
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
                        <MenuItem value='usa'>USA</MenuItem>
                        <MenuItem value='uk'>UK</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <Input
                  control={control}
                  errors={errors}
                  register={register('phone_number', { value: user?.phone })}
                  name='phone_number'
                  placeholder='Phone number'
                />
              </div>
              <Controller
                name='birth_date'
                control={control}
                defaultValue={dayjs(user?.birthdate)}
                render={({ field: { onChange, value, ref } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      ref={ref}
                      onChange={onChange}
                      value={value ?? dayjs()}
                      label='Date of birth'
                      sx={{
                        '& fieldset': {
                          border: '2px solid black',
                          ':hover': '2px solid black',
                          borderRadius: '12px',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          {
                            border: '2px solid black',
                          },
                      }}
                      slotProps={{
                        textField: {
                          InputLabelProps: {
                            className: '!text-black',
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                )}
              />

              <Controller
                control={control}
                name='gender'
                defaultValue={user?.gender}
                render={({ field: { value, onChange } }) => (
                  <FormControl>
                    <FormLabel
                      id='demo-radio-buttons-group-label'
                      className='!text-black  !text-xl'
                    >
                      Gender
                    </FormLabel>
                    <RadioGroup value={value || ''} onChange={onChange} row>
                      <FormControlLabel
                        value='male'
                        control={
                          <Radio
                            sx={{
                              color: 'black',
                              '&.Mui-checked': {
                                color: 'black',
                              },
                            }}
                          />
                        }
                        label='Male'
                      />
                      <FormControlLabel
                        value='female'
                        control={
                          <Radio
                            sx={{
                              color: 'black',
                              '&.Mui-checked': {
                                color: 'black',
                              },
                            }}
                          />
                        }
                        label='Female'
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              />
              <Button
                type='submit'
                className='font-jomhuria text-center w-full gap-10 font-light cursor-pointer pt-1 px-4 outline-none rounded-2xl bg-[#F52B38] text-4xl text-white bg-opacity-90 hover:bg-opacity-100 transition-opacity'
              >
                Save
              </Button>
            </form>
          </div>
        </Modal>
      )}

      <div className='w-full h-full mx-auto rounded relative mb-40'>
        <img
          src='/images/profile-banner.png'
          alt='profile banner'
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full'>
          {user?.image ? (
            <img
              src={user.image}
              alt='avatar'
              className='z-10 h-48 w-48 object-cover object-center overflow-hidden rounded-full'
            />
          ) : (
            <div className='z-10 h-48 w-48 bg-rose-150 overflow-hidden rounded-full relative'>
              <div className='absolute h-12 w-12 rounded-full border-2 border-red-550 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize font-bold text-xl text-red-550 flex justify-center items-center'>
                {user?.name[0]}
              </div>
            </div>
          )}
          <button className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4 w-max bg-rose-150 hover:bg-rose-200 transition-colors rounded-xl px-4 flex gap-3 items-center font-jomhuria  text-3xl'>
            {!user?.image ? (
              <Fragment>
                <span className='pt-1'>Add Photo</span>
                <span>
                  <RoundPlusIcon />
                </span>
              </Fragment>
            ) : (
              <Fragment>
                <span className='pt-1'>Edit</span>
                <span>
                  <PencilIcon />
                </span>
              </Fragment>
            )}
          </button>
        </div>
      </div>
      <div className='mx-auto w-172 mb-10'>
        <h1 className='font-bold text-4xl capitalize mb-6 text-center'>
          {user?.name} {user?.surname}
        </h1>

        {user?.rating && (
          <h3 className='flex justify-center gap-3 mb-3'>
            <RatingStarIcon /> {user.rating}/5
          </h3>
        )}

        <h3 className='text-stone-750 mb-8 text-center'>{user?.email}</h3>

        {completionLevel < 5 && (
          <span className='text-stone-650 text-xl mb-8 block'>
            Complete your profile to get the most from our service
          </span>
        )}

        <div className='flex justify-between font-medium'>
          <div className='mb-20'>
            <h1 className='text-3xl font-bold mb-4 capitalize'>
              Personal information
            </h1>
            {(user?.name || user?.surname) && (
              <h3 className='text-stone-750 text-lg mb-2'>
                Name: {user?.name} {user?.surname}
              </h3>
            )}
            {user?.email && (
              <h3 className='text-stone-750 text-lg mb-2'>
                Email: {user.email}
              </h3>
            )}
            {user?.phone && (
              <h3 className='text-stone-750 text-lg mb-2'>
                Phone number: {user.phone}
              </h3>
            )}
            {user?.birthdate && (
              <h3 className='text-stone-750 text-lg mb-2'>
                Date of birth: {user.birthdate}
              </h3>
            )}
            {user?.gender && (
              <h3 className='text-stone-750 text-lg mb-4'>
                Gender: {user.gender}
              </h3>
            )}
            <button
              onClick={setIsEditProfileOpen.bind(null, true)}
              className='text-3xl w-max bg-rose-150 hover:bg-rose-200 transition-colors rounded-xl px-3 flex gap-8 items-center font-jomhuria'
            >
              <span className='pt-1'>Edit profile</span>
              <span>
                <RoundPlusIcon />
              </span>
            </button>
          </div>

          <div
            data-before={`${completionLevel}/5`}
            className='relative bg-conic-gradient-progress-bar h-18 w-18 rounded-full before:absolute before:top-1/2 
        before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-16 before:h-16 before:bg-white before:z-10 before:rounded-full before:content-[attr(data-before)] 
        before:flex before:justify-center before:items-center before:text-slate-650'
            style={
              {
                '--progress-deg': (completionLevel / 5) * 360 + 'deg',
              } as React.CSSProperties
            }
          />
        </div>

        <div className='mb-24'>
          <h1 className='text-3xl font-bold mb-4 capitalize'>About you</h1>
          <textarea
            placeholder='You could add some information you want to share with other members'
            // value={user?.about || ''}
            // add onchange from use hook form
            className='w-full h-32 p-4 rounded-lg border-black border-2 focus:outline-none placeholder:text-stone-750 text-lg'
          />
        </div>

        <div className='mb-24'>
          <h1 className='text-3xl font-bold mb-4 capitalize'>
            Car information
          </h1>
          {!user?.car ? (
            <h3 className='text-stone-750 text-lg mb-3'>
              Add information about your vehicle to be able to publish your
              rides{' '}
            </h3>
          ) : (
            <div className='flex bordper-2 border-black rounded-xl items-center justify-between gap-20 py-4 px-6 mb-10'>
              <div className='ml-10 '>
                <Slider imgs={user?.car?.photos || []} />
              </div>
              <div className='flex flex-1 justify-between'>
                <div>
                  {' '}
                  <h3 className='flex gap-1 mb-2 text-lg'>
                    <CarIcon /> <span className='font-bold ml-3'>Number:</span>{' '}
                    <span>{user?.car.registration_number}</span>
                  </h3>
                  <h3 className='flex gap-1 mb-2 text-lg'>
                    <CarIcon /> <span className='font-bold ml-3'>Model:</span>{' '}
                    <span>{user?.car.model}</span>
                  </h3>
                  <h3 className='flex gap-1 mb-2 text-lg'>
                    <CarIcon /> <span className='font-bold ml-3'>Year:</span>{' '}
                    <span>{user?.car.year}</span>
                  </h3>
                  <h3 className='flex gap-1 mb-2 text-lg'>
                    <CarIcon />{' '}
                    <span className='font-bold ml-3'>Body Style:</span>{' '}
                    <span>{user?.car.registration_number}</span>
                  </h3>
                  <h3 className='flex gap-1 mb-2 text-lg'>
                    <GasIcon />{' '}
                    <span className='font-bold ml-3'>Gas Type:</span>{' '}
                    <span>{user?.car.gas_type}</span>
                  </h3>
                  <h3 className='flex gap-1 mb-2 text-lg'>
                    <GasIcon />{' '}
                    <span className='font-bold ml-3'>Fuel Effieciency:</span>{' '}
                    <span>{user?.car.fuel_efficiency}</span>
                  </h3>
                  <h3 className='flex gap-1 mb-2 text-lg'>
                    <ColorBucketIcon />{' '}
                    <span className='font-bold ml-3'>Color:</span>{' '}
                    <span>{user?.car.color}</span>
                  </h3>
                </div>
                <button className='bg-rose-150 p-2 w-fit h-fit rounded-full'>
                  <GarbIcon />
                </button>
              </div>
            </div>
          )}

          <button className='text-3xl w-max bg-rose-150 hover:bg-rose-200 transition-colors rounded-xl px-3 flex gap-10 items-center font-jomhuria mb-20'>
            {!user?.car ? (
              <Fragment>
                <span className='pt-1'>Add info</span>
                <span>
                  <RoundPlusIcon />
                </span>
              </Fragment>
            ) : (
              <Link to='/profile/car' className='flex items-center gap-4 '>
                <span className='pt-1'>update info</span>
                <span>
                  <PencilIcon />
                </span>
              </Link>
            )}
          </button>

          <button className='underline'>Log out</button>
        </div>
      </div>
    </div>
  );
};
