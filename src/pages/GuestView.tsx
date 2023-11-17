import { useAxios } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { LocationDataType } from './type';
import { useGeoLoc } from '@/hooks';

export const GuestView = () => {
  const locationData: LocationDataType = useGeoLoc();
  const url: string = 'https://randomuser.me/api';
  const key: string = 'user-data';

  const { data } = useAxios(url, key);
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
