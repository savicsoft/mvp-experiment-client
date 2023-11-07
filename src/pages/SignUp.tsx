import { useState } from 'react';
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

export const SignUp = () => {
  //setting up react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [password, setPassword] = useState<string | null>(null);
  const [validPassword, setValidPassword] = useState<string | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);

  //functions and logic

  const longMessage =
    'Your password must contain at least one upper and lowercase letter, one number and one special character!';

  const checkPassword = (value: string) => {
    if (value !== validPassword) {
      setError('validatePassword', {
        type: 'manual',
        message: "Passwords don't match",
      });
    } else {
      setError('validatePassword', {
        type: 'manual',
        message: 'Passwords match',
      });
    }
    setPassword(value);
    if (value.length < 8) {
      setError('password', {
        type: 'manual',
        message: 'Password must be at least 8 letters long',
      });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*"'])(?=.*\d).+$/.test(value)
    ) {
      setSubmit(false);
      setError('password', {
        type: 'manual',
        message: longMessage,
      });
    } else {
      setError('password', { type: 'manual', message: '' });
      if (value === validPassword) {
        setSubmit(true);
      }
    }
  };

  const checkPassValidator = (value: string) => {
    setValidPassword(value);
    if (value === password && !errors.password?.message) {
      setError('validatePassword', {
        type: 'manual',
        message: 'Passwords match',
      });
      setSubmit(true);
      console.log(validPassword);
    } else {
      setSubmit(false);
      setError('validatePassword', {
        type: 'manual',
        message: "Passwords don't match",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', {
          required: 'First name is required',
          maxLength: 20,
          pattern: {
            value: /^[A-Za-zÀ-ÖØ-öø-ÿ -']+$/i,
            message: 'Invalid character',
          },
        })}
        placeholder={'First Name'}
      />
      <p>{errors.firstName?.message}</p>

      <input
        {...register('lastName', {
          required: 'Last name is required',
          pattern: {
            value: /^[/^[A-Za-zÀ-ÖØ-öø-ÿ -']+$/i,
            message: 'Invalid character',
          },
          maxLength: 20,
        })}
        placeholder={'Last Name'}
      />
      <p>{errors.lastName?.message}</p>

      <input
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
        })}
        placeholder={'Email Address'}
      />
      <p>{errors.email?.message}</p>

      <input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 letters long',
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*"'])(?=.*\d).+$/,
            message: longMessage,
          },
          validate: (value) => value === validPassword,
        })}
        placeholder={'Password'}
        type='password'
        onChange={(e) => {
          checkPassword(e.target.value);
        }}
      />
      <p>{errors.password?.message}</p>

      <input
        {...register('validatePassword', {
          required: 'Validation is required',
          validate: (value) => value === password && submit,
        })}
        placeholder={'Validate Password'}
        type='password'
        onChange={(e) => {
          checkPassValidator(e.target.value);
        }}
      />
      <p>{errors.validatePassword?.message}</p>
      {submit ? <input type='submit' /> : <></>}
      <p>
        Already registered? <Link to='/login'>Click here</Link>
      </p>
    </form>
  );
};
