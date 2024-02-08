import { Outlet } from 'react-router-dom';

export const DefaultView = () => {
  return (
    <div>
      <div className='text mb-10'>put header here</div>
      <Outlet />
    </div>
  );
};
