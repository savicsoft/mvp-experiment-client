import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

type Inputs = {
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  email: string;
  validatePassword: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
      <input type='submit' />
      <p>
        Not yet registered? <Link to='/signup'>Click here</Link>
      </p>
    </form>
  );
};
