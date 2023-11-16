import { Navigate } from 'react-router-dom';

export const useCountdownToLogin = (time: number) => {
  setTimeout(() => {
    return <Navigate to={'/login'} />;
  }, time);
};
