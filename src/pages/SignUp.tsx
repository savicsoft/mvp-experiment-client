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
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //functions and logic
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);
  const [validatedPasswordMessage, setValidatedPasswordMessage] = useState<
    string | null
  >(null);
  const [emailMessage, setEmailMessage] = useState<string | null>(null);

  const password = watch('password', '');
  const passwordValidation = watch('validatePassword', '');

  const checkPassword = (value: string) => {
    setValidatedPasswordMessage('Validate password');

    if (value.length < 8) {
      setPasswordMessage('Password must be at least 8 letters long');
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(value)) {
      setPasswordMessage(
        'Your password must contain at least one uppercase letter, one number and one special character',
      );
    } else {
      setPasswordMessage(null);
    }
  };

  const CheckPassValidator = (value: string) => {
    console.log('value', value.length);
    console.log('password', password.length);
    if (value.length >= password.length && password) {
      if (password === value) {
        setValidatedPasswordMessage('Passwords match');
      } else {
        setValidatedPasswordMessage("Passwords don't match");
      }
    } else {
      setValidatedPasswordMessage(null);
    }
  };

  const checkEmail = (value: string) => {
    if (/^\S+@\S+\.\S+$/.test(value)) {
      return setEmailMessage(null);
    } else {
      setEmailMessage('This email is not valid');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', {
          required: 'First name is required',
          maxLength: 20,
          pattern: /^[A-Za-z\u00C0-\u024F -']+$/i,
        })}
        placeholder={'First Name'}
      />
      <p>{errors.firstName?.message}</p>

      <input
        {...register('lastName', {
          required: 'Last name is required',
          pattern: /^[A-Za-z\u00C0-\u024F -']+$/i,
          maxLength: 20,
        })}
        placeholder={'Last Name'}
      />
      <p>{errors.lastName?.message}</p>

      <input
        {...register('email', {
          required: 'Email is required',
          pattern: /^\S+@\S+\.\S+$/,
        })}
        placeholder={'Email Address'}
        onChange={(e) => checkEmail(e.target.value)}
      />
      <p>{errors.email?.message || emailMessage}</p>

      <input
        {...register('password', {
          required: 'Password is required',
          minLength: 8,
        })}
        placeholder={'Password'}
        type='password'
        onChange={(e) => {
          checkPassword(e.target.value);
        }}
      />
      <p>{passwordMessage}</p>

      <input
        {...register('validatePassword', {
          required: 'Please validate your password',
        })}
        placeholder={'Validate Password'}
        type='password'
        onChange={(e) => {
          CheckPassValidator(e.target.value);
        }}
      />
      <p>{validatedPasswordMessage}</p>

      <input type='submit' />
      <p>
        Already registered? <Link to='/login'>Click here</Link>
      </p>
    </form>
  );
};
