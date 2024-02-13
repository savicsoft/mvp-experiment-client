import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { RideTypes } from './components/RideTypes';
import { getRideService } from '@/services/rideServices';
export const useDisplayRides = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => setIsActive(!isActive);

  const handleChangeDate = () => (newValue: Dayjs) => setDate(newValue);

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
    date,
    setDate,
    handleChangeDate,
    ride: finalData,
    isActive,
    handleActive,
  };
};
