import { LocationDataType } from '@/types';
import { useEffect, useState } from 'react';

export const useGeoLoc = () => {
  const [locationData, setLocationData] = useState<LocationDataType>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: GeolocationPosition) {
    const { longitude, latitude } = pos.coords;

    setLocationData({ longitude, latitude });
  }

  function error(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [options]);

  return locationData;
};
