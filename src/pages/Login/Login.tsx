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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { required: 'Email is required' })}
        placeholder={'Email Address'}
      />
      <p>{errors.email?.message}</p>
      <input
        {...register('password', {
          required: 'Password is required',
          minLength: 8,
        })}
        placeholder={'Password'}
        type='password'
      />
      <p>{errors.password?.message}</p>
      <Button type='submit' children={'Submit'} className={'btn'} />
      <p>
        Not yet registered? <Link to='/signup'>Click here</Link>
      </p>
    </form>
  );
};
