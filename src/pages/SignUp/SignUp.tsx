import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/schema';
import { InputsType } from '@/types';
import { Button } from '@/components';

export const SignUp = () => {
  const form = useForm<InputsType>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} placeholder={'First Name'} />
      <p>{errors.firstName?.message}</p>

      <input {...register('lastName')} placeholder={'Last Name'} />
      <p>{errors.lastName?.message}</p>

      <input {...register('email')} placeholder={'Email Address'} />
      <p>{errors.email?.message}</p>

      <input {...register('password')} placeholder={'Password'} type='text' />
      <p>{errors.password?.message}</p>

      <input
        {...register('validatePassword')}
        placeholder='Validate Password'
        type='text'
      />
      <p>{errors.validatePassword?.message}</p>
      <Button type='submit' children={'Submit'} className={'btn'} />
      <p>
        Already registered? <Link to='/login'>Click here</Link>
      </p>
    </form>
  );
};
