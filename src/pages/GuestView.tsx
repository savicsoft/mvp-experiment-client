import { useGeoLoc } from '@/hooks';
import { contextProvider } from '@/context';
import { Navigate, Outlet } from 'react-router-dom';

export const GuestView = () => {
  const locationData = useGeoLoc();

  const token = contextProvider();

  if (token) {
    return <Navigate to='/' />;
  }

  return locationData ? (
    <div>
      <div className='text'>GuestView</div>
      <Outlet />
      <div className='location'>{`Latitude: ${locationData.latitude}`}</div>
      <div className='location'>{`Longitude: ${locationData.longitude}`}</div>
    </div>
  ) : (
    <div className='loading'> LOADING </div>
  );
};
