import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { RideTypes } from './components/RideTypes';
import { getRideService } from '@/services/rideServices';
import { OpenStateFiltersType } from './DisplayRideType';
export const useDisplayRides = () => {
  const [isActive, setIsActive] = useState<OpenStateFiltersType>({
    popular: false,
    distance: false,
    priceRange: false,
    carInformation: false,
  });

  const handleActive = (isOpen: keyof OpenStateFiltersType) => {
    setIsActive((prevState) => ({
      ...prevState,
      popular: isOpen === 'popular' ? !prevState.popular : false,
      distance: isOpen === 'distance' ? !prevState.distance : false,
      priceRange: isOpen === 'priceRange' ? !prevState.priceRange : false,
      carInformation:
        isOpen === 'carInformation' ? !prevState.carInformation : false,
    }));
  };

  const queryClient = useQueryClient();

  const ride = queryClient.getQueriesData<RideTypes>({ queryKey: ['ride'] });

  const { data: RideTypes } = useQuery({
    queryKey: ['ride'],
    queryFn: getRideService,
  });

  const finalData = (ride.length > 0 ? ride?.[0]?.[1] : RideTypes) as
    | RideTypes
    | undefined;

  return {
    ride: finalData,
    isActive,
    handleActive,
  };
};
