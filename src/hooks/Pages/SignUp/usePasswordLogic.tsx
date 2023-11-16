import { useState } from 'react';
import { PasswordLogicProps } from './type';

export const usePasswordLogic = ({ form }: PasswordLogicProps) => {
  const { setError } = form;
  const [password, setPassword] = useState<string | null>(null);
  const [validPassword, setValidPassword] = useState<string | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);
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
    if (value === password) {
      setError('validatePassword', {
        type: 'manual',
        message: 'Passwords match',
      });
      setSubmit(true);
    } else {
      setSubmit(false);
      setError('validatePassword', {
        type: 'manual',
        message: "Passwords don't match",
      });
    }
  };

  return {
    checkPassword,
    checkPassValidator,
    submit,
  };
};
