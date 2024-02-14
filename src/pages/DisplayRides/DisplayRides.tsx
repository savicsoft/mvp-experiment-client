import { useDisplayRides } from './useDiplayRides';
import { Ride } from './components';
import { ChavronDownIcon } from '@/Icons/ChavronDownIcon';
import { HeaderSearchBar } from '@/components/HeaderSearchBar/HeaderSearchBar';

export const DisplayRides = () => {
  const { ride, isActive, handleActive } = useDisplayRides();
  return (
    <div>
      <div className='px-14 '>
        <img src='/images/display-rides.png' alt='' />
      </div>
      <HeaderSearchBar />
      <div className='flex justify-between px-7 font-robotoCondensed text-xl mt-16 '>
        <div className='w-96'>
          <p className=' uppercase font-bold font-robotoCondensed text-3xl pb-10 border-b border-b-black'>
            sort by
          </p>
          <div className='flex justify-between mt-5 ' onClick={handleActive}>
            Popular
            <span className={isActive ? 'rotate-180' : 'rotate-90'}>
              <ChavronDownIcon />
            </span>
          </div>
          <div className='border-b border-black pb-5 '>
            {isActive ? (
              <>
                <div className='flex flex-col gap-5 mt-10'>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      className=' w-5 h-5 accent-[#F52B38] mr-6'
                    />
                    Rising price
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      className=' w-5 h-5 accent-[#F52B38] mr-6'
                    />
                    Faling price
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      className=' w-5 h-5 accent-[#F52B38] mr-6'
                    />
                    Time
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      className=' w-5 h-5 accent-[#F52B38] mr-6'
                    />
                    Duration of the ride
                  </label>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
          <div className='flex justify-between mt-5  ' onClick={handleActive}>
            Distance:
            <span className={isActive ? 'rotate-180' : 'rotate-90'}>
              <ChavronDownIcon />
            </span>
          </div>
          <div>
            {isActive ? (
              <>
                <div className='flex flex-col gap-5 mt-10  pb-5 border-b border-black'>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      className=' w-5 h-5 accent-[#F52B38] mr-6'
                    />
                    From the starting point
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='checkbox'
                      className=' w-5 h-5 accent-[#F52B38] mr-6'
                    />
                    From the ending point
                  </label>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
          <p className=' mt-10 uppercase font-bold font-robotoCondensed text-3xl pb-10 border-b border-b-black'>
            filters
          </p>
          <div
            className='flex justify-between mt-5  border-b border-b-black pb-5 '
            onClick={handleActive}
          >
            Price Range:
            <span className={isActive ? 'rotate-180' : 'rotate-90'}>
              <ChavronDownIcon />
            </span>
          </div>
          <div
            className='flex justify-between mt-5  border-b border-b-black pb-5 '
            onClick={handleActive}
          >
            Car information:
            <span className={isActive ? 'rotate-180' : 'rotate-90'}>
              <ChavronDownIcon />
            </span>
          </div>
          <button className='h-14 mt-10 w-full rounded-md bg-[#F52B38] text-white font-jomhuria text-3xl'>
            Search
          </button>
        </div>
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
