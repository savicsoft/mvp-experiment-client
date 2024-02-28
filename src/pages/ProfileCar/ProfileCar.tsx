import { Input, ProfileSelect, RadioButtonGroup } from '@/components';
import { useProfileCar } from './useProfileCar';
import { Link } from 'react-router-dom';
import { carColors } from '@/config';

export const ProfileCar = () => {
  const { control, errors, handleSubmit, register, onSubmit, car } =
    useProfileCar();

  return (
    <div className='mx-6 mb-20'>
      <h3 className='text-stone-650 text-lg font-thin my-12'>
        <Link to='/profile'>Profile</Link> / Car Information
      </h3>
      <div className='max-w-[1275px] mx-auto'>
        <h1 className='text-4xl font-bold tracking-tight mb-6'>
          Car Information
        </h1>
        <div className='flex gap-40 '>
          <form
            className='flex basis-[600px] flex-col gap-10'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              control={control}
              errors={errors}
              name='registration_number'
              register={register('registration_number')}
              placeholder='Registration Number'
            />
            <div className='flex gap-6'>
              <Input
                control={control}
                errors={errors}
                name='brand'
                register={register('brand')}
                placeholder='Brand'
              />
              <Input
                control={control}
                errors={errors}
                name='model'
                register={register('model')}
                placeholder='Model'
              />
            </div>
            <Input
              control={control}
              errors={errors}
              name='year'
              register={register('year')}
              placeholder='year'
            />
            <ProfileSelect
              control={control}
              values={[
                { value: 'first', key: 'fist style' },
                { value: 'second', key: 'second style' },
              ]}
              name='body_style'
              title='Body style'
            />
            <ProfileSelect
              control={control}
              values={[
                { value: 'first', key: 'first type' },
                { value: 'second', key: 'second type' },
              ]}
              name='gas_type'
              title='Gas type'
            />
            <ProfileSelect
              control={control}
              values={[
                { value: '1', key: 'one' },
                { value: '2', key: 'two' },
              ]}
              name='fuel_efficiency'
              title='Fuel efficiency'
            />
            <div>
              <h2 className='text-stone-650 text-xl font-medium'>Color</h2>
              {carColors.map((color) => (
                <RadioButtonGroup
                  control={control}
                  name='color'
                  values={[{ value: color }]}
                  RadioCheckedIcon={
                    <button
                      className={`w-9 h-9 rounded-full ${color} border-gray-300 border`}
                      key={color}
                    />
                  }
                  RadioUncheckedIcon={
                    <button
                      className={`w-9 h-9 rounded-full ${color} border-stone-600 border-4 bg-opacity-80`}
                      key={color}
                    />
                  }
                />
              ))}
            </div>
            <div className='text-[#231918]'>
              {car?.photos ? (
                <div>
                  <h3 className='text-2xl'>Photos</h3>
                </div>
              ) : (
                <div className='flex gap-8'>
                  <div>
                    <h3 className='text-2xl'>Photos</h3>
                    <p className='text-lg'>Up to 5</p>
                  </div>
                  <button className='flex justify-center items-center px-16 py-12   border border-[#231918] rounded'>
                    <img src='/images/camera.png' alt='camera' />
                  </button>
                </div>
              )}
            </div>
          </form>
          <div className=' h-full'>
            <img
              src='/images/profile-car-page.png'
              alt='profile default car'
              className='w-full h-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
