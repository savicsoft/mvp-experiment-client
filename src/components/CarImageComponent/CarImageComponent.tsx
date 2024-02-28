import { DeleteCarIcon } from '@/Icons';
import { CarImageComponentProps } from './type';

export const CarImageComponent = ({ car }: CarImageComponentProps) => {
  return (
    <div className='flex items-center flex-wrap gap-3'>
      {car?.photos.map((url) => (
        <div className='relative'>
          <img
            src={url}
            alt={url}
            key={url}
            className='w-24 h-24 object-cover rounded-xl border border-black'
          />
          <button className='bg-white w-4 h-4 absolute top-2 right-2 flex items-center justify-center rounded'>
            <DeleteCarIcon />
          </button>
        </div>
      ))}
    </div>
  );
};
