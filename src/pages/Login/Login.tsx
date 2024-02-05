import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { InputsType } from '@/types';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  return (
    <>
      <div className='header' style={{ textAlign: 'center' }}>
        <h1>Here will go the header component</h1>
      </div>
      <div className='flex justify-center'>
        <div className='flex w-[1500px] gap-[4vw] max-w-[90%] midContainer'>
          <div className='flex justify-center items-center flex-col w-[800px] max-w-[100%]'>
            <h1 style={{ fontWeight: '700', fontSize: '48px' }}>Sign In</h1>
            <form
              className='flex flex-col justify-center items-center w-full max-w-full'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='w-full'>
                <img
                  className='absolute translate-y-[90%] translate-x-[50%]'
                  src='public\images\email.svg'
                  alt=''
                />
                <input
                  className='w-[95%] max-w-[800px] rounded-[5px] border-[1px] indent-[25px] px-[15px] py-[10px]'
                  {...register('email', { required: 'Email is required' })}
                  placeholder={'Email Address'}
                />
              </div>

              <p>{errors.email?.message}</p>
              <div className='w-full'>
                <img
                  className='absolute translate-y-[90%] translate-x-[50%]'
                  src='public\images\eye.svg'
                  alt=''
                />
                <input
                  className='w-[95%] max-w-[800px] rounded-[5px] border-[1px] indent-[25px] px-[15px] py-[10px]'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: 8,
                  })}
                  placeholder={'Password'}
                  type='password'
                />
              </div>

              <p>{errors.password?.message}</p>
              <Link className='hover:underline float-left w-full' to=''>
                Forgot Your Password?
              </Link>
              <p></p>
              <Button
                type='submit'
                children={'Sign in'}
                className='flex justify-center items-center w-full bg-[#f52b38] border-[#f52b38] text-white border-solid border-[2px] py-[0px] px-[8px] font-[jomhuria] text-[30px] rounded-[5px] transition ease-in-out hover:bg-white hover:text-[#f52b38] hover:border-[#f52b38] hover:border-[2px]'
              />
            </form>
            <p style={{ textAlign: 'center' }}>or</p>
            <p className='float-left w-full'>
              This site is protected by reCAPTCHA and the Google
              <a href='placeholder'>Privacy Policy</a>
              and<a href='placeholder'>Terms of Service</a>apply.
            </p>
            <div className='w-full flex justify-between'>
              <p className='w-10/12'>Create an account</p>
              <Link
                className='hover:underline'
                style={{ textAlign: 'right' }}
                to='/signup'
              >
                sign up
              </Link>
            </div>
          </div>
          <div className='rightSide'>
            <img src='public\images\girlInCar.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};
