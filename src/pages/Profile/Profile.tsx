import { RoundPlusIcon, PencilIcon, RatingStarIcon } from '@/Icons';
import { useProfile } from './useProfile';
import { Fragment } from 'react';

export const Profile = () => {
  const { user, completionLevel } = useProfile();
  return (
    <div className='mx-5  mb-40'>
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
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4 w-max bg-rose-150 hover:bg-rose-200 transition-colors rounded-xl px-4 py-1 flex gap-3 items-center text-lgfont-jomhuria font-bold'>
            {!user?.image ? (
              <Fragment>
                <span>Add Photo</span>
                <span>
                  <RoundPlusIcon />
                </span>
              </Fragment>
            ) : (
              <Fragment>
                <span>Edit</span>
                <span>
                  <PencilIcon />
                </span>
              </Fragment>
            )}
          </div>
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
            <div className='text-3xl w-max bg-rose-150 hover:bg-rose-200 transition-colors rounded-xl px-3 flex gap-8 items-center font-jomhuria'>
              <span className='pt-1'>Edit profile</span>
              <span>
                <RoundPlusIcon />
              </span>
            </div>
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
            value={user?.about || ''}
            // add onchange from use hook form
            className='w-full h-32 p-4 rounded-lg border-black border-2 focus:outline-none placeholder:text-stone-750 text-lg'
          />
        </div>

        <div className='mb-24'>
          <h1 className='text-3xl font-bold mb-4 capitalize'>
            Car information
          </h1>
          <h3 className='text-stone-750 text-lg mb-3'>
            Add information about your vehicle to be able to publish your rides{' '}
          </h3>

          <div className='text-3xl w-max bg-rose-150 hover:bg-rose-200 transition-colors rounded-xl px-3 flex gap-10 items-center font-jomhuria mb-20'>
            {!user?.car ? (
              <Fragment>
                <span className='pt-1'>Add info</span>
                <span>
                  <RoundPlusIcon />
                </span>
              </Fragment>
            ) : (
              <Fragment>
                <span className='pt-1'>update info</span>
                <span>
                  <PencilIcon />
                </span>
              </Fragment>
            )}
          </div>

          <button className='underline'>Log out</button>
        </div>
      </div>
    </div>
  );
};
