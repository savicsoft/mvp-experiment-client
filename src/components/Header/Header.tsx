import { Button } from '@/components';
import { Link } from 'react-router-dom';
import { useHeader } from './useHeader';
import { DownIcon, PersonIcon, RoundPlusIcon } from '@/Icons';

export const Header = () => {
  const { isActive, handleActive, handlePublishARide } = useHeader();
  return (
    <header className='flex justify-between px-5 py-4 text-3xl '>
      <img src='/images/Name.png' alt='logo' />
      <div className='flex gap-5 relative'>
        <Button
          onClick={handlePublishARide}
          className={
            ' font-jomhuria flex justify-center items-center gap-10 font-bold cursor-pointer p-3 outline-none rounded-2xl bg-[#FFDAD5] btn-header-lg'
          }
        >
          Publish a ride
          <span>
            <RoundPlusIcon />
          </span>
        </Button>
        <Button
          className={
            'flex justify-center items-center gap-3 font-bold cursor-pointer p-3 outline-none rounded-2xl bg-[#FFDAD5]'
          }
          onClick={handleActive}
        >
          <PersonIcon />
          {isActive ? (
            <>
              <DownIcon className='rotate-90' />
            </>
          ) : (
            <DownIcon />
          )}
        </Button>
        {isActive ? (
          <div className=' font-robotoCondensed flex flex-col absolute right-0 top-16'>
            <Link
              className='m-0 pl-4 py-6 bg-[#FFF8F7] w-96 hover:bg-[#FFDAD5]'
              to='/login'
            >
              Sign In
            </Link>
            <Link
              className='m-0 pl-4 py-6 rounded-bl-2xl bg-[#FFF8F7] w-96 hover:bg-[#FFDAD5]'
              to='/signup'
            >
              Sign Up
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};
