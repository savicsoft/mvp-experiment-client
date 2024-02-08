import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/schema';
import { InputsType } from '@/types';
import { Button, Header, TwinElements, TwinPassInput } from '@/components';
import { useSignUp } from './useSignUp';

export const SignUp = () => {
  const { checkbox, setCheckbox } = useSignUp();

  const form = useForm<InputsType>({
    mode: 'onSubmit',
    resolver: zodResolver(signUpSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  return (
    <>
      <Header />
      <div className='main-container flex justify-center'>
        <div className='mid-container flex w-10/12 gap-20 max-lg:flex-col mt-40 justify-center items-center'>
          <div className='left-container w-full flex justify-center items-center max-lg:order-2'>
            <img src='public\images\friends-in-car.png' alt='friends-in-car' />
          </div>
          <div className='right-container w-full flex flex-col justify-center'>
            <h1 className='text-5xl font-bold mb-5 text-center'>Sing Up</h1>
            <p className='mb-3'>
              Join over 3 million people using YouGo and share your ride to get
              to your destination. No commitment. No credit card needed.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TwinElements
                firstElement={
                  <>
                    <input
                      {...register('firstName')}
                      placeholder={'First Name'}
                      className='text-black w-full rounded-lg border border-black p-4 mb-3'
                    />
                    <p>{errors.firstName?.message}</p>
                  </>
                }
                secondElement={
                  <>
                    {' '}
                    <input
                      {...register('lastName')}
                      placeholder={'Last Name'}
                      className='text-black w-full rounded-lg border border-black p-4 mb-3'
                    />
                    <p>{errors.lastName?.message}</p>
                  </>
                }
              />
              <div className='email'>
                <img src='' alt='' />
                <input
                  {...register('email')}
                  placeholder={'Email Address'}
                  className='indent-5 text-black w-full rounded-lg border border-black p-4 mb-3'
                />
              </div>
              <p>{errors.email?.message}</p>
              <TwinPassInput />
              <input
                type='checkbox'
                className='size-5 mb-5 mr-5'
                onChange={() => setCheckbox(!checkbox)}
              />
              <label className='indent-5'>
                You agree to our friendly{' '}
                <span>
                  <a href='/'>privacy policy</a>
                </span>
              </label>
              <Button
                type='submit'
                children={'Create Account'}
                className='mb-4 p-2 flex justify-center w-full bg-[#f52b38] border-[#f52b38] text-white border-solid border font-[jomhuria] text-3xl rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#f52b38] hover:border-[#f52b38] hover:border'
              />
              <p>
                Already have an account?{' '}
                <Link className='float-end hover:underline' to='/login'>
                  Sign in
                </Link>
              </p>
              <p>or</p>
              <TwinElements
                firstElement={
                  <>
                    <img
                      src='\images\google-icon.svg'
                      alt='google-icon'
                      className='absolute size-7 top-1/4 left-2'
                    />
                    <Button
                      type='button'
                      className='indent-7 text-black w-full rounded-lg border border-black p-4 text-left hover:bg-gray-300 transition duration-300 ease-in-out'
                      children='Sign up with Google'
                    />
                  </>
                }
                secondElement={
                  <>
                    <img
                      src='\images\facebook-icon.svg'
                      alt='fb-icon'
                      className='absolute size-7 top-1/4 left-2'
                    />
                    <Button
                      type='button'
                      className='indent-7 text-black w-full rounded-lg border border-black p-4 text-left hover:bg-gray-300 transition duration-300 ease-in-out'
                      children='Sign up with facebook'
                    />
                  </>
                }
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
