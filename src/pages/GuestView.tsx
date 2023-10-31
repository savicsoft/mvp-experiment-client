import { useGeoLoc } from '@/components/useGeoLoc';

const GuestView = () => {
  const locationData = useGeoLoc();

  return locationData ? (
    <div>
      <div className='text'>GuestView</div>
      <div className='location'>{`Latitude: ${locationData.latitude}`}</div>
      <div className='location'>{`Longitude: ${locationData.longitude}`}</div>
    </div>
  ) : (
    <div className='loading'> LOADING </div>
  );
};

export default GuestView;
