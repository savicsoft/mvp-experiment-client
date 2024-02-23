import { profileCarSchema } from '@/schema';
import { getUser } from '@/services';
import { ProfileCarSchemaType, UserType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useProfileCar = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueriesData<UserType>({
    queryKey: ['user'],
  })?.[0]?.[1]?.car;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<ProfileCarSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(profileCarSchema),
    shouldUnregister: true,
    defaultValues: {
      body_style: user?.body_style || '',
      brand: user?.brand || '',
      color: user?.color || '',
      fuel_efficiency: user?.fuel_efficiency || '',
      gas_type: user?.gas_type || '',
      model: user?.model || '',
      photos: user?.photos || [],
      registration_number: user?.registration_number || '',
      year: user?.year || '',
    },
  });

  const { data: fetchedData } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: user === undefined,
    staleTime: Infinity,
  });

  useEffect(() => {
    (
      Object.keys(fetchedData?.car || {}) as (keyof ProfileCarSchemaType)[]
    ).forEach((key) => setValue(key, fetchedData!.car![key]));
  }, [fetchedData, setValue]);

  return { register, errors, handleSubmit, control };
};
