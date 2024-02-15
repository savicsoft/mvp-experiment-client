import { PersonAddIcon } from '@/Icons/PersonAddIcon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useHeaderSearchBar } from './useHeaderSearchBar';

export const HeaderSearchBar = () => {
  const { date, handleChangeDate, register, handleSubmit, onSubmit } =
    useHeaderSearchBar();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form className='mx-6 border rounded-md border-[#231918] '>
        <div className='px-7 py-10 flex justify-between items-center'>
          <input
            type='text'
            placeholder='From'
            className='border rounded-md border-[#231918] px-2 py-4'
            {...register('placeFrom')}
          />
          <input
            type='text'
            placeholder='To'
            className='border rounded-md border-[#231918] px-2 py-4'
            {...register('placeTo')}
          />
          <DatePicker value={date} onChange={handleChangeDate} />
          <label htmlFor='passengers'>
            <select
              name='passengers'
              className='border rounded-md border-[#231918] px-2 py-4 m-w-64'
            >
              <option>Adults</option>
              <option>Children</option>
              <option>Pets</option>
            </select>
            <PersonAddIcon />
          </label>
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
