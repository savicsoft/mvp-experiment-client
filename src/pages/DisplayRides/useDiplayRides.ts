import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { RideTypes } from './components/RideTypes';
import { getRideService } from '@/services/rideServices';

export const useDisplayRides = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => setIsActive(!isActive);

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
