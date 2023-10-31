import { useEffect, useState } from 'react';

type LocationData = {};

export const useGeoLoc = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    setLocationData(pos.coords);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return locationData;
};
