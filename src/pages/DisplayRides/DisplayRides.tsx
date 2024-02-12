import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDisplayRides } from './useDiplayRides';
import { PersonAddIcon } from '@/Icons/PersonAddIcon';
import { Ride } from './components';

export const DisplayRides = () => {
  const { date, handleChangeDate, ride } = useDisplayRides();
  return (
    <div>
      <div className='px-14 '>
        <img src='/images/display-rides.png' alt='' />
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form className='mx-6 border rounded-md border-[#231918] '>
          <div className='px-7 py-10 flex justify-between items-center'>
            <input
              placeholder='From'
              className='border rounded-md border-[#231918] px-2 py-4 m-w-64'
            />
            <input
              placeholder='To'
              className='border rounded-md border-[#231918] px-2 py-4 m-w-64'
            />
            <DatePicker value={date} onChange={handleChangeDate} />
            <label htmlFor='passanger'>
              <select
                name='passanger'
                className='border rounded-md border-[#231918] px-2 py-4 m-w-64'
              >
                <option>Adults</option>
                <option>Children</option>
                <option>Pets</option>
              </select>
              <PersonAddIcon />
            </label>
            <button className='rounded-md bg-[#F52B38] text-white text-3xl font-jomhuria h-14 w-48'>
              Search
            </button>
          </div>
        </form>
      </LocalizationProvider>
      <div>
        <div>left</div>
        <div>
          <Ride
            date={ride?.date}
            duration={ride?.duration}
            price={ride?.price}
            time={ride?.time}
            user={ride?.user}
          />
        </div>
      </div>
    </div>
  );
};
