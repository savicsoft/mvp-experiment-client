import { useEffect, useState } from 'react';

type LocationData = {
  longitude: string;
  latitude: string;
};

export const useGeoLoc = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: any) {
    setLocationData(pos.coords);
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [options]);

  return locationData;
};
