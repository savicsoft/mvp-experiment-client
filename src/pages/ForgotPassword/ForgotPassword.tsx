import { Button, Header } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPassType } from '@/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { forgotPassSchema } from '@/schema';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const form = useForm<forgotPassType>({
    mode: 'onChange',
    resolver: zodResolver(forgotPassSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<forgotPassType> = () =>
    navigate('/resetpassword');

  return (
    <>
      <Header />
      <div className='main-container flex justify-center max-lg:flex-col items-center'>
        <div className='mid-container flex w-10/12 gap-20 max-lg:flex-col mt-40 justify-center items-center'>
          <div className='left-container w-full flex justify-center items-center max-lg:order-2'>
            <img src='\images\carkey-passed.png' alt='' />
          </div>
          <div className='right-container w-full flex flex-col justify-center'>
            <h1 className='text-4xl font-bold mb-5'>Forgot your password?</h1>
            <p className='mb-4'>
              Don't worry. Please enter the email address linked to your account
            </p>
            <div className='buttons'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register('email')}
                  className='text-black w-full rounded-lg border border-black p-4 mb-3 text-center'
                  placeholder={'Email'}
                />
                <p>{errors.email?.message}</p>
                <Button
                  type='submit'
                  children={'Reset'}
                  className='mb-4 p-2 flex justify-center w-full bg-[#f52b38] border-[#f52b38] text-white border-solid border font-[jomhuria] text-3xl rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#f52b38] hover:border-[#f52b38] hover:border'
                />
              </form>
            </div>
            <div className='bottom-text flex justify-between'>
              <p>Didn't get the email?</p>
              <a href='/'>
                <span className='hover:underline'>resend</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
