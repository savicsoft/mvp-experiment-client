import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useHeaderSearchBar } from './useHeaderSearchBar';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { MinusIcon, PlusIcon, PersonAddIcon } from '@/Icons';

export const HeaderSearchBar = () => {
  const {
    placeFrom,
    placeTo,
    passengers,
    date,
    totalPassengers,
    handleAddPassengers,
    handleChangePlaceFrom,
    handleChangePlaceTo,
    handleRemovePassengers,
    handleChangeDate,
    register,
    handleSubmit,
    onSubmit,
  } = useHeaderSearchBar();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form className='mx-6 border rounded-md border-[#231918] '>
        <div className='px-7 py-10 flex justify-between items-center'>
          <input
            type='text'
            placeholder='From'
            className='border rounded-md border-[#231918] px-2 py-4'
            {...register('placeFrom')}
            value={placeFrom}
            onChange={handleChangePlaceFrom}
          />
          <input
            type='text'
            placeholder='To'
            className='border rounded-md border-[#231918] px-2 py-4'
            {...register('placeTo')}
            value={placeTo}
            onChange={handleChangePlaceTo}
          />
          <DatePicker
            value={date}
            onChange={handleChangeDate}
            sx={{
              border: 1,
              borderColor: '#231918',
              borderRadius: 2,
            }}
          />
          <div className='relative w-[16.5rem] grid place-content-center border rounded-md border-[#231918] '>
            <InputLabel
              id='passengers'
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '16.5rem',
                position: 'absolute',
                top: 16,
                paddingInline: 1,
              }}
            >
              <span>Passengers: {totalPassengers}</span>
              <PersonAddIcon />
            </InputLabel>
            <Select
              className='absolute opacity-0'
              labelId='passengers'
              sx={{
                border: '1px solid #231918',
                borderRadius: '0.375rem',
                paddingInline: '0.5rem',
                width: '16.5rem',
              }}
            >
              <MenuItem
                sx={{ justifyContent: 'space-between', width: '16.5rem' }}
              >
                <div className=' flex flex-col font-robotoCondensed text-xl'>
                  Adult
                  <span className=' text-xs text-[#545F71]'>
                    Ages 18 and above
                  </span>
                </div>
                <div className='flex gap-5'>
                  <button
                    onClick={() => handleRemovePassengers('adults')}
                    disabled={passengers.adults === 0}
                  >
                    <MinusIcon />
                  </button>
                  <span>{passengers.adults}</span>
                  <button onClick={() => handleAddPassengers('adults')}>
                    <PlusIcon />
                  </button>
                </div>
              </MenuItem>
              <MenuItem
                sx={{ justifyContent: 'space-between', width: '16.5rem' }}
              >
                <div className='flex flex-col font-robotoCondensed text-xl'>
                  Children
                  <span className=' text-xs text-[#545F71]'>
                    Between 2 and 18
                  </span>
                </div>
                <div className='flex gap-5'>
                  <button
                    onClick={() => handleRemovePassengers('children')}
                    disabled={passengers.children === 0}
                  >
                    <MinusIcon />
                  </button>
                  <span>{passengers.children}</span>
                  <button onClick={() => handleAddPassengers('children')}>
                    <PlusIcon />
                  </button>
                </div>
              </MenuItem>
              <MenuItem
                sx={{ justifyContent: 'space-between', width: '16.5rem' }}
              >
                <div>Pets</div>
                <div className='flex gap-5'>
                  <button
                    onClick={() => handleRemovePassengers('pets')}
                    disabled={passengers.pets === 0}
                  >
                    <MinusIcon />
                  </button>
                  <span>{passengers.pets}</span>
                  <button onClick={() => handleAddPassengers('pets')}>
                    <PlusIcon />
                  </button>
                </div>
              </MenuItem>
            </Select>
          </div>
          <button
            className='rounded-md bg-[#F52B38] text-white text-3xl font-jomhuria h-14 w-48'
            onClick={handleSubmit(onSubmit)}
          >
            Search
          </button>
        </div>
      </form>
    </LocalizationProvider>
  );
};
