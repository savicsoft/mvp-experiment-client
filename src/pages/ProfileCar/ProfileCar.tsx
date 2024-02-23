import { Input, ProfileSelect } from '@/components';
import { useProfileCar } from './useProfileCar';
import { Link } from 'react-router-dom';

export const ProfileCar = () => {
  const { control, errors, handleSubmit, register, finalData } =
    useProfileCar();

  return (
    <div className='mx-6 '>
      <h3 className='text-stone-650 text-lg font-thin my-12'>
        <Link to='/profile'>Profile</Link> / Car Information
      </h3>
      <div className='max-w-[1275px] mx-auto'>
        <h1 className='text-4xl font-bold tracking-tight mb-6'>
          Car Information
        </h1>
        <div className='flex gap-40 '>
          <div className='flex basis-[600px] flex-col gap-10'>
            <Input
              control={control}
              errors={errors}
              name='registration_number'
              register={register('registration_number', {
                value: finalData?.car?.registration_number,
              })}
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
              defaultVal={finalData?.car?.body_style}
              name='body_style'
              title='Body style'
            />
            <ProfileSelect
              control={control}
              values={[
                { value: 'first', key: 'first type' },
                { value: 'second', key: 'second type' },
              ]}
              defaultVal={finalData?.car?.gas_type}
              name='gas_type'
              title='Gas type'
            />
            <ProfileSelect
              control={control}
              values={[
                { value: '1', key: 'one' },
                { value: '2', key: 'two' },
              ]}
              defaultVal={finalData?.car?.fuel_efficiency}
              name='fuel_efficiency'
              title='Fuel efficiency'
            />
          </div>
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
