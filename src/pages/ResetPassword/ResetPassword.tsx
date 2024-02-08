import { Button } from '@/components';
import Header from '@/components/Header/Header';
import { resetPassSchema } from '@/schema';
import { resetPassType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRevealPass } from '@/hooks/';

export const ResetPassword = () => {
  const { revPass, setRevPass } = useRevealPass();

  const form = useForm<resetPassType>({
    mode: 'onChange',
    resolver: zodResolver(resetPassSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<resetPassType> = (data) => console.log(data);
  return (
    <>
      <Header />
      <div className='main-container flex justify-center max-lg:flex-col items-center'>
        <div className='mid-container flex w-10/12 gap-20 max-lg:flex-col mt-40 justify-center items-center'>
          <div className='left-container w-full flex flex-col justify-center'>
            <h1 className='text-4xl font-bold mb-5'>Reset the password?</h1>
            <p className='mb-4'>
              Don't worry, you are almost set. Please enter the new password.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-field flex gap-4 w-full'>
                <div className='new-password flex-1 relative'>
                  <img
                    onClick={() => setRevPass(!revPass)}
                    src={
                      revPass
                        ? `\\images\\eye-open.svg`
                        : `\\images\\eye-close.svg`
                    }
                    alt='eye-icon'
                    className='absolute right-3 top-4'
                  />
                  <input
                    {...register('password')}
                    placeholder='New Password'
                    type={revPass ? 'text' : 'password'}
                    className='text-black w-full rounded-lg border border-black p-4 mb-3'
                  />
                  <p>{errors.password?.message}</p>
                </div>
                <div className='conf-password flex-1 relative'>
                  <img
                    onClick={() => setRevPass(!revPass)}
                    src={
                      revPass
                        ? `\\images\\eye-open.svg`
                        : `\\images\\eye-close.svg`
                    }
                    alt='eye-icon'
                    className='absolute right-3 top-4'
                  />
                  <input
                    {...register('validatePassword')}
                    placeholder='Confirm Password'
                    type={revPass ? 'text' : 'password'}
                    className='text-black w-full rounded-lg border border-black p-4 mb-3'
                  />
                  <p>{errors.validatePassword?.message}</p>
                </div>
              </div>
              <Button
                type='submit'
                children='Sign In'
                className='mb-4 p-2 flex justify-center w-full bg-[#f52b38] border-[#f52b38] text-white border-solid border font-[jomhuria] text-3xl rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#f52b38] hover:border-[#f52b38] hover:border'
              />
            </form>
            <div className='bottom-text flex justify-between'>
              <p>Didn't get the email?</p>
              <a href='/'>
                <span className='hover:underline'>resend</span>
              </a>
            </div>
          </div>
          <div className='right-container w-full flex justify-center items-center max-lg:order-2'>
            <img src='\images\carkey-passed.png' alt='carkey passed' />
          </div>
        </div>
      </div>
    </>
  );
};
