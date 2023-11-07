import { contextProvider } from '@/context';
import { Navigate, Outlet } from 'react-router-dom';

export const DefaultView = () => {
  const token = contextProvider();

  if (!token) {
    return <Navigate to='/login' />;
  }
  return (
    <div>
      <div className='text'>DefaultView</div>
      <Outlet />
    </div>
  );
};
