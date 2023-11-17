import { Navigate, useNavigate } from 'react-router-dom';

export const useCountdownToLogin = (time: number, navigateTo: string) => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate(navigateTo);
  }, time);
};
