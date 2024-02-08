import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Header } from '@/components';
import { useRevealPass } from '@/hooks';
import { signUpType } from '@/schema';
import { EyeIcon } from '@/Icons';

export const Login = () => {
  const { revPass, setRevPass } = useRevealPass();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpType>({});

  const onSubmit: SubmitHandler<signUpType> = (data) => console.log(data);

  return (
    <>
      <Header />
      <div id='main-container' className='flex justify-center mt-40'>
        <div id='mid-container' className='flex w-10/12 gap-20 max-xl:flex-col'>
          <div
            id='left-container'
            className='flex w-6/12 justify-center items-center flex-col max-xl:w-full'
          >
            <h1 className='font-bold text-6xl mb-20'>Sign In</h1>
            <form
              className='flex flex-col justify-center items-center w-full max-w-full'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='w-full'>
                <img
                  className='absolute translate-y-5 translate-x-2/4'
                  src='public\images\email.svg'
                  alt='email-icon'
                />
                <input
                  className='text-black w-full rounded-lg border border-black indent-6 p-4 mb-10'
                  {...register('email', { required: 'Email is required' })}
                  placeholder={'Email Address'}
                  type='email'
                />
              </div>

              <p>{errors.email?.message}</p>
              <div className='w-full'>
                <EyeIcon
                  isOpen={revPass}
                  className='absolute translate-y-4 translate-x-2/4'
                  onClick={() => setRevPass(!revPass)}
                />
                <input
                  className='w-full rounded-lg border border-black text-black indent-6 p-4 mb-10'
                  {...register('password')}
                  placeholder={'Password'}
                  type={revPass ? 'text' : 'password'}
                />
              </div>

              <p>{errors.password?.message}</p>
              <div className='w-full'>
                <Link
                  className=' float-left hover:underline mb-3 font-semibold'
                  to='/forgotpassword'
                >
                  Forgot Your Password?
                </Link>
              </div>

              <p></p>
              <Button
                type='submit'
                children={'Sign in'}
                className='p-2 flex justify-center w-full bg-[#f52b38] border-[#f52b38] text-white border-solid border font-[jomhuria] text-3xl rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#f52b38] hover:border-[#f52b38] hover:border'
              />
            </form>
            <p style={{ textAlign: 'center' }}>or</p>
            <p className='float-left w-full font-semibold font-[roboto condensed]'>
              <span>This site is protected by reCAPTCHA and the Google </span>
              <a
                className='hover:underline font-[roboto condensed]'
                href='placeholder'
              >
                Privacy Policy
              </a>
              <span> and </span>
              <a
                className='hover:underline font-[roboto condensed]'
                href='placeholder'
              >
                Terms of Service
              </a>
              <span> apply.</span>
            </p>
            <div className='w-full flex justify-between'>
              <p className='w-10/12 font-semibold font-[roboto condensed]'>
                Create an account
              </p>
              <Link
                className='hover:underline font-semibold font-[roboto condensed]'
                style={{ textAlign: 'right' }}
                to='/signup'
              >
                sign up
              </Link>
            </div>
          </div>
          <div id='right-container' className='flex justify-center'>
            <img src='public\images\girlInCar.png' alt='girl-in-car' />
          </div>
        </div>
      </div>
    </>
  );
};
