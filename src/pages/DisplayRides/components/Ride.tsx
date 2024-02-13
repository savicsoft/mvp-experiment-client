import { RideTypes } from './RideTypes';
import { StarRating } from './StarRating';
export const Ride = ({
  date,
  duration,
  passangers,
  price,
  ride,
  time,
  user,
}: RideTypes) => {
  return (
    <div className='flex justify-between border rounded-md border-[#231918] py-7 pl-8 pr-5 w-[800px]'>
      <div>
        <div className='flex gap-9'>
          <img className='rounded-md' src='/images/ride.png' alt='ride' />
          <div className='flex flex-col'>
            <div className='flex  items-center gap-4'>
              {user?.image ? (
                <img
                  src={user.image}
                  alt='avatar'
                  className='z-10 h-16 w-16 object-cover object-center overflow-hidden rounded-full'
                />
              ) : (
                <div className='z-10 h-16 w-16 bg-rose-150 overflow-hidden rounded-full relative'>
                  <div className='absolute h-12 w-12 rounded-full border-2 border-red-550 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize font-bold text-xl text-red-550 flex justify-center items-center'>
                    {user?.name[0]}
                  </div>
                </div>
              )}
              <StarRating rating={user?.rating} />
            </div>
            <div>
              {user?.name} {user?.surname}
            </div>
            <div>
              <span className='font-bold'>Ride:</span> {ride?.fromPlace} -{' '}
              {ride?.toPlace}
            </div>
            <div>
              <span className='font-bold'>Date:</span>
              {date}
            </div>
            <div>
              <span className='font-bold'>Time:</span> {time?.startOfRide} -{' '}
              {time?.endOfRide}
            </div>
            <div>
              <span className='font-bold'>Duration of the ride:</span>
              {duration}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between border rounded-md border-[#231918]  p-3'>
        <span className='font-robotoCondensed text-2xl'>
          {ride?.fromPlace} - {ride?.toPlace}
        </span>
        <span className='font-robotoCondensed text-2xl'>
          {passangers} Adults
        </span>
        <span className='font-robotoCondensed text-5xl font-medium'>
          ${price}
        </span>
        <button className='rounded-md w-36 bg-[#F52B38] text-white text-3xl font-jomhuria'>
          Book
        </button>
      </div>
    </div>
  );
};
