import { PersonAddIcon } from '@/Icons/PersonAddIcon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useHeaderSearchBar } from './useHeaderSearchBar';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { MinusIcon } from '@/Icons/MinusIcon';
import { PlusIcon } from '@/Icons/PlusIcon';

export const HeaderSearchBar = () => {
  const {
    placeFrom,
    placeTo,
    passangers,
    date,
    totalPassangers,
    handleAddPassangers,
    handleChangePlaceFrom,
    handleChangePlaceTo,
    handleRemovePassangers,
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
          <DatePicker value={date} onChange={handleChangeDate} />

          <InputLabel
            id='passangers'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '16.5rem',
            }}
          >
            <span>Passangers: {totalPassangers}</span>
            <PersonAddIcon />
          </InputLabel>
          <Select
            labelId='passangers'
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
                <button onClick={() => handleRemovePassangers('adults')}>
                  <MinusIcon />
                </button>
                <span>{passangers.adults}</span>
                <button onClick={() => handleAddPassangers('adults')}>
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
                <button onClick={() => handleRemovePassangers('children')}>
                  <MinusIcon />
                </button>
                <span>{passangers.children}</span>
                <button onClick={() => handleAddPassangers('children')}>
                  <PlusIcon />
                </button>
              </div>
            </MenuItem>
            <MenuItem
              sx={{ justifyContent: 'space-between', width: '16.5rem' }}
            >
              <div>Pets</div>
              <div className='flex gap-5'>
                <button onClick={() => handleRemovePassangers('pets')}>
                  <MinusIcon />
                </button>
                <span>{passangers.pets}</span>
                <button onClick={() => handleAddPassangers('pets')}>
                  <PlusIcon />
                </button>
              </div>
            </MenuItem>
          </Select>
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
