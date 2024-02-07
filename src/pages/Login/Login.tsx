import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { InputsType } from '@/types';
import Header from '@/components/Header/Header';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  return (
    <>
      <Header />
      <div className='container'>
        <div className='midContainer'>
          <div className='leftSide'>
            <h1 style={{ fontWeight: '700', fontSize: '48px' }}>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='inputDiv'>
                <img
                  className='inputIcon'
                  src='public\images\email.svg'
                  alt=''
                />
                <input
                  {...register('email', { required: 'Email is required' })}
                  placeholder={'Email Address'}
                />
              </div>

              <p>{errors.email?.message}</p>
              <div className='inputDiv'>
                <img className='inputIcon' src='public\images\eye.svg' alt='' />
                <input
                  className='inputPassword'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: 8,
                  })}
                  placeholder={'Password'}
                  type='password'
                />
              </div>

              <p>{errors.password?.message}</p>
              <Link to=''>Forgot Your Password?</Link>
              <p></p>
              <Button type='submit' children={'Sign in'} className={'btn'} />
            </form>
            <p style={{ textAlign: 'center' }}>or</p>
            <p>
              This site is protected by reCAPTCHA and the Google
              <a href='placeholder'>Privacy Policy</a>
              and<a href='placeholder'>Terms of Service</a>apply.
            </p>
            <div className='createAcc'>
              <p>Create an account</p>
              <Link style={{ textAlign: 'right' }} to='/signup'>
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
