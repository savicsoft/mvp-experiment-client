import { useGeoLoc } from '@/hooks';
import { useAxios } from '@/context';
import { Navigate, Outlet } from 'react-router-dom';
import { LocationDataType } from './type';

export const GuestView = () => {
  const locationData: LocationDataType = useGeoLoc();

  const { data } = useAxios();
  let token = null;

  if (data) {
    //this is a highly specific data, that I used just for testing
    token = data.data.results[0].login.uuid;
  }

  if (token) {
    return <Navigate to='/dashboard' />;
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
