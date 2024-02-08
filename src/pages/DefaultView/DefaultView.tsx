import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

export const DefaultView = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
