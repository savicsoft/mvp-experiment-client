import { Input } from '@/components';
import { useProfileCar } from './useProfileCar';

export const ProfileCar = () => {
  const { control, errors, handleSubmit, register } = useProfileCar();

  return (
    <div className='mx-6 '>
      <h3 className='text-stone-650 text-lg font-thin my-12'>
        Profile / Car Information
      </h3>
      <div className='max-w-[1275px] mx-auto'>
        <h1 className='text-4xl font-bold tracking-tight mb-6'>
          Car Information
        </h1>
        <div className='flex gap-52 '>
          <div className='flex basis-[600px] flex-col gap-6'>
            <Input
              control={control}
              errors={errors}
              name='body_style'
              register={register('body_style')}
              title='tit'
              placeholder='tot'
            />
            <Input
              control={control}
              errors={errors}
              name='body_style'
              register={register('body_style')}
              title='tit'
              placeholder='tot'
            />
            <Input
              control={control}
              errors={errors}
              name='body_style'
              register={register('body_style')}
              title='tit'
              placeholder='tot'
            />
            <Input
              control={control}
              errors={errors}
              name='body_style'
              register={register('body_style')}
              title='tit'
              placeholder='tot'
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
