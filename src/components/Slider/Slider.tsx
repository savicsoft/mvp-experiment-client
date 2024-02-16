import { ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';
import { useState } from 'react';

export const Slider = ({ imgs }: { imgs: string[] }) => {
  const [cur, setCur] = useState(0);
  const { length } = imgs;

  return (
    <div className='relative'>
      <ArrowLeftIcon
        color='error'
        sx={{
          width: '48px',
          height: '48px',
        }}
        className='cursor-pointer absolute top-1/2 -left-2 transform -translate-y-1/2 -translate-x-full z-10 bg-rose-150 rounded-full'
        onClick={setCur.bind(null, cur - 1 < 0 ? length - 1 : cur - 1)}
      />
      <div className='overflow-hidden relative w-48 h-48 rounded-lg'>
        <div
          className='absolute w-full h-full flex transition-transform'
          style={{ transform: 'translateX(-' + cur * 100 + '%)' }}
        >
          {imgs.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={img}
              className='w-full h-full shrink-0 grow-0 object-cover object-center block'
            />
          ))}
        </div>
      </div>
      <ArrowRightIcon
        color='error'
        sx={{
          width: '48px',
          height: '48px',
        }}
        className='cursor-pointer absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full z-10 bg-rose-150 rounded-full'
        onClick={setCur.bind(null, (cur + 1) % length)}
      />
    </div>
  );
};
